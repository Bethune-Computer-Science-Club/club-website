const router = require('express').Router();
let Exec = require('../models/exec.model');

router.route('/').get((req, res) => {
  Exec.find()
  .sort({ startingYear: -1 }) //Sort the execs by starting year from newest to oldest
  .then(exec => res.json(exec))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const role = req.body.role;
  const description = req.body.description;
  const picture = req.body.picture;
  const startingYear = req.body.startingYear;
  const endingYear = req.body.endingYear;

  const newExec = new Exec({
    name,
    role,
    description,
    picture,
    startingYear,
    endingYear
  });

  newExec.save()
  .then(() => res.json('Exec added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exec.findById(req.params.id)
    .then(exec => res.json(exec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exec.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exec deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exec.findById(req.params.id)
    .then(exec => {
      exec.name = req.body.name;
      exec.role = req.body.role;
      exec.description = req.body.description;
      exec.picture = req.body.picture;
      exec.startingYear = req.body.startingYear;
      exec.endingYear = req.body.endingYear;

      exec.save()
        .then(() => res.json('Exec updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 