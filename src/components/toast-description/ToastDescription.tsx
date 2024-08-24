import React from 'react'
const ToastDescription: React.FC<{ description: string }> = ({
    description,
}) => {
    return (
        <div className="mt-2 rounded-md z-[99999] max-w-[400px]">
            {description}
        </div>
    )
}

export default ToastDescription
