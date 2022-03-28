let Profile = require('../models/profileModel')
let express = require('express')
let router = express.Router()

//get all profiles
router.get('/profile', (req, res) => {

    console.log('t')
    Profile.find().then(doc => {
        return res.status(200).send(doc);
    })
});

//get specific profile
router.get('/profile/:id', (req, res) => {
    Profile.findById(req.params.id, function(doc, err) {
        if(err) {
            return res.status(500).send({message: "Error", data: err});
        }
        return res.status(200).send(doc)
    }) 

})

module.exports = router