import React, {useEffect, useState, useRef} from 'react'
import { Container } from '../../globalStyles'
import Axios from 'axios'

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
  EditDelete
} from './ProjectsAdmin.elements'


export const ProjectsAdmin = () => {
  const textField1 = useRef();
  const textField2 = useRef();
  const textField3 = useRef();
  const textField4 = useRef();

  const roboticsButton = useRef();
  const appsButton = useRef();
  const websitesButton = useRef();
  const gamesButton = useRef();
  const aiButton = useRef();
  const otherButton = useRef();

  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  //Stores all the projects
  const [projects, setProjects] = useState([]);

  var [selectedCategory, setSelectedCategory] = useState('');
  //Stores whether or not an announcement is currently being edited. editing will be set to '' if we are not editing and set to the announcement object that we are editing if we are editing
  const [editing, setEditing] = useState('');


  //Get data from database when the page is first loaded
  useEffect(() => {
    Axios.get('http://localhost:5000/projects/').then((response) => {
      setProjects(response.data)
    })
  }, []);

  //Saves the data into the database
  const submitData = () => {
    Axios.post('http://localhost:5000/projects/add', {
      title: title,
      authors: authors,
      description: description,
      picture: picture,
      projectType: selectedCategory
    }).then(() => {
      alert('New Project Added!');
    })
    clearFields();
  };

  //Deletes the 'selected' announcement
  const deleteProject = (id) => {
    Axios.delete('http://localhost:5000/projects/' + id)
      .then(response => { console.log(response.data)});

      setProjects(projects.filter(el => el._id !== id))
  }

  //Saves the edited announcement
  const saveEdits = () => {
    Axios.post('http://localhost:5000/projects/update/' + editing._id, {
      title: textField1.current.value,
      authors: textField2.current.value,
      description: textField3.current.value,
      picture: textField4.current.value,
      projectType: selectedCategory
    }).then(response => { 
      alert('Project Saved!')
      console.log(response.data) 
    });
    clearFields();
  }

  //Checks that all fields are filled out and then returns the appropriate function
  const handleSaveClick = (editing) => {
    if (textField1.current.value === '' || textField2.current.value === '' || textField3.current.value === '' || textField4.current.value === '' || selectedCategory === ''){
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
    setSelectedCategory('');
  }


  return (
    <AdminSec>
        <Container>
          <Heading>Add a New Project</Heading>

          {/* 'Form' component */}
          <InputLabel>Select a Catgory</InputLabel>
          <InfoRow>
            <CategoryButton ref={roboticsButton} style={{backgroundColor: selectedCategory === 'robotics' ? '#d62489': '#832391'}} onClick={() => {setSelectedCategory('robotics')}}>Robotics</CategoryButton>
            <CategoryButton ref={appsButton} style={{backgroundColor: selectedCategory === 'apps' ? '#d62489': '#832391'}} onClick={() => {setSelectedCategory('apps')}}>Apps</CategoryButton>
            <CategoryButton ref={websitesButton} style={{backgroundColor: selectedCategory === 'websites' ? '#d62489': '#832391'}} onClick={() => {setSelectedCategory('websites')}}>Websites</CategoryButton>
            <CategoryButton ref={gamesButton} style={{backgroundColor: selectedCategory === 'games' ? '#d62489': '#832391'}} onClick={() => {setSelectedCategory('games')}}>Games</CategoryButton>
            <CategoryButton ref={aiButton} style={{backgroundColor: selectedCategory === 'ai' ? '#d62489': '#832391'}} onClick={() => {setSelectedCategory('ai')}}>AI</CategoryButton>
            <CategoryButton ref={otherButton} style={{backgroundColor: selectedCategory === 'other' ? '#d62489': '#832391'}} onClick={() => {setSelectedCategory('other')}}>Other</CategoryButton>
          </InfoRow>

          <InputLabel>Name</InputLabel>
          <TextSentence ref={textField1} type='text' name='name' onChange={(e) => {setTitle(e.target.value)}} 
          defaultValue = {editing !== '' ? editing.title : ''}/>

          <InputLabel>Authors</InputLabel>
          <TextSentence ref={textField2} type='text' name='authors' onChange={(e) => {setAuthors(e.target.value)}} 
          defaultValue = {editing !== '' ? editing.authors : ''}/>

          <InputLabel>Description</InputLabel>
          <TextParagraph ref={textField3} type='text' name='description' style={{height: '200px'}} onChange={(e) => {setDescription(e.target.value)}} 
          defaultValue = {editing !== '' ? editing.description : ''}/>

          <InputLabel>Image Link</InputLabel>
          <TextSentence ref={textField4} type='text' name='picture' onChange={(e) => {setPicture(e.target.value)}}
          defaultValue = {editing !== '' ? editing.picture : ''}/>


          <ButtonWrapper>
            { editing !== '' ? <CancelButton onClick={() => {setEditing(''); clearFields();}}>Cancel</CancelButton> : null }

            <SaveButton onClick={() => {handleSaveClick(editing)}}>Save</SaveButton>

          </ButtonWrapper>


          <Heading>Existing Projects</Heading>

          <Table>
            <Tr>
              <Th>Project Type</Th>
              <Th>Title</Th>
              <Th>Authors</Th>
              <Th>Description</Th>
              <Th>Picture</Th>
              <Th>Actions</Th>
            </Tr>

            {projects.map((val) => {
              return <Tr key={val._id}> 
                <Td>{val.projectType}</Td>
                <Td>{val.title}</Td>
                <Td>{val.authors}</Td>
                <Td>{val.description}</Td>
                <Td>{val.picture}</Td>
                <Td><EditDelete onClick={() => { setEditing(val); setSelectedCategory(val.projectType)}}>edit</EditDelete> | <EditDelete onClick={() => { deleteProject(val._id) }}>delete</EditDelete></Td>
              </Tr>
            })}
          </Table>


        </Container>
    </AdminSec>
  );
};

export default ProjectsAdmin

