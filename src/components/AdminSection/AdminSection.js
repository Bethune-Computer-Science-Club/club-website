import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles'
import Axios from 'axios'

//Styled Components
import {
  AdminSec,
  Label,
  SaveButton
} from './AdminSection.elements'

const AdminSection = () => {
  const [name, setName] = useState('');
  const [grade, setDescription] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setDataList(response.data)
    }) //Store db contents
  }, []);

  const submitData = () => {
    Axios.post('http://localhost:3001/api/insert', {
      name: name,
      grade: grade,
      imageLink: imageLink,
    }).then(() => {
      alert('successful insert');
    })
  };

  return (
    <AdminSec>
      <Container>
        <Label>Name</Label>
        <input type='text' name='username' onChange={(e) => {
          setName(e.target.value)
        }} />
        <Label>Description</Label>
        <input type='text' name='description' onChange={(e) => {
          setDescription(e.target.value)
        }} />

        <Label>Image Link</Label>
        <input type='text' name='imageLink' onChange={(e) => {
          setImageLink(e.target.value)
        }} />

        <SaveButton onClick={submitData}>Save</SaveButton>

        {dataList.map((val) => {
          return <div> name:{val.Name} | grade:{val.Grade} <img src={val.ImageLink} alt="alt"></img></div>
        })}

      </Container>
    </AdminSec>
  );
};

export default AdminSection

