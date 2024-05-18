import React from 'react'
interface Props {
    content: string
    classes?: string;
}

const Paragraph: React.FC<Props> = ({ content, classes }) => {
    return <p className={`text-center py-3 font-2xl px-8 text-white ${classes}`}>{content}</p>
}

export default Paragraph
