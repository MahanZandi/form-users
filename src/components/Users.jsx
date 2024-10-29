import {React , useState} from 'react';
import User from './User';

function Users() {

    const [users, setUsers] = useState([
        { id: 1, userName: 'Alice', email: 'alice@example.com' },
        { id: 2, userName: 'Bob', email: 'bob@example.com' },
        { id: 3, userName: 'mahan', email: 'alice@example.com' },
        { id: 4, userName: 'amir', email: 'bob@example.com' },
        { id: 5, userName: 'parham', email: 'alice@example.com' },
        // ... other users
      ]);
    
      const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
      };

      const handleShowDetails = (id) => {
        
      }

    return ( 
        <div className=' text-sm sm:text-base md:text-md '>
            <div className="flex justify-center">
                <div className="flex mx-8 mt-10">
                    <div className=" px-2 py-5  flex justify-center w-64 md:w-[20rem] lg:w-[25rem]  rounded-2xl">
                        <ul className='flex flex-col p-1 bg-white rounded-xl  min-h-[40rem] '>
                            <ul className='gap-5 md:gap-7 lg:gap-10 bg-white flex items-center justify-center p-4 border-b shadow-sm'>
                                <li className='w-6 sm:w-12 md:w-16 flex '>id</li>
                                <li className='w-20 sm:w-40 md:w-52 lg:w-64 flex justify-center'>Username</li>
                                <li className='w-10 sm:w-20 md:w-40 lg:w-52 pl-20 sm:pl-32 flex justify-end'>Action</li>
                            </ul>
                            <div >
                            {users.map(user => (
                                <User 
                                key={user.id} 
                                {...user} 
                                handleDelete={handleDelete} 
                                handleShowDetails={handleShowDetails}
                                />
                            ))}
                            </div>  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Users;