import PropTypes from "prop-types";

// Children: anything coming from inside the component tags.... ex

// {/* <Card>
//     <div className="children">Children Text</div>
// </Card> */}

function Card({ children, reverse }) {
    // return (
    //     <div className={`card ${reverse && 'reverse'}`}>
    //         {children}
    //     </div>
    // )
    return (
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000'
        }}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false,
    // reverse: false, UNCOMMENT TO SEE THE CHANGES
}

Card.propTypes = {
    children: PropTypes.node,
    reverse: PropTypes.bool,
}

export default Card;
