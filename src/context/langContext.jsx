import React, { useState } from 'react'
import MsgSpanish from '../lang/es-ES.json';
import MsgEnglish from '../lang/en-US.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {

    const [msg, setMsg] = useState(MsgEnglish);
    const [locale, setLocale] = useState('en-US');

    const setLang = (language) => {
        switch (language) {
            case 'es-ES':
                setMsg(MsgSpanish);
                setLocale('es-ES')
                break;
            case 'en-US':
                setMsg(MsgEnglish);
                setLocale('en-US');
                break;
            default:
                setMsg(MsgEnglish);
                setLocale('en-US');
        }
    }

    return (
        <langContext.Provider value={{ setLang: setLang }}>
            <IntlProvider locale={locale} messages={msg}>
            {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext };