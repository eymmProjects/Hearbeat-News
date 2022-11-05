import * as api from '../../api';
import{
    GET_POSTS
} from '../types'

export const getPosts = (page,order,limit)=>({
    type: GET_POSTS,
    payload: api.getPosts(page,order,limit)
})