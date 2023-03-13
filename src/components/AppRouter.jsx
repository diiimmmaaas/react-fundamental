import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";

const AppRouter = () => {
  const isAuth = true
  return (
    isAuth
      ? <Routes>
        {privateRoutes.map((route, index) =>
          <Route key={index} path={route.path} element={route.component}/>
        )}
        <Route path='/*' element={<Navigate to="/posts" replace/>}/>
      </Routes>
      : <Routes>
        {publicRoutes.map((route, index) =>
          <Route key={index} path={route.path} element={route.component}/>
        )}
        <Route path='/*' element={<Navigate to="/login" replace/>}/>
      </Routes>

  );
};

export default AppRouter;
