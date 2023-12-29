import './index.css';
import Card from '../../components/Card';

import documentos from '../../public_docs/public_docs.js';

function Home(){
    return (
        <div className="homepage">
            {documentos.map((pagina) => {
                return (<Card page={pagina} key={pagina.id}/>);
            })}
        </div>
    );
}

export default Home;
