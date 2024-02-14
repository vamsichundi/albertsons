import { RoutesUrl } from './routesUrls';
import { faChartLine, faFlaskVial, faSnowflake, faMoneyBillTransfer, faGear, faClock } from '@fortawesome/free-solid-svg-icons';
import { roles } from '../constants/roles';
import { menuconstants } from '../constants/menuconstants';

export const getRoutes = (accountInfo) => {
  let routes = [];
  const userRoles = accountInfo.account.idTokenClaims.roles;
  if (userRoles.length > 0) {
    if (!userRoles.includes(roles.az_developer)) {
      routes.push({ name: menuconstants.CONFIGURATION, route: RoutesUrl.CONFIGURATION, icon: faGear });
      routes.push({ name: menuconstants.SCHEDULING, route: RoutesUrl.SCHEDULING, icon:  faClock});
    }
    if (userRoles.includes(roles.az_analyst) || userRoles.includes(roles.az_developer)) {
      routes.push({ name: menuconstants.ANALYSIS, route: RoutesUrl.ANALYSIS, icon: faChartLine });
      routes.push({ name: menuconstants.CREATE_EXPERIMENTS, route: RoutesUrl.CREATE_EXPERIMENTS, icon: faFlaskVial });
      routes.push({ name: menuconstants.CREATE_MAPPINGS, route: RoutesUrl.CREATE_MAPPINGS, icon: faSnowflake });
      routes.push({ name: menuconstants.DATA_INGEST, route: RoutesUrl.DATA_INGEST, icon: faMoneyBillTransfer });
    }
  }
  return routes;
};

export const getAuthorizedRoutes = () => {
    const routes = [];
    const userRoles = localStorage.getItem("userRoles");
    if (userRoles.length > 0) {
        if (!userRoles.includes(roles.az_developer)) {
            routes.push(RoutesUrl.CONFIGURATION);
            routes.push(RoutesUrl.SCHEDULING);
        }
        if (userRoles.includes(roles.az_analyst) || userRoles.includes(roles.az_developer)) {
            routes.push(RoutesUrl.ANALYSIS);
            routes.push(RoutesUrl.CREATE_EXPERIMENTS);
            routes.push(RoutesUrl.CREATE_MAPPINGS);
            routes.push(RoutesUrl.DATA_INGEST);
        }
    }
  return routes;
}

export const isAuthorizedRoute = (path) => {
  return getAuthorizedRoutes().includes(path) ? true : false;
}
export const getPath = (path) => {
  return isAuthorizedRoute(path) ? path : RoutesUrl.UNAUTHORIZED;
}