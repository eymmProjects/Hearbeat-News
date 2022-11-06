import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPostById, clearPostById} from '../../store/actions';
import Moment from 'react-moment';
import Newsletter from '../utils/newsLetter';
import {showToast} from '../utils/tools'




const PostComponent = (props) => {
    const post = useSelector(state=>state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPostById(props.match.params.id))
    },[dispatch,props.match.params.id])

    useEffect(()=>{
        if(post.postByID==='404'){
            showToast('ERROR', 'The page you request is not available');
            props.history.push('/');
        }
    },[post,props.history])

    useEffect(()=>{
        return ()=>{
            dispatch(clearPostById())

        }
    },[dispatch])

    return(
        <>
            {post.postByID?
                <div className="article_container">
                    <h1>
                        {post.postByID.title}
                    </h1>

                    <div 
                    style={{
                        background:`url(${post.postByID.imagexl})`
                    }}
                    className='image'>

                    </div>

                    <div className="author">
                        Created by:
                        <span>{post.postByID.author} </span>
                            <Moment format="DD MMMM">
                                {post.postByID.createdAt}
                            </Moment>
                    </div>

                    <div className="mt-3 content">
                        <div dangerouslySetInnerHTML={
                            {__html: post.postByID.content}
                        }>
                        </div>
                    </div>
                    
                </div>
            
            :null}


            <Newsletter />
        </>
    )
}
    

export default PostComponent;