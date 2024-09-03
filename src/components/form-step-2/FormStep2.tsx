import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Switch } from '../ui/switch'

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
                                | 'scan_copy'
                        }
                        render={({ field }) => (
                            <FormItem
                                className={`${
                                    field.name === 'scan_copy' &&
                                    'flex items-center gap-2'
                                }`}
                            >
                                <FormLabel
                                    className={`cursor-pointer font-normal`}
                                    htmlFor={fieldInput.name}
                                >
                                    {fieldInput.label}
                                </FormLabel>

                                <>
                                    <div
                                        key={index}
                                        className="border-primary bg-white"
                                    >
                                        {fieldInput.name === 'scan_copy' ? (
                                            <FormControl>
                                                <Switch
                                                    checked={!!field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                    id={fieldInput.name}
                                                    style={{ marginTop: 0 }}
                                                />
                                            </FormControl>
                                        ) : (
                                            <Input
                                                {...field}
                                                id={fieldInput.name}
                                                name={fieldInput.name}
                                                className="py-6"
                                            />
                                        )}
                                    </div>
                                </>

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
