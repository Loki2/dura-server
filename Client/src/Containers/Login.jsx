import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppIcon from '../Assets/icon.png';

//Connect Form with Redux
import { connect } from 'react-redux';

//import form Store Action
import { loginUser } from '../Store/Actions/UserAuthAction';
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
class Login extends Component {
  //Set Constructor
    constructor(props){
      super(props);
      this.state = {
        email: '',
        password: '',
        loding: false,
        error: { }
      }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)) {
            return {
              error: nextProps.auth.error
            }
        }
        return null
    }
    //Create Handle Change
    handlechange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    //Create Handle Submit
    handleSubmit = (event) => {
      event.preventDefault();
      const userData = {
        email: this.state.email,
        password: this.state.password
      }

      this.props.loginUser(userData, this.props.history)
   
    }
  render() {
    const { classes } = this.props;
    const { email, password, error } = this.state;
    // console.log(this.props)//This Show All props
    return (
      <Grid container className={classes.form}>
        <Grid item sm={4} xs={12} />
        <Grid item sm={5} xs={12}>
          <Card>
              <img src={AppIcon} alt="monkey" className={classes.image}/>
              <Typography variant="h3" className={classes.pageTitle}>Login</Typography>
              <CardContent>
                <form noValidate onSubmit={this.handleSubmit}>
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
                    Login
                  </Button>
                  <br/>
                  <small>forget password? <Link to="/recovery-password">Here</Link></small> <br/>
                  OR <br/>
                  <small>Don't have an account? Signup <Link to="/register">Here</Link></small><br/> 
                  
                </form>
              </CardContent>
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}/>
      </Grid>
    )
  }
}

Login.proptype = {
  classes: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, {loginUser})( withStyles(styles)(Login))
