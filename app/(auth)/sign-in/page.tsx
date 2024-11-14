// Author: [Omegea Hunter]

// Date: 2022-11-10

// Description: SignIn page
import React from 'react'
import AuthForm from '@/components/AuthForm'
const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in"/>
    </section>
  )
}

export default SignIn