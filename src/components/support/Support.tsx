import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Support = () => {
    return (
        <div className="cursor-pointer fixed bottom-0 right-0 mb-[8rem] mr-4 w-12 h-12 rounded-full flex items-center justify-center bg-white box-shadow">
            <FontAwesomeIcon icon={faQuestion} className="text-2xl" />
        </div>
    )
}

export default Support
