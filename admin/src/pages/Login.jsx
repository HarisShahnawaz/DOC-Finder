import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'

const Login = () => {
    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAToken, backendUrl } = useContext(AdminContext)

    const OnSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/admin/login', { email, password })
                if (data.success) {
                    console.log(data.token)
                }
            }
        }
        catch (error) {

        }
    }


    return (
        <form onSubmit={OnSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-85 sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg '>
                <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span> Login</p>
                <div className='w-full'>
                    <p className='w-full'>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" placeholder='Enter your email' required />
                </div>
                <div className='w-full'>
                    <p >Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" placeholder='Enter your password' required />
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base hover:bg-blue-600'>Login</button>
                {
                    state === 'Admin'
                        ? <p>Doctor Login <span className='text-primary underline cursor-pointer' onClick={() => setState('Doctor')}>click here</span></p>
                        : <p>Admin Login <span className='text-primary underline cursor-pointer' onClick={() => setState('Admin')}>click here</span></p>
                }
            </div>
        </form>

    )
}

export default Login