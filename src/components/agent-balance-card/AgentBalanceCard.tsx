'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { EyeIcon } from '@heroicons/react/24/outline'

const AgentBalanceCard = () => {
    const [amount, setAmount] = useState('XAF 0')
    const localPart = amount.split('')
    const visibleLocalPartLength = Math.min(0, localPart.length) // Keeping at least 3 characters of the local part visible
    const hiddenPart = '*'.repeat(localPart.length - visibleLocalPartLength)

    console.log(hiddenPart)

    const [showPassword, setShowPassword] = useState<boolean>(true)
    // {
    //     fieldInput.name === 'password' ? (
    //         showPassword ? (
    //             <EyeIcon />
    //         ) : (
    //             <EyeSlashIcon />
    //         )
    //     ) : null
    // }
    return (
        <div className="dashboard-summary py-4 mt-8 rounded-md flex justify-center items-center flex-col gap-3">
            <p className="font-semibold ">Account Balance</p>
            <div className="flex justify-center gap-3 items-center">
                <div className="pt-2">{hiddenPart}</div>
                <div>
                    <EyeIcon className="cursor-pointer w-6 h-6" />
                </div>
            </div>
            <Button>Withdraw</Button>
        </div>
    )
}

export default AgentBalanceCard
