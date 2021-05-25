import React, { useRef, useState } from 'react'
import { Container } from '../../globalStyles'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from "react-router-dom"

//Styled Components
import {
  SigninSec,
  SigninContainer,
  SigninHeading,
  FieldLabel,
  FieldInput,
  Button,
  Alert
} from '../SignUp/SignUp.elements'

//------------------
//THIS PAGE WILL NOT BE PUBLISHED. ONLY USED FOR DEVELOPMENT AND DEBUGGING PURPOSES
//------------------

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError('Failed to sign up')
    }
    setLoading(false)

  }


  return (
    <SigninSec>
      <Container>
        <SigninContainer>
          <SigninHeading>Sign Up</SigninHeading>
          {error && <Alert>{error}</Alert>}
          <FieldLabel>Email</FieldLabel>
          <FieldInput type='email' ref={emailRef}></FieldInput>
          <FieldLabel>Password</FieldLabel>
          <FieldInput type='password' ref={passwordRef}></FieldInput>
          <Button type='submit' disabled={loading} onClick={handleSubmit}>Sign Up</Button>
        </SigninContainer>
      </Container>
    </SigninSec>
  )
}

export default Signup
