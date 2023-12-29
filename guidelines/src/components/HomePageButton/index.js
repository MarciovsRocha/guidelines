import './index.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';

function HomePageButton() {
    return(
        <Link to='/' className='margin-10'>
            <Button component="label" variant='contained' startIcon={<ArrowBack/>}>
            Página Principal
            </Button>
        </Link>
    );
}


export default HomePageButton;
