//THE COMBINED STYLED COMPONENTS FILE FOR AnnouncementsAdmin.js, ExecsAdmin.js, and ProjectsAdmin.js

import styled from 'styled-components'

export const AdminSec = styled.div`
  padding: 30px 0 30px;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.bkgColor};
  transition: color 0.5s, background-color 0.5s;
`

export const Label = styled.label`
  color: ${({theme}) => theme.textColor};
  transition: color 0.5s;
`

export const Heading = styled.h1`
  margin: 24px 0;
  font-size: 40px;
  line-height: 1.1;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const InputLabel = styled.h1`
  margin: 24px 0;
  font-size: 30px;
  line-height: 1.1;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextParagraph = styled.textarea`
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  width: 100%;
  font-size: 20px;
  height: 50px;
  background-color: grey;
  resize: vertical;
  &:focus{
    background-color: #fff;
  }
`

export const TextSentence = styled.input`
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  width: 100%;
  font-size: 20px;
  height: 50px;
  background-color: grey;

  &:focus{
    background-color: #fff;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: block;
  text-align: center;
`

export const SaveButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: #FB8F3D;
  border: 2px solid grey;
  font-size: 20px;
  margin: 15px 20px;
  color: #000;

  &:hover {
    background-color: #fa8023;
    border: 2px solid #e6d1c1;
    cursor: pointer;
  }
`

export const CancelButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: #FB8F3D;
  border: 2px solid grey;
  font-size: 20px;
  margin: 15px 20px;
  color: #000;

  &:hover {
    background-color: #fa8023;
    border: 2px solid #e6d1c1;
    cursor: pointer;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

`

export const Tr = styled.tr`
  height: 50px;
  border-bottom: 3px solid grey;
`

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  color: white;
  font-size: 20px;
`

export const Td = styled.td`
  padding: 12px;
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const EditDelete = styled.p`
  display: inline;
  cursor: pointer;
  color: #FB8F3D;
`

export const FileInput = styled.input`
  display: none;
`

export const FileUploadButton = styled.label`
  border-radius: 10px;
  font-size: 20px;
  border: none;
  background: #fff;
  color: #000;
  cursor: pointer;
  padding: 5px 20px;

  &:hover {
    background: #d6d4d4;
  }
`

export const FileUploadLabel = styled.p`
  margin: 20px 0;
`

//For projects admin page
export const CategoryButton = styled.button`
  width: 200px;
  height: 100px;
  border: solid 3px #d68f24;
  border-radius: 20px;
  font-size: 30px;
  color: black;
  cursor: pointer;
`

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`