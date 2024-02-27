"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUp = () => {
  const router = useRouter();
  const[error,setError] = useState("");
  const[username,setUsername] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const createAccount = async (e:any) => {
    e.preventDefault()

    try {
      const userData = {
        email,
        username,
        password
      };

      const response = await axios.post("/api/user/sign-up", userData);
      console.log(response.data)
      console.log(response.data.message)
      setError(response.data.message)
      if(response.data.success){
        localStorage.setItem("token",response.data.token)
        return router.push('/log-in')
      }
      
    } catch (error:any) {
      console.log(error)
    }
  }

  
  return (
    <section className="bg-gray-900 py-6 w-full">
      <div className="flex flex-col items-center px-6 py-2 mx-auto md:h-screen lg:py-0 mt-16">
        <Link href="#">
          <p className="flex items-center mb-6 text-2xl font-semibold text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Blog
          </p>
        </Link>
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-white ">username</label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                  className="bg-transparent border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Bhanu99"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  placeholder="Bhanu@gmail.com"
                  className="bg-transparent border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">password</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  className="bg-transparent border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>
              {error && <p className='text-red-600 my-[-2rem] underline'>Error: {error}</p>}
              <button
                onClick={(e) => (createAccount(e))}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-600"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link href="log-in" className="font-medium text-primary-600 hover:underline text-purple-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
