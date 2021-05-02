import styled from 'styled-components'

export const AdminSec = styled.div`
  padding: 30px 0 0;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.bkgColor};
  transition: color 0.5s, background-color 0.5s;
`

export const Label = styled.label`
  color: ${({theme}) => theme.textColor};
  transition: color 0.5s;
`

export const SaveButton = styled.button`
  width: 100px;
  height: 50px;
`