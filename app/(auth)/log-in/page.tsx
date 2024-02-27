"use client"
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LogIn = () => {
  const router = useRouter();
  const[error,setError] = useState("");
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const logIn = async (e:any) => {
    e.preventDefault()

    try {
      const userData = {
        email: user.email,
        password: user.password
      };

      const response = await axios.post("/api/user/log-in", userData);
      console.log(response.data)
      console.log(response.data.message)
      setError(response.data.message)
      if(response.data.success){
        localStorage.setItem("token",response.data.token)
        return router.push('/sign-up')
      }
      
    } catch (error:any) {
      console.log(error)
    }
  }

  return (
    <section className="bg-gray-900 py-6">
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0 mt-16">
        <Link href="/">
          <p className="flex items-center mb-6 text-2xl font-semibold text-white">
            <Image className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" height={20} width={20} />
            Blog
          </p>
        </Link>
        <div className="w-full bg-gray-800 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
            <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          className="bg-transparent border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="bg-transparent border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          required
        />
      </div>
              {error && <p className='text-red-600 my-[-2rem] underline'>Error: {error}</p>}
              <div className="flex items-center justify-between">
                <Link href="#" className="text-sm font-medium text-primary-600 hover:underline text-purple-500">Forgot password?</Link>
              </div>
              <button
                onClick={(e) => (logIn(e))}
                className="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-white">
                Don’t have an account yet? <Link href="sign-up" className="font-medium text-primary-600 hover:underline text-purple-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
