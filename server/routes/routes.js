const app = require('express');
const router = app.Router();
const bodyParser = require('body-parser');
const cors = require('cors');

const User = require('../models').User;
const apiController = require('../controllers/ApiController');

router.use(bodyParser.json());                          // for parsing application/json
router.use(bodyParser.urlencoded({extended: true}));  // for parsing application/x-www-form-urlencoded
router.use(cors());

router.get('/', async (req, res) => {
  try {
    const user = await User.findById(1);
    const response = {message: `This response came from the node.js app. User ${user.username} is on the database.`};
    res.send(response);
  } catch (error) {
    res.status(422).send(error);
  }
});

router.get('/books', (request, response) => {

  apiController.APIReponse(request);

  //
  // console.log('Request: ', request.body);
  // console.log('Response Status Code: ', response.statusCode)
  //
  // response.setHeader('Content-Type', 'application/json');
  // response.setHeader('X-Powered-By', 'Books API v1.0');
  //
  // response.statusCode = 404;
  //
  // response.json(request.body);

  response.send('Book listing');
});

module.exports = router;