'use client'

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Header from '../header/Header'
import {
    ResetPasswordField,
    headerSignup,
    parFogotPassword,
} from '../../../data'
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
import {
    ArrowLeftIcon,
    EyeIcon,
    EyeSlashIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [cShowPassword, setCShowPassword] = useState<boolean>(true)

    const togglerPassword = (fieldType: string) => {
        if (fieldType === 'password') {
            setShowPassword(!showPassword)
        } else if (fieldType === 'confirm_password') {
            setCShowPassword(!cShowPassword)
        }
    }
    const resetPasswordSchema = z
        .object({
            password: z.string().min(8, {
                message: 'Password must be at least 8 characters.',
            }),
            confirm_password: z
                .string()
                .min(8, 'Confirm password must be at least 8 characters long'),
        })
        .refine((data) => data.password === data.confirm_password, {
            message: 'Passwords do not match',
            path: ['confirm_password'],
        })
    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
        console.log(values)
    }
    return (
        <div className="img-bg flex flex-col items-center justify-center">
            <div className="flex gap-4 items-center w-full pl-4 -mt-24 mb-24">
                <Link
                    className="w-6 cursor-pointer text-white"
                    href={'/forgot-password'}
                >
                    <ArrowLeftIcon />
                </Link>
                <Header
                    title={'Password Recovery'}
                    classes="text-white font-bold text-2xl"
                />
            </div>
            {/* -mt-24 mb-24 */}
            <div className="flex justify-center items-center flex-col mx-4 bg-white min-h-[400px] rounded-2xl px-4 py-6 box-shadow-2 w-[90%]">
                <div className="pb-6 flex flex-col items-center">
                    <Header
                        title="Create New Password"
                        classes="text-secondary font-bold text-xl"
                    />
                    <Paragraph
                        content="You can now enter your new password and proceed"
                        classes="text-black pb-8 px-8 text-center "
                    />
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 w-full px-4"
                    >
                        {ResetPasswordField.map((fieldInput, index) => {
                            return (
                                <FormField
                                    key={index}
                                    control={form.control}
                                    name={
                                        fieldInput.name as
                                            | 'password'
                                            | 'confirm_password'
                                    }
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="absolute -mt-2 bg-white z-10 px-1 ml-4">
                                                {fieldInput.label}
                                            </FormLabel>
                                            <div className="relative">
                                                <Input
                                                    type={
                                                        (showPassword &&
                                                            fieldInput.name ===
                                                                'password') ||
                                                        (cShowPassword &&
                                                            fieldInput.name ===
                                                                'confirm_password')
                                                            ? 'password'
                                                            : ''
                                                    }
                                                    {...field}
                                                    onChange={(e) =>
                                                        field.onChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={`py-5 bg-white ${fieldInput.name === 'password' && 'pr-16'}  ${fieldInput.name === 'confirm_password' && 'pr-16'}`}
                                                />
                                                <div
                                                    className="w-6 absolute right-0 top-0 mr-4 mt-2 cursor-pointer"
                                                    onClick={() =>
                                                        togglerPassword(
                                                            fieldInput.name,
                                                        )
                                                    }
                                                >
                                                    {fieldInput.name ===
                                                    'password' ? (
                                                        showPassword ? (
                                                            <EyeIcon />
                                                        ) : (
                                                            <EyeSlashIcon />
                                                        )
                                                    ) : cShowPassword ? (
                                                        <EyeIcon />
                                                    ) : (
                                                        <EyeSlashIcon />
                                                    )}
                                                </div>
                                            </div>
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
                                Reset Password
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ResetPassword
