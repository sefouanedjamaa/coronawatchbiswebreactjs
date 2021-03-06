import React, { Component } from 'react';
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


// *****Pages
//Authentication
const Login = React.lazy(() => import('./Authentication/SignIn'));
const SignUp = React.lazy(() => import('./Authentication/Signup'));
const Logout = React.lazy(() => import('./Authentication/Signout'));
const Err404= React.lazy(() => import('./Authentication/Err404'));
const Forgotpassword= React.lazy(() => import('./Authentication/Forgot_password'));
const Recoverpassword= React.lazy(() => import('./Authentication/Recover_password'));
//Admin
const Admindashboard= React.lazy(() => import('./Admin/App'));
const Users= React.lazy(() => import('./Admin/views/Users'));
// //Redactor
const Redactordashboard= React.lazy(() => import('./Redactor/App'));
const Articles= React.lazy(() => import('./Redactor/views/Articles'));
// //Moderator
const Moderatordashboard= React.lazy(() => import('./Moderator/App'));
const ModeratorArticles= React.lazy(() => import('./Moderator/views/Articles'));
const Inbox= React.lazy(() => import('./Moderator/views/Inbox'));
const HealthAgentStatistics= React.lazy(() => import('./Moderator/views/HealthAgent_statistics'));
const RiskZones= React.lazy(() => import('./Moderator/views/RiskZones'));
// //Health Agent
const HealthAgentdashboard= React.lazy(() => import('./HealthAgent/App'));
const HealthAgenthistoric= React.lazy(() => import('./HealthAgent/views/Historic'));
// //Web User
const WebUserdashboard= React.lazy(() => import('./WebUser/App'));
const WebUserArticles= React.lazy(() => import('./WebUser/views/Articles'));
const WebUserStatistics= React.lazy(() => import('./WebUser/views/HealthAgent_statistics'));
const WebUserRiskZones= React.lazy(() => import('./WebUser/views/RiskZones'));


class App extends Component {

  render() {
    return (
      <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
            {/*Authentication*/}
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/signup" name="Login Page" component={SignUp} />
            <Route exact path="/logout" name="Logout Page" component={Logout} />
            <Route exact path="/forgot_password" name="Forgot_password" component={ Forgotpassword}/>
            <Route exact path="/recover_password" name="Recover_password" component={ Recoverpassword}/>
            <Route exact path="/err404" name="ERR404" component={Err404}/> 
            {/*SuperAdmin*/}
            <Route exact path="/admin_dashboard" name="Admin_dashboard" component={ Admindashboard}/>
            <Route exact path="/admin_dashboard/home" name="Admin_home" component={Admindashboard}/>
            <Route exact path="/admin_dashboard/users" name="Admin_users" component={ Users}/> 
            {/*Redactor*/}
            <Route exact path="/redactor_dashboard" name="Redactor_dashboard" component={Redactordashboard}/>
            <Route exact path="/redactor_dashboard/home" name="Redactor_home" component={Redactordashboard}/>
            <Route exact path="/redactor_dashboard/articles" name="Redactor_articles" component={ Articles}/>
            {/*Moderator*/}
            <Route exact path="/moderator_dashboard" name="Moderator_dashboard" component={Moderatordashboard}/>
            <Route exact path="/moderator_dashboard/home" name="Moderator_home" component={Moderatordashboard}/>
            <Route exact path="/moderator_dashboard/articles" name="Moderator_articles" component={ModeratorArticles}/>
            <Route exact path="/moderator_dashboard/inbox" name="Moderator_inbox" component={Inbox}/>
            <Route exact path="/moderator_dashboard/healthAgent_statistics" name="Moderator_healthAgent_statistics" component={HealthAgentStatistics}/>
            <Route exact path="/moderator_dashboard/riskZones" name="Moderator_risk_zones" component={RiskZones}/>
            {/*Health Agent*/}
            <Route exact path="/healthAgent_dashboard" name="HealthAgent_dashboard" component={HealthAgentdashboard}/>
            <Route exact path="/healthAgent_dashboard/historic" name="Historic" component={HealthAgenthistoric}/>
            {/*WebUser*/}
            <Route exact path="/WebUser_dashboard" name="WebUser_dashboard" component={WebUserdashboard}/>
            <Route exact path="/WebUser_dashboard/home" name="WebUser_home" component={WebUserdashboard}/>
            <Route exact path="/WebUser_dashboard/articles" name="WebUser_articles" component={WebUserArticles}/>
            <Route exact path="/WebUser_dashboard/statistics" name="WebUser_statistics" component={WebUserStatistics}/>
            <Route exact path="/WebUser_dashboard/riskZones" name="WebUser_risk_zones" component={WebUserRiskZones}/>
            {/*General*/}
            <Route exact path="/" name="Home" component={Login}  />
            <Route component={Login}/> 
            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

export default App;
