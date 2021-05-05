//src chirper app
//this is almost a copy paste
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <img src={user.avatarURL} className='avatar' alt={`${user.name}'s Avatar`}/>
        <span clasName="Span container">{user.name}</span>
      </Fragment>
    );
  }
}

function mapStateToProps ({ users }, { id }) {
  return {
    user : users[id]
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(User)
