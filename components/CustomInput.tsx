import React from 'react'
import { z } from "zod";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input";
  import { Control, FieldPath } from "react-hook-form"
  import { authFormSchema } from "@/lib/utils"

  const formSchema = authFormSchema(type);


interface CustomeInput{
    control: Control <z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    type: string;
    placeholder: string;
    className: string;  
}



const CustomInput = ({ control, name, label, type, placeholder, className }: CustomeInput ) => {

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