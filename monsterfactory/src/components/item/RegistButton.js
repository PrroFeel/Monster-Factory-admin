import './button.css'

function RegistButton({onClickHandler, buttonText, value, name}){

    return (
        <div className="btnposition">
            <button className='btn' onClick={onClickHandler} value={value} name={name}>{buttonText}</button>
        </div>

    );
}

export default RegistButton;