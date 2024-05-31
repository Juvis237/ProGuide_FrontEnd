'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '../ui/use-toast'
import { Form, FormField, FormItem, FormMessage } from '../ui/form'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

const SearchBar = () => {
    const url = usePathname()
    const FormSchema = z.object({
        search: z.string().min(2, {
            message: 'Username must be at least 2 characters.',
        }),
    })
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            search: '',
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        })
    }
    return (
        <div className="flex w-full min-w-sm items-center justify-center space-x-2 my-4 relative">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <FormField
                        control={form.control}
                        name="search"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex justify-between items-center gap-4">
                                    <Input
                                        placeholder="Search for a document"
                                        {...field}
                                        className="bg-transparent w-full py-6 border outline-none rounded-3xl pr-24 pl-3"
                                    />
                                    {url !== '/contact-support' &&
                                        url !== '/tracking' && (
                                            <Button
                                                className="py-3 h-full"
                                                type="button"
                                            >
                                                <AdjustmentsHorizontalIcon className=" h-6" />
                                            </Button>
                                        )}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="">
                        <Button
                            type="submit"
                            className={`absolute top-0 right-0 border-none shadow-none py-[1.55rem] rounded-tr-3xl rounded-br-3xl ${
                                url !== '/contact-support' &&
                                url !== '/tracking'
                                    ? 'mr-[4.5rem]'
                                    : ''
                            }`}
                        >
                            <MagnifyingGlassIcon className="h-8 w-8" />
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default SearchBar
