import React from 'react'

const FriendsGridElement = ({name, imageSrc}) => {
    return (
        <div className="friendsGridElement">
            <img src={imageSrc} alt=""/>
            <h4>{name}</h4>
        </div>
    )
}

export default FriendsGridElement
