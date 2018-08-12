import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './scenes/Home';
import NotFound from './components/404'

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto'
import {blue, pink, red} from '@material-ui/core/colors';

const primaryColor = blue;
const secondaryColor = pink;
const errorColor = red;

const theme = createMuiTheme({
  palette: {
    contrastThreshold: 3.1,
    tonalOffset: 0.07,
    primary: {
      type: primaryColor,
      light: primaryColor[300],
      main: primaryColor[500],
      dark: primaryColor[700],
    },
    secondary: {
      type: secondaryColor,
      light: secondaryColor.A200,
      main: secondaryColor.A400,
      dark: secondaryColor.A700,
    },
    error: errorColor
  }
});

ReactDOM.render(
	<React.Fragment>
		<CssBaseline />
		<Router>
			<div>
				<MuiThemeProvider theme={theme}>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route component={NotFound}/>
					</Switch>
				</MuiThemeProvider>
			</div>
		</Router>
	</React.Fragment>,
	document.getElementById('root'));
registerServiceWorker();
