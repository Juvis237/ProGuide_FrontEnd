'use client'
import Header from '@/components/header/Header'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const GetStartedContainer = () => {
    const router = useRouter()
    const [disableBtn, setDisableBtn] = useState<boolean>(false)
    const userType = z.object({
        user_type: z.enum(['applicant', 'agent'], {
            required_error: 'You need to select a user type.',
        }),
    })
    const form = useForm<z.infer<typeof userType>>({
        resolver: zodResolver(userType),
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof userType>) => {
        console.log(values)
        router.push('/sign-up')
    }
    return (
        <section className="w-full min-h-screen">
            <div className="pt-24">
                <Header
                    title={'How will you like to work with us?'}
                    classes="font-bold text-xl text-center pb-16 text-muted"
                />
                <section className="bg-primary pt-16 min-h-[76vh] px-4 rounded-t-3xl">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col items-center gap-4"
                        >
                            <FormField
                                control={form.control}
                                name={'user_type'}
                                render={({ field }) => (
                                    <>
                                        <FormControl className="">
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex w-full justify-between"
                                            >
                                                <FormItem
                                                    className={`w-full max-w-[155px] max-h-[185px] flex flex-col-reverse justify-center bg-white rounded-xl border-2 border-transparent ${field.value === 'applicant' && 'border-secondary'} space-x-3 space-y-0 p-4 box-shadow`}
                                                >
                                                    <FormControl>
                                                        <div className="flex items-center gap-2 mt-4">
                                                            <RadioGroupItem
                                                                value="applicant"
                                                                id="applicant"
                                                            />
                                                            <FormLabel
                                                                htmlFor="applicant"
                                                                className="font-normal cursor-pointer"
                                                                style={{
                                                                    marginLeft: 0,
                                                                }}
                                                            >
                                                                <span>
                                                                    Applicant
                                                                </span>
                                                            </FormLabel>
                                                        </div>
                                                    </FormControl>
                                                    <FormLabel
                                                        htmlFor="applicant"
                                                        className="font-normal cursor-pointer"
                                                        style={{
                                                            marginLeft: 0,
                                                        }}
                                                    >
                                                        <Image
                                                            src={
                                                                '/assets/applicant.svg'
                                                            }
                                                            width={1000}
                                                            height={100}
                                                            alt="applicant icon"
                                                        />
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem
                                                    className={`w-full max-w-[155px] max-h-[185px] flex flex-col-reverse justify-center bg-white rounded-xl border-2 border-transparent ${field.value === 'agent' && 'border-secondary'} space-x-3 space-y-0 p-4 box-shadow`}
                                                >
                                                    <FormControl>
                                                        <div className="flex items-center gap-2 mt-4">
                                                            <RadioGroupItem
                                                                value="agent"
                                                                id="agent"
                                                            />
                                                            <FormLabel
                                                                htmlFor="agent"
                                                                className="font-normal cursor-pointer"
                                                                style={{
                                                                    marginLeft: 0,
                                                                }}
                                                            >
                                                                <span>
                                                                    Agent
                                                                </span>
                                                            </FormLabel>
                                                        </div>
                                                    </FormControl>
                                                    <FormLabel
                                                        htmlFor="agent"
                                                        className="font-normal cursor-pointer"
                                                        style={{
                                                            marginLeft: 0,
                                                        }}
                                                    >
                                                        <Image
                                                            src={
                                                                '/assets/agent.svg'
                                                            }
                                                            width={1000}
                                                            height={100}
                                                            alt="agent icon"
                                                        />
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </>
                                )}
                            />
                            <Button
                                disabled={
                                    disableBtn || form.formState.isSubmitting
                                }
                                onClick={form.handleSubmit(onSubmit)}
                                spinner={
                                    disableBtn || form.formState.isSubmitting
                                }
                                type="submit"
                                className="cursor-pointer w-1/2 py-6 bg-secondary hover:bg-secondary md:hover:bg-transparent"
                            >
                                {`Let's go`}
                            </Button>
                        </form>
                    </Form>
                </section>
            </div>
        </section>
    )
}

export default GetStartedContainer
