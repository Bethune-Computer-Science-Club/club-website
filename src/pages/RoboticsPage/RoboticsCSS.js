import styled from 'styled-components'

export const Background = styled.div`
    background: black;
`

export const HelloWorld = styled.h1`
    background: red;
    text-transform: capitalize;
    text-align: center
    
`

export const ActualImage = styled.img`
    width:  50%;
    height: 50%;
    padding: 40px;
    border: 20px solid yellowgreen;
    margin: 40px;
`

export const TestImage = styled.div`
    height: 400px;
    width: 70%;

    background: radial-gradient(circle, red 30%, green 40%, blue);
    border: 20px solid yellowgreen;
    padding: 20px;
`

export const Grid = styled.div`
    justify-content: center;
    margin-left: 20%;
    margin-right: 20%;
    background: lightblue;
`

export const Row = styled.div`
    display: flex;
`

export const Column = styled.div`
    margin: 2%;
    padding: 5%;
    background: green;
    text-align: center;
`