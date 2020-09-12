import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//MUI Stuff
import Grid  from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
//import From Component
import Sidebar from '../../Components/Sidebar';
import Profile from '../../Components/Profile';
import Rightbar from '../../Components/Rightbar';
//Create Local Variable Style
const styles = {
  form: {
    textAlign: 'center'
  },
  image: {
    margiin: '20px auto 20px auto'
  },
  pageTitle: {
    margin: '10px auto 10px auto'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    marginTop: 20,
    position: 'relative'
  },
  customErrors: {
    marginTop: 20,
    position: 'relative'
  }
}
class CreateScream extends Component {
  render() {
   
    const { classes } = this.props;
    return (
      <Grid container spacing={2}>
          <Grid item sm={8} xs={12}> 
           <Card>
             
              <Typography variant="h5" className="">create scream</Typography>
              <CardContent>
                <form noValidate>
                    <TextField
                      id="username"
                      name="username"
                      type="file"
                      className={classes.textField}
                      fullWidth
                    />
                  <textarea rows="5" cols="105" placeholder="What's happening scream...?"></textarea><br/>

                  <TextField
                      id="email"
                      name="email"
                      type="text"
                      label="Publish Status"
                      className={classes.textField}
                      fullWidth
                    />
                  <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      
                    >
                    Create
                  </Button>
                  <br/>
                 
                </form>
              </CardContent>
          </Card>
          </Grid>
        {
          this.props.auth.authenticated ? 
            <Grid item sm={4} xs={12}>
              <Profile />
              <Rightbar />
            </Grid>
            : 
            <Grid item sm={4} xs={12}>
                <Sidebar />
            </Grid>
        }
      </Grid>
    )
  }
}
CreateScream.proptype = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, {})(withStyles(styles)(CreateScream))
