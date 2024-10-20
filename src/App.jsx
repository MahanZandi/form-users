import { BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';
import './style/font.css'
import './style/style.css';
import './style/animation.css';
import Login from './components/Login';
import React from 'react';
function App() {
    return ( 
        <div className='bg-animation h-screen'>
            <BrowserRouter>
                <Routes>
                    <Route path='/Login' element={<Navigate replace to="/"/>}/>
                    <Route path='/' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
     );
}

export default App;