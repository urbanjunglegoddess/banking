'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {Form} from '@/components/ui/form'
import CustomInput from './CustomInput'
import {authFormSchema} from '@/lib/utils'
import {Loader2} from 'lucide-react';

const AuthForm = ({type}: { type: string }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);

// 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true);
        console.log(values)
        setIsLoading(false);
    }


    return (
        <section className='auth-form'>
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href="/" className="cursor-pointer flex items-center gap-1">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Personal Finance</h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className='text-24 lg:text-26 font-semibold text-gray=900'>
                        {user
                            ? 'Link Account'
                            : type === 'sign-in'
                                ? 'Sign In'
                                : 'Sign Up'
                        }

                        <p className="text-16 font-normal text-gray-600">
                            {user
                                ? 'Link your account to get started'
                                : 'Please enter your details below'
                            }
                        </p>
                    </h1>

                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    {/*PlaidLink*/}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {type === 'sign-up' && (
                                <>
                                <div className="flex gap-4">
                                    <CustomInput control={form.control} name='firstName' label="First Name" type="text"
                                                 placeholder="Enter first name" className=""/>
                                    <CustomInput control={form.control} name="lastName" label="Last Name" type="text"
                                                 placeholder="Enter last name" className="" />

                                </div>
                                <CustomInput control={form.control} name="username" label="Username" type="text"
                                             placeholder="Enter username" className="w-full" />
                                <CustomInput control={form.control} name='address1' label="Address" type="text"
                                             placeholder="Enter your specific address"
                                             className="" />
                                <CustomInput control={form.control} name="city" label="City" type="text"
                                             placeholder="Enter city" className="" />
                                <div className="flex gap-4">
                                    <CustomInput control={form.control} name="state" label="State" type="text"
                                                 placeholder="Enter state" className="" />
                                    <CustomInput control={form.control} name="postalCode" label="Postal Code"
                                                 type="text" placeholder="Enter postal code" className="" />
                                </div>
                                <div className="flex gap-4">
                                    <CustomInput control={form.control} name="dob" label="Date of Birth" type="date"
                                                 placeholder="Enter date of birth" className="" />
                                    <CustomInput control={form.control} name="ssn" label="SSN" type="integer"
                                                 placeholder="Enter SSN" className="" />

                                    <CustomInput control={form.control} name="email" label="Email" type="email"
                                                 placeholder="Enter email" className="w-full" />
                                    <CustomInput control={form.control} name="password" label="Password" type="password"
                                                 placeholder="Enter password" className="w-full" />
                                </>
                                )}}
                                <CustomInput control={form.control} name="username" label="Username" type="text"
                                             placeholder="Enter username" className="w-full"
                                />
                                <CustomInput control={form.control} name="email" label="Email" type="email"
                                             placeholder="Enter email" className="w-full"
                                />
                                <CustomInput control={form.control} name="password" label="Password" type="password"
                                             placeholder="Enter password" className="w-full"
                                />
                                <div className='flex flex-col gap-4'>
                                    <Button
                                        type="submit"
                                        className="form-btn"
                                        disabled={isLoading}
                                    >{isLoading ? (
                                        <>
                                            <Loader2 size={20}
                                                     className="animate-spin"/> &nbsp;
                                            Loading...
                                        </>) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                                    </Button>
                                </div>
                            </form>

              <footer className="flex justfiy-center gap-1">
                                <p className='text-14 font-normal text-gray-600'>
                            {type === 'sign-in' ? 'New to Personal Finance?' : 'Already have an account?'}
                            <Link href={`${type === 'sign-in' ? 'sign-up' : 'sign-in'}`} className='form-link'>
                                {type === 'sign-in' ? ' Sign Up' : ' Sign In'}

                            </Link>
                        </p>
                    </footer>
                </>

                )}
        </section>
    )
}

export default AuthForm 
