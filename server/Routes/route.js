import express from 'express';
import { addUser , getOneUser, getUser , editOneUser , deleteOneUser} from '../Controller/userConroller.js';
const route = express.Router();

route.post('/add', addUser)
route.get('/all', getUser)
route.get('/:id',getOneUser)
route.post('/:id',editOneUser)
route.delete('/:id',deleteOneUser)





export default route;