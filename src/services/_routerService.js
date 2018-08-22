/**
 * @author: Artha Prihardana 
 * @Date: 2018-08-15 20:52:19 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2018-08-20 06:48:20
 */
// routes
import Pages from 'Routes/pages';
import Dashboard from 'Routes/dashboard';
import Monitoring from 'Routes/monitoring';
import Reports from 'Routes/reports';
import UserManagement from 'Routes/user-management';
import VehicleManagement from 'Routes/vehicle-management';
import DriverManagement from 'Routes/driver-management';
import Master from 'Routes/master';
import Configuration from 'Routes/configuration';

// async component
import {
	AsyncAboutUsComponent,
} from 'Components/AsyncComponent/AsyncComponent';

export default [
	{
		path: 'dashboard',
		component: Dashboard
	},
	{
		path: 'monitoring',
		component: Monitoring
	},
	{
		path: 'report',
		component: Reports
	},
	{
		path: 'user-management',
		component: UserManagement
	},
	{
		path: 'vehicle-management',
		component: VehicleManagement
	},
	{
		path: 'driver-management',
		component: DriverManagement
	},
	{
		path: 'master',
		component: Master
	},
	{
		path: 'configuration',
		component: Configuration
	},
	{
		path: 'about-us',
		component: AsyncAboutUsComponent
	},
	{
		path: 'pages',
		component: Pages
	}
]