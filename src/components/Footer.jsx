import React, { useContext } from 'react';
import { Globe } from 'react-bootstrap-icons';
import '../styles/Header.css'
import '../styles/Footer.css'
import { FormattedMessage } from 'react-intl';
import { langContext } from '../context/langContext';

const Footer = () => {
    const language = useContext(langContext)
    return (
        <div className="cont-foot">
            <div className='p-foot lg-foot'>
                <p className='pb-3 fs-5'><FormattedMessage id='footer.questions' /></p>
            </div>
            <div className="grid-foot">
                <div>
                    <p><FormattedMessage id='footer.faq' /></p>
                    <p><FormattedMessage id='footer.invest' /></p>
                    <p><FormattedMessage id='footer.ways' /></p>
                    <p><FormattedMessage id='footer.corp' /></p>
                    <p><FormattedMessage id='footer.legal' /></p>
                </div>
                <div>
                    <p><FormattedMessage id='footer.help' /></p>
                    <p><FormattedMessage id='footer.jobs' /></p>
                    <p><FormattedMessage id='footer.terms' /></p>
                    <p><FormattedMessage id='footer.contact' /></p>
                    <p><FormattedMessage id='footer.only' /></p>
                </div>
                <div>
                    <p><FormattedMessage id='footer.acc' /></p>
                    <p><FormattedMessage id='footer.gift' /></p>
                    <p><FormattedMessage id='footer.priv' /></p>
                    <p><FormattedMessage id='footer.speed' /></p>
                </div>
                <div>
                    <p><FormattedMessage id='footer.media' /></p>
                    <p><FormattedMessage id='footer.buy' /></p>
                    <p><FormattedMessage id='footer.cookie' /></p>
                    <p><FormattedMessage id='footer.guaran' /></p>
                </div>
            </div>
            <div className='p-foot2 lg-foot2'>
                <div className='langco py-4'>
                    <Globe className='globo' />
                    <select className='languages'>
                        <option onClick={() => language.setLang('en-US')} >English</option>
                        <option onClick={() => language.setLang('es-ES')} >Español</option>
                    </select>
                </div>
                <p><FormattedMessage id='footer.net' /></p>
            </div>
        </div>
    );
}

export default Footer;