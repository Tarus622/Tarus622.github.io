import PropTypes from 'prop-types'
import BrazilFlag from '../public/br.svg';
import USFlag from '../public/us.svg';


export default function Header({ setContentNumber, messages, setMessage, setClassName }) {
    const handleLinkClick = (e) => {
        const dataValue = parseInt(e.currentTarget.getAttribute('data-value'));

        switch (dataValue) {
            case 0:
                setClassName('box-social-media')
                break;

            case 1:
                setClassName('box-about-me')
                break

            case 2:
                setClassName('box-knowledges')
                break

            default:
                setClassName('box-social-media')
                break;
        }

        setContentNumber(dataValue);
        setMessage(messages[dataValue]);
    }

    return (
        <header className="header">
            <div className='link' data-value={0} onClick={handleLinkClick}><p>Home</p></div>
            <div className='link' data-value={1} onClick={handleLinkClick}><p>About Me</p></div>
            <div className='link' data-value={2} onClick={handleLinkClick}><p>Knowledges</p></div>
            <div className='flags'>
                <img src={BrazilFlag} alt='brazil'></img>
                <img src={USFlag} alt='united-states'></img>
            </div>
        </header >
    )
}

Header.propTypes = {
    setContentNumber: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    setClassName: PropTypes.func.isRequired
}