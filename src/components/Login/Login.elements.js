import styled from 'styled-components'

export const SigninSec = styled.div`
  padding: 30px 0 30px;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.bkgColor};
  transition: color 0.5s, background-color 0.5s;
  display: flex;

  @media screen and (max-width: 960px) {
    display: block;
    height: 100%;
  }
`

export const SigninContainer = styled.div`
  border: 3px ${({theme}) => theme.textColor} solid;
  max-width: 400px;
  height: 400px;
  padding: 20px;
  margin: auto;
  border-radius: 15px;
  text-align: center;
  transition: border 0.5s;
`

export const SigninHeading = styled.h1`
  text-align: center;
`

export const FieldLabel = styled.label`
  display: block;
  font-size: 20px;
  text-align: left;
  margin: 10px 0 5px 0;
`

export const FieldInput = styled.input`
  display: block;
  font-size: 20px;
  padding: 5px 10px;
  width: 100%;
  border-radius: 5px;
  border: 2px black solid;
`

export const Button = styled.button`
  width: 30%;
  height: 40px;
  border-radius: 5px;
  border: 2px ${({theme}) => theme.textColor} solid;
  margin: 40px 0;
  font-size: 20px;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: #fff;
    background-color: #5e22c7;
  }
`

export const Alert = styled.div`
  width: 100%;
  height: 40px;
  font-size: 20px;
  background-color: #e87b79;
  border-radius: 5px;
  text-align: left;
  padding: 5px 10px;
  margin: 5px 0;
  

`