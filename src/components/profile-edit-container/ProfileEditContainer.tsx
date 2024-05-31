'use client'

import React, { useState } from 'react'
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
// import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editSchema } from '@/types/edit.type'

const ProfileEditContainer = () => {
    // const router = useRouter()
    const [disableBtn, setDisableBtn] = useState<boolean>(false)

    const form = useForm<z.infer<typeof editSchema>>({
        resolver: zodResolver(editSchema),
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof editSchema>) => {
        setDisableBtn(true)
        setTimeout(() => {
            setDisableBtn(false)
        }, 2500)
    }
    return (
        <div className="img-bg flex flex-col items-center justify-center">
            <HeaderNav
                title="Edit profile"
                link="/profile"
                imageSrc="/assets/avatar.png"
            />
            <div className="flex justify-center items-center gap-1 my-3 flex-col text-white">
                <div className="w-24 h-24 border-2 border-white rounded-full relative">
                    <Image
                        width={100}
                        height={100}
                        alt=""
                        src={'/assets/avatar.png'}
                    />
                    <div className="absolute top-0 right-0 rounded-full h-7 w-7 flex justify-center items-center bg-white cursor-pointer">
                        <CameraIcon className={`"w-5 h-5 text-black`} />
                    </div>
                </div>
                <p>Kathy Mankaa</p>
                <small className="text-[0.7rem]">katherinem@gmail.com</small>
                <small className="text-[0.65rem]">672835564</small>
            </div>
            <div className="flex flex-col mx-4 bg-white min-h-[400px] rounded-2xl px-6 py-6 box-shadow-2 w-[90%] mb-9">
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
                                            | 'username'
                                            | 'phone'
                                            | 'email'
                                    }
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="absolute -mt-2 bg-white z-10 px-1 ml-4">
                                                {fieldInput.label}
                                            </FormLabel>
                                            {
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className="py-5 relative"
                                                    />
                                                </FormControl>
                                            }
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
