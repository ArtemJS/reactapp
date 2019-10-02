import React from 'react';
import './avatar.css';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl:'',
            userName: '',
        }
    }
    updateData = () => {
        let value = ''
        this.props.callback(value   )
    }
    render() {
        const {name, photoUrl} = this.props

        return (
            <div className="user">
                <div className="user__avatar" id="avatarbox" ><img src={photoUrl} alt=""/> </div>
                <div className="user__name" id="username">{name}</div>
                <div className="user__logout">
                    <button id="logout" onClick={this.updateData}>Logout</button>
                </div>
            </div>
        );
    }
}


export default UserProfile;
