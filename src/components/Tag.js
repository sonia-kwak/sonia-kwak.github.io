import React from 'react'

const Tag = (props) => {
    let classes = 'br2 ba b--silver gray ';

    if (props.size && props.size === 'big') {
        classes += 'f5 mr2 mt2 pv1 ph2';
    } else {
        classes += 'f7 mr2 mt2 pa1';
    }

    return (
        <span className={classes}>
        {/* // <span className="br2 ba b--light-gray dark-gray f7 mr2 mt2 pa1"> */}
            {props.children}
        </span>
    );
}

export default Tag
