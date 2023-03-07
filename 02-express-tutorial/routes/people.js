const express = require('express')
const router = express.Router()

const {getPeople,createPerson,createPostmanPerson,updatePerson,deletePerson} = require('../controllers/people')

router.get('/',getPeople)

router.post('/',createPerson)

router.post('/postman',createPostmanPerson)

router.put('/:id',updatePerson)

router.delete('/:id',deletePerson)

module.exports = router