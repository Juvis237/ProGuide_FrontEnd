'use client'

import React, { useLayoutEffect, useState } from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'
import { editProfileField } from '../../../data'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editSchema } from '@/types/edit.type'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { toast } from '../ui/use-toast'
import ToastDescription from '../toast-description/ToastDescription'
import { setUser } from '@/lib/feature/user.slice'

const ProfileEditContainer = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [disableBtn, setDisableBtn] = useState<boolean>(false)
    const userData = useAppSelector((state) => state.user.user)
    const token =
        typeof localStorage !== 'undefined' &&
        localStorage.getItem('user-token')

    const form = useForm<z.infer<typeof editSchema>>({
        resolver: zodResolver(editSchema),
        defaultValues: {
            first_name: token ? userData?.first_name : '',
            last_name: token ? userData?.last_name : '',
            matricule: token ? userData?.matricule : '',
            department: token ? userData?.department : '',
            level: token ? userData?.level : '',
            email: token ? userData?.email : '',
            faculty: token ? userData?.faculty : '',
            phone: token
                ? typeof userData?.phone === 'string'
                    ? parseInt(userData.phone)
                    : userData?.phone
                : undefined,
        },
    })

    const onSubmit = async (values: z.infer<typeof editSchema>) => {
        setDisableBtn(true)
        console.log(values)

        const requestBody = JSON.stringify({
            first_name: values.first_name,
            last_name: values.last_name,
            matricule: values.matricule,
            department: values.department,
            level: values.level,
            email: values.email,
            faculty: values.faculty,
            phone: values.phone,
        })

        try {
            const request = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/profile_update`,
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
                dispatch(setUser(user))
                toast({
                    variant: 'default',
                    title: 'Profile Updated Successfully',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                router.push('/dashboard')
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Profile Update Error',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                setDisableBtn(false)
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Profile Update Error',
                description: <ToastDescription description={`${error}`} />,
            })
            setDisableBtn(false)
        }
    }

    useLayoutEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
                const user = JSON.parse(storedUser)
                dispatch(setUser(user))
            }
        }
    }, [dispatch])

    return (
        <div className="img-bg flex flex-col items-center justify-center pt-[22rem] mb-[18rem]">
            <HeaderNav
                title="Edit profile"
                link="/profile"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
            />
            <div className="flex justify-center items-center gap-1 my-3 flex-col text-white">
                <div className="w-24 h-24 border-2 border-white rounded-full relative">
                    <Image
                        width={100}
                        height={100}
                        alt=""
                        src={
                            userData ? userData?.profile : '/assets/avatar.svg'
                        }
                        className="rounded-full w-full h-full"
                    />
                </div>
                <p>
                    {userData?.first_name} {userData?.last_name}
                </p>
                <small className="text-[0.7rem]">{userData?.email}</small>
                <small className="text-[0.65rem]">{userData?.phone}</small>
            </div>
            <div className="flex flex-col mx-4 bg-white rounded-2xl px-6 py-6 box-shadow-2 w-[90%]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 w-full"
                    >
                        {editProfileField.map((fieldInput, index) => {
                            return (
                                <FormField
                                    key={index}
                                    control={form.control}
                                    name={
                                        fieldInput.name as
                                            | 'phone'
                                            | 'email'
                                            | 'first_name'
                                            | 'last_name'
                                            | 'matricule'
                                            | 'department'
                                            | 'faculty'
                                            | 'level'
                                    }
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="absolute -mt-2 bg-white z-10 px-1 ml-4">
                                                {fieldInput.label}
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
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ProfileEditContainer
