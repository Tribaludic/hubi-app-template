import React, { useEffect } from 'react';
import GlobalAppBar from '../../components/app_bar/GlobalAppBar';
import {checkSession} from '../../firebase/firebase';

const Page2 = () => {
    return (
        <div>
            <GlobalAppBar title={'PAGE 2'}/>
        </div>
    )
}

export default Page2