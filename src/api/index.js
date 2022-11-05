import axios from 'axios';
// import axious from 'axios';

const URL_SERV = "http://localhost:3004";

export const getPosts = async(page=1,order="asc",limit="10")=>{
    try{
        // http://localhost:3004/posts?_page=1&_order=desc&_sort=id
        const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

        return {
            posts: response.data,
            page: page
        }
    }catch(error){
        throw error;
    }
}