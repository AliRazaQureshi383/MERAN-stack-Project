import mongoose from "mongoose";
const Connection = async ()=>{
    const URL = 'mongodb+srv://AliRazaQureshi:facebook1996@cluster0.jcn30iy.mongodb.net/?retryWrites=true&w=majority';

    try {

    await   mongoose.connect(URL, {  useNewUrlParser : true })
        console.log('database is connected successfully..');
    } catch (error) {
        console.log('your error is ',error);
        
    }
}
export default Connection
