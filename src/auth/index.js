import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import CustomButton from 'components/CustomButton';

function Login() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="d-grid gap-2">
            <CustomButton 
                actionButton={loginWithRedirect}
                text='Login'
                color='primary'
            />
        </div>
    )
}

export default Login