import React, {useRef, useState} from "react";
import './styles.sass'
import {PageIds} from '../../types'
import { CSSTransition } from 'react-transition-group'
import {useAppDispatch, useAppSelector} from '../../../../hooks/redux'
import {authActions} from '../../reducer'
import {AuthValidationRegExps} from '../../../../shared/auth/validationRegExps'
import Input from '../components/Input'

const SignInPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const page = useAppSelector((state) => state.auth.page)
    const isAnimIn = page === PageIds.SignIn
    const nodeRef = useRef(null)
    const [isShowContent, setIsShowContent] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <CSSTransition
            in={isAnimIn}
            timeout={{enter: 250, exit: 250}}
            mountOnEnter
            unmountOnExit
            classNames="SignInPage"
            nodeRef={nodeRef}
            onEnter={() => setIsShowContent(true)}
            onExiting={() => setIsShowContent(false)}
        >
            <div className="sign-in-page-wrapper" ref={nodeRef}>
                <div className="content">
                    <Input
                        isShowAnim={isShowContent}
                        title="1"
                        placeholder="прив"
                        value={username}
                        setValue={setUsername}
                        style={{marginRight: '5px'}}
                    />
                </div>
            </div>
        </CSSTransition>
    )
}

export default SignInPage