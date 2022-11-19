import { useNavigate } from 'react-router-dom';

function LoginHeader() {

    const navigate = useNavigate();

    const onClickLogoHandler = () => {
        navigate("/", { replace: true })
    }

    return (
        <div className='loginheader'>
            <img src="monfac-logo-short.png" onClick={ onClickLogoHandler } width='10%' height='10%' className='loginheaderimg'/>
        </div>
    );
}

export default LoginHeader;