import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [state, setState] = useState('Sign up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()


  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3  sm:min-w-85 m-auto items-start p-8  border text-zinc-600 text-sm rounded-lg shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign up' ? 'sign up' : 'log in'} to book appointments</p>
        {
          state === "Sign up" &&
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type="text" onClick={(e) => setName(e.target.name)} value={name} required />
          </div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type="email" onClick={(e) => setEmail(e.target.name)} value={name} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type="password" onClick={(e) => setPassword(e.target.name)} value={name} required />
        </div>

        <button className='bg-primary text-white w-full py-2 rounded-md text-base' type="submit">{state === "Sign up" ? "Create Account" : "Login"}</button>
        {state === "Sign up"
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create an new account? <span onClick={() => setState('Sign up')} className='text-primary underline cursor-pointer'> Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login