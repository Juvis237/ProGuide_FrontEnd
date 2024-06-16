'use client'
import React, { useState } from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { documentRequestSchema } from '@/types/request.type'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'
import StepIndicator from '../step-indicator/StepIndicator'
import {
    step1Fields,
    step2Fields,
    step3Fields,
    steps,
    summaryLabel,
} from '../../../data'
import FormStep1 from '../form-step-1/FormStep1'
import FormStep2 from '../form-step-2/FormStep2'
import FormStep3 from '../form-step-3/FormStep3'
import { Form } from '../ui/form'
import { Button } from '../ui/button'
import HeaderNav from '../header-nav/HeaderNav'
import Image from 'next/image'

const RequestContainer = () => {
    type FieldName = keyof z.infer<typeof documentRequestSchema>
    const [currentStep, setCurrentStep] = useState(0)
    const [loading, setLoading] = useState(false)
    const [proceed, setProceed] = useState(true)

    const form = useForm<z.infer<typeof documentRequestSchema>>({
        resolver: zodResolver(documentRequestSchema),
    })

    const processForm: SubmitHandler<
        z.infer<typeof documentRequestSchema>
    > = async (values) => {
        console.log(values)
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

        if (currentStep < steps.length - 1) {
            setCurrentStep((prevStep) => prevStep + 1)
        } else {
            await form.handleSubmit(processForm)()
        }
        if (currentStep === 1 && !proceed) {
            setProceed(true)
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

    const renderSummary = () => {
        const values = form.getValues()
        console.log(values)

        return (
            <div className="summary">
                {summaryLabel.map((item, index) => (
                    <div
                        className="flex justify-between items-center"
                        key={index}
                    >
                        <p className="text-sm italic">{item.label}:</p>
                        <p className="font-bold">
                            {
                                values[
                                    item.name as
                                        | 'name'
                                        | 'my_school'
                                        | 'department'
                                        | 'level'
                                        | 'matricule'
                                        | 'doc_type'
                                        | 'num_doc'
                                        | 'trans_mode'
                                        | 'faculty'
                                ]
                            }
                        </p>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Request"
                link="/dashboard"
                imageSrc="/assets/avatar.png"
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-screen pb-32 px-4 rounded-t-3xl">
                    {proceed ? (
                        <>
                            <StepIndicator
                                currentStep={currentStep}
                                steps={steps}
                                userExists={false}
                            />
                            <Header
                                title={steps[currentStep].name}
                                classes="hero text-primary font-bold text-xl"
                            />
                            <Paragraph
                                content={steps[currentStep].description}
                                classes="text-sm"
                            />
                            {currentStep === 2 && (
                                <div className="dashboard-summary rounded-2xl my-8 flex justify-center items-center min-h-[180px] flex-col relative">
                                    <Header
                                        title="Total Amount"
                                        classes="text-xl text-center"
                                    />
                                    <Paragraph
                                        content="XAF 4,000"
                                        classes="text-center text-2xl font-bold"
                                    />
                                    <small className="text-[0.75rem]">
                                        <span className="text-white">
                                            charges incured:
                                        </span>{' '}
                                        XAF100
                                    </small>
                                </div>
                            )}
                        </>
                    ) : (
                        <Paragraph
                            content="Below is a summary of your request"
                            classes="font-bold text-center"
                        />
                    )}
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(processForm)}
                            className={`grid grid-cols-1 gap-y-4 h-full w-full md:min-w-[200px] ${currentStep === 3 && 'gap-1'}`}
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
                                        disabled={currentStep === 0 || loading}
                                        onClick={Prev}
                                        variant={'outline'}
                                        className={`cursor-pointer w-1/2 hover:bg-transparent hover:text-secondary py-6 md:hover:bg-transparent border-secondary text-secondary ${currentStep === 0 && 'hidden'}`}
                                    >
                                        Go back
                                    </Button>
                                    <Button
                                        type="button"
                                        onClick={next}
                                        disabled={loading}
                                        className={`cursor-pointer w-1/2 py-6 bg-secondary hover:bg-secondary md:hover:bg-transparent md:hover:text-primary ${currentStep === 0 && 'w-full'}`}
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
                                        disabled={form.formState.isSubmitting}
                                    >
                                        Go back
                                    </Button>
                                    <Button
                                        disabled={form.formState.isSubmitting}
                                        type="submit"
                                        className="cursor-pointer w-1/2 py-6 bg-secondary hover:bg-secondary md:hover:bg-transparent"
                                    >
                                        Proceed to payment
                                    </Button>
                                </div>
                            )}
                        </form>
                    </Form>
                </section>
            </div>
        </section>
    )
}

export default RequestContainer
