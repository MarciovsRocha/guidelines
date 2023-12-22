import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Erro from './pages/Erro';
import CardPage from './pages/CardPage';

function RoutesApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/CardPage/:pageId' element={ <CardPage />} />
                <Route path='*' element={ <Erro /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
