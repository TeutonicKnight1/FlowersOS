import classes from './moduleSCSS/button.module.scss';
import PropTypes from 'prop-types';


export default function Button({callback, text, disabled, }) {

    function handleClick() {
        callback();
    }


    return (
        <button
        className={classes.button}
        onClick={handleClick} disabled={disabled}>
            {text}
        </button>
    )
}

Button.propTypes = {
    callback: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}