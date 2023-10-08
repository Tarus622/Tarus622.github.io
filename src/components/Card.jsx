import PropTypes from 'prop-types'

export default function Card({ title, image, info, setInfo }) {
    console.log(info)
    return (
        <div className='card' onMouseEnter={() => setInfo(info)}>
            <img src={image} />
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    setInfo: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired
}