import React from 'react'



const Login = () => {
  return (
  
  <>
         <div className='w-full'>
            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img
                        src="https://source.unsplash.com/random"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
                >
                    <div className="w-full h-100">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                            Log in to your account
                        </h1>

                        <div>
                            <form className="mt-6">
                                <div>
                                    <label className="block text-gray-700">Username</label>
                                    <input

                                        placeholder="Enter Username"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    />

                                </div>
                                <div className="mt-4">
                                    <label className="block text-gray-700">Password</label>
                                    <input

                                        type="password"
                                        placeholder="Enter Password"

                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                                    />

                                </div>
                                <div className="text-right mt-2">
                                    <a
                                        href="#"
                                        className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                                >
                                    Daftar
                                </button>
                            </form>
                        </div>

                        <hr className="my-6 border-gray-300 w-full" />
                    </div>
                </div>
            </section>
        </div>
 </>
  
  
  )
}

export default Login