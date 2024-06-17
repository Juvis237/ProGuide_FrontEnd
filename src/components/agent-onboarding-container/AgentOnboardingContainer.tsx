'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Header from '../header/Header'
import { agent } from '../../../data'
import Paragraph from '../paragraph/Paragraph'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import MultipleSelector, { Option } from '@/components/ui/multiple-selector'
import Link from 'next/link'
import { agentOnboardingSchema } from '@/types/agentonboarding.type'
import Image from 'next/image'
const AgentOnboardingContainer = () => {
    const OPTIONS: Option[] = [
        { label: 'English Proficiency', value: 'English Proficiency' },
        { label: 'Transcript', value: 'Transcript' },
        { label: 'Certificate', value: 'Certificate' },
        { label: 'Completion of studies', value: 'Completion of studies' },
    ]
    const form = useForm<z.infer<typeof agentOnboardingSchema>>({
        resolver: zodResolver(agentOnboardingSchema),
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof agentOnboardingSchema>) {
        console.log(values)
    }

    return (
        <section className="w-full min-h-screen mb-8">
            {}
            <div className="flex gap-4 items-center w-full pl-4 pt-8">
                <Link
                    className="w-6 cursor-pointer text-black"
                    href={'/dashboard'}
                >
                    <ArrowLeftIcon />
                </Link>
            </div>
            <Header
                title={'Onboarding'}
                classes="text-secondary font-bold text-xl text-center pt-8"
            />
            <Paragraph
                content="To proceed as an agent, you’ll have to fill the  form below"
                classes="text-center text-[0.79rem]"
            />
            <div className="flex justify-center items-center flex-col mx-4 bg-white min-h-[400px] rounded-2xl px-4 py-6 box-shadow-2 w-[90%]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 w-full px-4"
                    >
                        {agent.map((fieldInput, index) => {
                            return (
                                <FormField
                                    key={index}
                                    control={form.control}
                                    name={
                                        fieldInput.name as
                                            | 'firstname'
                                            | 'lastname'
                                            | 'nic'
                                            | 'handle_doc'
                                            | 'price'
                                    }
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className={`cursor-pointer font-normal`}
                                                htmlFor={fieldInput.name}
                                            >
                                                {fieldInput.label}
                                            </FormLabel>
                                            {fieldInput.name ===
                                            'handle_doc' ? (
                                                <div className="flex w-full flex-col gap-5">
                                                    <MultipleSelector
                                                        {...field}
                                                        value={
                                                            field.value as {
                                                                label: string
                                                                value: string
                                                            }[]
                                                        }
                                                        defaultOptions={OPTIONS}
                                                        placeholder="'-- Choose a document type --'"
                                                        emptyIndicator={
                                                            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                                                no results
                                                                found.
                                                            </p>
                                                        }
                                                    />
                                                </div>
                                            ) : (
                                                <Input
                                                    {...field}
                                                    value={
                                                        field.value as
                                                            | string
                                                            | number
                                                    }
                                                    onChange={(e) =>
                                                        field.onChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={`py-5 bg-white}`}
                                                />
                                            )}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        })}
                        <div className="w-full flex items-center justify-center">
                            <Button
                                type="submit"
                                className="px-8 py-6 bg-secondary"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
            <div className="w-[50%]">
                <Image
                    src={'/assets/cuate.svg'}
                    width={1000}
                    height={1000}
                    alt="hero image"
                />
                <Header
                    title={'Thanks for your application!'}
                    classes="font-bold text-xl text-center pt-8"
                />
                <Paragraph
                    content="We'll keep you updated on the progress of your application. You can expect to hear from us via email or call. If we require any further information from you, we'll also reach out."
                    classes="text-center text-[0.79rem]"
                />
            </div>
        </section>
    )
}

export default AgentOnboardingContainer
