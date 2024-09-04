import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import PhoneInput from 'react-phone-input-2'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import Image from 'next/image'
import 'react-phone-input-2/lib/style.css'

const FormStep3 = ({
    step3Fields,
    form,
}: {
    step3Fields: { name: string; label: string }[]
    form: any
}) => {
    return (
        <>
            {step3Fields.map((fieldInput, index) => {
                return (
                    <FormField
                        key={index}
                        control={form.control}
                        name={fieldInput.name as 'payment_mode' | 'number'}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className={`cursor-pointer font-normal`}
                                    htmlFor={fieldInput.name}
                                >
                                    {fieldInput.label}
                                </FormLabel>
                                {fieldInput.name === 'payment_mode' ? (
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex w-full"
                                        >
                                            <FormItem
                                                className={`w-full flex flex-col rounded-xl border-2 border-transparent ${field.value === 'momo' && 'border-secondary'} space-x-3 space-y-0 p-4 box-shadow`}
                                            >
                                                <FormControl>
                                                    <RadioGroupItem value="momo" />
                                                </FormControl>
                                                <FormLabel className="font-normal cursor-pointer">
                                                    <Image
                                                        src={
                                                            '/assets/mtn-momo.png'
                                                        }
                                                        width={100}
                                                        height={100}
                                                        alt="momo icon"
                                                    />
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem
                                                className={`w-full flex flex-col rounded-xl border-2 border-transparent ${field.value === 'om' && 'border-secondary'} space-x-3 space-y-0 p-4 box-shadow`}
                                            >
                                                <FormControl>
                                                    <RadioGroupItem value="om" />
                                                </FormControl>
                                                <FormLabel className="font-normal cursor-pointer">
                                                    <Image
                                                        src={
                                                            '/assets/orange-om.png'
                                                        }
                                                        width={100}
                                                        height={100}
                                                        alt="momo icon"
                                                    />
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                ) : (
                                    <>
                                        <div className="border-primary bg-white">
                                            <PhoneInput
                                                country={'cm'}
                                                {...field}
                                                value={
                                                    field.value
                                                        ? `${field.value}`
                                                        : field.value
                                                }
                                                inputStyle={{
                                                    borderRadius: '5px',
                                                    width: '100%',
                                                    paddingTop: '1.4rem',
                                                    paddingBottom: '1.4rem',
                                                    height: '0',
                                                }}
                                            />
                                        </div>
                                    </>
                                )}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )
            })}
        </>
    )
}

export default FormStep3
