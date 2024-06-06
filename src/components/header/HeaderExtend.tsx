import React from 'react'
import Header from './Header';

interface Props {
    title: string;
    children: React.ReactNode
}

const HeaderExtend: React.FC<Props> = ({ title, children }) => {
    return (
        <div className='bg-[#3768B1] text-white w-1000 h-100'>
            <Header title={title} classes='' />
            <main>{children}</main>
        </div>
    )
}

export default HeaderExtend
