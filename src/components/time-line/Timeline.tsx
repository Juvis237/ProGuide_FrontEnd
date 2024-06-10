import React from 'react'

const Timeline = () => {
    return (
        <div className="flex gap-5 flex-col">
            <div
                // key={index}
                className={`flex relative items-center justify-center w-2 h-2 rounded-full border-2 bg-black`}
            >
                <div className={`absolute border-2 border-gray-300}`}></div>
            </div>
            <div
                // key={index}
                className={`flex relative items-center justify-center w-2 h-2 rounded-full border-2 bg-black`}
            >
                {/* {index + 1} */}
                {/* <div
                        className={`absolute -right-16 w-16 border-2 ${step !== 'completed' && 'border-gray-300'}  ${step === 'completed' && 'border-primary'}`}
                    ></div> */}
            </div>
            {/* )} */}
        </div>
    )
}

export default Timeline
