import PropTypes from 'prop-types'

export default function Main({ title }) {

    return <div className="main">
        <h1>{title}</h1>
    </div>
}

Main.propTypes = {
    title: PropTypes.string
}