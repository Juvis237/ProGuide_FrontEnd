'use client'
import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <ColorRing
            visible={true}
            height="40"
            width="40"
            ariaLabel="color-ring-loading"
            wrapperStyle={{ width: '100%' }}
            wrapperClass="color-ring-wrapper"
            colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
        />
    )
}

export default Spinner
