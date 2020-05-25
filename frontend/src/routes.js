import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import RateEdit from "./containers/RateEditView";
import Login from "./containers/Login";
import ChangePassword from "./containers/ChangePassword";
import Main from "./containers/Main";
import Vote from "./containers/Vote";
import RateList from "./containers/RateListView";
import SchedulerController from "./containers/schedule/SchedulerController";
import Sponsors from "./containers/Sponsors";
import Organisers from "./containers/Organisers";
import OrganizerList from "./containers/OrganisersDetail";


const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticleList} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
    <Route exact path="/rate/:voteID/" component={RateEdit} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/password/" component={ChangePassword} />{" "}
    <Route exact path="/main/" component={Main} />{" "}
    <Route exact path="/vote/" component={Vote} />{" "}
    <Route exact path="/rate/" component={RateList} />{" "}
    <Route exact path="/schedule/" component={SchedulerController} />{" "}
    <Route exact path="/sponsors/" component = {SponsorList} />{" "}
    <Route exact path="/organisers/" component = {OrganizerList} />{" "}
  </div>
);

export default BaseRouter;
