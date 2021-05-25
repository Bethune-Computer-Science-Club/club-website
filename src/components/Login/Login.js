import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from '../../globalStyles'
import { useAuth } from '../../contexts/AuthContext'
//Styled Components
import {
  SigninSec,
  SigninContainer,
  SigninHeading,
  FieldLabel,
  FieldInput,
  Button,
  Alert
} from './Login.elements'



const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login }  = useAuth();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/admin')
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)

  }


  return (
    <SigninSec>
      <Container>
        <SigninContainer>
          <form onSubmit={handleSubmit}>
            <SigninHeading>Sign In</SigninHeading>
            {error && <Alert>{error}</Alert>}
            <FieldLabel>Email</FieldLabel>
            <FieldInput type='email' ref={emailRef}></FieldInput>
            <FieldLabel>Password</FieldLabel>
            <FieldInput type='password' ref={passwordRef}></FieldInput>
            <Button type='submit' disabled={loading}>Sign In</Button>
          </form>
        </SigninContainer>
      </Container>
    </SigninSec>
  )
}

export default Login
