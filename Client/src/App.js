import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Import Store Provider And Create Store
import { Provider } from 'react-redux';
import Store from './Store/index';

//MUI Stuff
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
//import from Container & Components
import Home from './Containers/Home';
import Signup from './Containers/Signup';
import Login from './Containers/Login';
import Navbar from './Components/Navbar';
import Dashboard from './Containers/Dashboard';
import CreateScream from './Containers/Screams/CreateScream';



//Create Global themes
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#26a69a', //#00acc1
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#fff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  }
})
function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Provider store={Store}>
        <Router>
          <Navbar />
            <div className="container">
            <hr/>
            <Switch>
              <Route exact path="/" component={Home}/>

              <Route exact path="/create-scream" component={CreateScream}/>
              <Route exact path="/register" component={Signup}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/dashboard" component={Dashboard}/>
            </Switch>
            </div>
        </Router>
        </Provider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
