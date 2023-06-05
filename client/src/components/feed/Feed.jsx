import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";


export default function Feed({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('sss')
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6450a5415e5913f0a1ffff44")
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {<Share />}
        
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}