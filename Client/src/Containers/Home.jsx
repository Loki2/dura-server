import React, { Component } from 'react';
import { connect } from 'react-redux';
//MUI Stuff
import Grid  from '@material-ui/core/Grid';

//import from Store
import { loadScreams } from '../Store/Actions/ScreamActions';
import Screams from './Screams/Screams';
import Sidebar from '../Components/Sidebar';
import Profile from '../Components/Profile';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screams: []
    }
  }
  componentDidMount(){
    this.props.loadScreams();
    console.log(loadScreams)
  }
  render() {
    let { screams } = this.props;
    let recentScreams = screams ? (
      screams.map((scream) => <Screams key={scream._id} scream={scream} />)
    ) : (  <p>Loading...</p> )
    return (
      <Grid container >
        <Grid item sm={8} xs={12}>
            {recentScreams}
        </Grid>


        {
          this.props.auth.authenticated ? 
            <Grid item sm={4} xs={12}>
              <Profile />
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
  auth: state.auth
})
export default connect(mapStateToProps, { loadScreams })(Home)
