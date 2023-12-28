import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Erro from './pages/Erro';
import CardPage from './pages/CardPage';
import Header from './components/Header';
import Footer from './components/Footer';

function RoutesApp(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                {
                    ['/', '/guidelines'].map((path) => <Route path={path} element={ <Home /> }/>)
                }                
                <Route path='/CardPage/:pageId' element={ <CardPage />} />
                <Route path='*' element={ <Erro /> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;
