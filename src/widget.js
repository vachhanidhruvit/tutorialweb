import React from 'react';

class Widget extends React.Component{
    render() {
        if(this.props.profileImage==""){
            throw new Error("Image Not Found")
        }
        return (
            <div>
                <h2>Profile Image</h2>
                <img src={this.props.profileImage} alt="profile image" />
            </div>
        )
    }
}

export default Widget;