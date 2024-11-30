
import PropTypes from 'prop-types';
import Navbar from '../../Header';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;