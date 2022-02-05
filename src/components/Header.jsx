import PropTypes from 'prop-types';

// Inline styling: use double curly braces
// function Header({ text }) {
//     return <header style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', color: "yellowgreen" }}>
//         <div className="container">
//             <h2>{text}</h2>
//         </div>
//     </header>;
// }

function Header({ text, bgColor, textColor }) {

    // Header Styles variables
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    // Main Header Function
    return <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header >;
}

Header.defaultProps = {
    text: ' = = = Default Header = = = ',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

// Type checking for Props... error handling
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    // text: PropTypes.string.isRequired
}

export default Header;
