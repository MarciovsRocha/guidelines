import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

Card.propTypes={
    page: PropTypes.object
};

function Card(props){
    return (
        <Link to={`/CardPage/${props.page.id}`} className="card">
                <h1>{ props.page.title }</h1>
                {props.page.prelude}
        </Link>
    )
}

export default Card;
