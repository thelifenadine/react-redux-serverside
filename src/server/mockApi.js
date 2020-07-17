import express from 'express';
import bodyParser from 'body-parser';
import filter from 'lodash/filter';
const app = express();
app.use(bodyParser.json());

const router = express.Router();

// pretend database
let data = [{
  name: 'Pb & J',
  category: 'lunch',
  description: `World's easiest lunch`,
}, {
  name: 'Chicken salad',
  category: 'lunch',
  description: `simply delightful`,
}, {
  name: 'Chocolate cake',
  category: 'sweets',
  description: `Grandma's secret recipe`,
}, {
  name: 'Oatmeal Chocolate Chip Cookies',
  category: 'sweets',
  description: `Nadine's summer favorite`,
}];

router.get('/list', (req, res) => {
  res.json(data);
});

router.post('/add', (req, res) => {
  data.push(req.body);
  res.json(data);
});

router.post('/getByCategory', (req, res) => {
  const cat = req.body.category;

  if (!cat) {
    res.status(500).send({ msg: 'category is required'});
  }

  const selectedData = filter(data, (item) => (item.category === cat));
  res.json(selectedData);
});

router.get('/', function (req, res) {
  res.json({ message: 'hooray! we can build APIs!' });
});

app.use('/', router);

export default app;
