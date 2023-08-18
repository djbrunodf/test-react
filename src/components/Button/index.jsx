import './styles.css'


// eslint-disable-next-line react/prop-types
export const Button = ({ text, botao, disabled }) => {
    return (
        <button  
        className='button' 
        onClick={ botao }
        disabled={ disabled }
        >
            { text }
        </button>
    )
}