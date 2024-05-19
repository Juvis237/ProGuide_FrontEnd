'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Header from '../header/Header'
import { headerSignup, parFogotPassword } from '../../../data'
import Paragraph from '../paragraph/Paragraph'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Image from 'next/image'

const ForgotPassword = () => {
    const forgotPasswordSchema = z.object({
        email: z.string().email(),
    })
    const form = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
        console.log(values)
    }
    return (
        <div className="img-bg flex flex-col items-center justify-center">
            <Header
                title={headerSignup}
                classes="text-white font-bold text-3xl"
            />
            <Paragraph
                content={parFogotPassword}
                classes="text-white px-8 text-center "
            />
            <div className="flex justify-center items-center flex-col mx-4 bg-white min-h-[400px] rounded-2xl px-4 py-6 box-shadow-2 w-[90%]">
                <div className="pb-6">
                    <Header
                        title="Forgot Password"
                        classes="text-secondary font-bold text-xl"
                    />
                </div>
                <Image
                    src={'/assets/forgot-password.svg'}
                    height={100}
                    width={35}
                    alt="illustration icon"
                    className="w-[88%] mb-5"
                />
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 w-full px-4"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="absolute -mt-2 bg-white z-10 px-1 ml-4">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="py-5 relative"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex items-center justify-center">
                            <Button
                                type="submit"
                                className="px-8 py-5 bg-secondary"
                            >
                                Request Code
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPassword
