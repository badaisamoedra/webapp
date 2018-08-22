/**
 * @author: Artha Prihardana 
 * @Date: 2018-08-16 09:12:02 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2018-08-20 06:42:15
 */
/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from 'Components/RctPageLoader/RctPageLoader';

// Start of Monitoring Zone Management
const AsyncZoneManagement = Loadable({
	loader: () => import('Routes/monitoring/zone-management'),
	loading: () => <RctPageLoader />,
});

const AsyncPlayBack = Loadable({
	loader: () => import('Routes/monitoring/play-back'),
	loading: () => <RctPageLoader />,
});
// End of Monitoring Zone Management

// Start of Vehicle Management
const AsyncMasterVehicle = Loadable({
	loader: () => import('Routes/vehicle-management/master-vehicle'),
	loading: () => <RctPageLoader />,
});

const AsyncVehicleAndDriverPair = Loadable({
	loader: () => import('Routes/vehicle-management/vehicle-and-driver-pair'),
	loading: () => <RctPageLoader />,
});

const AsyncMaintenanceVehicle = Loadable({
	loader: () => import('Routes/vehicle-management/maintenance-vehicle'),
	loading: () => <RctPageLoader />,
})
// End of Vehicle Management

// Start of Master
const AsyncMasterRoles = Loadable({
	loader: () => import('Routes/master/master-roles'),
	loading: () => <RctPageLoader />,
});

const AsyncMasterArea = Loadable({
	loader: () => import('Routes/master/master-area'),
	loading: () => <RctPageLoader />,
});

const AsyncMasterBrandVehicle = Loadable({
	loader: () => import('Routes/master/master-brand-vehicle'),
	loading: () => <RctPageLoader />,
});

const AsyncMasterNotification = Loadable({
	loader: () => import('Routes/master/master-notification'),
	loading: () => <RctPageLoader />,
});
// End of Master

// Start of Configuration
const AsyncAlertNotification = Loadable({
	loader: () => import('Routes/configuration/alert-notification'),
	loading: () => <RctPageLoader />,
});

const AsyncListsAlert = Loadable({
	loader: () => import('Routes/configuration/lists-alert'),
	loading: () => <RctPageLoader />,
});
// End of Configuration

// Start of About Us
const AsyncAboutUsComponent = Loadable({
	loader: () => import("Routes/about-us"),
	loading: () => <RctPageLoader />,
});
// End of About As

// Start of faq
const AsyncFaqComponent = Loadable({
	loader: () => import("Routes/pages/faq"),
	loading: () => <RctPageLoader />,
});
// End of faq

// Start of terms and condition
const AsyncTermsConditionComponent = Loadable({
	loader: () => import("Routes/pages/terms-condition"),
	loading: () => <RctPageLoader />,
});
// End of terms and condition

// Start of feedback
const AsyncFeedbackComponent = Loadable({
	loader: () => import("Routes/pages/feedback"),
	loading: () => <RctPageLoader />,
});
// End of feedback

// Start of Session Page 404
const AsyncSessionPage404Component = Loadable({
	loader: () => import("Routes/session/404"),
	loading: () => <RctPageLoader />,
});
// End of Session Page 404

// Start of Session Page 500
const AsyncSessionPage500Component = Loadable({
	loader: () => import("Routes/session/500"),
	loading: () => <RctPageLoader />,
});
// End of Session Page 500

export {
	AsyncZoneManagement,
	AsyncPlayBack,
	AsyncMaintenanceVehicle,
	AsyncMasterVehicle,
	AsyncVehicleAndDriverPair,
	AsyncMasterRoles,
	AsyncMasterArea,
	AsyncMasterBrandVehicle,
	AsyncMasterNotification,
	AsyncAlertNotification,
	AsyncListsAlert,
	AsyncAboutUsComponent,
	AsyncSessionPage404Component,
	AsyncSessionPage500Component,
	AsyncTermsConditionComponent,
	AsyncFeedbackComponent,
	AsyncFaqComponent
};
