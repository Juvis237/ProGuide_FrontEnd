'use client'
import React, { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import HeaderNav from '../header-nav/HeaderNav'
import { summaryLabelComplete } from '../../../data'
import Image from 'next/image'
import { Button } from '../ui/button'
import { setSchool } from '@/lib/feature/school.slice'
import { setDocumentRequest } from '@/lib/feature/request-data.slice'

const RequestDetail = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const params = useParams()
    const requestId = Number(params.id)
    const userData = useAppSelector((state) => state.user.user)
    const documentRequest = useAppSelector(
        (state) => state.documentRequest.documentRequest,
    )
    const schools = useAppSelector((state) => state.school.school)

    useEffect(() => {
        const fetchDocumentRequested = async () => {
            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/requests`,
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
            const { requests } = res
            dispatch(setDocumentRequest(requests))
        }
        fetchDocumentRequested()
    }, [dispatch])

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

    if (!documentRequest || documentRequest.length === 0) {
        return <div>Loading...</div>
    }

    const request = documentRequest.find((req) => req.id === requestId)

    if (!request) {
        return <div>Request not found</div>
    }

    const getValueByName = (name: string) => {
        const value = request[name as keyof typeof request]
        if (value instanceof Date) {
            return formatDate(value.toISOString())
        }
        if (typeof value === 'object' && value !== null) {
            return JSON.stringify(value)
        }

        return value || 'N/A'
    }

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr)
        const day = date.getDate()
        const month = date.toLocaleString('default', { month: 'long' })
        const year = date.getFullYear()
        const ordinalSuffix = getOrdinalSuffix(day)
        return `${day}${ordinalSuffix} ${month} ${year}`
    }

    const getOrdinalSuffix = (day: number) => {
        if (day >= 11 && day <= 13) {
            return 'th'
        } else {
            const lastDigit = day % 10
            switch (lastDigit) {
                case 1:
                    return 'st'
                case 2:
                    return 'nd'
                case 3:
                    return 'rd'
                default:
                    return 'th'
            }
        }
    }

    const selectedSchool = schools?.find(
        (school) => school.id === request.user_data?.my_school,
    )
    const selectedDeliverable = selectedSchool?.delivrables.find(
        (deliverable) =>
            deliverable.id === Number(request.user_data.delivrable_id),
    )

    const selectedMode = selectedDeliverable?.modes.find(
        (mode) => mode.id === Number(request.user_data.mode_id),
    )
    const pricePerDocument = selectedMode
        ? parseFloat(selectedMode.price || '0')
        : parseFloat(selectedDeliverable?.price || '0')

    const totalPrice =
        pricePerDocument * Number(request.user_data?.num_doc || 0)

    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Request Detail"
                link="/dashboard"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-screen pb-32 px-4 rounded-t-3xl">
                    <div className="summary pb-14">
                        <h2 className="font-bold pb-4">Your request info</h2>
                        {summaryLabelComplete.map((items, index) => (
                            <div
                                className="flex justify-between flex-col"
                                key={index}
                            >
                                <h3 className="capitalize font-medium text-secondary py-2">
                                    {items.name}
                                </h3>
                                <div className="">
                                    {items.data.map((el, index) => {
                                        const value = getValueByName(el.name)
                                        const formattedValue =
                                            el.label === 'Request date'
                                                ? formatDate(value.toString())
                                                : value
                                        return (
                                            <div
                                                className="flex items-center py-1 justify-between"
                                                key={index}
                                            >
                                                <p className="text-sm italic">
                                                    {el.label} :
                                                </p>
                                                <p className="font-normal">
                                                    {el.name === 'total' ? (
                                                        `XAF ${totalPrice}`
                                                    ) : el.label ===
                                                      'Request ID' ? (
                                                        `${requestId}`
                                                    ) : el.name === 'level' ? (
                                                        `${request.user_data?.level}`
                                                    ) : el.name ===
                                                      'department' ? (
                                                        `${request.user_data?.department}`
                                                    ) : el.name === 'name' ? (
                                                        `${request.user_data?.name}`
                                                    ) : el.name ===
                                                      'matricule' ? (
                                                        `${request.user_data?.matricule}`
                                                    ) : el.name ===
                                                      'faculty' ? (
                                                        `${request.user?.faculty}`
                                                    ) : el.name ===
                                                      'scan_copy' ? (
                                                        request?.scan_copy ===
                                                        '0' ? (
                                                            'No'
                                                        ) : (
                                                            `Yes`
                                                        )
                                                    ) : el.name ===
                                                      'num_doc' ? (
                                                        `${request.user_data?.num_doc}`
                                                    ) : el.label ===
                                                      'Payment mode' ? (
                                                        <Image
                                                            src={
                                                                request.payment_method ===
                                                                'MTN'
                                                                    ? '/assets/mtn-momo.svg'
                                                                    : '/assets/orange-om.svg'
                                                            }
                                                            width={40}
                                                            height={25}
                                                            alt=""
                                                        />
                                                    ) : el.name === 'phone' ? (
                                                        `${request?.user.phone}`
                                                    ) : el.name ===
                                                      'my_school' ? (
                                                        selectedSchool?.name
                                                    ) : el.name ===
                                                      'doc_type' ? (
                                                        selectedDeliverable?.name
                                                    ) : el.name ===
                                                      'trans_mode' ? (
                                                        selectedMode?.name ? (
                                                            selectedMode.name.slice(
                                                                0,
                                                                9,
                                                            )
                                                        ) : (
                                                            ''
                                                        )
                                                    ) : (
                                                        formattedValue.toString()
                                                    )}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                        <Button
                            onClick={() => router.push('/dashboard')}
                            className="bg-secondary py-5 px-3 mt-5 float-right"
                        >
                            Done
                        </Button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default RequestDetail
