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

const FormStep2 = ({
    step2Fields,
    form,
}: {
    step2Fields: { name: string; label: string }[]
    form: any
}) => {
    return (
        <>
            {step2Fields.map((fieldInput, index) => {
                return (
                    <FormField
                        key={index}
                        control={form.control}
                        name={
                            fieldInput.name as
                                | 'name'
                                | 'matricule'
                                | 'faculty'
                                | 'department'
                                | 'number'
                        }
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className={`cursor-pointer font-normal`}
                                    htmlFor={fieldInput.name}
                                >
                                    {fieldInput.label}
                                </FormLabel>
                                {fieldInput.name === 'faculty' ? (
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
                                                        '-- Select your faculty --'
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
                                ) : fieldInput.name === 'department' ? (
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
                                                        '-- Select your department --'
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
                                ) : fieldInput.name === 'level' ? (
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
                                                        '-- Select your level --'
                                                    }
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="text-primary">
                                            <SelectItem value="200">
                                                200
                                            </SelectItem>
                                            <SelectItem value="300">
                                                300
                                            </SelectItem>
                                            <SelectItem value="400">
                                                400
                                            </SelectItem>
                                            <SelectItem value="500">
                                                500
                                            </SelectItem>
                                            <SelectItem value="600">
                                                600
                                            </SelectItem>
                                            <SelectItem value="700">
                                                700
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

export default FormStep2
