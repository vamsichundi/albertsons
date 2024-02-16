import { RoutesUrl } from './routesUrls';
import { faChartLine, faArrowDownUpAcrossLine, faDatabase, faSnowflake, faGear, faClock } from '@fortawesome/free-solid-svg-icons';
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
      routes.push({ name: menuconstants.DATA_INGEST, route: RoutesUrl.DATA_INGEST, icon: faArrowDownUpAcrossLine})
      routes.push({ name: menuconstants.ANALYSIS, route: RoutesUrl.ANALYSIS, icon: faChartLine });
      routes.push({ name: menuconstants.DATABRICKS, route: RoutesUrl.DATABRICKS, icon: faDatabase });
      routes.push({ name: menuconstants.INSIGHT, route: RoutesUrl.INSIGHT, icon: faSnowflake });
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
          routes.push(RoutesUrl.INSIGHT);
          routes.push(RoutesUrl.TABLE_BASED);
          routes.push(RoutesUrl.SQL_BASED);
          routes.push(RoutesUrl.FILE_BASED);
          routes.push(RoutesUrl.STREAM_BASED);
          routes.push(RoutesUrl.FILE_BASED);
          routes.push(RoutesUrl.CONFORM_CONFIG);
          routes.push(RoutesUrl.HYBRID_CONFIG);
          routes.push(RoutesUrl.DATA_INGEST);
          routes.push(RoutesUrl.DATABRICKS);
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