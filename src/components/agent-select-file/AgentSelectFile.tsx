'use client'
import React, { useState, useLayoutEffect } from 'react'
import Paragraph from '../paragraph/Paragraph'
import { DocumentIcon } from '@heroicons/react/24/outline'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { setUser } from '@/lib/feature/user.slice'
import { toast } from '../ui/use-toast'
import ToastDescription from '../toast-description/ToastDescription'
import { useRouter } from 'next/navigation'

const AgentSelectFile = () => {
    const [selectedImage, setSelectedImage] = useState(null)
      const dispatch = useAppDispatch()
      const router = useRouter()
      const token =
          typeof localStorage !== 'undefined' &&
          localStorage.getItem('user-token')
      const userData = useAppSelector((state) => state.user.user)
      useLayoutEffect(() => {
          if (typeof localStorage !== 'undefined') {
              const storedUser = localStorage.getItem('user')
              if (storedUser) {
                  const user = JSON.parse(storedUser)
                  dispatch(setUser(user))
              }
          }
      }, [dispatch])

    const handleImageUpload = async (event: any) => {
        const file = event.target.files[0]
        // setSelectedImage(file)

        // const formData = new FormData()
        // formData.append('image', file)

        // try {
        //     const req = await fetch(
        //         `${process.env.NEXT_PUBLIC_BASE_URL}/profile_update`,
        //         {
        //             method: 'POST',
        //             body: formData,
        //             headers: {
        //                 Accept: 'application/json',
        //                 Authorization: `Bearer ${token}`,
        // "Content-Type": "multipart/form-data",
        //             },
        //         },
        //     )
        //     const res = await req.json()
        //     const { message, user, success } = res

        //     if (success) {
        //         if (typeof localStorage !== 'undefined') {
        //             localStorage.setItem('user', JSON.stringify(user))
        //         }
        //         dispatch(setUser(user))
        //         toast({
        //             variant: 'default',
        //             title: 'Profile Updated Successfully',
        //             description: (
        //                 <ToastDescription description={`${message}`} />
        //             ),
        //         })
        //         router.push('/dashboard')
        //     }
        // } catch (error) {
        //     toast({
        //         variant: 'destructive',
        //         title: 'Error uploading image',
        //         description: <ToastDescription description={`${error}`} />,
        //     })
        // }
    }
    return (
        <div className="flex items-center flex-col gap-8 mt-12">
            <Paragraph content="OR" classes="font-bold" />
            <button></button>
            <label
                htmlFor="uploadFile"
                className="text-primary font-bold text-sm border-b flex pb-1 justify-center cursor-pointer"
            >
                <DocumentIcon className="mr-2 h-5 w-5" /> Select document from
                Files
            </label>
            <input
                id="uploadFile"
                name="document"
                multiple
                type="file"
                accept="application/pdf"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
            />
        </div>
    )
}

export default AgentSelectFile
