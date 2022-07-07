import './Button.css';

function Button ({ children, manejarClick }) {
    return (
        <button onClick = { () => manejarClick()}>
            { children }
        </button>
    )
};

export default Button; 