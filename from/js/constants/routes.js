import MainContainer from '../containers/MainContainer/MainContainer';
import HomeContainer from '../containers/MainContainer/HomeContainer';
import LoginContainer from '../containers/LoginContainer/LoginContainer';


export default {
  path: '/',
  component:MainContainer,
  indexRoute: { component: HomeContainer },
  childRoutes: [
    { path: 'LoginContainer', component: LoginContainer }
  ]
}
