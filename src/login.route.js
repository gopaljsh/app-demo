import React from "react";
import {Route, Redirect} from 'react-router-dom';

export const LoginRoute = ({children, ...rest}) => {
    let email = localStorage.getItem('email');
    return (
        <Route {...rest} 
            render={(props) => 
            email ? (
                <Redirect
                  to={{
                    pathname: "/table",
                    state: { from: location }
                  }}
                />
              ) : (
                  children
                )}></Route>
    );
}
