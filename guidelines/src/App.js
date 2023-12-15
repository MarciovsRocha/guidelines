//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import CardPage from './components/CardPage';

const documentos = [
    './public_docs/arquitetura_tres_camadas.json'
  , './public_docs/boas_praticas_desenvolvimento.json'
  , './public_docs/principios_orientacao_objetos.json'
  , './public_docs/reviewer_guideline.json'
]

const pages = documentos.map((documento) => {
  return require('./public_docs/arquitetura_tres_camadas.json');
});

function App() {
  return (
    <div className="container">
      {pages.map((pagina) => {
        console.log(pagina)
        return (<Card page={pagina[0]}/>);
      })}
    </div>
  );
}

export default App;
