import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Button } from '@material-ui/core';

//import from Store
import { logout } from '../Store/Actions/UserAuthAction';

class Navbar extends Component {
  render() {
    let { auth } = this.props;
    return (
      <>
        {
          this.props.auth.authenticated ? 
          <AppBar>
              <Toolbar className="nav-container">
                <Button color="inherit" to="/create-scream" component={Link}>+</Button>
                <Button color="inherit" to="/dashboard" component={Link}>Dashboard</Button>
                <Button color="inherit" to="/username" component={Link}>@{auth.user.username}</Button>
                <Button 
                    color="inherit" 
                    to="/logout" 
                    onClick={() => this.props.logout(this.props.history)} 
                    component={Link}
                  >
                  Logout
                </Button>
              </Toolbar>
          </AppBar> :

          <AppBar>
              <Toolbar className="nav-container">
                <Button color="inherit" to="/" component={Link}>Home</Button>
              </Toolbar>
          </AppBar> 
        }
      </>
    )
  }
}


const mapStateToProps = state => ({
  auth: state.auth
})

//mapStateToProp


//maoStateToAction
export default connect(mapStateToProps, { logout })(Navbar)
