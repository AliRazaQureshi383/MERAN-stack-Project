import { Button, Table, TableBody, TableCell, TableHead , TableRow } from "@mui/material";
import { GetUser , deleteUserData } from "../services/api";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AllUsers =()=>{
const [users,setUsers]=useState();

const navigate = useNavigate();
useEffect(() => {
 getUsersData();   
}, [])

const getUsersData = async ()=>{

const response = await GetUser();

console.log('res', response);
setUsers(response)
}


const deleteUser = async ( id )=>{

    await deleteUserData(id);
    getUsersData();   


}
    return(

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>

                </TableRow>
            </TableHead>

            <TableBody>
            {
                    users?.map(e =>(
                        <TableRow>
                            <TableCell>{e._id}</TableCell>
                            <TableCell>{e.name}</TableCell>
                            <TableCell>{e.username}</TableCell>
                            <TableCell>{e.email}</TableCell>
                            <TableCell>{e.phone}</TableCell>
                            <TableCell>
                                <Button variant= "contained" onClick={()=> { navigate(`/edit/${e._id}`)}} >Edit</Button>
                                <Button varient = "contained"  onClick={()=>  {deleteUser(e._id)}}   >Delete</Button>

                            </TableCell>

                        </TableRow>
                    ))
                }

            </TableBody>




        </Table>

    )
}

export default AllUsers