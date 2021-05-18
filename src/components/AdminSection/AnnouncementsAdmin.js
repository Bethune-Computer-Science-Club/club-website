import React, { useEffect, useState, useRef } from 'react'
import { Container } from '../../globalStyles'
import Axios from 'axios'

//Styled Components
import {
  AdminSec,
  Heading,
  InputLabel,
  SaveButton,
  CancelButton,
  TextParagraph,
  TextSentence,
  ButtonWrapper,
  Th,
  Table,
  Tr,
  Td,
  EditDelete
} from './AnnouncementsAdmin.elements'

export const AnnouncementsAdmin = () => {
  const textField1 = useRef();
  const textField2 = useRef();
  const textField3 = useRef();


  //Stores the different elements of each announcement
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  //Stores all the announcements
  const [announcements, setAnnouncements] = useState([]);

  //Stores whether or not an announcement is currently being edited. editing will be set to '' if we are not editing and set to the announcement object that we are editing if we are editing
  const [editing, setEditing] = useState('');

  //Get the current date
  var currentDate = new Date();

  //Get data from database when the page is first loaded
  useEffect(() => {
    Axios.get('http://localhost:5000/announcements/').then((response) => {
      setAnnouncements(response.data)
    })
  }, []);

  //Saves the data into the database
  const submitData = () => {
    Axios.post('http://localhost:5000/announcements/add', {
      title: title,
      description: description,
      picture: picture,
      date: currentDate
    }).then(() => {
      alert('New Announcement Added!');
    })
    clearFields();
  };

  //Deletes the 'selected' announcement
  const deleteAnnouncement = (id) => {
    Axios.delete('http://localhost:5000/announcements/' + id)
      .then(response => { console.log(response.data)});

      setAnnouncements(announcements.filter(el => el._id !== id))
  }

  //Saves the edited announcement
  const saveEdits = () => {
    Axios.post('http://localhost:5000/announcements/update/' + editing._id, {
      title: textField1.current.value,
      description: textField2.current.value,
      picture: textField3.current.value,
      date: editing.date
    }).then(response => { 
      alert('Announcement Saved!')
      console.log(response.data) 
    });
    clearFields()
  }

  //Checks that all fields are filled out and then returns the appropriate function
  const handleSaveClick = (editing) => {
    if (textField1.current.value === '' || textField2.current.value === '' || textField3.current.value === ''){
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
  }

  return (
    <AdminSec>
      <Container>
        <Heading>{editing !== '' ? 'Edit an Announcement' : 'Add a New Announcement'}</Heading>

        {/* 'Form' component */}
        <InputLabel>Title</InputLabel>
        <TextSentence ref={textField1} type='text' name='title' onChange={(e) => {setTitle(e.target.value)}} 
        defaultValue = {editing !== '' ? editing.title : ''}/>

        <InputLabel>Description</InputLabel>
        <TextParagraph ref={textField2} type='text' name='description' style={{height: '200px' }} onChange={(e) => {setDescription(e.target.value)}} 
        defaultValue = {editing !== '' ? editing.description : ''}/>

        <InputLabel>Image Link</InputLabel>
        <TextSentence ref={textField3} type='text' name='picture' onChange={(e) => {setPicture(e.target.value)}}
        defaultValue = {editing !== '' ? editing.picture : ''}/>


        <ButtonWrapper>
          { editing !== '' ? <CancelButton onClick={() => {setEditing(''); clearFields();}}>Cancel</CancelButton> : null }

          <SaveButton onClick={() => {handleSaveClick(editing)}}>Save</SaveButton>

        </ButtonWrapper>


        <Heading>Existing Announcements</Heading>

        <Table>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Picture</Th>
            <Th>Date Added</Th>
            <Th>Actions</Th>
          </Tr>

          {announcements.map((val) => {
            return <Tr key={val._id}> 
              <Td>{val.title}</Td>
              <Td>{val.description}</Td>
              <Td>{val.picture}</Td>
              <Td>{val.date.substring(0, 10)}</Td>
              <Td><EditDelete onClick={() => {setEditing(val)}}>edit</EditDelete> | <EditDelete onClick={() => { deleteAnnouncement(val._id) }}>delete</EditDelete></Td>
            </Tr>
          })}
        </Table>



      </Container>
    </AdminSec>
  );
};

export default AnnouncementsAdmin

