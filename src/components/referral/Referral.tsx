'use client'
import React, { useEffect, useState } from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import TabBTN from '../tab-btn/TabBTN'
import { referralContent, step3FieldsRef, tabBTN } from '../../../data'
import Image from 'next/image'
import 'react-phone-input-2/lib/style.css'
import Paragraph from '../paragraph/Paragraph'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { withdrawSchema } from '@/types/withdraw.type'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import PhoneInput from 'react-phone-input-2'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { setUser } from '@/lib/feature/user.slice'
import { setReferralData } from '@/lib/feature/referral.slice'
import { setWalletBalanceData } from '@/lib/feature/wallet-balance.slice'
import ToastDescription from '../toast-description/ToastDescription'
import { toast } from '../ui/use-toast'

const Referral = () => {
    const form = useForm<z.infer<typeof withdrawSchema>>({
        resolver: zodResolver(withdrawSchema),
    })
    const dispatch = useAppDispatch()
    const userData = useAppSelector((state) => state.user.user)
    const referrals = useAppSelector((state) => state.referralData.referralData)
    const walletBalanceData = useAppSelector(
        (state) => state.walletBalance.walletBalanceData,
    )
    const [activeTab, setActiveTab] = useState(0)
    const [loading, setLoading] = useState(false)
    const handleTabClick = (index: number) => {
        setActiveTab(index) // Update active tab state when a tab is clicked
    }

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
                const user = JSON.parse(storedUser)
                dispatch(setUser(user))
            }
        }
    }, [dispatch])

    const handleSubmit: SubmitHandler<z.infer<typeof withdrawSchema>> = async (
        values,
    ) => {
        console.log(values)
    }
    const fetchReferralData = async () => {
        const req = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/referrals`,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('user-token')}`,
                },
            },
        )

        const res = await req.json()
        const { data } = res
        dispatch(setReferralData(data))
        return res
    }

    const fetchWalletBalance = async () => {
        const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('user-token')}`,
            },
        })

        const res = await req.json()
        dispatch(setWalletBalanceData(res))
        return res
    }

    const shareLink = (referralCode: string) => {
        const message = `Join us now! Register here: ${window.location.origin}/sign-up?referral=${referralCode}`
        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`
        window.open(whatsappURL, '_blank')
    }

    useEffect(() => {
        fetchReferralData()
        fetchWalletBalance()
    }, [])

    const copyToClipBoard = async (refCode: string) => {
        try {
            await navigator.clipboard.writeText(refCode)
            toast({
                variant: 'default',
                title: 'Content copied to clipboard',
                description: (
                    <ToastDescription
                        description={`Referral code copied to clipboard`}
                    />
                ),
            })
        } catch (err) {
            toast({
                variant: 'destructive',
                title: 'Failed to copy',
                description: <ToastDescription description={`${err}`} />,
            })
        }
    }

    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Referral"
                link="/profile"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-4">
                <section className="bg-white pt-8 min-h-screen pb-32 rounded-t-3xl">
                    <div className="border-b-2 px-4 pb-2">
                        <div className="flex justify-between bg-white  w-full py-2">
                            {tabBTN.map((items, index) => (
                                <TabBTN
                                    key={index}
                                    btn_text={items.btn_text}
                                    toggleTab={() => handleTabClick(index)}
                                    active={activeTab === index}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        {activeTab === 0 && (
                            <div>
                                <div className="flex justify-center gap-4 flex-col items-center pt-4">
                                    <h3 className="text-xl font-bold text-center">
                                        Refer a friend and earn up to <br />
                                        XAF500
                                    </h3>
                                    <Image
                                        src={'/assets/pana2.svg'}
                                        height={50}
                                        width={280}
                                        alt="image"
                                        className="mb-16 relative"
                                    />
                                    <div
                                        onClick={() => {
                                            if (userData?.referal_code) {
                                                copyToClipBoard(
                                                    userData.referal_code,
                                                )
                                            } else {
                                                toast({
                                                    variant: 'destructive',
                                                    title: 'No referral code available',
                                                    description: (
                                                        <ToastDescription
                                                            description={`Referral code is not available.`}
                                                        />
                                                    ),
                                                })
                                            }
                                        }}
                                        className="cursor-pointer absolute max-w-[350px] border-[4px] rounded-2xl border-border-referral-border-referral border-dashed bg-secondary-foreground py-3 text-white w-[80%] text-center"
                                    >
                                        <p>Your referral code is</p>
                                        <p className="text-lg font-bold">
                                            {userData && userData.referal_code}
                                        </p>
                                        <p>tap to copy</p>
                                    </div>
                                    <div className="flex justify-center flex-col px-6">
                                        {referralContent.map((el, index) => (
                                            <div
                                                className="flex items-center gap-3"
                                                key={index}
                                            >
                                                <Image
                                                    src={el.icon}
                                                    width={35}
                                                    height={80}
                                                    alt="work number count"
                                                    className="w-6 h-6"
                                                />
                                                <div>
                                                    <Paragraph
                                                        content={el.content}
                                                        classes="text-sm"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <h4 className="text-lg font-bold">
                                        Share your link
                                    </h4>
                                    <div>
                                        <Button
                                            className="bg-white p-3 py-5 flex item-center justify-center hover:bg-white"
                                            onClick={() => {
                                                if (userData?.referal_code) {
                                                    shareLink(
                                                        userData.referal_code,
                                                    )
                                                } else {
                                                    toast({
                                                        variant: 'destructive',
                                                        title: 'No referral code available',
                                                        description: (
                                                            <ToastDescription
                                                                description={`Referral code is not available.`}
                                                            />
                                                        ),
                                                    })
                                                }
                                            }}
                                        >
                                            <Image
                                                src={'/assets/whatsapp.svg'}
                                                width={30}
                                                height={35}
                                                alt="whatsapp link"
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 1 && (
                            <div className="flex flex-col px-4 pt-4">
                                <h3 className="text-xl font-bold">
                                    All referrals
                                </h3>

                                <div className="pt-6 gap-4 flex flex-col">
                                    {referrals &&
                                        referrals.map((el, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center pb-3 border-b"
                                            >
                                                <div className="flex gap-4 items-center">
                                                    <Image
                                                        src={el.profile}
                                                        height={30}
                                                        width={50}
                                                        alt="some text"
                                                        className="rounded-full"
                                                    />
                                                    <p>{el.name}</p>
                                                </div>
                                                {/* <p>{formatCreatedAt(el.created_at)}</p> */}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 2 && (
                            <div className="px-4 pt-4">
                                <div className="dashboard-summary flex justify-between items-center py-8 px-6 rounded-3xl">
                                    <p>Balance</p>
                                    <p className="text-2xl font-bold">
                                        {`XAF ${walletBalanceData && walletBalanceData.balance}`}
                                    </p>
                                </div>
                                <h3 className="font-bold text-lg pt-8 pb-4">
                                    Withdraw to
                                </h3>
                                <div>
                                    <Form {...form}>
                                        <form
                                            onSubmit={form.handleSubmit(
                                                handleSubmit,
                                            )}
                                            className="flex flex-col gap-4"
                                        >
                                            {step3FieldsRef.map(
                                                (fieldInput, index) => {
                                                    return (
                                                        <FormField
                                                            key={index}
                                                            control={
                                                                form.control
                                                            }
                                                            name={
                                                                fieldInput.name as
                                                                    | 'payment_mode'
                                                                    | 'number'
                                                                    | 'amount'
                                                            }
                                                            render={({
                                                                field,
                                                            }) => (
                                                                <FormItem>
                                                                    <FormLabel
                                                                        className={`cursor-pointer font-normal`}
                                                                        htmlFor={
                                                                            fieldInput.name
                                                                        }
                                                                    >
                                                                        {
                                                                            fieldInput.label
                                                                        }
                                                                    </FormLabel>
                                                                    {fieldInput.name ===
                                                                    'payment_mode' ? (
                                                                        <FormControl>
                                                                            <RadioGroup
                                                                                onValueChange={
                                                                                    field.onChange
                                                                                }
                                                                                className="flex w-full"
                                                                            >
                                                                                <FormItem
                                                                                    className={`w-full flex flex-col rounded-xl border-2 border-transparent ${
                                                                                        field.value ===
                                                                                            'momo' &&
                                                                                        'border-secondary'
                                                                                    } space-x-3 space-y-0 p-4 box-shadow`}
                                                                                >
                                                                                    <FormControl>
                                                                                        <RadioGroupItem value="momo" />
                                                                                    </FormControl>
                                                                                    <FormLabel className="font-normal cursor-pointer">
                                                                                        <Image
                                                                                            src={
                                                                                                '/assets/mtn-momo.png'
                                                                                            }
                                                                                            width={
                                                                                                100
                                                                                            }
                                                                                            height={
                                                                                                100
                                                                                            }
                                                                                            alt="momo icon"
                                                                                        />
                                                                                    </FormLabel>
                                                                                </FormItem>
                                                                                <FormItem
                                                                                    className={`w-full flex flex-col rounded-xl border-2 border-transparent ${
                                                                                        field.value ===
                                                                                            'om' &&
                                                                                        'border-secondary'
                                                                                    } space-x-3 space-y-0 p-4 box-shadow`}
                                                                                >
                                                                                    <FormControl>
                                                                                        <RadioGroupItem value="om" />
                                                                                    </FormControl>
                                                                                    <FormLabel className="font-normal cursor-pointer">
                                                                                        <Image
                                                                                            src={
                                                                                                '/assets/orange-om.png'
                                                                                            }
                                                                                            width={
                                                                                                100
                                                                                            }
                                                                                            height={
                                                                                                100
                                                                                            }
                                                                                            alt="momo icon"
                                                                                        />
                                                                                    </FormLabel>
                                                                                </FormItem>
                                                                            </RadioGroup>
                                                                        </FormControl>
                                                                    ) : fieldInput.name ===
                                                                      'amount' ? (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="border-primary bg-white"
                                                                        >
                                                                            <Input
                                                                                {...field}
                                                                                id={
                                                                                    fieldInput.name
                                                                                }
                                                                                name={
                                                                                    fieldInput.name
                                                                                }
                                                                                placeholder="Enter amount you wish to withdraw"
                                                                                className="py-6"
                                                                                value={
                                                                                    field.value ===
                                                                                    null
                                                                                        ? ''
                                                                                        : field.value
                                                                                }
                                                                            />
                                                                        </div>
                                                                    ) : (
                                                                        <>
                                                                            <div className="border-primary bg-white">
                                                                                <PhoneInput
                                                                                    country={
                                                                                        'cm'
                                                                                    }
                                                                                    {...field}
                                                                                    value={
                                                                                        field.value
                                                                                            ? String(
                                                                                                  field.value,
                                                                                              )
                                                                                            : ''
                                                                                    }
                                                                                    inputStyle={{
                                                                                        borderRadius:
                                                                                            '5px',
                                                                                        width: '100%',
                                                                                        paddingTop:
                                                                                            '1.4rem',
                                                                                        paddingBottom:
                                                                                            '1.4rem',
                                                                                        height: '0',
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    )
                                                },
                                            )}

                                            <Button
                                                disabled={
                                                    form.formState.isSubmitting
                                                }
                                                spinner={
                                                    loading ||
                                                    form.formState.isSubmitting
                                                }
                                                type="submit"
                                                className="self-center cursor-pointer w-1/2 py-6 bg-secondary hover:bg-secondary md:hover:bg-transparent mt-9"
                                            >
                                                Withdraw
                                            </Button>
                                        </form>
                                    </Form>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Referral
