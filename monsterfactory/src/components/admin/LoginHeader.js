import { useNavigate } from 'react-router-dom';

function LoginHeader() {

    const navigate = useNavigate();

    return (
        <div className='loginheader'>
            <img src="monfac-logo-short.png" width='10%' height='10%' className='loginheaderimg'/>
        </div>
    );
}

export default LoginHeader;