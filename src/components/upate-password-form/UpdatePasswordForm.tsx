'use client'

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Header from '../header/Header'
import { updatePasswordField } from '../../../data'
// import Paragraph from '../paragraph/Paragraph'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
    ArrowLeftIcon,
    EyeIcon,
    EyeSlashIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import ToastDescription from '../toast-description/ToastDescription'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'
const UpdatePasswordForm = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [disableBtn, setDisableBtn] = useState<boolean>(false)
    const [cShowPassword, setCShowPassword] = useState<boolean>(true)

    const togglerPassword = (fieldType: string) => {
        if (fieldType === 'old_password') {
            setShowPassword(!showPassword)
        } else if (fieldType === 'new_password') {
            setCShowPassword(!cShowPassword)
        }
    }
    const resetPasswordSchema = z.object({
        old_password: z.string().min(8, {
            message: 'Password must be at least 8 characters.',
        }),
        new_password: z
            .string()
            .min(8, 'Password must be at least 8 characters.'),
    })
    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof resetPasswordSchema>) => {
        console.log(values)
        setDisableBtn(true)
        const requestBody = JSON.stringify({
            oldPassword: values.old_password,
            password: values.new_password,
        })
        try {
            const request = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/change_password`,
                {
                    method: 'POST',
                    body: requestBody,
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            )
            const response = await request.json()
            const { message, user, token, success } = response

            if (success) {
                localStorage.setItem('user', JSON.stringify(user))
                toast({
                    variant: 'default',
                    title: 'Password Change Successful',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                router.push('/dashboard')
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Password Change Error',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                setDisableBtn(false)
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Password Change Error',
                description: <ToastDescription description={`${error}`} />,
            })
            setDisableBtn(false)
        }
    }
    return (
        <div className="img-bg flex flex-col items-center justify-center">
            <div className="flex gap-4 items-center w-full pl-4 -mt-24 mb-32">
                <Link
                    className="w-6 cursor-pointer text-white"
                    href={'/profile'}
                >
                    <ArrowLeftIcon />
                </Link>
                <Header
                    title={'Update Password'}
                    classes="text-white font-bold text-2xl"
                />
            </div>
            {/* -mt-24 mb-24 */}
            <div className="flex justify-center items-center flex-col mx-4 bg-white min-h-[400px] rounded-2xl px-4 py-6 box-shadow-2 w-[90%]">
                <div className="pb-6 flex flex-col items-center">
                    {/* <Header
                        title="Create New Password"
                        classes="text-secondary font-bold text-xl"
                    />
                    <Paragraph
                        content="You can now enter your new password and proceed"
                        classes="text-black pb-8 px-8 text-center "
                    /> */}
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 w-full px-4"
                    >
                        {updatePasswordField.map((fieldInput, index) => {
                            return (
                                <FormField
                                    key={index}
                                    control={form.control}
                                    name={
                                        fieldInput.name as
                                            | 'new_password'
                                            | 'old_password'
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
                                                                'old_password') ||
                                                        (cShowPassword &&
                                                            fieldInput.name ===
                                                                'new_password')
                                                            ? 'password'
                                                            : ''
                                                    }
                                                    {...field}
                                                    onChange={(e) =>
                                                        field.onChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={`py-5 bg-white ${fieldInput.name === 'old_password' && 'pr-16'}  ${fieldInput.name === 'new_password' && 'pr-16'}`}
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
                                                    'old_password' ? (
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
                                disabled={
                                    disableBtn || form.formState.isSubmitting
                                }
                                onClick={form.handleSubmit(onSubmit)}
                                spinner={
                                    disableBtn || form.formState.isSubmitting
                                }
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default UpdatePasswordForm
