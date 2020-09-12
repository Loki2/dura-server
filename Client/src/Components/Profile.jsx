import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//Redux Stuff
import { connect } from 'react-redux';

//MUI STUFF
//import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalenderToday from '@material-ui/icons/CalendarToday';

const styles = {

}

class Profile extends Component {
  render() {
    return (
      <Paper>
          <Typography variant="body1">My Profile</Typography>
      </Paper>
    )
  }
}

export default withStyles(styles)(Profile);