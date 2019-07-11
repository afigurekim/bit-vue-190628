import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    UNSAFE_componentWillMount(){
        this.props.onMount(this.props.user);
    }
    UNSAFE_componentWillReceiveProps(){
        if(this.props.user !== nextProps.user){
            this.props.onUpdate(nextProps.user)
        }
    }
    render(){
        return(
            <div>
                <h2>User 컴포넌트</h2>
                <p>User: {this.props.user}</p>
            </div>
        )
    }
}

User.propTypes = {
    user: PropTypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
}

User.defaultProps = {
    user: 'apple'
}

export default User;