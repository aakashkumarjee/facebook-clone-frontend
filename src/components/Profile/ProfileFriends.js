import React from 'react'
import './ProfileFriends.css';
import FriendsGridElement from './FriendsGridElement';
const ProfileFriends = () => {
    return (
        <div className="profileFriends">
            <div className="profileFriendsHeader">
                <h3>Friends</h3>
                <p>See all</p>
            </div>
            <div className="friendsCount">
                <h3>476 friends</h3>
            </div>
            <div className="profileFriendsGrid">
                <FriendsGridElement name = "Gourav Gurjar" imageSrc = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/118364068_101383235030987_2736920500460594245_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=0N7UntxyKP0AX_EycAL&_nc_ht=scontent-del1-1.xx&oh=e613393743358321fb349404abe6d54e&oe=5FB175D2"/>
                <FriendsGridElement name = "Ali Asif" imageSrc = "https://smileworld.in/wp-content/uploads/2020/06/Cool-Boy-Hidden-Face-DP-Images-for-Whatsapp.jpg"/>
                <FriendsGridElement name = "Kartik Gupta" imageSrc = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/91045513_2611382209186950_1953899507645153280_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=NOarY2rGO7gAX-Rn17t&_nc_ht=scontent-del1-1.xx&oh=8e942e1b825b6048d5cd55478a115309&oe=5FB0065D"/>
            </div>
            <div className="profileFriendsGrid">
                <FriendsGridElement name = "Gourav Gurjar" imageSrc = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/118364068_101383235030987_2736920500460594245_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=0N7UntxyKP0AX_EycAL&_nc_ht=scontent-del1-1.xx&oh=e613393743358321fb349404abe6d54e&oe=5FB175D2"/>
                <FriendsGridElement name = "Ali Asif" imageSrc = "https://smileworld.in/wp-content/uploads/2020/06/Cool-Boy-Hidden-Face-DP-Images-for-Whatsapp.jpg"/>
                <FriendsGridElement name = "Kartik Gupta" imageSrc = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/91045513_2611382209186950_1953899507645153280_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=NOarY2rGO7gAX-Rn17t&_nc_ht=scontent-del1-1.xx&oh=8e942e1b825b6048d5cd55478a115309&oe=5FB0065D"/>
            </div>
        </div>
    )
}

export default ProfileFriends
