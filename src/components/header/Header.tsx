import React from 'react'

interface Props {
    title: string
    classes: string
}

const Header: React.FC<Props> = ({ title, classes }) => {
    return <h2 className={classes}>{title}</h2>
}

export default Header
