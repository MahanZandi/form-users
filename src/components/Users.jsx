import {React , useEffect, useState} from 'react';
import UsersOption from './UsersOption';
import myFetch from '../utils/fetch';
import User from './User';

function Users() {

    const styles = {
        idStyle : 'w-6 sm:w-12 md:w-16 flex' ,
        userNameStyle : 'w-20 sm:w-40 md:w-52 lg:w-64 flex justify-center' ,
        actionStyle : 'w-10 sm:w-20 md:w-40 lg:w-52 pl-20 sm:pl-32 flex justify-end' ,
        listItemContainer : 'gap-5 md:gap-7 lg:gap-10 bg-blue-600 text-gray-100 rounded-t-xl flex items-center justify-center p-4 border-b shadow-sm' ,
        userList : 'flex flex-col bg-white rounded-xl min-h-[37rem]' ,
        ulContainer : 'px-2 py-5  flex justify-center w-64 md:w-[20rem] lg:w-[25rem] rounded-2xl' ,
        textStyle : 'text-sm sm:text-base md:text-md text-gray-800' ,
    }

    const [users, setUsers] = useState([]);

    async function requestData(){
      try {
        const response = await myFetch('https://reqres.in/api/users');
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching users:', error); 
      }}; 

    useEffect( () =>{
        requestData();
      }, []);

      // const handleDelete = (id) => {
      //   setUsers(users.filter(user => user.id !== id)); //* ایدی کاربری که روی دکمه دلیت کلیک کردیم را پیدا میکند و ان را از ارایه کاربر ها حذف میکند و ارایه جدیدی بدون ان کاربر ایجاد میکند
      // };

      async function deleteUser(userId) {
        try {
            const response = await fetch(`https://reqres.in/api/users/${userId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                console.log(`User with ID ${userId} has been deleted.`);

            } else {
                console.error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
    
      // useEffect(()=>{
      //   console.log(users)
      // });

    return ( 
        <div className={`${styles.textStyle}`}>
            <UsersOption/>
            <div className="flex justify-center">
                <div className="flex mx-8 ">
                    <div className={`${styles.ulContainer}`}>
                        <ul className={`${styles.userList}`}>
                            <ul className={`${styles.listItemContainer}`}>
                                <li className={`${styles.idStyle}`}>ID</li>
                                <li className={`${styles.userNameStyle}`}>Username</li>
                                <li className={`${styles.actionStyle}`}>Action</li>
                            </ul>
                            <div>
                                  {users.map((user) => (
                                  <User
                                    users={users}
                                    key={user.id}
                                    userName={user.first_name}
                                    {...user} 
                                    deleteUser={deleteUser}
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