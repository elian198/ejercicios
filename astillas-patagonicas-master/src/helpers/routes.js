import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ user, children, ...restProps }) => {

    return (

        <Route {...restProps}

            render={({ location }) => {

                console.log(location);

                if (user) return children;

                if (!user) return <Redirect to={{
                    pathname: '/',
                    state: { from: location }
                }} />

                return null;

            }}

        />

    )
};