"use client";

import React from "react";
import { Control, useController } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton"
}

interface CustomProps {
    control: Control<any>;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
    fieldType: FormFieldType;
}

const CustomFormField: React.FC<CustomProps> = ({
    control,
    fieldType,
    name,
    label,
    placeholder,
    iconSrc,
    iconAlt,
    disabled,
    dateFormat,
    showTimeSelect,
    renderSkeleton,
    children,
}) => {
    const { field } = useController({ control, name });

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    {fieldType === FormFieldType.INPUT && (
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                {...field}
                                disabled={disabled}
                            />
                        </FormControl>
                    )}
                    {fieldType === FormFieldType.TEXTAREA && (
                        <FormControl>
                            <textarea
                                placeholder={placeholder}
                                {...field}
                                disabled={disabled}
                                className="form-textarea"
                            />
                        </FormControl>
                    )}
                    {fieldType === FormFieldType.PHONE_INPUT && (
                        <div> {/* Placeholder for PhoneInput component */} </div>
                    )}
                    {fieldType === FormFieldType.CHECKBOX && (
                        <div> {/* Placeholder for Checkbox component */} </div>
                    )}
                    {fieldType === FormFieldType.DATE_PICKER && (
                        <div> {/* Placeholder for DatePicker component */} </div>
                    )}
                    {fieldType === FormFieldType.SELECT && (
                        <div> {/* Placeholder for Select component */} </div>
                    )}
                    {children}
                    <FormDescription>
                        {/* Optional description */}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default CustomFormField;
