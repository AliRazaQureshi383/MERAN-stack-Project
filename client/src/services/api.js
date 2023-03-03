import axios from "axios";

const URL = 'http://localhost:5000'

export const AddUser = async (data) => {

    console.log('Add user api called', data);

    try {
        await axios.post(`${URL}/add`, data)

    } catch (error) {
        console.log(error);

    }
}

export const GetUser = async (id) => {


    if(id){
        console.log('All user api called with id');

        try {
            const res=await axios.get(`${URL}/${id}`).then(res =>{return (res.data)})
            if(res){
                return res;
            }
    
        } catch (error) {
            console.log(error);
    
        }
    }
else

console.log('All user api called without any id');
{ 
    
    try {
        const res=await axios.get(`${URL}/all`).then(res =>{return (res.data)})
        if(res){
            return res;
        }

    } catch (error) {
        console.log(error);

    }}
}

export const EditUserData = async (data , id) => {

    try {
        await axios.post (`${URL}/${id}`, data)

    } catch (error) {
        console.log(error);

    }
}

export const deleteUserData = async (id) => {

    try {
        await axios.delete (`${URL}/${id}`)

    } catch (error) {
        console.log(error);

    }
}


