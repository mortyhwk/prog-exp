import React from 'react'
import './styles.sass'
import SignInPage from './pages/SignInPage'

const Auth: React.FC = () => {

    return (
        <div className="auth-wrapper">
            <SignInPage />
        </div>
    )
}

export default Auth