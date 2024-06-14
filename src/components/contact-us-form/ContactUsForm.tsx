'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import HeaderNav from '../header-nav/HeaderNav'
import Paragraph from '../paragraph/Paragraph'
import { contactSchema } from '@/types/contact.type'
import { contactUs } from '../../../data'
import { Textarea } from '../ui/textarea'

const ContactUsForm = () => {
    const [disableBtn, setDisableBtn] = useState<boolean>(false)
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof contactSchema>) => {
        setDisableBtn(true)
        setTimeout(() => {
            setDisableBtn(false)
        }, 2500)
    }
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Contact support"
                link="/contact-support"
                imageSrc="/assets/avatar.png"
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-1/2 pb-32 px-4 rounded-t-3xl">
                    <h3 className="text-left font-bold">
                        Still have inquiries?
                    </h3>
                    <Paragraph
                        content="Please fill the form below to leave us a message. Our support team is readily available to help you you"
                        classes="text-[0.85rem] mb-8"
                    />
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 w-full"
                        >
                            {contactUs.map((fieldInput, index) => {
                                return (
                                    <FormField
                                        key={index}
                                        control={form.control}
                                        name={
                                            fieldInput.name as
                                                | 'username'
                                                | 'message_title'
                                                | 'message'
                                                | 'email'
                                        }
                                        render={({ field }) => (
                                            <FormItem
                                                className={`${fieldInput.name && 'flex flex-col '}`}
                                            >
                                                <FormLabel className="cursor-pointer">
                                                    {fieldInput.label}
                                                </FormLabel>
                                                {fieldInput.name !==
                                                'message' ? (
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            className="py-5"
                                                        />
                                                    </FormControl>
                                                ) : (
                                                    <Textarea
                                                        placeholder="Enter message here..."
                                                        className={`resize-none pb-16`}
                                                        {...field}
                                                        style={{
                                                            marginTop: '-1px',
                                                        }}
                                                    />
                                                )}
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )
                            })}
                            <div className="w-full flex items-center justify-center pb-4">
                                <Button
                                    type="submit"
                                    className="px-8 py-5 bg-secondary"
                                    disabled={
                                        disableBtn ||
                                        form.formState.isSubmitting
                                    }
                                    onClick={form.handleSubmit(onSubmit)}
                                    spinner={
                                        disableBtn ||
                                        form.formState.isSubmitting
                                    }
                                >
                                    Send
                                </Button>
                            </div>
                        </form>
                    </Form>
                </section>
            </div>
        </section>
    )
}

export default ContactUsForm
