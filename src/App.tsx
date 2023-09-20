import React from 'react'
import './index.sass'
import Auth from './interfaces/Auth'
import LanguageSelectorDropdown from './interfaces/LanguageSelectorDropdown'

const App: React.FC = () => {
    return (
        <>
            <Auth />
            <LanguageSelectorDropdown />
        </>
    )
}

export default App
