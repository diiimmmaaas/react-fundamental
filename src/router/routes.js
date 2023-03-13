import About from '../pages/About'
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import ErrorPage from "../pages/ErrorPage";
import {Navigate} from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
export const privateRoutes = [
  {path: '/about', component: <About/>},
  {path: '/posts', component: <Posts/>},
  {path: '/posts/:id', component: <PostIdPage/>},
  {path: '/error', component: <ErrorPage/>},
  {path: '/*', component: <Navigate to="/error" replace/>},
]

export const publicRoutes = [
  {path: '/login', component: <Login/>},
]
