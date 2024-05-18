import React from 'react'
interface Props {
    content: string
}

const Paragraph: React.FC<Props> = ({ content }) => {
    return <p className="text-center py-3 font-2xl px-8 text-white">{content}</p>
}

export default Paragraph
