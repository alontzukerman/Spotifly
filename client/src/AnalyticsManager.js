import mixpanel from 'mixpanel-browser';

mixpanel.init("12d3727c73f48cd3a98d9f30d9dd9c39");

function AnalyticsManager(event, innerEvent = {}) {
    mixpanel.track(event, innerEvent);
}

export default AnalyticsManager ;