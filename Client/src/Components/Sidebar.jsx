import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//MUI STUFF
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


//Create Local Variable Style
const styles = {
  card: {
      textAlign: 'center'
  },
  button: {
    marginTop: 20,
    position: 'relative'
  }
}
class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <Typography variant="body1">User Authorization</Typography>
          <CardContent>
            <Button color="secondary" to="/login" component={Link}>Login</Button>
            <Button color="primary" to="/register" component={Link}>Signup</Button>
          </CardContent>
        </Card>
      </div>
    )
  }
}

Sidebar.proptype = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Sidebar)
