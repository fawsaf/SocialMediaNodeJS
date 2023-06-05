import './post.scss'
import { MoreVert } from '@material-ui/icons';
import {useState, useEffect} from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom'
const Post = ({post}) => {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    
    useEffect(()=>{
        const fetchUser = async () => {
            const res= await axios.get(`users/${post.userId}`)
            // if  you use changeable variable inside useEffect then
            // you have to add it to the array dependency for rerendering
            setUser(res.data)
            //console.log(res.data)
        };
        fetchUser();
    }, [post.userId]);

    const likeHandler = () =>
    {
        setIsLiked( isLiked ? false : true )
        setLike( isLiked ? like-1 : like+1)   
    }
    
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <Link to={`profile/${user.username}`}>
                            <img className='postProfileImg' src={user.profilePicture || 'assets/'+'person/noAvatar.png'} alt=''/>
                        </Link>
                        <span className='postUserName'>
                            {user.username}
                        </span>
                        <span className='postUserdate'>{post.createdAt}</span>
                    </div>
                    <div className='postTopRight'>
                        < MoreVert />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                  
                    <img className='postImg' src={'assets/'+post.img} alt='' />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                    <img className="likeIcon" src="assets/like.png"  alt="" onClick={likeHandler} />
                    <img className="likeIcon" src="assets/heart.png" alt="" />
                        <span className='postLikeCounter'>{like} people like it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;