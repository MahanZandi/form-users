import  { React } from 'react';
import { Link } from 'react-router-dom';
import personImg from '../style/images/personman.png'

function UserData() {
    return ( 
        <div>
            <div className=' text-sm sm:text-base md:text-md '>
                <div className="flex justify-center">
                    <div className="flex mx-8 mt-10">
                        <div className=" p-3 grid  w-64 md:w-[20rem] lg:w-[25rem]   bg-white rounded-2xl">
                            
                            <div className='grid-cols-4 grid h-[19rem] text-gray-800'>
                                <div className='col-span-3'>
                                    <ul className='pl-4 pt-4 text-base sm:text-xl'>
                                        <li className='pb-4 flex'>User id : 
                                            <p className='text-sm sm:text-lg text-gray-500 pl-3'>
                                                 1
                                            </p>
                                        </li>
                                        <li className='pb-4'>User Name :
                                            <p className='text-sm sm:text-lg text-gray-500'>
                                                OstsdHemoso
                                            </p>
                                        </li>
                                        <li className='pb-4'>Email Adress :
                                            <p className='text-sm sm:text-lg text-gray-500'>
                                                mahan@gamau.com
                                            </p>
                                        </li>
                                        <li>Phone Number :
                                            <p className='text-sm sm:text-lg text-gray-500'>
                                                0923873387
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <img className='w-20 shadow-xl rounded-full col-span-1 mr-4 mt-4' src={personImg} alt="person" />
                            </div>

                            <div className=' h-10'>
                                <Link 
                                    className='bg-blue-600 transition-all text-white text-lg sm:text-xl rounded-xl p-2  flex justify-center items-center'
                                    to="/Users">
                                        back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default UserData;