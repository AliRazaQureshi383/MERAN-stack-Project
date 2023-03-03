import { FormGroup, FormControl, TextField, Typography, Button, styled , Input} from '@mui/material';
import { useState } from 'react';
import {AddUser} from '../services/api';
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
width : 50%;
margin: auto;
& > div {
    margin-top : 20px
}
`
const MyButton = styled(Button)`
margin-top : 50px
`




const Adduser =()=>{
    const DefaultValue = {
        name :'',
        username : '',
        email : '',
        phone : '',
    }
    const navigate = useNavigate();

    const [savedData, setSaveDate] = useState(DefaultValue)
    const onValueCahnge =(e)=>{
        console.log(e.target);
        console.log(e.target.name , e.target.value);

    setSaveDate({...savedData , [e.target.name] : e.target.value})
    }
    const OnButtonClick = async()=>{

        await AddUser(savedData)

            navigate("/all");
    }
    return(
<Container>
    <Typography variant='h4' >Add Users </Typography>
    <FormControl>
        <Input onChange={(e)=>onValueCahnge(e)}name = 'name' ></Input>
    </FormControl>
    <FormControl>
    <Input onChange={(e)=>onValueCahnge(e)}name = 'username' ></Input>

    </FormControl>
    <FormControl>
    <Input onChange={(e)=>onValueCahnge(e)}name = 'email' ></Input>

    </FormControl>
    <FormControl>
    <Input onChange={(e)=>onValueCahnge(e)}name = 'phone' ></Input>

    </FormControl>
    <MyButton variant="contained" onClick={()=> OnButtonClick()} >Add User</MyButton>
</Container>
    )
}

export default Adduser