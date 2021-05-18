import React, {useEffect, useState, useRef} from 'react'
import { Container } from '../../globalStyles'
import Axios from 'axios'

//Styled Components
import {
  AdminSec,
  Heading,
  InputLabel,
  TextParagraph,
  TextSentence,
  ButtonWrapper,
  SaveButton,
  CancelButton,
  Th,
  Table,
  Tr,
  Td,
  EditDelete
} from './ExecsAdmin.elements'


export const ExecsAdmin = () => {
  const textField1 = useRef();
  const textField2 = useRef();
  const textField3 = useRef();
  const textField4 = useRef();
  const textField5 = useRef();
  const textField6 = useRef();

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  const [startingYear, setStartingYear] = useState('');
  const [endingYear, setEndingYear] = useState('');

  //Stores all the execs
  const [execs, setExecs] = useState([]);

  //Stores whether or not an announcement is currently being edited. editing will be set to '' if we are not editing and set to the announcement object that we are editing if we are editing
  const [editing, setEditing] = useState('');
  

  //Get data from database when the page is first loaded
  useEffect(() => {
    Axios.get('http://localhost:5000/execs/').then((response) => {
      setExecs(response.data)
    })
  }, []);

  //Saves the data into the database
  const submitData = () => {
    Axios.post('http://localhost:5000/execs/add', {
      name: name,
      role: role,
      description: description,
      picture: picture,
      startingYear: startingYear,
      endingYear: endingYear
    }).then(() => {
      alert('New Exec Added!');
    })
    clearFields();
  };

  //Deletes the 'selected' announcement
  const deleteExec = (id) => {
    Axios.delete('http://localhost:5000/execs/' + id)
      .then(response => { console.log(response.data)});
      setExecs(execs.filter(el => el._id !== id))
  }

  //Saves the edited announcement
  const saveEdits = () => {
    Axios.post('http://localhost:5000/execs/update/' + editing._id, {
      name: textField3.current.value,
      role: textField4.current.value,
      description: textField5.current.value,
      picture: textField6.current.value,
      startingYear: textField1.current.value,
      endingYear: textField2.current.value,
    }).then(response => { 
      alert('Exec Saved!')
      console.log(response.data) 
    });
    clearFields();
  }

  //Checks that all fields are filled out and then returns the appropriate function
  const handleSaveClick = (editing) => {
    if (textField1.current.value === '' || textField2.current.value === '' || textField3.current.value === '' || textField4.current.value === '' || textField5.current.value === '' || textField6.current.value === ''){
      alert('Please ensure that all fields are filled out!');
    }
    else{
      if (editing){
        saveEdits();
      }
      else {
        submitData();
      }
      setEditing('');
    }
  }

  //Clears the text input fields
  const clearFields = () => {
    textField1.current.value = '';
    textField2.current.value = '';
    textField3.current.value = '';
    textField4.current.value = '';
    textField5.current.value = '';
    textField6.current.value = '';
  }


  return (
    <AdminSec>
        <Container>
          <Heading>Add a New Exec</Heading>

          {/* 'Form' component */}
          <InputLabel>Starting Year</InputLabel>
          <TextSentence ref={textField1} type='text' name='starting year' onChange={(e) => {setStartingYear(e.target.value)}} 
          defaultValue = {editing !== '' ? editing.startingYear : ''}/>          

          <InputLabel>Ending Year</InputLabel>
          <TextSentence ref={textField2} type='text' name='ending year' onChange={(e) => {setEndingYear(e.target.value)}} 
          defaultValue = {editing !== '' ? editing.endingYear : ''}/> 

          <InputLabel>Name</InputLabel>
          <TextSentence ref={textField3} type='text' name='name' onChange={(e) => {setName(e.target.value)}} 
          defaultValue = {editing !== '' ? editing.name : ''}/>

          <InputLabel>Role</InputLabel>
          <TextSentence ref={textField4} type='text' name='role' onChange={(e) => {setRole(e.target.value)}} 
          defaultValue = {editing !== '' ? editing.role : ''}/>

          <InputLabel>Description</InputLabel>
          <TextParagraph ref={textField5} type='text' name='description' style={{height: '200px'}} onChange={(e) => {setDescription(e.target.value)}} 
          defaultValue = {editing !== '' ? editing.description : ''}/>

          <InputLabel>Image Link</InputLabel>
          <TextSentence ref={textField6} type='text' name='picture' onChange={(e) => {setPicture(e.target.value)}}
          defaultValue = {editing !== '' ? editing.picture : ''}/>


          <ButtonWrapper>
            { editing !== '' ? <CancelButton onClick={() => {setEditing(''); clearFields();}}>Cancel</CancelButton> : null }

            <SaveButton onClick={() => {handleSaveClick(editing)}}>Save</SaveButton>

          </ButtonWrapper>


          <Heading>Existing Execs</Heading>

          <Table>
            <Tr>
              <Th>Year</Th>
              <Th>Name</Th>
              <Th>Role</Th>
              <Th>Description</Th>
              <Th>Picture</Th>
              <Th>Actions</Th>
            </Tr>

            {execs.map((val) => {
              return <Tr key={val._id}> 
                <Td>{val.startingYear + '-' + val.endingYear}</Td>
                <Td>{val.name}</Td>
                <Td>{val.role}</Td>
                <Td>{val.description}</Td>
                <Td>{val.picture}</Td>
                <Td><EditDelete onClick={() => { setEditing(val) }}>edit</EditDelete> | <EditDelete onClick={() => { deleteExec(val._id) }}>delete</EditDelete></Td>
              </Tr>
            })}
          </Table>

        </Container>
    </AdminSec>
  );
};

export default ExecsAdmin

