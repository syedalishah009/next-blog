import { auth, signIn } from '@/libs/auth'
import React from 'react'

const Login = async () => {

  const session = await auth()

  console.log(session)

  const handleLoginWithGithub = async ()=>{
    'use server'
    await signIn("github")
  }
  return (
   <div>
    <h1> Login with Github</h1>
    <form action={handleLoginWithGithub}>
      <button>Login with Github</button>
    </form>
   </div>
    
  )
}

export default Login