import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles'
import { CreateData } from '../../databaseFunctions/CreateData'
import { ReadData } from '../../databaseFunctions/ReadData'
import { UpdateData } from '../../databaseFunctions/UpdateData'
import { DeleteData } from '../../databaseFunctions/DeleteData'
import { ProgressBar } from '../../databaseFunctions/ProgressBar'

//Styled Components
import {
  AdminSec,
  InfoRow,
  Heading,
  InputLabel,
  CategoryButton,
  TextParagraph,
  TextSentence,
  ButtonWrapper,
  SaveButton,
  CancelButton,
  Th,
  Table,
  Tr,
  Td,
  EditDelete,
  FileInput,
  FileUploadButton,
  FileUploadLabel
} from './AdminSubpages.elements'


export const ExecsAdmin = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [startingYear, setStartingYear] = useState('');
  const [endingYear, setEndingYear] = useState('');
  const [picture, setPicture] = useState(null);
  const [pictureError, setPictureError] = useState(null); //Stores the error to be displayed if a picture upload goes wrong
  const [uploadProgress, setUploadProgress] = useState(0); //Stores the upload progress of the picture to firebase storage
  const types = ['image/png', 'image/jpeg']; //Stores the types of allowed images file types

  //Stores all the execs
  const [execs, setExecs] = useState([]);

  //Stores whether or not an exec is currently being edited. editing will be set to '' if we are not editing and set to the announcement object that we are editing if we are editing
  const [editing, setEditing] = useState('');
  
  useEffect(() => { //Get the announcements in the database on first render
    ReadData('execs', 'startingYear', 'desc', setExecs);
  }, [])


  //Checks that all fields are filled out and then returns the appropriate function
  const HandleSaveClick = () => {
    if (name === '' || role === '' || description === '' || startingYear === '' || endingYear === '' || picture === null){
      alert('Please ensure that all fields are filled out!');
    }
    else{
      if (editing){
        const error = UpdateData({name: name, description: description, category: category, role: role, startingYear: startingYear, endingYear: endingYear}, editing.id, picture, setUploadProgress, 'execs');
        if (error !== null) {
          alert(error);
        } else {
          alert('Edit Successful!')
        }
      }
      else {
        const error = CreateData({name: name, description: description, category: category, role: role, startingYear: startingYear, endingYear: endingYear}, picture, false, setUploadProgress, 'execs');
        if (error !== null) {
          alert(error);
        } else {
          alert('Upload Successful!')
        }
      }
      clearFields();
    }
  }

  const pictureChangeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setPicture(selected);
      setPictureError('');
    } else {
      setPictureError('Please select an image file (png or jpeg)');
    }
  }

  //Clears the text input fields
  const clearFields = () => {
    setEditing('');
    setName('');
    setCategory('');
    setRole('');
    setDescription('');
    setStartingYear('');
    setEndingYear('');
    setPicture(null);
    setUploadProgress(0);
  }

  const editingTrue = (val) => {
    setEditing(val);
    setName(val.name);
    setCategory(val.category);
    setRole(val.role);
    setDescription(val.description);
    setStartingYear(val.startingYear);
    setEndingYear(val.endingYear);
    setPicture(val.picture);
  }

  const getPictureName = () => {
    if (picture === null) { //If there is no picture selected
      return 'No File Selected';
    }
    else if (picture.name !== undefined){ //If the picture is a file
      return picture.name;
    }
    else if (picture.startsWith("https")){ //If the picture is already in the database and is a link
      return picture;
    }
  }


  return (
    <AdminSec>
        <Container>
          <Heading>Add a New Exec</Heading>

          {/* 'Form' component */}
          <InputLabel>Name</InputLabel>
          <TextSentence type='text' name='name' onChange={(e) => {setName(e.target.value)}} value={name}/>       

          <InputLabel>Starting Year</InputLabel>
          <TextSentence type='text' name='starting year' onChange={(e) => {setStartingYear(e.target.value)}} value={startingYear}/>       

          <InputLabel>Ending Year</InputLabel>
          <TextSentence type='text' name='ending year' onChange={(e) => {setEndingYear(e.target.value)}} value={endingYear}/>    

          <InputLabel>Category</InputLabel>
          <InfoRow>
            <CategoryButton style={{backgroundColor: category === 'Exec' ? '#d62489': '#832391'}} onClick={() => {setCategory('Exec')}}>Exec</CategoryButton>
            <CategoryButton style={{backgroundColor: category === 'Teacher' ? '#d62489': '#832391'}} onClick={() => {setCategory('Teacher')}}>Teacher</CategoryButton>
            <CategoryButton style={{backgroundColor: category === 'Website Creator' ? '#d62489': '#832391'}} onClick={() => {setCategory('Website Creator')}}>Website Creator</CategoryButton>
          </InfoRow>


          <InputLabel>Role</InputLabel>
          <TextSentence type='text' name='role' onChange={(e) => {setRole(e.target.value)}} value={role}/>       

          <InputLabel>Description</InputLabel>
          <TextParagraph type='text' name='description' style={{height: '200px' }} onChange={(e) => {setDescription(e.target.value)}} value={description}/>       

          <InputLabel>Image</InputLabel>
          {/* Upload Image Button. The button needs to be so complex because the value of the file input cannot be set programatically*/}
          <FileInput type='file' id='img' onChange={pictureChangeHandler}></FileInput> {/* This is the actual button tha gets clicked */}
          <FileUploadButton for='img'>Upload Image</FileUploadButton> {/* This is the sudo button layered ontop of the actual button */}
          <FileUploadLabel>{getPictureName()}</FileUploadLabel> {/* This is the label to display which file is currently selected */}
          <h2>{pictureError}</h2>


          <ButtonWrapper>
            { editing !== '' ? <CancelButton onClick={() => {clearFields();}}>Cancel</CancelButton> : null }
            <SaveButton onClick={() => {HandleSaveClick()}}>Save</SaveButton>
          </ButtonWrapper>

          { uploadProgress !== 0 && uploadProgress !== 100 ? <ProgressBar progress={uploadProgress} ></ProgressBar> : <></>}


          <Heading>Existing Execs</Heading>

          <Table>
            <Tr>
              <Th>Year</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Role</Th>
              <Th>Description</Th>
              <Th>Picture</Th>
              <Th>Actions</Th>
            </Tr>

            {execs && execs.map((val) => {
              return <Tr key={val.id}> 
                <Td>{val.startingYear + '-' + val.endingYear}</Td>
                <Td>{val.name}</Td>
                <Td>{val.category}</Td>
                <Td>{val.role}</Td>
                <Td>{val.description}</Td>
                <Td>{val.picture}</Td>
                <Td><EditDelete onClick={() => {editingTrue(val)}}>edit</EditDelete> | <EditDelete onClick={() => { DeleteData(val.id, 'execs') }}>delete</EditDelete></Td>
              </Tr>
            })}
          </Table>

        </Container>
    </AdminSec>
  );
};

export default ExecsAdmin

