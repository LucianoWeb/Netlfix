import React from 'react'
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import '../styles/Error404.css';

const Error404 = () => {
    return (
        <>
            <div className='error-header'>
                <NavLink to="/"><h3>NETLFIX</h3></NavLink>
            </div>
            <div className='er-bg'>
                <div className="er-text">
                    <h3><FormattedMessage id='error.lost' /></h3>
                    <p><FormattedMessage id='error.find' /></p>
                    <NavLink className="er-btn" to="/" ><FormattedMessage id='error.btn' /></NavLink>
                    <p className='er-code'><FormattedMessage id='error.code' /> <b>NSES-404</b></p>
                </div>
            </div>
        </>
    );
}

export default Error404;