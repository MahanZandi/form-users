import { React } from 'react';
import { useNavigate , Link} from 'react-router-dom';

function UsersOption() {

    const styles = {
        exitBtn : 'bg-red-500 hover:bg-red-600 shadow-md p-1.5 sm:w-14 w-12 rounded-lg text-white' ,
        createBtn : 'ml-2 sm:ml-4 bg-blue-500 hover:bg-blue-600 shadow-md p-1.5 w-12 sm:w-16  rounded-lg text-white' , 
        userText : 'flex items-center pr-2 text-gray-800' , 
        container : 'w-64 sm:w-[26rem] md:w-[33rem] lg:w-[40rem] rounded-xl p-2 sm:p-4 bg-white mt-2 text-xs sm:txet-sm md:text-base flex'
    }

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('logged_user');
        navigate('/users');
    };

    return ( 
        <div >
            <div className=' flex justify-center '>
                <div className={`${styles.container}`}>
                    <div className='flex-1'>
                        <button 
                            className={`${styles.exitBtn}`}
                            onClick={logOut}
                            >
                            Exit
                        </button>

                    </div>
                    <div className={`${styles.userText}`}>
                        OSTADHEMOSO
                    </div>
                </div>
            </div>
        </div>
     );
}

export default UsersOption;