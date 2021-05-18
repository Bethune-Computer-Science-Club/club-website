const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
  Project.find()
  .then(project => res.json(project))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const authors = req.body.authors;
  const description = req.body.description;
  const picture = req.body.picture;
  const projectType = req.body.projectType;

  const newProject = new Project({
    title,
    authors,
    description,
    picture,
    projectType
  });

  newProject.save()
  .then(() => res.json('Project added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      project.title = req.body.title;
      project.authors = req.body.authors;
      project.description = req.body.description;
      project.picture = req.body.picture;
      project.projectType = req.body.projectType;

      project.save()
        .then(() => res.json('Project updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 