import { BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';
import React from 'react';
import Regester from './components/Regester';
import Login from './components/Login';
import Users from './components/Users';
import UserData from './components/UserData';
import CreateUser from './components/CreateUser';
import PrivateRoute from './components/PrivateRoute';
import './style/font.css'
import './style/style.css';
import './style/animation.css';

function App() {

    return ( 

        <div className='bg-animation min-h-screen'>
            <BrowserRouter>
                <Routes>
                    <Route path='users' element={<Navigate replace to="/"/>}/>
                    <Route path='/users/:id' element={<PrivateRoute> <UserData/> </PrivateRoute>}/>
                    <Route path='/' element={ <PrivateRoute> <Users/> </PrivateRoute>} />
                    <Route path='/create-user'element={<PrivateRoute> <CreateUser/> </PrivateRoute>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/regester' element={<Regester/>}/>
                </Routes>
            </BrowserRouter>
        </div>
     );
}

export default App;