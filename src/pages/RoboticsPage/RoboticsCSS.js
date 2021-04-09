import styled from 'styled-components'

export const Background = styled.div`
    background: black;
`

export const HelloWorld = styled.h1`
    background: red;
    text-transform: capitalize;
    text-align: center;
`

export const ActualImage = styled.img`
    width:  50%;
    height: 50%;
    padding: 40px;
    border: 20px solid yellowgreen;
    margin: 40px;
`

export const InfoArea = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Column = styled.div`
    margin: 2%;
    padding: 5%;
    text-align: center;
`

export const LargeText = styled.p`
    font-size: 2.5rem;
    color: ${({theme}) => theme.textColor};
`

export const CenteredLargeText = styled.p`
    font-size: 2.5rem;
    color: ${({theme}) => theme.textColor};
    text-align: center;
`

export const CenteredText = styled.p`
    font-size: 1.2rem;
    color: ${({theme}) => theme.textColor};
    text-align: center;
`

export const BoldText = styled.p`
    font-size: 1.2rem;
    color: ${({theme}) => theme.textColor};
    text-align: left;
    font-weight: bold;
`

export const Text = styled.p`
    font-size: 1.2rem;
    color: ${({theme}) => theme.textColor};
    text-align: left;
`


export const Img = styled.img`
`

export const HorizontalWrapper = styled.div`
    display: flex;
`

export const BoxArea = styled.div`
    display: flex;
    justify-content: center;
`