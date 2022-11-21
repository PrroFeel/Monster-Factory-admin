import { useNavigate } from 'react-router-dom';
import header from '../../commonCss/header.css';

function Header() {

    const navigate = useNavigate();

    const onClickLogoHandler = () => {
        navigate("/main", { replace: true })
    }

    return (
        <div className='header'>
            <img src="monfac-logo.png" onClick={ onClickLogoHandler } width='30%' height='30%'/>
        </div>
    );
}

export default Header;