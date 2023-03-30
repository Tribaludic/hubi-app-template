import React, { useEffect } from 'react';
import GlobalAppBar from '../../components/app_bar/GlobalAppBar';
import {checkSession} from '../../firebase/firebase';

const Page1 = () => {
    return (
        <div>
            <GlobalAppBar title={'PAGE 1'}/>
        </div>
    )
}

export default Page1