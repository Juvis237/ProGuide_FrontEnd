'use client'

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Header from '../header/Header'
import { headerSignup, parLogin, loginField, socialIcon } from '../../../data'
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
import { loginSchema } from '@/types/login.type'
import { Button } from '../ui/button'
import OptionIcon from '../option-icon/OptionIcon'
import FormRedirect from '../form-redirect/FormRedirect'
import Link from 'next/link'
import ToastDescription from '../toast-description/ToastDescription'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [disableBtn, setDisableBtn] = useState<boolean>(false)

    const togglerPassword = (fieldType: string) => {
        if (fieldType === 'password') {
            setShowPassword(!showPassword)
        }
    }
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        setDisableBtn(true)
        const requestBody = JSON.stringify({
            email: values.email,
            password: values.password,
        })
        try {
            const request = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
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
                    title: 'Login Successful',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                router.push('/dashboard')
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Login Error',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                setDisableBtn(false)
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Login Error',
                description: <ToastDescription description={`${error}`} />,
            })
            setDisableBtn(false)
        }
    }
    return (
        <div className="img-bg flex flex-col items-center justify-center">
            <Header
                title={headerSignup}
                classes="text-white font-bold text-3xl"
            />
            <Paragraph
                content={parLogin}
                classes="text-white px-8 text-center "
            />
            <div className="flex justify-center items-center flex-col mx-4 bg-white min-h-[400px] rounded-2xl px-4 py-6 box-shadow-2 w-[90%]">
                <div className="pb-6">
                    <Header
                        title="Login"
                        classes="text-secondary font-bold text-xl"
                    />
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 w-full"
                    >
                        {loginField.map((fieldInput, index) => {
                            return (
                                <FormField
                                    key={index}
                                    control={form.control}
                                    name={
                                        fieldInput.name as 'email' | 'password'
                                    }
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="absolute -mt-2 bg-white z-10 px-1 ml-4">
                                                {fieldInput.label}
                                            </FormLabel>
                                            {fieldInput.name !== 'password' &&
                                            fieldInput.name !==
                                                'confirm_password' ? (
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className="py-5 relative"
                                                    />
                                                </FormControl>
                                            ) : (
                                                <div className="relative">
                                                    <Input
                                                        type={
                                                            showPassword &&
                                                            fieldInput.name ===
                                                                'password'
                                                                ? 'password'
                                                                : ''
                                                        }
                                                        {...field}
                                                        onChange={(e) =>
                                                            field.onChange(
                                                                e.target.value,
                                                            )
                                                        }
                                                        className={`py-5 bg-white ${fieldInput.name === 'password' && 'pr-16'}`}
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
                                                        ) : null}
                                                    </div>
                                                </div>
                                            )}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        })}

                        <Link href={'./forgot-password'}>
                            <div className="text-secondary mt-2  cursor-pointer flex justify-start">
                                Forgot password ?
                            </div>{' '}
                        </Link>
                        <div className="w-full flex items-center justify-center pb-4">
                            <Button
                                type="submit"
                                className="px-8 py-5 bg-secondary"
                                disabled={
                                    disableBtn || form.formState.isSubmitting
                                }
                                onClick={form.handleSubmit(onSubmit)}
                                spinner={
                                    disableBtn || form.formState.isSubmitting
                                }
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </Form>
                <span>or</span>
                <div className="flex justify-between gap-4 py-4 w-full">
                    {socialIcon.map((icon, index) => {
                        return <OptionIcon imageSrc={icon} key={index} />
                    })}
                </div>
                <FormRedirect
                    link="/sign-up"
                    linkText="Sign up"
                    linkTextDescription="Don’t yet have an account?"
                />
            </div>
        </div>
    )
}

export default Login
