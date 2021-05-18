const router = require('express').Router();
let Announcement = require('../models/announcement.model');

router.route('/').get((req, res) => {
  Announcement.find()
  .then(announcements => res.json(announcements))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const picture = req.body.picture;
  const date = Date.parse(req.body.date);

  const newAnnouncment = new Announcement({
    title,
    description,
    picture,
    date
  });

  newAnnouncment.save()
  .then(() => res.json('Announcement added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Announcement.findById(req.params.id)
    .then(announcement => res.json(announcement))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Announcement.findByIdAndDelete(req.params.id)
    .then(() => res.json('Announcement deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Announcement.findById(req.params.id)
    .then(announcement => {
      announcement.title = req.body.title;
      announcement.description = req.body.description;
      announcement.picture = req.body.picture;
      announcement.date = Date.parse(req.body.date);

      announcement.save()
        .then(() => res.json('Announcement updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 