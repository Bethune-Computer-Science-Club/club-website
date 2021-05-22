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


export const ProjectsAdmin = () => {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);
  const [projectType, setProjectType] = useState(null)
  const [pictureError, setPictureError] = useState(null); //Stores the error to be displayed if a picture upload goes wrong
  const [uploadProgress, setUploadProgress] = useState(0); //Stores the upload progress of the picture to firebase storage
  const types = ['image/png', 'image/jpeg']; //Stores the types of allowed images file types

  //Stores all the projects
  const [projects, setProjects] = useState([]);

  //Stores whether or not a project is currently being edited. editing will be set to '' if we are not editing and set to the announcement object that we are editing if we are editing
  const [editing, setEditing] = useState('');

  useEffect(() => { //Get the announcements in the database on first render
    ReadData('projects', 'createdAt', 'desc', setProjects);
  }, [])

  //Checks that all fields are filled out and then returns the appropriate function
  const HandleSaveClick = () => {
    if (title === '' || authors === '' || description === '' || picture === null || projectType === null){
      alert('Please ensure that all fields are filled out!');
    }
    else{
      if (editing){
        const error = UpdateData({title: title, authors: authors, description: description, projectType: projectType}, editing.id, picture, setUploadProgress, 'projects');
        if (error !== null) {
          alert(error);
        } else {
          alert('Edit Successful!')
        }
      }
      else {
        const error = CreateData({title: title, authors: authors, description: description, projectType: projectType}, picture, true, setUploadProgress, 'projects');
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
    setTitle('');
    setAuthors('');
    setDescription('');
    setPicture(null);
    setProjectType(null);
    setUploadProgress(0);
  }

  const editingTrue = (val) => {
    setEditing(val);
    setTitle(val.title);
    setAuthors(val.authors);
    setDescription(val.description);
    setPicture(val.picture);
    setProjectType(val.projectType);
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
          <Heading>Add a New Project</Heading>

          {/* 'Form' component */}
          <InputLabel>Select a Catgory</InputLabel>
          <InfoRow>
            <CategoryButton style={{backgroundColor: projectType === 'robotics' ? '#d62489': '#832391'}} onClick={() => {setProjectType('robotics')}}>Robotics</CategoryButton>
            <CategoryButton style={{backgroundColor: projectType === 'apps' ? '#d62489': '#832391'}} onClick={() => {setProjectType('apps')}}>Apps</CategoryButton>
            <CategoryButton style={{backgroundColor: projectType === 'websites' ? '#d62489': '#832391'}} onClick={() => {setProjectType('websites')}}>Websites</CategoryButton>
            <CategoryButton style={{backgroundColor: projectType === 'games' ? '#d62489': '#832391'}} onClick={() => {setProjectType('games')}}>Games</CategoryButton>
            <CategoryButton style={{backgroundColor: projectType === 'ai' ? '#d62489': '#832391'}} onClick={() => {setProjectType('ai')}}>AI</CategoryButton>
            <CategoryButton style={{backgroundColor: projectType === 'other' ? '#d62489': '#832391'}} onClick={() => {setProjectType('other')}}>Other</CategoryButton>
          </InfoRow>

          <InputLabel>Name</InputLabel>
          <TextSentence type='text' name='name' onChange={(e) => {setTitle(e.target.value)}} value={title}/>

          <InputLabel>Authors</InputLabel>
          <TextSentence type='text' name='authors'  onChange={(e) => {setAuthors(e.target.value)}} value={authors}/>

          <InputLabel>Description</InputLabel>
          <TextParagraph type='text' name='description' style={{height: '200px'}} onChange={(e) => {setDescription(e.target.value)}} value={description}/>

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


          <Heading>Existing Projects</Heading>

          <Table>
            <Tr>
              <Th>Project Type</Th>
              <Th>Name</Th>
              <Th>Authors</Th>
              <Th>Description</Th>
              <Th>Picture</Th>
              <Th>Date Created</Th>
              <Th>Actions</Th>
            </Tr>

            {projects && projects.map((val) => {
              let date;
              let dateWithCommas = 'Loading...';
              if (val.createdAt !== null) { //Make sure createdAt is rendered
                date = val.createdAt.toDate().toDateString().substring(4, 15);
                dateWithCommas = date.substring(0, 6) + ',' + date.substring(6, 11);
              }

              return <Tr key={val.id}> 
                <Td>{val.projectType}</Td>
                <Td>{val.title}</Td>
                <Td>{val.authors}</Td>
                <Td>{val.description}</Td>
                <Td>{val.picture}</Td>
                <Td>{dateWithCommas}</Td>
                <Td><EditDelete onClick={() => {editingTrue(val)}}>edit</EditDelete> | <EditDelete onClick={() => { DeleteData(val.id, 'projects') }}>delete</EditDelete></Td>
              </Tr>
            })}
          </Table>


        </Container>
    </AdminSec>
  );
};

export default ProjectsAdmin

