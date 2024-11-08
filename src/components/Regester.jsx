import {React } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import myFetch from '../utils/fetch';
import { useNavigate } from 'react-router-dom';

function Regester() {

    const styles = {
        myInput : 'bg-slate-800/55 p-2 text-base rounded-sm outline-none myInput' ,
        myButton : 'bg-slate-100 standard-button transition-all text-black text-xl sm:text-2xl rounded-md p-2 flex justify-center' ,
        buttonContainer : 'flex flex-col pt-10 pb-7' ,
        formOutside : 'flex flex-col  bg-black/30  px-8  mt-40 sm:mt-32 rounded-xl' ,
        formInside : 'flex flex-col w-64 md:w-[20rem] lg:w-[25rem] px-2 py-5 text-slate-100' ,
        titleText : 'flex justify-center text-slate-100 text-2xl sm:text-3xl' ,
        inputContainer : 'flex flex-col text-lg sm:text-xl ' ,
        InviteRegisterText : 'hover:text-blue-400 transition-all duration-75 ' ,
        errorText : 'text-red-500 text-xs sm:text-base pl-1 pt-1'
    }; 

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        myFetch('https://reqres.in/api/register', {
            method: 'post',
            body: data
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res.token)
            localStorage.setItem('logged_user' , res.token)
            navigate('/users')
        })
        .catch((e) => {
            console.log({e})
        });
      };


    return ( 
        <div>
            <div className=' flex justify-center '>
                <form onSubmit={handleSubmit(onSubmit)} className={`${styles.formOutside}`}>

                    <div className={`${styles.formInside}`}>
                        <h1 className={`${styles.titleText}`}>
                            Regester Here
                        </h1>
                        {/* <div className={`${styles.inputContainer} pt-7`}>
                            <label className=' py-1.5' htmlFor="userName">Username</label>
                            <input 
                                {...register("username", {
                                    required: "Username is required." ,
                                    minLength: {
                                        value: 5,
                                        message: "Password should be at-least 5 characters."
                                      }
                                })}
                            type='text' 
                            name='username' 
                            className= {`${styles.myInput} `} 
                            placeholder='Enter your Username'
                            />
                        </div>
                        {errors.username && ( <p className={`${styles.errorText}`}>{errors.username.message}</p> )} */}

                        <div className={`${styles.inputContainer} pt-3`}>
                            <label className=' py-1.5' htmlFor="Email">Email </label>
                            <input 
                            type='email' 
                            name='Email' 
                            {...register("email", {
                                required: "Email is required.",
                                pattern: {
                                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                  message: "Email is not valid."
                                },
                              })}
                            className= {`${styles.myInput} `} 
                            placeholder='Enter your Email'
                            />
                        </div>
                            {errors.email && <p className={`${styles.errorText}`}>{errors.email.message}</p>}

                        <div className={`${styles.inputContainer} pt-3`}>
                            <label className=' py-1.5' htmlFor="pass">Password </label>
                            <input 
                            type="password" 
                            name='pass' 
                            {...register("password", {
                                required: "Password is required.",
                                minLength: {
                                  value: 6,
                                  message: "Password should be at-least 6 characters."
                                }
                              })}
                            className= {`${styles.myInput} `} 
                            placeholder='Enter your passworld' 
                            /> 
                            {errors.password && <p className={`${styles.errorText}`}>{errors.password.message}</p>}
                        </div>
                        <div className={`${styles.buttonContainer}`}>

                            <button 
                            className={`${styles.myButton}`}
                            type='submit'
                            >
                                Submit
                            </button>

                            <div className='flex justify-center pt-3'>
                                <Link 
                                className={`${styles.InviteRegisterText}`}
                                to='/login'
                                > 
                                        you dont have acount ? click to regaster
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Regester;