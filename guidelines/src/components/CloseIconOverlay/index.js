import './index.css';
import { Link } from 'react-router-dom';

function CloseIconOverlay() {
    return(
        <div className="close-icon">
            <Link to="/" className="close-icon">&#10006;</Link>
        </div>
    );
}


export default CloseIconOverlay;
