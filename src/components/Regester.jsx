import {React , useRef } from 'react';
function Regester() {

    const styles = {
        myInput : 'bg-slate-800/55 p-2 text-base rounded-sm outline-none myInput' ,
        myButton : 'bg-slate-100 standard-button transition-all text-black text-xl sm:text-2xl rounded-md p-2 flex justify-center' ,
        buttonContainer : 'flex flex-col pt-10 pb-7' ,
        formOutside : 'flex flex-col  bg-black/30  px-8  mt-20 sm:mt-16 rounded-xl' ,
        formInside : 'flex flex-col w-64 md:w-[20rem] lg:w-[25rem] px-2 py-5 text-slate-100' ,
        titleText : 'flex justify-center text-slate-100 text-2xl sm:text-3xl' ,
        inputContainer : 'flex flex-col text-lg sm:text-xl' ,
    };

    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const passworldRef = useRef(null);
    const phoneRef = useRef(null);


    const handeleSubmitForm = (e) => {
        e.preventDefault();
        const data = 
        {
            "userName" : userNameRef.current?.value ,
            "email": emailRef.current?.value ,
            "password": passworldRef.current?.value ,
            "phone" : phoneRef.current?.value
        }

        console.log(data);
    };


    return ( 
        <div>
            <div className=' flex justify-center '>
                <form onSubmit={handeleSubmitForm} className={`${styles.formOutside}`}>

                    <div className={`${styles.formInside}`}>
                        <h1 className={`${styles.titleText}`}>
                            Regester Here
                        </h1>
                        <div className={`${styles.inputContainer} pt-7`}>
                            <label className=' py-1.5' htmlFor="userName">Username</label>
                            <input 
                            ref={userNameRef} 
                            type='text' 
                            name='userName' 
                            className= {`${styles.myInput} `} 
                            placeholder='Enter your Username'
                            />
                        </div>

                        <div className={`${styles.inputContainer} pt-3`}>
                            <label className=' py-1.5' htmlFor="Email">Email </label>
                            <input 
                            ref={emailRef} 
                            type='email' 
                            name='Email' 
                            className= {`${styles.myInput} `} 
                            placeholder='Enter your Email'
                            />
                        </div>

                        <div className={`${styles.inputContainer} pt-3`}>
                            <label className=' py-1.5' htmlFor="Phone">Phone  </label>
                            <input 
                            ref={phoneRef} 
                            type='number' 
                            name='Phone' 
                            className= {`${styles.myInput} `} 
                            placeholder='Enter your Phone number'
                            />
                        </div>

                        <div className={`${styles.inputContainer} pt-3`}>
                            <label className=' py-1.5' htmlFor="pass">Password </label>
                            <input 
                            ref={passworldRef} 
                            type="password" 
                            name='pass' 
                            className= {`${styles.myInput} `} 
                            placeholder='Enter your passworld' 
                            /> 
                        </div>
                        <div className={`${styles.buttonContainer}`}>
                            <button className={`${styles.myButton}`}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Regester;