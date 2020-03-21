import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './ArticleListView';
import ArticleDetail from './ArticleDetailView';
import Login from './Login';


const BaseRouter = () => (
  <div>
    <Route exact path='/' component={ArticleList}/>
    <Route exact path='/articles/:articleID/' component={ArticleDetail}/>
    <Route exact path='/login/' component={Login}/>
  </div>


);

export default BaseRouter;
