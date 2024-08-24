'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../ui/command'
import { Switch } from '../ui/switch'
import { useAppSelector } from '@/lib/hook'

type Step1Fields = {
    name: string
    label: string
}

type DeliverableMode = {
    id: number
    name?: string
    price?: string
    duration: string
}

type Deliverable = {
    id?: number
    name?: string
    price?: string
    duration: string
    modes: DeliverableMode[]
}

const FormStep1 = ({
    step1Fields,
    form,
}: {
    step1Fields: Step1Fields[]
    form: any
}) => {
    const schools = useAppSelector((state) => state.school.school)
    const user = useAppSelector((state) => state.user.user)
    const [open, setOpen] = useState(false)
    const [selectedDeliverable, setSelectedDeliverable] =
        useState<Deliverable | null>(null)
    const router = useRouter()

    useEffect(() => {
        if (
            ((user && !user.first_name) || (user && !user.last_name)) &&
            form.getValues('for_me') === true
        ) {
            router.push('/profile-edit')
        }
    }, [user, router])

    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        query.forEach((value, key) => {
            form.setValue(key, value)
        })
    }, [form])

    const handleDeliverableChange = (value: string) => {
        form.setValue('doc_type', value)
        const school =
            schools &&
            schools.find((school) => school.id === form.getValues('my_school'))
        const deliverable = school?.delivrables.find(
            (del) => del?.id?.toString() === value,
        )
        setSelectedDeliverable(deliverable || null)
    }

    return (
        <>
            {step1Fields.map((fieldInput, index) => (
                <FormField
                    key={index}
                    control={form.control}
                    name={
                        fieldInput.name as
                            | 'my_school'
                            | 'doc_type'
                            | 'num_doc'
                            | 'trans_mode'
                            | 'for_me'
                    }
                    render={({ field }) => (
                        <FormItem
                            className={`${
                                field.name === 'for_me' &&
                                'flex items-center gap-2'
                            }`}
                        >
                            <FormLabel
                                className="cursor-pointer font-normal"
                                htmlFor={fieldInput.name}
                            >
                                {fieldInput.label}
                            </FormLabel>
                            {fieldInput.name === 'doc_type' ? (
                                <Select
                                    onValueChange={(value) =>
                                        handleDeliverableChange(value)
                                    }
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="py-6">
                                            <SelectValue
                                                placeholder={
                                                    '-- Choose a document type --'
                                                }
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="text-primary">
                                        {schools && schools.length > 0
                                            ? schools
                                                  .find(
                                                      (school) =>
                                                          school.id ===
                                                          form.getValues(
                                                              'my_school',
                                                          ),
                                                  )
                                                  ?.delivrables.map(
                                                      (deliverable, index) => (
                                                          <SelectItem
                                                              key={index}
                                                              value={
                                                                  deliverable?.id?.toString() ||
                                                                  ''
                                                              }
                                                          >
                                                              {
                                                                  deliverable?.name
                                                              }
                                                          </SelectItem>
                                                      ),
                                                  )
                                            : 'Select School...'}
                                    </SelectContent>
                                </Select>
                            ) : fieldInput.name === 'trans_mode' ? (
                                <Select
                                    onValueChange={(value) =>
                                        field.onChange(value)
                                    }
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="py-6 hover:bg-white">
                                            <SelectValue
                                                className="hover:bg-white"
                                                placeholder={
                                                    '-- Choose a Transcript mode --'
                                                }
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="text-primary hover:bg-white">
                                        {selectedDeliverable
                                            ? selectedDeliverable.modes.map(
                                                  (mode, key) => (
                                                      <SelectItem
                                                          key={key}
                                                          value={mode.id.toString()}
                                                          className="hover:bg-white"
                                                      >
                                                          {mode.name}
                                                      </SelectItem>
                                                  ),
                                              )
                                            : 'Select Deliverable First...'}
                                    </SelectContent>
                                </Select>
                            ) : fieldInput.name === 'my_school' ? (
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="sm:min-w-[300px] w-full justify-between py-5 font-normal bg-white hover:bg-white hover:text-black"
                                        >
                                            {field.value
                                                ? schools &&
                                                  schools.find(
                                                      (school) =>
                                                          school.id ===
                                                          form.getValues(
                                                              'my_school',
                                                          ),
                                                  )?.name
                                                : 'Select School...'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[380px] p-0">
                                        <Command className="w-full">
                                            <CommandInput placeholder="Search school..." />
                                            <CommandList>
                                                <CommandEmpty>
                                                    No schools found.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {schools &&
                                                        schools.length > 0 &&
                                                        schools.map(
                                                            (school) => (
                                                                <CommandItem
                                                                    key={
                                                                        school.id
                                                                    }
                                                                    value={school.id?.toString()}
                                                                    onSelect={() => {
                                                                        form.setValue(
                                                                            'my_school',
                                                                            school.id,
                                                                        )
                                                                        setOpen(
                                                                            false,
                                                                        )
                                                                    }}
                                                                >
                                                                    <Check
                                                                        className={cn(
                                                                            'mr-2 h-4 w-4',
                                                                            school.id ===
                                                                                field.value
                                                                                ? 'opacity-100'
                                                                                : 'opacity-0',
                                                                        )}
                                                                    />
                                                                    {
                                                                        school.name
                                                                    }
                                                                </CommandItem>
                                                            ),
                                                        )}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            ) : fieldInput.name === 'for_me' ? (
                                <FormControl>
                                    <Switch
                                        checked={!!field.value}
                                        onCheckedChange={field.onChange}
                                        id={fieldInput.name}
                                        style={{ marginTop: 0 }}
                                    />
                                </FormControl>
                            ) : (
                                <div
                                    key={index}
                                    className="border-primary bg-white"
                                >
                                    <Input
                                        {...field}
                                        id={fieldInput.name}
                                        name={fieldInput.name}
                                        className="py-6"
                                        value={
                                            field.value === null
                                                ? ''
                                                : field.value
                                        }
                                    />
                                </div>
                            )}
                            <FormMessage />
                        </FormItem>
                    )}
                />
            ))}
        </>
    )
}

export default FormStep1
