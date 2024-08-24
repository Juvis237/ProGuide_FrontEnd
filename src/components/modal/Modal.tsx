import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from '../ui/button'

interface Controls {
    hideModal: () => void
    confirmAction: () => void
    confirmDisabled: boolean
    id?: string
    content: string
    header: string
}

const Modal = ({
    hideModal,
    confirmAction,
    confirmDisabled,
    id,
    content,
    header,
}: Controls) => {
    return (
        <div
            className="success_modal animate cursor-pointer"
            onClick={hideModal}
        >
            <section className="w-[85%] h-[30rem] rounded-xl bg-white flex my-[5rem] mx-auto">
                <div className="flex flex-col justify-between w-full">
                    <div className="py-2 bg-isPublic_switch w-full">
                        <h3 className="text-black text-2xl pt-4 flex items-center justify-center flex-col">
                            {header}
                            {id && <small className="text-sm">{id}</small>}
                        </h3>
                    </div>
                    <div className="w-full h-[80%] flex flex-col items-center">
                        <span>
                            <FontAwesomeIcon
                                icon={faTriangleExclamation}
                                className="text-[7rem] text-isPublic_switch mt-8"
                            />
                        </span>
                        <p className="font-bold text-isPublic_switch text-xl text-center px-10 my-8">
                            {content}
                        </p>
                        <div className="flex justify-between w-full px-8">
                            <Button
                                onClick={hideModal}
                                type="button"
                                className={`w-[45%] font-bold bg-black hover:bg-black flex justify-center items-center text-lg text-white py-5 rounded-md ${
                                    confirmDisabled ? 'px-2' : 'px-8'
                                }`}
                                disabled={confirmDisabled}
                                spinner={confirmDisabled}
                            >
                                {confirmDisabled ? '' : 'No'}
                            </Button>
                            <Button
                                variant={'outline'}
                                onClick={confirmAction}
                                type="button"
                                className={`w-[45%] hover:bg-white hover:text-red-500 font-bold text-lg flex justify-center items-center text-red-500 border-red-500 bg-white py-5 rounded-md ${
                                    confirmDisabled ? 'px-2' : 'px-8'
                                }`}
                                disabled={confirmDisabled}
                                spinner={confirmDisabled}
                            >
                                {confirmDisabled ? '' : 'Yes'}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Modal
