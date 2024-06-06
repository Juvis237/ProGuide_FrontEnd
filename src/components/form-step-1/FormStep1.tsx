import React from 'react'
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

const FormStep1 = ({
    step1Fields,
    form,
}: {
    step1Fields: { name: string; label: string }[]
    form: any
}) => {
    return (
        <>
            {step1Fields.map((fieldInput, index) => {
                return (
                    <FormField
                        key={index}
                        control={form.control}
                        name={
                            fieldInput.name as
                                | 'school'
                                | 'doc_type'
                                | 'num_doc'
                                | 'trans_mode'
                        }
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className={`cursor-pointer font-normal`}
                                    htmlFor={fieldInput.name}
                                >
                                    {fieldInput.label}
                                </FormLabel>
                                {fieldInput.name === 'doc_type' ? (
                                    <Select
                                        onValueChange={(value) =>
                                            field.onChange(value)
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
                                            <SelectItem value="english Proficiency">
                                                English Proficiency
                                            </SelectItem>
                                            <SelectItem value="Transcript">
                                                Transcript
                                            </SelectItem>
                                            <SelectItem value="Certificate">
                                                Certificate
                                            </SelectItem>
                                            <SelectItem value="Completion of studies">
                                                Completion of studies
                                            </SelectItem>
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
                                            <SelectTrigger className="py-6">
                                                <SelectValue
                                                    placeholder={
                                                        '-- Choose a Transcript mode --'
                                                    }
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="text-primary">
                                            <SelectItem value="Normal mode">
                                                Normal mode
                                            </SelectItem>
                                            <SelectItem value="Fast mode">
                                                Fast mode
                                            </SelectItem>
                                            <SelectItem value="Super fast mode">
                                                Super fast mode
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                ) : (
                                    <>
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
                                    </>
                                )}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )
            })}
        </>
    )
}

export default FormStep1
