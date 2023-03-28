import React from 'react';
import LeftMenu from '../../components/left_menu/LeftMenu';
import GlobalAppBar from '../../components/app_bar/GlobalAppBar';

const Page1 = () => {
    const [leftDrawer, setLeftDrawerState] = React.useState(false);
    return (
        <div>
            <LeftMenu state={leftDrawer} setState={setLeftDrawerState}/>
            <GlobalAppBar title={'PAGE 1'}/>
        </div>
    )
}

export default Page1