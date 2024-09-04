'use client'
import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { documentRequestSchema } from '@/types/request.type'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { useRouter } from 'next/navigation'
import { setSchool } from '@/lib/feature/school.slice'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'
import StepIndicator from '../step-indicator/StepIndicator'
import FormStep1 from '../form-step-1/FormStep1'
import FormStep2 from '../form-step-2/FormStep2'
import FormStep3 from '../form-step-3/FormStep3'
import { Form } from '../ui/form'
import { Button } from '../ui/button'
import HeaderNav from '../header-nav/HeaderNav'
import {
    step1Fields,
    step2Fields,
    step3Fields,
    steps,
    summaryLabel,
} from '../../../data'
import { operatorSchema } from '@/types/operator.type'
import { setOperator } from '@/lib/feature/operator.slice'
import { setCreateDocument } from '@/lib/feature/create-document.slice'
import { setFormData } from '@/lib/feature/form-data.slice'
import { createDocumentRequestSchema } from '@/types/document-request-type'
import Image from 'next/image'

const RequestContainer = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const userData = useAppSelector((state) => state.user.user)
    const schools = useAppSelector((state) => state.school.school)
    const operator = useAppSelector((state) => state.operator.operator)
    const formDataState = useAppSelector((state) => state.formData.formData)
    const createDocument = useAppSelector(
        (state) => state.createDocument.createDocument,
    )

    type FieldName = keyof z.infer<typeof documentRequestSchema>
    const [currentStep, setCurrentStep] = useState(0)
    const [loading, setLoading] = useState(false)
    const [proceed, setProceed] = useState(true)
    const [paymentInitiated, setPaymentInitiated] = useState(false)
    const [paymentFailed, setPaymentFailed] = useState(false)
    const [counter, setCounter] = useState(60) // Initial counter value
    const token =
        typeof localStorage !== 'undefined' &&
        localStorage.getItem('user-token')

    const form = useForm<z.infer<typeof documentRequestSchema>>({
        resolver: zodResolver(documentRequestSchema),
    })

    type OperatorType = z.infer<typeof operatorSchema>
    type DocumentType = z.infer<typeof createDocumentRequestSchema>

    const forMe = form.watch('for_me')

    useEffect(() => {
        const fetchSchools = async () => {
            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/schools`,
                {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('user-token')}`,
                    },
                },
            )

            const res = await req.json()
            const { schools } = res
            dispatch(setSchool(schools))
        }
        fetchSchools()
    }, [dispatch])

    useEffect(() => {
        if (forMe && userData) {
            form.setValue('department', userData.department || '')
            form.setValue('level', userData.level || '')
            form.setValue('matricule', userData.matricule || '')
            form.setValue(
                'name',
                `${userData.first_name} ${userData.last_name}` || '',
            )
            form.setValue('faculty', userData.faculty ? userData.faculty : '')

            const requiredFields = ['name'] as const

            const missingFields = requiredFields.some((field) => {
                if (field === 'name') {
                    return (
                        !userData.first_name ||
                        !userData.last_name ||
                        !userData?.matricule ||
                        !userData?.level ||
                        !userData?.email ||
                        !userData?.faculty ||
                        !userData?.phone
                    )
                }
                return !userData[field]
            })

            if (missingFields) {
                router.push('/profile-edit')
            }
        }
    }, [forMe, userData, form, router])

    const values = form.getValues()

    const selectedSchool =
        schools &&
        schools?.find((school) => school.id === form.getValues('my_school'))

    const selectedDeliverable = selectedSchool?.delivrables.find(
        (deliverable) => deliverable.id === Number(values.doc_type),
    )

    const selectedMode = selectedDeliverable?.modes.find(
        (mode) => mode.id === Number(values.trans_mode),
    )

    const pricePerDocument = selectedMode
        ? parseFloat(selectedMode.price || '0')
        : parseFloat(selectedDeliverable?.price || '0')

    const totalPrice = pricePerDocument * Number(values.num_doc || 0)

    const processForm: SubmitHandler<
        z.infer<typeof documentRequestSchema>
    > = async (values) => {
        setLoading(true)
        // setCurrentStep(currentStep + 1)
        try {
            const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pay`, {
                method: 'POST',
                body: JSON.stringify({
                    amount: values.scan_copy
                        ? totalPrice + Number(selectedDeliverable?.scan_copy)
                        : totalPrice,
                    currency: 'XAF',
                    from: values.phone,
                    request_id:
                        createDocument && (createDocument as DocumentType)?.id,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })

            const data = await req.json()
            if (req.ok) {
                setPaymentInitiated(true)
                dispatch(setOperator(data))
                checkPaymentStatus((data as OperatorType).reference)
            } else {
                throw new Error('Failed to initiate payment')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const next = async () => {
        const fields = steps[currentStep].fields
        const output = await form.trigger(fields as FieldName[], {
            shouldFocus: true,
        })

        if (!output) return

        if (currentStep === 1 && proceed) {
            setProceed(false)
            return
        }

        if (currentStep === 1) {
            setLoading(true)
            const formData = form.getValues()
            const documentResponse = await createDocumentRequest(formData)

            if (documentResponse) {
                setCurrentStep(currentStep + 1)
            } else {
            }
            setLoading(false)
        } else {
            setCurrentStep(currentStep + 1)
        }
    }

    const Prev = () => {
        if (currentStep > 0) {
            setProceed(true)
            if (currentStep === 3) {
                setCurrentStep(1)
            } else {
                setCurrentStep((currentStep) => currentStep - 1)
                setLoading(false)
            }
        }
    }

    const createDocumentRequest = async (formData: any) => {
        setProceed(false)
        try {
            const formData = form.getValues()
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/requests/add_request`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        ...formData,
                        delivrable_id: formData.doc_type,
                        mode_id: formData.trans_mode,
                        number: formData.num_doc,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('user-token')}`,
                    },
                },
            )
            const data = await response.json()
            const { request } = data
            if (!response.ok) {
                throw new Error('Failed to create document request')
            }
            setProceed(true)
            dispatch(setCreateDocument(request))
            return data
        } catch (error) {
            return null
        }
    }

    const checkPaymentStatus = async (reference: string) => {
        try {
            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/transaction?reference=${reference}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            const res = await req.json()

            if (req.ok && res.status === 'success') {
                // Payment successful
                router.push('/payment-complete')
            } else {
                // Payment still pending
                setTimeout(() => checkPaymentStatus(reference), 20000) // Retry after 20 seconds
            }
        } catch (error) {
            console.error('Error checking payment status:', error)
        }
    }

    useEffect(() => {
        if (paymentInitiated) {
            // Decrease the counter every second
            const counterInterval = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1)
            }, 1000)

            // Timeout to handle payment failure after 1 minute
            const paymentTimeout = setTimeout(() => {
                setPaymentFailed(true)
                setPaymentInitiated(false)
                clearInterval(counterInterval) // Clear the interval if payment fails
            }, 60000) // 1 minute

            return () => {
                clearTimeout(paymentTimeout)
                clearInterval(counterInterval)
            }
        }
    }, [paymentInitiated])

    const renderSummary = () => {
        const values = form.getValues()

        const selectedSchool = schools?.find(
            (school) => school.id === values.my_school,
        )
        const selectedDeliverable = selectedSchool?.delivrables.find(
            (deliverable) => deliverable.id === Number(values.doc_type),
        )
        const selectedMode = selectedDeliverable?.modes.find(
            (mode) => mode.id === Number(values.trans_mode),
        )

        const pricePerDocument = selectedMode
            ? parseFloat(selectedMode.price || '0')
            : parseFloat(selectedDeliverable?.price || '0')
        const totalPrice = pricePerDocument * Number(values.num_doc || 0)

        return (
            <div className="summary">
                {summaryLabel.map((item, index) => (
                    <div
                        className="flex items-center justify-between"
                        key={index}
                    >
                        <p className="text-sm italic">{item.label}</p>
                        <p className="font-normal">
                            {item.label === 'Total'
                                ? totalPrice
                                : item.name === 'my_school'
                                  ? selectedSchool?.name
                                  : item.name === 'doc_type'
                                    ? selectedDeliverable?.name
                                    : item.name === 'trans_mode'
                                      ? selectedMode?.name
                                      : item.name === 'scan_copy'
                                        ? selectedDeliverable?.scan_copy
                                            ? 'Yes'
                                            : 'No'
                                        : values[
                                              item.name as keyof typeof values
                                          ]}
                        </p>
                    </div>
                ))}
            </div>
        )
    }

    const PaymentUI = () => {
        useEffect(() => {
            const timeout = setTimeout(() => {
                dispatch(
                    setFormData({
                        ...values,
                        request_id: (createDocument as DocumentType)?.id,
                        amount: totalPrice,
                        payment_mode: (operator as OperatorType)?.operator,
                        date: (createDocument as DocumentType)?.date,
                        charges: `XAF 0`,
                    }),
                )
                router.push('/payment-complete')
            }, 30000) // 30 seconds in milliseconds

            return () => clearTimeout(timeout) // Clear the timeout on component unmount
        }, [])
        return (
            <div className="text-center flex justify-center gap-4 items-center flex-col">
                <h2 className="text-lg font-bold">
                    Thank you for being part of our community!
                </h2>
                <p className="text-center">
                    Payment for transaction has already been initiated. You will
                    receive a payment request on your phone which require your
                    pin
                </p>

                <p className="text-center">
                    dial
                    <span className="text-primary">
                        {`
                ${(operator as OperatorType)?.ussd_code}
                
                 `}
                    </span>
                    to confirm the payment
                </p>
                <Image
                    src={
                        (operator as OperatorType).operator === 'MTN'
                            ? '/assets/mtn-momo.svg'
                            : '/assets/orange-om.svg'
                    }
                    width={50}
                    height={35}
                    alt=""
                />
            </div>
        )
    }

    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Request"
                link="/dashboard"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-screen pb-32 px-4 rounded-t-3xl">
                    {!paymentInitiated && (
                        <>
                            {proceed ? (
                                <>
                                    <StepIndicator
                                        currentStep={currentStep}
                                        steps={steps}
                                        userExists={false}
                                    />
                                    <Header
                                        title={steps[currentStep]?.name || ''}
                                        classes="hero text-primary font-bold text-xl"
                                    />
                                    <Paragraph
                                        content={
                                            steps[currentStep]?.description ||
                                            ''
                                        }
                                        classes="text-sm"
                                    />
                                </>
                            ) : (
                                <Paragraph
                                    content="Below is a summary of your request"
                                    classes="font-bold text-center"
                                />
                            )}
                            {currentStep === 2 && (
                                <div className="dashboard-summary rounded-2xl my-8 flex justify-center items-center min-h-[180px] flex-col relative">
                                    <Header
                                        title="Total Amount"
                                        classes="text-xl text-center"
                                    />
                                    <Paragraph
                                        content={`XAF ${form.getValues('scan_copy') === true ? totalPrice + Number(selectedDeliverable?.scan_copy) : totalPrice}`}
                                        classes="text-center text-2xl font-bold"
                                    />
                                    {/* <small className="text-[0.75rem] text-white">
                                        <span className="text-white">
                                            charges incurred:
                                        </span>
                                        {form.getValues('scan_copy') === true
                                            ? ` ${Number(selectedDeliverable?.scan_copy)} XAF`
                                            : `0 XAF`}
                                    </small> */}
                                </div>
                            )}

                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(processForm)}
                                    className={`grid grid-cols-1 gap-y-4 h-full w-full md:min-w-[200px] ${
                                        currentStep === 3 && 'gap-1'
                                    }`}
                                >
                                    {currentStep === 0 && (
                                        <FormStep1
                                            step1Fields={step1Fields}
                                            form={form}
                                        />
                                    )}
                                    {currentStep === 1 && proceed ? (
                                        <FormStep2
                                            step2Fields={step2Fields}
                                            form={form}
                                        />
                                    ) : (
                                        currentStep === 1 && renderSummary()
                                    )}
                                    {currentStep === 2 && (
                                        <FormStep3
                                            step3Fields={step3Fields}
                                            form={form}
                                        />
                                    )}

                                    {currentStep !== 2 && (
                                        <div className="flex justify-between w-full gap-8">
                                            <Button
                                                type="button"
                                                disabled={
                                                    currentStep === 0 || loading
                                                }
                                                onClick={Prev}
                                                variant={'outline'}
                                                className={`cursor-pointer w-1/2 hover:bg-transparent hover:text-secondary py-6 md:hover:bg-transparent border-secondary text-secondary ${
                                                    currentStep === 0 &&
                                                    'hidden'
                                                }`}
                                            >
                                                Go back
                                            </Button>
                                            <Button
                                                type="button"
                                                onClick={next}
                                                spinner={
                                                    loading ||
                                                    form.formState.isSubmitting
                                                }
                                                disabled={loading}
                                                className={`cursor-pointer w-1/2 py-6 bg-secondary hover:bg-secondary md:hover:bg-transparent md:hover:text-primary ${
                                                    currentStep === 0 &&
                                                    'w-full'
                                                }`}
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    )}

                                    {currentStep === 2 && (
                                        <div className="flex justify-between w-full gap-8">
                                            <Button
                                                type="button"
                                                variant={'outline'}
                                                onClick={Prev}
                                                className={`cursor-pointer w-1/2 py-6 text-secondary hover:text-secondary hover:bg-transparent`}
                                                disabled={
                                                    form.formState.isSubmitting
                                                }
                                            >
                                                Go back
                                            </Button>
                                            <Button
                                                disabled={
                                                    form.formState.isSubmitting
                                                }
                                                spinner={
                                                    loading ||
                                                    form.formState.isSubmitting
                                                }
                                                type="submit"
                                                className="cursor-pointer w-1/2 py-6 bg-secondary hover:bg-secondary md:hover:bg-transparent"
                                            >
                                                Proceed to payment
                                            </Button>
                                        </div>
                                    )}
                                </form>
                            </Form>
                        </>
                    )}

                    {paymentInitiated && <PaymentUI />}

                    {paymentFailed && (
                        <div className="success_modal animate cursor-pointer flex justify-center items-center">
                            <section className="w-[85%] h-[20rem] rounded-xl bg-white flex my-[5rem] mx-auto justify-center items-center flex-col">
                                <h2 className="text-xl font-bold">
                                    Payment Failed
                                </h2>
                                <div className="text-center">
                                    <Paragraph
                                        content={`The payment did not complete within the expected time. Please try again`}
                                    />
                                </div>
                                <Button
                                    onClick={() => router.push('/dashboard')}
                                >
                                    Retry
                                </Button>
                            </section>
                        </div>
                    )}

                    {paymentInitiated && (
                        <div className="payment-counter">
                            <p>Time remaining: {counter} seconds</p>
                        </div>
                    )}
                </section>
            </div>
        </section>
    )
}

export default RequestContainer
