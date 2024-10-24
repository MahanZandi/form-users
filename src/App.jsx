import { BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';
import React from 'react';
import Regester from './components/Regester';
import Login from './components/Login';
import Users from './components/Users';
import './style/font.css'
import './style/style.css';
import './style/animation.css';

function App() {
    return ( 
        <div className='bg-animation h-screen'>
            <BrowserRouter>
                <Routes>
                    <Route path='Regester' element={<Navigate replace to="/"/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/' element={<Regester/>}/>
                    <Route path='/Users' element={<Users/>} />
                </Routes>
            </BrowserRouter>
        </div>
     );
}

export default App;