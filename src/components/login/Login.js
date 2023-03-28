import React from 'react'
import { Button, CircularProgress } from '@mui/material'
import { TiVendorMicrosoft } from 'react-icons/ti';
import {login} from '../../firebase/firebase';

const Login = () => {

    const [loader, setLoader] = React.useState(false);

    const handleMicrosoftLogin = async () => {
        setLoader(true);
        await login();
        setLoader(false);
    }

    return (
        <div> <Button
            variant="outlined"
            startIcon={<TiVendorMicrosoft style={{ color: '#0000FF' }} />}
            onClick={() => handleMicrosoftLogin()}
        >
            {loader ? <CircularProgress style={{ color: 'black' }} size={26} /> : 'Login with Microsoft'}
        </Button></div>
    )
}

export default Login