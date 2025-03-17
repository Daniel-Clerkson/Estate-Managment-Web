import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token)
            {
                 navigate('/home')
            }
    }, [])

    const loginData = {
        email,
        password,
        "type": "DEVELOPER"
    }

    const verify = async (detail) => {
        try {
            setLoading(true)
            const details = await fetch("https://dev-api.giddaa.com/account/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(detail)
            })
            if (details.status === 200) {
                toast.success("Successsfully Logged In");
                setLoading(false)
                
                const data = await details.json()
                const token = data.value.value.token;
                // save data to local storage
                localStorage.setItem('token', token)
                navigate('/home');
            }
        }catch (error) {
            
            console.log(error)
            toast.error("Incorrect Username or Password");
            setLoading(false)
        }
    }



  return (
    <div className='flex justify-center items-center text-center bg-gray-200 h-screen'>
        <div className='flex flex-col shadow-lg p-10 bg-green-100 rounded-md sm:p-20'>
            <div className="header">
                <h2 className='text-4xl mb-5 text-green-300'>Login</h2>
            </div>
            <div className="form flex flex-col items-center justify-center">
                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='outline-none p-2 border mb-5 rounded-md bg-white' />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password'  className='outline-none p-2 border mb-5 rounded-md bg-white' />
                <button disabled={loading} onClick={()=> verify(loginData)} className='bg-green-400 hover:bg-green-600 p-2 w-28 rounded-sm text-gray-200'>{loading ? 'Loading...' :'Login'}</button>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Login