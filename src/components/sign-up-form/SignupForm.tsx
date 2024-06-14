'use client'

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Header from '../header/Header'
import { headerSignup, parSignup, signupField, socialIcon } from '../../../data'
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
import { signupSchema } from '@/types/signup.type'
import { Button } from '../ui/button'
import OptionIcon from '../option-icon/OptionIcon'
import FormRedirect from '../form-redirect/FormRedirect'
import { useRouter } from 'next/navigation'
import { toast } from '../ui/use-toast'
import ToastDescription from '../toast-description/ToastDescription'

const SignupForm = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [cShowPassword, setCShowPassword] = useState<boolean>(true)
    const [disableBtn, setDisableBtn] = useState<boolean>(false)

    const togglerPassword = (fieldType: string) => {
        if (fieldType === 'password') {
            setShowPassword(!showPassword)
        } else if (fieldType === 'confirm_password') {
            setCShowPassword(!cShowPassword)
        }
    }
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: '',
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof signupSchema>) => {
        setDisableBtn(true)
        const requestBody = JSON.stringify({
            email: values.email,
            user_name: values.username,
            phone: values.phone ? values.phone : null,
            password: values.password,
        })
        try {
            const request = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/register`,
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
            const { header, status, message, data, type } = response

            if (status) {
                localStorage.setItem('user', JSON.stringify(data))
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
        <div className="img-bg flex flex-col items-center justify-center pt-[9rem]">
            <Header
                title={headerSignup}
                classes="text-white font-bold text-3xl mt-8"
            />
            <Paragraph
                content={parSignup}
                classes="text-white px-8 text-center"
            />
            <div className="flex justify-center items-center flex-col mx-4 bg-white rounded-2xl px-4 py-6 box-shadow-2 w-[90%] border">
                <div className="pb-6">
                    <Header
                        title="Sign Up"
                        classes="text-secondary font-bold text-xl"
                    />
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 w-full"
                    >
                        {signupField.map((fieldInput, index) => {
                            return (
                                <FormField
                                    key={index}
                                    control={form.control}
                                    name={
                                        fieldInput.name as
                                            | 'username'
                                            | 'phone'
                                            | 'email'
                                            | 'password'
                                            | 'confirm_password'
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
                                    disableBtn || form.formState.isSubmitting
                                }
                                onClick={form.handleSubmit(onSubmit)}
                                spinner={
                                    disableBtn || form.formState.isSubmitting
                                }
                            >
                                Register
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
                    link="/login"
                    linkText="Login"
                    linkTextDescription="Already have an account?"
                />
            </div>
        </div>
    )
}

export default SignupForm
