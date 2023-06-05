import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";
import './home.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Profile = () => {
    const [posts, setPosts] = useState([]);
    const username = useParams().username;
    useEffect(() => {
        console.log('sss')
        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/6450a5415e5913f0a1ffff44")
            setPosts(res.data)
        };
        fetchPosts();
    }, []);
    return (
        <div>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed username="fahim" />
                <Rightbar />
            </div>
        </div>
    );
};

export default Profile;
