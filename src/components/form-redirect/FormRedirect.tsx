import Link from 'next/link'
import React from 'react'

interface Props {
    link: string
    linkTextDescription: string
    linkText: string
}

const FormRedirect: React.FC<Props> = ({
    linkTextDescription,
    link,
    linkText,
}) => {
    return (
        <small className="w-full flex justify-center text-[1rem]">
            {linkTextDescription}
            <Link className="text-secondary pl-[0.25rem]" href={link}>
                {linkText}
            </Link>
        </small>
    )
}

export default FormRedirect
