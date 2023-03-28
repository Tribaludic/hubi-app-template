import React from 'react';
import LeftMenu from '../../components/left_menu/LeftMenu';
import GlobalAppBar from '../../components/app_bar/GlobalAppBar';

const Page2 = () => {
    const [leftDrawer, setLeftDrawerState] = React.useState(false);
    return (
        <div>
            <LeftMenu state={leftDrawer} setState={setLeftDrawerState}/>
            <GlobalAppBar title={'PAGE 2'}/>
        </div>
    )
}

export default Page2