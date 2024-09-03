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
import { useAppSelector } from '@/lib/hook'
import ToastDescription from '../toast-description/ToastDescription'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const ContactUsForm = () => {
    const userData = useAppSelector((state) => state.user.user)
    const router = useRouter()
    const [disableBtn, setDisableBtn] = useState<boolean>(false)

    const token =
        typeof localStorage !== 'undefined' &&
        localStorage.getItem('user-token')
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            username: token ? `${userData?.first_name} ${userData?.last_name}` : '',
            phone: token ? userData?.phone : undefined,
            email: token ? userData?.email : '',
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof contactSchema>) => {
        setDisableBtn(true)
        const requestBody = JSON.stringify({
            name: values.username,
            phone: values.phone,
            email: values.email,
            content: values.content,
            subject: values.subject,
        })

        try {
            const request = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
                {
                    method: 'POST',
                    body: requestBody,
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            const response = await request.json()
            const { message, user, success } = response

            if (success) {
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('user', JSON.stringify(user))
                }
                toast({
                    variant: 'default',
                    title: 'Request Successfully submitted',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                router.push('/dashboard')
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error submitting request',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                setDisableBtn(false)
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error submitting request',
                description: <ToastDescription description={`${error}`} />,
            })
            setDisableBtn(false)
        }
    }
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Contact support"
                link="/contact-support"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
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
                                                | 'subject'
                                                | 'content'
                                                | 'email'
                                                | 'phone'
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
