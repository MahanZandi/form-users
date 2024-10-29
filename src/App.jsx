import { BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';
import React from 'react';
import Regester from './components/Regester';
import Login from './components/Login';
import Users from './components/Users';
import UserData from './components/UserData';
import './style/font.css'
import './style/style.css';
import './style/animation.css';

function App() {
    return ( 
        <div className='bg-animation min-h-screen'>
            <BrowserRouter>
                <Routes>
                    <Route path='Regester' element={<Navigate replace to="/"/>}/>
                    <Route path='/' element={<Regester/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Users' element={<Users/>} />
                    <Route path='/Users/Data' element={<UserData/>}/>
                </Routes>
            </BrowserRouter>
        </div>
     );
}

export default App;