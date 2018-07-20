import ManagerMainContainer from '../containers/ManagerMainContainer/ManagerMainContainer';
import HomePageContainer from '../containers/ManagerMainContainer/HomePageContainer';
import SuperviseCity from '../containers/LeveloneContainer/SuperviseCity';
import SuperviseCounty from '../containers/LeveloneContainer/SuperviseCounty';
import SuperviseDepartment from '../containers/LeveloneContainer/SuperviseDepartment';
import SuperviseTarget from '../containers/LeveloneContainer/SuperviseTarget';
import AssessmentScore from '../containers/LeveloneContainer/AssessmentScore';
import ClassA from '../containers/AccountManagement/ClassA';
import ClassB from '../containers/AccountManagement/ClassB';
import ClassC from '../containers/AccountManagement/ClassC';
import DepartmentManagement from '../containers/DepartmentManagement/DepartmentManagement';
import LeadingGroup from '../containers/DepartmentManagement/LeadingGroup';
import ProvincialGovernment from '../containers/DepartmentManagement/ProvincialGovernment';
import Municipalities from '../containers/DepartmentManagement/Municipalities';
import StraightCounty from '../containers/DepartmentManagement/StraightCounty';
import ProvincialDepartments from '../containers/DepartmentManagement/ProvincialDepartments';
import ScoresFor from '../containers/LeveloneContainer/ScoresFor';
import ProgressCity from '../containers/LeveloneContainer/ProgressCity';
import PersonInfo from '../containers/MeContainer/PersonInfo';
import PersonalNews from '../containers/MeContainer/PersonalNews';

//二级督导平台
import SupervisionTaskA from '../containers/TwoLevel/SupervisionTaskA'
import Examine from "../containers/TwoLevel/Examine"
import AssessmentProgressA from "../containers/TwoLevel/AssessmentProgressA"
import AssessmentProgressB from "../containers/TwoLevel/AssessmentProgressB"
import AssessmentProgressC from "../containers/TwoLevel/AssessmentProgressC"
import SupervisionTaskAB from "../containers/TwoLevel/SupervisionTaskA-B"
import SupervisionTaskAC from "../containers/TwoLevel/SupervisionTaskA-C"

//内容管理
import Notice from '../containers/TwoLevel/ContentManagement/Notice'
import Platform from '../containers/TwoLevel/ContentManagement/Platform'
import Information from '../containers/TwoLevel/ContentManagement/Information'
import System from "../containers/TwoLevel/ContentManagement/system"

//督导对象
import ExaminationResult from '../containers/ThreeLevel/ExaminationResult'
import AnnualAssessment from '../containers/ThreeLevel/AnnualAssessment'
import FeedbackInformation from "../containers/ThreeLevel/FeedbackInformation"
import SupervisionObject from "../containers/ThreeLevel/SupervisionObject"

import Web from '../containers/DataType/web.js'

export default {
  path: '/',
  component:ManagerMainContainer,
  indexRoute: { component: PersonalNews },
  childRoutes: [
    { path: 'HomePageContainer', component: HomePageContainer },
    { path: 'SuperviseCity', component: SuperviseCity },
    { path: 'SuperviseCounty', component: SuperviseCounty },
    { path: 'SuperviseDepartment', component: SuperviseDepartment },
    { path: 'SuperviseTarget', component: SuperviseTarget },
    { path: 'AssessmentScore', component: AssessmentScore },
    { path: 'ClassA', component:ClassA},
    { path: 'ClassB', component:ClassB},
    { path: 'ClassC', component:ClassC},
    { path: 'LeadingGroup', component:LeadingGroup},
    { path: 'ProvincialGovernment', component: ProvincialGovernment},
    { path: 'DepartmentManagement', component: DepartmentManagement},
    { path: 'Municipalities', component: Municipalities},
    { path: 'StraightCounty', component: StraightCounty},
    { path: 'ProvincialDepartments', component: ProvincialDepartments},
    { path: 'ScoresFor', component: ScoresFor},
    { path: 'ProgressCity', component: ProgressCity},
    { path: 'SupervisionTaskA', component: SupervisionTaskA},
    { path: 'Examine', component: Examine},
    { path: 'AssessmentProgressA', component: AssessmentProgressA},
    { path: 'AssessmentProgressB', component: AssessmentProgressB},
    { path: 'AssessmentProgressC', component: AssessmentProgressC},
    { path: 'SupervisionTaskAB', component: SupervisionTaskAB},
    { path: 'SupervisionTaskAC', component: SupervisionTaskAC},
    { path: 'PersonInfo', component: PersonInfo},
    { path: 'PersonalNews', component: PersonalNews},
    { path: 'Notice', component: Notice},
    {path:'Platform',component:Platform},
    {path:'Information',component:Information},
    {path:'System',component:System},

    {path:'ExaminationResult',component:ExaminationResult},
    {path:'annualAssessment',component:AnnualAssessment},
    {path:'FeedbackInformation',component:FeedbackInformation},
    {path:'SupervisionObject',component:SupervisionObject},
		{path:'web',component:web},

  ]
}
