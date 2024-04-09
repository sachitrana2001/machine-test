// import React from "react";
// import { Route,Routes } from "react-router-dom";

// const AppRoute = ({component: Component,path,layout: Layout,currentUser,isAuthProtected,...rest}) => (
//     <Routes path={path} {...rest} render={props => {
        
//         return (
//             <Layout page={path} currentUser={currentUser}>
//                 <Component currentUser={currentUser} {...props}/>
//             </Layout>
//         );
//     }}/>
// );
// export default AppRoute;
import React from "react";
import { Route, Navigate } from "react-router-dom";

const AppRoute = ({Component, path, Layout, currentUser, isAuthProtected }) => {
  console.log("check->>>path",path);
    return(
        <Layout page={path} currentUser={currentUser} >
        <Component currentUser={currentUser} />
      </Layout>
      )
      
};

export default AppRoute;
