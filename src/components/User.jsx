import { React , useState} from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

function User({ id, userName , deleteUser }) {

    const styles = {
        ulStyle: 'gap-5 md:gap-7 lg:gap-10 bg-white flex items-center justify-center p-4 border-b  shadow-sm',
        idStyle: 'w-6 sm:w-12 md:w-16 flex',
        userNameStyle: 'w-20 sm:w-40 md:w-52 lg:w-64 flex justify-center',
        actionContainer: 'w-10 sm:w-20 md:w-40 lg:w-52 pl-20 sm:pl-32 sm:gap-1 flex justify-end',
        userDataBtn: 'bg-green-400 hover:bg-green-500 transition-all duration-75 rounded-l-full sm:rounded-full shadow-md shadow-gray-400 sm:text-xl sm:p-2 text-lg p-1',
        deleteBtn: 'bg-red-400 hover:bg-red-500 transition-all duration-75 rounded-r-full sm:rounded-full shadow-md shadow-gray-400 sm:text-xl sm:p-2 text-lg p-1',
    };

    const [showModal, setShowModal] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);

    const handleShowModal = (userId) => {
        setUserIdToDelete(userId);
        setShowModal(true);
    };

    const handleCloseModal = () => { 
        setShowModal(false); 
    };

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/users/${id}`); // اطلاعات کاربر را به کامپوننت UserData ارسال کنید
    };


    return (
        <div>
            <ul className={`${styles.ulStyle}`}>
                <li className={`${styles.idStyle}`}>{id}</li>
                <li className={`${styles.userNameStyle}`}>{userName}</li>
                <li className={`${styles.actionContainer}`}>
                    <button
                        className={`${styles.userDataBtn}`}
                        onClick={handleShowDetails} 
                    >
                        <BiSolidUserDetail />
                    </button>

                    <button
                        className={`${styles.deleteBtn}`}
                        onClick={handleShowModal}
                    >
                        <RiDeleteBin6Line />
                    </button>
                </li>
            </ul>            
            <Modal 
                id={id} 
                show={showModal} 
                onClose={handleCloseModal} 
                deleteUser={deleteUser}
                />
        </div>
    );
}

export default User;
