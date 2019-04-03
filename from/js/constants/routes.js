import MainContainer from '../containers/MainContainer/MainContainer';
import HomeContainer from '../containers/MainContainer/HomeContainer';
import LoginContainer from '../containers/LoginContainer/LoginContainer';
import IndividualService from '../containers/MainContainer/IndividualService';
import Personal from '../containers/MainContainer/Personal';
import Web from '../containers/DataType/web.js'
import BaiDu from "../containers/BaiDu/BaiDuWeb"
export default {
  path: '/',
  component:MainContainer,
  // indexRoute: { component: HomeContainer },
  indexRoute:{component:BaiDu},
  childRoutes: [
    { path: 'LoginContainer', component: LoginContainer },
    { path:'IndividualService',component:IndividualService},
    { path:'Personal',component:Personal},
    {path:'web',component:Web},
  ]
}
