import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children, sesion}) => {
    
       if(sesion === true){
        return children
       }else{
        return <Navigate replace to="/sign"/>
       }
    
}
 
export default PrivateRoute;