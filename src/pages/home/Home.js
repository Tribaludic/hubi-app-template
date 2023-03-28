import React from 'react';
import LeftMenu from '../../components/left_menu/LeftMenu';
import GlobalAppBar from '../../components/app_bar/GlobalAppBar';

const Home = () => {
    const [leftDrawer, setLeftDrawerState] = React.useState(false);

    return (
        <div>
            <LeftMenu state={leftDrawer} setState={setLeftDrawerState}/>
            <GlobalAppBar title={'HOME'}/>
        </div>
    )
}

export default Home