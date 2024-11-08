import  { React } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function UserData() {
    const styles = {
        textStyle : 'text-sm sm:text-base md:text-md' , 
        boxStyle : 'p-3 grid  w-64 md:w-[20rem] lg:w-[25rem] bg-white rounded-2xl' , 
        backBtn : 'bg-blue-600 hover:bg-blue-700 transition-all text-white text-lg sm:text-xl rounded-xl p-2  flex justify-center items-center' ,
        imgStyle : 'w-20 shadow-xl rounded-full col-span-1 mr-4 mt-4' ,
        lightTextStyle : 'text-sm sm:text-lg text-gray-500 pt-0.5' , 
        listStyle : 'pl-4 pt-4 text-base sm:text-xl' , 
        insideBox : 'grid-cols-4 grid h-[19rem] text-gray-800'
    };

    const location = useLocation(); 

    const user = location.state?.user;

    const personImg = user.avatar;

    return ( 
        <div>
            <div className={`${styles.textStyle}`}>
                <div className="flex justify-center">
                    <div className="flex mx-8 mt-10">
                        <div className={`${styles.boxStyle}`}>
                            
                            <div className={`${styles.insideBox}`}>
                                <div className='col-span-3'>
                                    <ul className={`${styles.listStyle}`}>
                                        <li className='pb-4 flex'>User id : 
                                            <p className={`${styles.lightTextStyle} pl-3`}>
                                                 {user.id}
                                            </p>
                                        </li>
                                        <li className='pb-4'>first Name :
                                            <p className={`${styles.lightTextStyle}`}>
                                                 {user.first_name}
                                            </p>
                                        </li>
                                        <li className='pb-4'>last name :
                                            <p className={`${styles.lightTextStyle} `}>
                                                {user.last_name}
                                            </p>
                                        </li>
                                        <li className=''>Email Adress :
                                            <p className={`${styles.lightTextStyle}`}>
                                                 {user.email}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <img className={`${styles.imgStyle}`} src={personImg} alt="person" />
                            </div>

                            <div className=' h-10'>
                                <Link 
                                    className={`${styles.backBtn}`}
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