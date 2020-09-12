import React, { Component } from 'react';
import { connect } from 'react-redux';
//import from store scream Action


//MUI Stuff
import Grid  from '@material-ui/core/Grid';


//import from Store
import { loadUserScreams } from '../Store/Actions/ScreamActions';
//import From Component
import Sidebar from '../Components/Sidebar';
import Screams from './Screams/Screams';
import Profile from '../Components/Profile';
import Rightbar from '../Components/Rightbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screams: []
    }
  }
  componentDidMount(){
    this.props.loadUserScreams()
  }
  render() {
    let { auth, screams } = this.props;
    let recentScreams = screams ? (
      screams.map((scream) => <Screams key={scream._id} scream={scream} />)
    ) : (  <p>Loading...</p> )
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
           {recentScreams}
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

const mapStateToProps = state => ({
  auth: state.auth,
  screams: state.screams
})
export default connect(mapStateToProps, {loadUserScreams})(Dashboard)