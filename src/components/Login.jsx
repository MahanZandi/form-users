import React from 'react';
function Login() {
    return ( 
        <div className='text-2xl'>
            <div className=' flex justify-center  '>
                <form className='flex flex-col  bg-black/30  px-8   mt-32 rounded-xl'>

                    <div className='flex flex-col w-[25rem] px-2 py-5 text-slate-100'>
                        <h1 className='flex justify-center text-slate-100 text-3xl '>
                            Login Here
                        </h1>
                        <div className='flex flex-col py-5  text-xl'>
                            <label className=' py-1.5' htmlFor="Email">Email </label>
                            <input type='email' name='Email' className=' bg-slate-800/55 p-2 text-base rounded-sm outline-none myInput' placeholder='Enter your Email'/>
                        </div>

                        <div className='flex flex-col text-xl'>
                            <label className=' py-1.5' htmlFor="pass">Password </label>
                            <input type="password" name='pass' className=' bg-slate-800/55 p-2 text-base rounded-sm outline-none myInput' placeholder='Enter your passworld' />
                        </div>
                        <div className='flex flex-col pt-10 pb-7'>
                            <button className='bg-slate-100 standard-button transition-all text-black rounded-md p-2 '>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Login;
