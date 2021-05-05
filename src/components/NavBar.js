import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link , withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import React, { Fragment, Component } from "react";
import User from "./User";

class NavBar extends Component {
  //both of is open and toggle is copied from reactstrap website
  //src : https://reactstrap.github.io/components/navbar/#app
  state = {
    isOpen: false
  };

  toggle = () =>  {//it needs to be to the opposite of isopen at all TIMES
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { authedUser } = this.props;

    return (
      <div>
        <Navbar  color ="dark" bg="primary" variant="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Would You Rather</NavbarBrand>
          {authedUser &&
          <Fragment>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/add">New Question</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/leaderboard">LeaderBoard</NavLink>
                </NavItem>
                <NavItem>
                  <User id={authedUser}/>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/logout'>Logout</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Fragment>
          }
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

NavBar.propTypes = {
  authedUser: PropTypes.string,
};

export default withRouter(connect(mapStateToProps, null)(NavBar))
