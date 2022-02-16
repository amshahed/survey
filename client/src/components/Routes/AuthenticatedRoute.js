import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

let AuthenticatedRoute = (props) => {
    let { component: Component, ...rest } = props;
    let { token } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(props) =>
                token ? (
                    <Component props={props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export default AuthenticatedRoute;
