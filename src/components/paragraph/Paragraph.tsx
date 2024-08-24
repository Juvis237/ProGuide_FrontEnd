import React from 'react'
interface Props {
    content: string
    classes?: string
}

const Paragraph: React.FC<Props> = ({ content, classes }) => {
    return <p className={`py-3 font-2xl ${classes}`}>{content}</p>
}

export default Paragraph
