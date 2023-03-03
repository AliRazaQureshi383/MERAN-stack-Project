import { FormGroup, FormControl, TextField, Typography, Button, styled , Input} from '@mui/material';
import { useState , useEffect } from 'react';
import {EditUserData, GetUser} from '../services/api';
import { useNavigate , useParams } from "react-router-dom";

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



const EditUser =(props)=>{

    const [fillDetails , setFillDetails] = useState();

    const DefaultValue = {
        name :'',
        username : '',
        email : '',
        phone : '',
    }
    const navigate = useNavigate();

    const {id} = useParams();

    const [savedData, setSaveDate] = useState(DefaultValue)
    const onValueCahnge =(e)=>{


    setSaveDate({...savedData , [e.target.name] : e.target.value})
    }
    const OnButtonClick = async ()=>{

        await EditUserData(savedData , id)

            navigate("/all");
    }

    useEffect(() => {

        loadUserDeatils();
 
    }, [])
    
    const loadUserDeatils =async ()=>{

     const getFilledDetails =   await GetUser(id);


     setSaveDate(getFilledDetails);

    }
    return(
<Container>
    <Typography variant='h4' >Edit Users </Typography>
    <FormControl>
        <Input onChange={(e)=>onValueCahnge(e)}name = 'name' value={savedData?.name} ></Input>
    </FormControl>
    <FormControl>
    <Input onChange={(e)=>onValueCahnge(e)}name = 'username' value={savedData?.username}></Input>

    </FormControl>
    <FormControl>
    <Input onChange={(e)=>onValueCahnge(e)}name = 'email'value={savedData?.email} ></Input>

    </FormControl>
    <FormControl>
    <Input onChange={(e)=>onValueCahnge(e)}name = 'phone' value={savedData?.phone} ></Input>

    </FormControl>
    <MyButton variant="contained" onClick={()=> OnButtonClick()} >Edit User</MyButton>
</Container>
    )
}

export default EditUser