/**
 * @author: Artha Prihardana 
 * @Date: 2018-08-16 09:12:14 
 * @Last Modified by:   Artha Prihardana 
 * @Last Modified time: 2018-08-16 09:12:14 
 */
/**
 * Language Provider Helper Component
 * Used to Display Localised Strings
 */
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

// Injected message
const InjectMassage = props => <FormattedMessage {...props} />;

export default injectIntl(InjectMassage, {
    withRef: false
});
