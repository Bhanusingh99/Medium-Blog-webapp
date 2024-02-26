import Link from 'next/link';

const LogIn = () => {
  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/">
          <p className="flex items-center mb-6 text-2xl font-semibold text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
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
                  placeholder="••••••••"
                  className="bg-transparent border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <Link href="#" className="text-sm font-medium text-primary-600 hover:underline text-purple-500">Forgot password?</Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
