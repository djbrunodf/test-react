import P from 'prop-types';
import './styles.css';

export const Button = ({ text, botao, disabled = false }) => {
  return (
    <button className="button" onClick={botao} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  botao: P.func.isRequired,
  disabled: P.bool.isRequired,
};
