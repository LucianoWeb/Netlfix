import React, { useState } from 'react';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/Questions.css';
import { Email } from './Header';
import { FormattedMessage } from 'react-intl';


const Questions = () => {
    const [icon1, setIcon1] = useState(true)
    const [icon2, setIcon2] = useState(true)
    const [icon3, setIcon3] = useState(true)
    const [icon4, setIcon4] = useState(true)
    const [icon5, setIcon5] = useState(true)
    const [icon6, setIcon6] = useState(true)
    return (
        <>
            <div className='questions-cont'>
                <h3><FormattedMessage id='questionst' /></h3>
                {/*Acc 1 */}
                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className='accordion-header' id='encabezado-1'>
                            <button
                                onClick={() => setIcon1(!icon1)}
                                className='accordion-button ac-but'
                                type='button'
                                data-bs-toggle="collapse"
                                data-bs-target='#elemento-1'
                                aria-expanded="true"
                                aria-controls="elemento-1"
                            >
                                <FormattedMessage id='questions1' />
                                <FontAwesomeIcon className='plus' icon={icon1 === true ? faPlus : faX} />

                            </button>
                        </h2>
                        <div id="elemento-1"
                            className='accordion-collapse collapse'
                            aria-labelledby="encabezado-1"
                            data-bs-parent="#temario"
                        >
                            <div className="accordion-body">
                                <p><FormattedMessage id='questions1.p1' /></p>
                                <p className='py-1'><FormattedMessage id='questions1.p2' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Acc 2 */}
                <div className="accordion">

                    <div className="accordion-item">
                        <h2 className='accordion-header' id='encabezado-2'>
                            <button
                                onClick={() => setIcon2(!icon2)}
                                className='accordion-button ac-but'
                                type='button'
                                data-bs-toggle="collapse"
                                data-bs-target='#elemento-2'
                                aria-expanded="true"
                                aria-controls="elemento-2"
                            >
                                <FormattedMessage id='questions2' />
                                <FontAwesomeIcon className='plus' icon={icon2 === true ? faPlus : faX} />
                            </button>
                        </h2>
                        <div id="elemento-2"
                            className='accordion-collapse collapse'
                            aria-labelledby="encabezado-2"
                            data-bs-parent="#temario"
                        >
                            <div className="accordion-body">
                                <p><FormattedMessage id='questions2.p' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Acc 3*/}
                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className='accordion-header' id='encabezado-3'>
                            <button
                                onClick={() => setIcon3(!icon3)}
                                className='accordion-button ac-but'
                                type='button'
                                data-bs-toggle="collapse"
                                data-bs-target='#elemento-3'
                                aria-expanded="true"
                                aria-controls="elemento-3"
                            >
                                <FormattedMessage id='questions3' />
                                <FontAwesomeIcon className='plus' icon={icon3 === true ? faPlus : faX} />
                            </button>
                        </h2>
                        <div id="elemento-3"
                            className='accordion-collapse collapse'
                            aria-labelledby="encabezado-3"
                            data-bs-parent="#temario"
                        >
                            <div className="accordion-body">
                                <p><FormattedMessage id='questions3.p1' />
                              </p>
                              <p className="py-1"><FormattedMessage id='questions3.p2' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Acc 4*/}
                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className='accordion-header' id='encabezado-4'>
                            <button
                                onClick={() => setIcon4(!icon4)}
                                className='accordion-button ac-but'
                                type='button'
                                data-bs-toggle="collapse"
                                data-bs-target='#elemento-4'
                                aria-expanded="true"
                                aria-controls="elemento-4"
                            >
                                <FormattedMessage id='questions4' />
                                <FontAwesomeIcon className='plus' icon={icon4 === true ? faPlus : faX} />
                            </button>
                        </h2>
                        <div id="elemento-4"
                            className='accordion-collapse collapse'
                            aria-labelledby="encabezado-4"
                            data-bs-parent="#temario"
                        >
                            <div className="accordion-body">
                                <p><FormattedMessage id='questions4.p' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Acc 5*/}
                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className='accordion-header' id='encabezado-5'>
                            <button
                                onClick={() => setIcon5(!icon5)}
                                className='accordion-button ac-but'
                                type='button'
                                data-bs-toggle="collapse"
                                data-bs-target='#elemento-5'
                                aria-expanded="true"
                                aria-controls="elemento-5"
                            >
                               <FormattedMessage id='questions5' />
                                <FontAwesomeIcon className='plus' icon={icon5 === true ? faPlus : faX} />
                            </button>
                        </h2>
                        <div id="elemento-5"
                            className='accordion-collapse collapse'
                            aria-labelledby="encabezado-5"
                            data-bs-parent="#temario"
                        >
                            <div className="accordion-body">
                                <p><FormattedMessage id='questions5.p' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Acc 6*/}
                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className='accordion-header' id='encabezado-6'>
                            <button
                                onClick={() => setIcon6(!icon6)}
                                className='accordion-button ac-but'
                                type='button'
                                data-bs-toggle="collapse"
                                data-bs-target='#elemento-6'
                                aria-expanded="true"
                                aria-controls="elemento-6"
                            >
                                <FormattedMessage id='questions6' />
                                <FontAwesomeIcon className='plus' icon={icon6 === true ? faPlus : faX} />
                            </button>
                        </h2>
                        <div id="elemento-6"
                            className='accordion-collapse collapse'
                            aria-labelledby="encabezado-6"
                            data-bs-parent="#temario"
                        >
                            <div className="accordion-body">
                                <p><FormattedMessage id='questions6.p1' /></p>
                                <p className="py1"><FormattedMessage id='questions6.p2' /></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='email-quest'>
                <h5 className='py-2'><FormattedMessage id='header.ready'/></h5>
                <Email />
            </div>
        </>

    );
}

export default Questions;