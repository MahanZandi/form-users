import { React } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';

function User({id , userName , email , handleDelete , handleShowDetails }) {
    return ( 
        <ul className='gap-5 md:gap-7 lg:gap-10 bg-white flex items-center justify-center p-4 border-b shadow-sm ' >
            <li className='w-6 sm:w-12 md:w-16 flex '>{id}</li>
            <li className='w-20 sm:w-40 md:w-52 lg:w-64 flex  justify-center'>{userName}</li>
            <li className='w-10 sm:w-20 md:w-40 lg:w-52 pl-20 sm:pl-32 sm:gap-1 flex justify-end '>
                <Link 
                 className='bg-green-400 hover:bg-green-500 transition-all duration-75 rounded-l-full sm:rounded-full shadow-md shadow-gray-400 sm:text-xl sm:p-2 text-lg p-1'
                 to='/Users/Data'
                 onClick={handleShowDetails}
                 ><BiSolidUserDetail /></Link>
                <button 
                 className=' bg-red-400 hover:bg-red-500 transition-all duration-75 rounded-r-full sm:rounded-full shadow-md shadow-gray-400 sm:text-xl sm:p-2 text-lg p-1'
                 onClick={() => handleDelete(id)}
                 ><RiDeleteBin6Line/></button>
            </li>
        </ul>
     );
}

export default User;