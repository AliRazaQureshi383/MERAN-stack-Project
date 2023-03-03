import {Toolbar , styled, AppBar, Button} from '@mui/material';
import { useNavigate } from "react-router-dom";
const Tabs  = styled(Button)`
margin-right : 20px;
`

const Header  = styled(AppBar)`
background : black;
`

const Navbar =()=>{
    const navigate = useNavigate();
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs 

                onClick={() => {
                navigate("/");
                 }}>Home</Tabs>

                <Tabs
                  onClick={() => {
                    navigate("/add");
                     }}>Add Users</Tabs>

                <Tabs
                  onClick={() => {
                    navigate("/all");
                     }}> All Users</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar