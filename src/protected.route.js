import React, { Children } from "react";
import {Route, Redirect} from 'react-router-dom';

import auth from './auth';

export const ProtectedRoute = ({children, ...rest}) => {
    return (
        <Route {...rest} 
            render={(props) => {
                //let {test} = {...rest};
                if(auth.isAuthenticated()) {
                    return children;
                } else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: props.location
                        }
                    }></Redirect>
                }
            }}></Route>
    );
}
