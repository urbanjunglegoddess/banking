import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input";

const CustomInput = ({ form, name, label, type, placeholder, className }) => {
  const { control } = form

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                {...field}
                placeholder={placeholder}
                className={className}
                type={type}
              />
            </FormControl>
            {fieldState.error && (
              <FormMessage className="form-message mt-2">
                {fieldState.error.message}
              </FormMessage>
            )}
          </div>
        </FormItem>
      )}
    />
  )
}

export default CustomInput