import {React , useState} from 'react';
import myFetch from '../utils/fetch';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BsQuestionSquareFill } from "react-icons/bs";
import HelpModal from './HelpModal';


function CreateUser() {
    const styles = {
        myInput : 'bg-slate-800/55 p-2 text-base rounded-sm outline-none myInput' ,
        myButton : 'bg-slate-100 standard-button transition-all text-black text-xl sm:text-2xl rounded-md p-2 flex justify-center' ,
        buttonContainer : 'flex flex-col pt-10 pb-7' ,
        formOutside : 'flex flex-col bg-black/30  px-8 mt-40 sm:mt-32 rounded-xl' ,
        formInside : 'flex flex-col w-64 md:w-[20rem] lg:w-[25rem] px-2 py-5 text-slate-100' ,
        titleText : 'flex justify-center text-slate-100 text-2xl sm:text-3xl' ,
        inputContainer : 'flex flex-col text-lg sm:text-xl' ,
        errorText : 'text-red-500 text-xs sm:text-base pl-1 pt-1' ,
        icone : 'text-gray-300 hover:text-white' ,
    };

    const [showModal, setShowModal] = useState(false);

    const dataModal = {
         data: "Because I'm using API Fake use the email and password below to go to the website. " ,
         emailPass: "name: morpheus job: leader"
        }

    const handelerShowModal = () =>{
        setShowModal(true)
    }

    const handleCloseModal = () => { 
        setShowModal(false); 
    };

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        myFetch('https://reqres.in/api/users', {
            method: 'post',
            body: data
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            navigate('/users')
        })
        .catch((e) => {
            console.log({e})
        })
      };

    return (
        <div>
            <div className=' flex justify-center'>
                <form 
                      onSubmit={handleSubmit(onSubmit)}                    
                      className={`${styles.formOutside}`}
                      >

                    <div className={`${styles.formInside}`}>

                        <h1 className={`${styles.titleText} gap-2`}>
                            Create Here
                            <div className='flex items-center'>
                                <BsQuestionSquareFill 
                                    className={`${styles.icone}`}
                                    onClick={handelerShowModal}
                                    />
                            </div>
                        </h1>

                        <div className={`${styles.inputContainer} py-5`}>
                            <label className=' py-1.5' htmlFor="name">Name :</label>
                            <input
                                className={`${styles.myInput}`}
                                placeholder='Enter your name'
                                type='text' 
                                name='name'
                                {...register("Name", {
                                    required: "Name is required.",
                                    minLength: {
                                      value: 4,
                                      message: "Name should be at-least 4 characters."
                                    }
                                  })}
                            />
                            {errors.Name && <p className={`${styles.errorText}`}>{errors.Name.message}</p>}

                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label className=' py-1.5' htmlFor="job">Job : </label>
                            <input 
                                placeholder='Enter your job'
                                className={`${styles.myInput}`}
                                type="text" 
                                name='job' 
                                {...register("Job", {
                                    required: "Job is required.",
                                    minLength: {
                                      value: 4,
                                      message: "Job should be at-least 4 characters."
                                    }
                                  })}
                            />
                            {errors.Job && <p className={`${styles.errorText}`}>{errors.Job.message}</p>}

                        </div>
                        <div className={`${styles.buttonContainer}`}>
                            
                            <button 
                                className={`${styles.myButton}`}
                                type='submit'
                                >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
                <HelpModal
                    show={showModal}
                    onClose={handleCloseModal}
                    dataModal={dataModal.data}
                    emailPass={dataModal.emailPass} 
                    >

                </HelpModal>
            </div>
        </div>
     );
}

export default CreateUser;