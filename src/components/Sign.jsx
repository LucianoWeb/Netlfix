import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sign.css';
import Swal from 'sweetalert2';
import { FormattedMessage } from 'react-intl';


const Sign = ({ sesion, setSesion }) => {

    const alert = () => {
        Swal.fire({
            icon: 'error',
            text: 'Incorrect email or password',
            
        })
    }
   const alert2 = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your account has been activated',
            showConfirmButton: true,
            
          })
    }
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')

    const onChange = (e) => {
        if (e.target.name === 'email') {
            setUser(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }

    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (user === 'free' && password === 'account') {
            setSesion(true)
            alert2()
        } else {
            alert()
            setUser('');
            setPassword('');
        }
    }
    return (
        <div className="container-sign">
            <NavLink to="/"><h2>Netlfix</h2></NavLink>
            <form className='form-sign' onSubmit={onSubmit}>
                <legend><FormattedMessage id='signt'/></legend>
                <button className="btn-sign-esp my-4" data-bs-toggle="modal" type='button' data-bs-target="#my-modal-1">
                <FormattedMessage id='sign.get'/>
                </button>
                <div className="modal fade" id="my-modal-1" tabIndex="-1" aria-hidden="true" aria-labelledby="label-modal-1">

                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className='modal-tittle'><FormattedMessage id='sign.mod'/> </h3>
                                <button className="btn-close" data-bs-dismiss="modal" aria-label='Close'></button>
                            </div>
                            <div className="modal-body">
                                <h4><FormattedMessage id='sign.mod1'/></h4>
                                <h4><FormattedMessage id='sign.mod2'/></h4>
                            </div>

                            <div className="modal-footer">
                                <button className="btn-close-sign" data-bs-dismiss="modal">OK</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-floating">
                    <input type="text" required onChange={onChange} value={user} name='email' placeholder='' id='email'
                        className="form-control" />
                    <label htmlFor="email" className="form-label"><FormattedMessage id='sign.email'/></label>
                </div>
                <div className="form-floating mt-4">
                    <input type="password" required onChange={onChange} value={password} name='password' placeholder='' id='password'
                        className="form-control" />
                    <label htmlFor="password" className="form-label"><FormattedMessage id='sign.pass'/></label>
                </div>

                <button type='submit' className='btn-sign'><FormattedMessage id='sign.activ'/></button>
                {sesion === true ? <NavLink className='btn-sign-esp' to='/account'><FormattedMessage id='sign.log'/></NavLink> : <p className='text-white text-center py-2'><FormattedMessage id='sign.not'/></p>}
            </form>

        </div>
    );
}

export default Sign;