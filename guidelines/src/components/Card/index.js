import './index.css';

function Card(page){
    return (
        <div className="card">
            <h1>{ page.title }</h1>
            <p className="code">{ page.prelude }</p>
        </div>
    )
}

export default Card;
