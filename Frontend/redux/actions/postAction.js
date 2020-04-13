import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => async dispatch => {
    console.log("Fetching...")
    await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })).catch(e => console.log(e));

}

export const createPost = (postData) => dispatch => {
    console.log("Fetching...")
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))

}