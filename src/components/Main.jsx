import PropTypes from 'prop-types'
import BoxContent from './BoxContent'


export default function Main({ contentNumber, message, className }) {

    return (
        <div className="main">

            {contentNumber === 0 && <h1>{message}</h1>}
            {contentNumber === 1 && <h1>{message}</h1>}
            {contentNumber === 2 && <h1>{message}</h1>}
            <BoxContent contentNumber={contentNumber} className={className} />


        </div>
    )
}

Main.propTypes = {
    contentNumber: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}