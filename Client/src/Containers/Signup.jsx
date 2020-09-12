import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppIcon from '../Assets/icon.png';


//Connect Form with Redux
import { connect } from 'react-redux';
//import from Store Action
import { signupUser } from '../Store/Actions/UserAuthAction';

//MUI STUFF
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

class Signup extends Component {
    //Set Constructor
    constructor(props){
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        loading: false,
        error: { }
      }
    }
    //Set Error Handle
    static getDerivedStateFromProps(nextProps, prevState) {
        if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)) {
            return {
              error: nextProps.auth.error
            }
        }
        return null
    }

    //Create Handle Submit
    handlechange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    //Create Handle Submit
    handleSubmit = (event) => {
      event.preventDefault();
      const userData = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      }
      this.props.signupUser(userData, this.props.history)
      console.log('Hello, Bro i am from handleSubmit')
    }

  render() {
    const { classes } = this.props;
    const { username, email, password, confirmPassword, error } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm={4} xs={12} />
        <Grid item sm={5} xs={12}>
          <Card>
              <img src={AppIcon} alt="monkey" className={classes.image}/>
              <Typography variant="h3" className={classes.pageTitle}>Signup</Typography>
              <CardContent>
                <form noValidate onSubmit={this.handleSubmit}>
                    <TextField
                      id="username"
                      name="username"
                      type="text"
                      label="Username"
                      className={classes.textField}
                      helperText={error.username}
                      error={ error.username ? true : false}
                      value={username}
                      onChange={this.handlechange}
                      fullWidth
                    />
                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                      className={classes.textField}
                      helperText={error.email}
                      error={ error.email ? true : false}
                      value={email}
                      onChange={this.handlechange}
                      fullWidth
                    />

                    <TextField
                      id="password"
                      name="password"
                      type="password"
                      label="Password"
                      className={classes.textField}
                      helperText={error.password}
                      error={ error.password ? true : false}
                      value={password}
                      onChange={this.handlechange}
                      fullWidth
                    />

                    <TextField
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      className={classes.textField}
                      helperText={error.confirmPassword}
                      error={ error.confirmPassword ? true : false}
                      value={confirmPassword}
                      onChange={this.handlechange}
                      fullWidth
                    /> {error.general && (
                      <Typography variant="body2" className={classes.customErrors}>
                        {error.general}
                      </Typography>
                    )}
                  <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      className={classes.button}
                    >
                    Signup
                  </Button>
                  <br/>
                  <small>Already have an account? Login <Link to="/login">Here</Link></small>
                </form>
              </CardContent>
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}/>
      </Grid>
    )
  }
}


Signup.proptype = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { signupUser }) (withStyles(styles)(Signup));
