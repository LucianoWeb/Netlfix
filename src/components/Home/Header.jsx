import React, { useContext, useState } from 'react';
import { ChevronRight, Globe } from 'react-bootstrap-icons';
import '../../styles/Header.css';
import '../../styles/Get.css'
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext';
import Swal from 'sweetalert2';
import validator from 'validator';



const Header = () => {
    
    const language = useContext(langContext);
   

    return (
   
            <div className='cont-header'>
                <div className="header">
                    <h1>NETLFIX</h1>
                    <div className="lang">
                        <div className='langco'>
                            <Globe className='globo' />
                            <select className='languages'>
                                <option onClick={() => language.setLang('en-US')} >English</option>
                                <option onClick={() => language.setLang('es-ES')} >Español</option>
                            </select>
                        </div>
                        <NavLink to="/sign" className='button-sign text-white'><FormattedMessage id='header.sign'/></NavLink>
                    </div>
                </div>
                <div className="get">
                    <div className='texts-get'>
                        <h2><FormattedMessage id="header.all" /></h2>
                        <h3 className='py-2'><FormattedMessage id='header.watch'/></h3>
                        <h5 className='py-2'><FormattedMessage id='header.ready'/></h5>
                    </div>
                    <Email />

                </div>

            </div>
    
    );
}
const Email = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const alert3 = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'We have sent you a confirmation email to ' + email,
            showConfirmButton: true,
            
          })
    }
    const alert4 = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'warning',
            title: 'Introduce a valid email' ,
            showConfirmButton: true,
            
          })
    }
    const [email,setEmail] = useState('')
  
    const emailSent = () =>{
        if( validator.isEmail(email)){
            alert3()
        }else{
            alert4()
        }
        setEmail('')
    }
    return (
        <form className='form-get' onSubmit={handleSubmit}>
            <div className="form-floating">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  name='movie' id='movie'
                    placeholder='' className="form-control input-get" />
                <label htmlFor="movie" className="form-label"><FormattedMessage id='header.email'/></label>
            </div>
            <button type='submit' onClick={emailSent}  className='button-get'><FormattedMessage id='header.start' /><ChevronRight className='fs-5 fw-bold chev' /></button>
        </form>
    );
}

export { Email, Header };

