import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        googleSignIn()
            .then(result =>{
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <p><small>Social Login</small></p>
            <p>
                <Button onClick={handleGoogleSignIn} variant="success"><FaGoogle></FaGoogle> Google</Button>{' '}
            </p>
        </div>
    );
};

export default SocialLogin;