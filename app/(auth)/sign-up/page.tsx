// Author: [Omegea Hunter]

// Date: 2022-11-10

// Description: SignUp page
import AuthForm from '@/components/AuthForm'

const SignUp = async () => {

  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp