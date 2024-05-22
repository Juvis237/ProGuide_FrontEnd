'use client'
import React, { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'
import { toast } from '../ui/use-toast'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import FormRedirect from '../form-redirect/FormRedirect'

const ResetPasswordOtp = () => {
    const [mins, setMins] = useState(0)
    const [secs, setSecs] = useState(0)
    const [timeLeft, setTimeLeft] = useState(0)

    const FormSchema = z.object({
        pin: z.string().min(5, {
            message: 'Your one-time password must be 5 characters.',
        }),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: '',
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        })
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const counter = new Date()
            const seconds = counter.getMinutes() * 60 + counter.getSeconds()
            const minutes = 60 * 2
            const timeLeft = minutes - (seconds % minutes)
            setMins(minutes)
            setSecs(seconds)
            setTimeLeft(timeLeft)
        }, 500)
        return () => clearInterval(timer)
    }, [mins, secs])

    return (
        <div>
            <div className="img-bg flex flex-col items-center justify-center">
                <div className="flex gap-4 items-center w-full pl-4 -mt-24 mb-24">
                    <Link
                        className="w-6 cursor-pointer text-white"
                        href={'/forgot-password'}
                    >
                        <ArrowLeftIcon />
                    </Link>
                    <Header
                        title={'Reset Password'}
                        classes="text-white font-bold text-2xl"
                    />
                </div>
                {/* -mt-24 mb-24 */}
                <div className="flex justify-center items-center flex-col mx-4 bg-white min-h-[400px] rounded-2xl px-4 py-6 box-shadow-2 w-[90%]">
                    <div className="pb-3 flex flex-col items-center">
                        <Header
                            title="Email sent"
                            classes="text-muted font-bold text-xl"
                        />
                        <Paragraph
                            content="An code has been sent to bn********gmail.com. If this email is connected to a ProGuide account, you will be able to rest your password"
                            classes="text-black px-8 text-center "
                        />
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6 w-[80%]"
                        >
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <h3 className="text-muted text-center font-bold pb-4">
                                            Enter your code here
                                        </h3>
                                        <FormControl>
                                            <InputOTP maxLength={5} {...field}>
                                                <InputOTPGroup className="flex w-full justify-between">
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormMessage />
                                        <FormDescription className="text-center pt-2">
                                            Code expires in{' '}
                                            <span className="font-bold text-muted">
                                                {Math.floor(timeLeft / 60)}:
                                                {timeLeft % 60 < 10
                                                    ? `0${timeLeft % 60}`
                                                    : timeLeft % 60}
                                            </span>
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />

                            <div className="text-center pb-6">
                                <Button
                                    type="submit"
                                    className="px-8 py-5 bg-secondary"
                                >
                                    Verify
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <FormRedirect
                        link="/"
                        linkText="Resend"
                        linkTextDescription="Don’t received a code?"
                    />
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordOtp
