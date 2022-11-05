import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../../store/actions';

import { Spinner, Button } from 'react-bootstrap';

const HomePost = () => {
    const homePost = useSelector(state => state.posts);
    const dispatch =useDispatch();


    useEffect(()=>{
        dispatch(getPosts(1,"desc",6))
    },[dispatch])


    const loadMorePost = ()=>{
        const page =homePost.page +1
        dispatch(getPosts(page,"desc",6))

    }


    return(
        <>
            <Button 
                variant="outline-dark"
                onClick={()=> loadMorePost()}
            >
                Load More Posts
            </Button>
        </>
    )
}
    

export default HomePost;