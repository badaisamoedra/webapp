/**
 * @author: Artha Prihardana 
 * @Date: 2018-08-19 20:45:12 
 * @Last Modified by:   Artha Prihardana 
 * @Last Modified time: 2018-08-19 20:45:12 
 */
/**
 * Main App
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

// css
import './lib/reactifyCss';

// firebase
import './firebase';

// app component
import App from './container/App';

import { configureStore } from './store';

const MainApp = () => (
	<Provider store={configureStore()}>
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Router>
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</Router>
		</MuiPickersUtilsProvider>
	</Provider>
);

export default MainApp;
