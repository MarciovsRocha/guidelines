import './index.css';
import Card from '../../components/Card';
import CardPage from '../CardPage/index.js';
import { Link } from 'react-router-dom';

import documentos from '../../public_docs/public_docs.js';

function Home(){
    return (
        <div className="container">
            {documentos.map((pagina) => {
                return (<Card page={pagina} key={pagina.id}/>);
            })}
        </div>
    );
}

export default Home;
