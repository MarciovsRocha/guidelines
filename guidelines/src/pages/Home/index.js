import './index.css';
import Card from '../../components/Card';

function Home(){
    let retorno = fs.readdir('../../public_docs',);
    console.log();
    return (
        <h1>HomePage Works!</h1>
    );
}

export default Home();
