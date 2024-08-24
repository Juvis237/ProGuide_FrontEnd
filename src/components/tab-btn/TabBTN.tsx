import React from 'react'
import { Button } from '../ui/button'
import { z } from 'zod'
import { tabSchema } from '@/types/tab.type'

const TabBTN = ({ btn_text, toggleTab, active }: z.infer<typeof tabSchema>) => {
    return (
        <div className={`relative w-full`}>
            <Button
                variant={'ghost'}
                className={`py-6 hover:rounded-none hover:bg-transparent hover:text-primary rounded-none w-[80%] ${active && 'border-primary border-b-[3px] text-primary'}`}
                onClick={toggleTab}
            >
                {btn_text}
            </Button>
        </div>
    )
}

export default TabBTN
