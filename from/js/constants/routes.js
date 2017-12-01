import MainContainer from '../containers/MainContainer/MainContainer';
import HomeContainer from '../containers/MainContainer/HomeContainer';
import LoginContainer from '../containers/LoginContainer/LoginContainer';
import IndividualService from '../containers/MainContainer/IndividualService';
import Personal from '../containers/MainContainer/Personal';
import Web from '../containers/DataType/web.js'

export default {
  path: '/',
  component:MainContainer,
  indexRoute: { component: HomeContainer },
  childRoutes: [
    { path: 'LoginContainer', component: LoginContainer },
    { path:'IndividualService',component:IndividualService},
    { path:'Personal',component:Personal},
    {path:'web',component:Web},
  ]
}
