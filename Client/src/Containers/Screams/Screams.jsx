import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { connect } from 'react-redux';


//MUI STUFF
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    
  },
  posters: {

  }
}

class Screams extends Component {
  render() {
    const { classes, scream: {writter: {username}, body, files, postedAt}} = this.props;
    return (
      <>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body1">
              @{username} &nbsp; <span>{dayjs(postedAt).format('MMM DD YYYY, h:mm a')} Public</span>
            </Typography>
          </CardContent>
          <CardMedia className={classes.posters} src={files} alt="posters"/>
            <CardContent>
                <Typography variant="body2">{body}</Typography>
            </CardContent>
            <CardContent  className="momentCount">
                  <a href="/">Comments:   </a> &nbsp;{/*{scream.comments.length}*/}
                  <a href="/">Likes:   </a> &nbsp; {/*{scream.likes.length}*/}
                  <a href="/">Views:  </a>  {/* {scream.views.length} */}
            </CardContent>
        </Card><br/>
      </>
    )
  }
}

Screams.proptype = {
  classes: PropTypes.object.isRequired
}

//MapStateToProp


//MapStateToAction
const mapStateToAction = state => {

}

export default connect( null, {mapStateToAction} )(withStyles(styles)(Screams))
