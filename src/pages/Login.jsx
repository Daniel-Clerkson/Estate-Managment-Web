import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { FaLock, FaMessage } from 'react-icons/fa6'

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

    const loginData = async () => {
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
    <div className="flex justify-center items-center text-center bg-green-100 h-screen">
      <div className="flex flex-col shadow-lg p-5 bg-white rounded-md sm:p-10 pt-14 pb-14 ">
        <div className="header">
          <FaLock className="text-center relative left-24 mb-2 size-10 p-2 text-white bg-green-900 rounded-full" />
          <h2 className="text-2xl mb-1 font-semibold">Welcome Back</h2>
          <p className="mb-5 text-xs text-gray-500">Sign in to your account</p>
        </div>
        <div className="form flex flex-col items-center justify-center">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="outline-none p-1 text-md border mb-5 rounded-md w-64 bg-white"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder={ <FaLock /> + "Password"}
            className="outline-none p-1 w-64 border mb-5 rounded-md bg-white"
          />
          <div className="info flex text-xs justify-between width items-center p-3">
            <div className="text-center">
              <input type="checkbox" name="" className="g-green-700" />{" "}
              <span className="text-gray-400 text-center">Remember Me</span>
            </div>
            <div>
              <p className="text-green-700 hover:underline cursor-pointer">
                Forgot Password ?
              </p>
            </div>
          </div>
          <button
            disabled={loading}
            onClick={() => verify(loginData)}
            className="bg-green-800 hover:bg-green-600 p-2 w-28 rounded-md text-gray-200 width"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <p className="text-xs mt-5 text-gray-400">
            Don't Have an Account{" "}
            <span className="hover:underline cursor-pointer">Sign Up</span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login