import React from 'react';
import GlobalAppBar from '../../components/app_bar/GlobalAppBar';
import Login from '../../components/login/Login';

const Home = () => {
    return (
        <div>
            <GlobalAppBar title={'HOME'}/>
            <Login/>
        </div>
    )
}

export default Home