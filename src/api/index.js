import axios from 'axios';
// import axious from 'axios';

const URL_SERV = "http://localhost:3004";

export const getPosts = async(prevState,page=1,order="asc",limit="10")=>{
    try{
        // http://localhost:3004/posts?_page=1&_order=desc&_sort=id
        const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

        return {
            posts: prevState.post ? [...prevState.posts,...response.data]: response.data,
            page: page,
            end:response.data.length === 0 ? true : false
        }
    }catch(error){
        throw error;
    }
}


export const addNewsletter = async(data)=>{
    try{
        const findUser = await axios.get(`${URL_SERV}/newsletter?email=${data.email}`);

        // console.log(findUser.data)


        if(!Array.isArray(findUser.data) || !findUser.data.length){
            const response = await axios({
                method:'POST',
                url:`${URL_SERV}/newsletter`,
                data:{
                    email:data.email
                }
            });

            return {
                newsletter:'added',
                email:response.data
            }
        }else{

            return{
                newsletter:'failed',
            }

        }


    }catch(error){
        throw error;
    }
}


export const getPostById =async(id) =>{
    try{

        const response = await axios.get(`${URL_SERV}/posts/${id}`);

        return response.data;

    }catch(error){
        return '404'
    }
}