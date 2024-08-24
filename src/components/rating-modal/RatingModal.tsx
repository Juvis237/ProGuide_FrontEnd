'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { rating, ratingStatus } from '../../../data'
import { StarIcon } from '@heroicons/react/24/outline'
import { ratingCommentSchema } from '@/types/rating-comment.type'
import { setRating } from '@/lib/feature/service-rating.slice'

interface Controls {
    hideModal: () => void
    confirmAction: () => Promise<void>
    confirmDisabled: boolean
    id?: string
    header: string
}

const RatingModal = ({
    hideModal,
    confirmAction,
    confirmDisabled,
    header,
}: Controls) => {
    const userData = useAppSelector((state) => state.user.user)
    const dispatch = useAppDispatch()
    const [disableBtn, setDisableBtn] = useState<boolean>(false)
    const [starIndex, setStarIndex] = useState(-1)
    const [errorMessage, setErrorMessage] = useState<string>('') // State for error message
    const maxStars = 5
    const starsArray = Array.from({ length: maxStars })

    const form = useForm<z.infer<typeof ratingCommentSchema>>({
        resolver: zodResolver(ratingCommentSchema),
    })

    // Define the submit handler.
    const onSubmit = async (values: z.infer<typeof ratingCommentSchema>) => {
        dispatch(
            setRating({
                numberOfStar: (starIndex + 1).toString(),
                comment: values.message,
            }),
        )
        if (starIndex >= 0 && values.message) {
            setDisableBtn(true) // Disable the button during the request
            setErrorMessage('') // Clear any existing error message

            try {
                await confirmAction() // Attempt to perform the confirm action
                setDisableBtn(false) // Re-enable the button after the request completes
                hideModal() // Hide the modal after a successful request
            } catch (error) {
                console.error('Confirm action failed:', error)
                setDisableBtn(false) // Re-enable the button after the request fails
            }
        } else {
            if (starIndex < 0) {
                setErrorMessage('Please select a star rating.') // Set error message if no star is selected
            } else {
                setErrorMessage('Please provide a valid message.') // Set error message if the message is invalid
            }
        }
    }

    const handleStars = (index: number) => {
        setStarIndex(index)
        setErrorMessage('') // Clear error when a star is selected
    }

    return (
        <div className="success_modal animate flex justify-center items-center">
            <section className="w-[85%] h-[25rem] rounded-xl bg-white flex my-[5rem] mx-auto items-center flex-col justify-center">
                <div className="py-3 bg-isPublic_switch w-full text-center">
                    <h3 className="text-black flex-col font-bold">{header}</h3>
                </div>
                <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-center items-center">
                        {starsArray.map((_, index) => (
                            <StarIcon
                                key={index}
                                className={`w-8 h-8 ${index <= starIndex ? 'text-secondary' : 'text-gray-400'}`}
                                onClick={() => handleStars(index)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        {errorMessage && (
                            <p className="text-red-500 pt-2">{errorMessage}</p>
                        )}
                    </div>
                    <div className="items-center flex justify-center">
                        <p className="pt-2 pb-6">{ratingStatus[starIndex]}</p>
                    </div>
                    <div className="w-full h-[80%] flex flex-col items-center px-4">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-4 w-full"
                            >
                                {rating.map((fieldInput, index) => {
                                    return (
                                        <FormField
                                            key={index}
                                            control={form.control}
                                            name={'message'}
                                            render={({ field }) => (
                                                <FormItem
                                                    className={`${fieldInput.name && 'flex flex-col '}`}
                                                >
                                                    <FormLabel className="cursor-pointer">
                                                        {fieldInput.label}
                                                    </FormLabel>
                                                    <Textarea
                                                        placeholder="Enter message here..."
                                                        className={`resize-none pb-16`}
                                                        {...field}
                                                    />
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )
                                })}
                                <div className="w-full flex items-center justify-center pb-4">
                                    <Button
                                        type="submit"
                                        className="px-8 py-5 bg-secondary"
                                        disabled={
                                            disableBtn ||
                                            form.formState.isSubmitting
                                        }
                                        onClick={form.handleSubmit(onSubmit)}
                                        spinner={
                                            disableBtn ||
                                            form.formState.isSubmitting
                                        }
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RatingModal
