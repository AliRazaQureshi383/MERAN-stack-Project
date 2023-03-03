import logo from './logo.svg';
import './App.css';
import Adduser from './components/addUser';
import Navbar from './components/Navbar';
import AllUsers from './components/allUsers';
import BasicHome from './components/BasicHome';
import EditUser from './components/EditUser';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <BrowserRouter>

            <Navbar/>
         <Routes>
            <Route path ='/'   element = {<BasicHome/>}/>
            <Route path='/add' element = {<Adduser/> } />
            <Route path='/all' element = {<AllUsers/>}/>
            <Route path='/edit/:id' element = {<EditUser/>}/>

         </Routes>
   
      </BrowserRouter>
     
    </div>
  );
}

export default App;
