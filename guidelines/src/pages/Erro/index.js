import { Link } from 'react-router-dom';
import './index.css';

function Erro(){
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to='/'>Voltar à página Inicial.</Link>
        </div>
    );
}

export default Erro;
