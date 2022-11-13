import React from 'react';
import { Bell, InfoCircle, Pencil, PeopleFill, Person, PersonSquare, PlayBtn, PlayFill, QuestionCircle, Search, SendCheckFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import '../styles/LogedIn.css';
import logo from '../assets/logo.png';
import MoviesFetch from '../components/Loged/MoviesFetch';
import Footer from './Footer';
import { FormattedMessage } from 'react-intl';

const LogedIn = () => {
    return (
        <>
            <div className='cont-loged'>
                <div className="loged-nav">
                    <NavLink to="/">
                    <h3>Netlfix</h3>
                    </NavLink>
                    <div className='m-nav'>
                        <p><FormattedMessage id='loged.home'/></p>
                        <p><FormattedMessage id='loged.tv'/></p>
                        <p><FormattedMessage id='loged.movies'/></p>
                        <p><FormattedMessage id='loged.new'/></p>
                        <p><FormattedMessage id='loged.list'/></p>
                        <p><FormattedMessage id='loged.browse'/></p>
                    </div>
                    <div className='m-m'>
                        <Search className='icon-loged' />
                        <p><FormattedMessage id='loged.kids'/></p>
                        <Bell className='icon-loged' />
                        <div className="dropdown">
                            <button
                                className="btn dropdown-toggle"
                                type='button'
                                id='dropdown-1'
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <PersonSquare className='icon-loged' />
                            </button>
                            <ul className="dropdown-menu menu-loged" aria-labelledby='dropdown-1'>

                                <li className='my-2'><p className="dropdown-item"><Pencil className='me-3 fs-5' /> <FormattedMessage id='loged.drop1'/></p>
                                </li>
                                <li className='my-2'><p className="dropdown-item"><SendCheckFill className='me-3 fs-5' /> <FormattedMessage id='loged.drop2'/></p>
                                </li>
                                <li className='my-2'><p className="dropdown-item"><Person className='me-3 fs-5' /> <FormattedMessage id='loged.drop3'/></p>
                                </li>
                                <li className='my-2'><p className="dropdown-item"><QuestionCircle className='me-3 fs-5' /> <FormattedMessage id='loged.drop4'/></p>
                                </li>
                                <hr className="dropdown-divider divider-menu" />
                                <li className='my-2'><NavLink to="/sign" className="sign-out"><FormattedMessage id='loged.drop5'/> </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className='logo-loged'>
                        <img src={logo} alt="logo neftlix" />
                        <p>SERIE</p>
                    </div>
                    <div className='movie-loged'>
                        <h3><FormattedMessage id='loged.movie'/></h3>
                        <p><FormattedMessage id='loged.moviep'/></p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                        <div className='button-play'>
                            <button className='btn1 btn'>
                                <PlayFill className='fs-1 me-2' />
                                <FormattedMessage id='loged.play'/>
                            </button>
                            <button className='btn2 btn'>
                                <InfoCircle className='fs-4 me-2' />
                                <FormattedMessage id='loged.info'/>
                            </button>
                        </div>
                        <div className="age">
                            <p>16+</p>
                        </div>
                    </div>
                <div className="recomendation">
                    <div className='like'>
                        <PlayBtn className='logo-reco' />
                        <p><FormattedMessage id='loged.like'/></p>
                    </div>
                    <div className='cast'>
                        <PeopleFill className='logo-reco' />
                        <ul>
                            <li>Najwa Nimri</li>
                            <li className='ms-1'>Carla Campra</li>
                            <li className='li-m'>Iván Pellicer</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="trending">
                <h3><FormattedMessage id='loged.trend'/></h3>
                <MoviesFetch />
                <Footer />
            </div>
        </>
    );
}

export default LogedIn;