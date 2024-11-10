import React from 'react';

const Modal = ({ show, onClose, children , deleteUser , id}) => {
    if (!show) {
        return null;
    }

    const styles = {
        deletBtn : 'bg-red-500 hover:bg-red-600 shadow-md p-1.5 sm:w-14 w-12 rounded-lg text-white' ,
        backBtn : ' bg-blue-500 hover:bg-blue-600 shadow-md p-1.5 w-12 sm:w-14  rounded-lg text-white' ,
    };

    return (
        <div>
            <div className='overlayModal' onClick={onClose}></div>
            <div className='modal' >
                Are you sure you want to delete the user?
                
                <div className='pt-5 flex justify-end gap-2 '>

                    <button
                        onClick={() => deleteUser(id)}
                        className={styles.deletBtn}>
                            Yes
                    </button>

                    <button 
                        onClick={onClose} 
                        className={styles.backBtn}>
                            No
                    </button>

                </div>
                
                    {children}
            </div>
        </div>
    );
};

export default Modal;
