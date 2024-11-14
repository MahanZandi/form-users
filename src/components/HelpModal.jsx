import React from 'react';

const HelpModal = ({ show, onClose, children, dataModal ,emailPass}) => {
    if (!show) {
        return null;
    }

    const styles = {
        deletBtn : 'bg-red-500 hover:bg-red-600 shadow-md p-1.5 sm:w-14 w-12 rounded-lg text-white' ,
        backBtn : ' bg-blue-500 hover:bg-blue-600 shadow-md p-1.5 w-12 sm:w-14  rounded-lg text-white' ,
        link : 'text-blue-600 hover:text-blue-800 hover:underline'
    };

    const webLink = 'https://reqres.in/';

    return (
        <div>
            <div className='overlayModal' onClick={onClose}></div>
                <div className='modal' >
                    
                    <div className='font-sans'>
                        <div className='text-gray-800 leading-7'>
                            {dataModal}
                        </div>
                        <div className='pt-4 text-blue-600'>
                            {emailPass}
                        </div>
                        <div className='pt-1'>  
                            <a href={webLink}
                               className={`${styles.link}`} 
                            >
                               Click here to more information
                            </a>
                        </div>
                    </div>
                    
                    <div className='pt-5 flex justify-end gap-2 '>
                        <button 
                            onClick={onClose} 
                            className={styles.backBtn}>
                                Close
                        </button>
                    </div>              
                        {children}
                </div>
        </div>
    );
};

export default HelpModal;
