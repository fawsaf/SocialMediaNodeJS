import "./rightbar.scss";
import { Users } from "../../dummyData";
import Online from "../online/Online";
const Rightbar = ({profile}) => {
    console.log(profile)
    const HomeRightbar = () => {
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b> 3 other friends have birthday today</b>
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => {
                        return <Online key={u.id} user={u} />
                    })}
                </ul>
            </>
        )
    }

    const ProfileRightbar =() => {
        return (
            <>
            <h4 className="rightbarTitle">User Info:</h4>
            <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"> </span>
                        <span className="rightbarInfoValue">  </span>

                    </div>

            </div>
            <h4 className="rightbarTitle"> User Friends:</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Carter</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Carter</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Carter</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Carter</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Carter</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
            </div>

            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                { profile ? <ProfileRightbar /> :<HomeRightbar /> }
            </div>
        </div>
    )
}

export default Rightbar;