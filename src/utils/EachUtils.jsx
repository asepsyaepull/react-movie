import PropTypes from 'prop-types'


const EachUtils = ({ of, render }) => {
    return <>
        {of.map((item, index) => render(item, index))}
    </>
}
EachUtils.propTypes = {
    of: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired,
}

export default EachUtils