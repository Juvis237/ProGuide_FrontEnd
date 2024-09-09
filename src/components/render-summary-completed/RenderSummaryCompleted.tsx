'use client'
import React from 'react'
import { Button } from '../ui/button'
import { summaryLabelComplete } from '../../../data'
import { useAppSelector } from '@/lib/hook'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type FormData = {
    num_doc: number
    my_school: number
    doc_type: string
    trans_mode: string
    scan_copy: boolean
    // Add other properties based on your requirements
}

const RenderSummaryCompleted = () => {
    const router = useRouter()
    const data = useAppSelector((state) => state.formData.formData) as FormData
    const schools = useAppSelector((state) => state.school.school)
    const getValueByName = (name: string) => {
        return data[name as keyof typeof data] || 'N/A'
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
        (school) => school.id === data.my_school,
    )
    const selectedDeliverable = selectedSchool?.delivrables.find(
        (deliverable) => deliverable.id === Number(data.doc_type),
    )
    const selectedMode = selectedDeliverable?.modes.find(
        (mode) => mode.id === Number(data.trans_mode),
    )

    const pricePerDocument = selectedMode
        ? parseFloat(selectedMode.price || '0')
        : parseFloat(selectedDeliverable?.price || '0')
    const totalPrice = pricePerDocument * Number(data?.num_doc || 0)

    const goToHome = () => {
        router.push('/dashboard')
    }

    return (
        <div className="summary pb-14">
            <h2 className="font-bold pb-4">Your request info</h2>
            {summaryLabelComplete.map((items, index) => (
                <div className="flex justify-between flex-col" key={index}>
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
                                    <p className="text-sm italic font-bold">
                                        {el.label} :
                                    </p>
                                    <p className="font-normal text-sm">
                                        {el.label === 'Amount' ? (
                                            `XAF ${data.scan_copy ? totalPrice + Number(selectedDeliverable?.scan_copy) : totalPrice}`
                                        ) : el.label === 'Request ID' ? (
                                            `${formattedValue}`
                                        ) : el.label === 'Payment mode' ? (
                                            <Image
                                                src={
                                                    formattedValue === 'MTN'
                                                        ? '/assets/mtn-momo.svg'
                                                        : '/assets/orange-om.svg'
                                                }
                                                width={40}
                                                height={25}
                                                alt=""
                                            />
                                        ) : el.name === 'phone' ? (
                                            `${formattedValue.toString().slice(3)}`
                                        ) : el.name === 'my_school' ? (
                                            selectedSchool?.name
                                        ) : el.name === 'doc_type' ? (
                                            selectedDeliverable?.name
                                        ) : el.name === 'trans_mode' ? (
                                            selectedMode?.name
                                        ) : (
                                            formattedValue
                                        )}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
            <Button
                onClick={goToHome}
                className="bg-secondary py-5 px-3 mt-5 float-right"
            >
                Done
            </Button>
        </div>
    )
}

export default RenderSummaryCompleted
