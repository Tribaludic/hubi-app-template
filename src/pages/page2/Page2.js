import React, { useEffect, useState } from 'react';
import GlobalAppBar from '../../components/app_bar/GlobalAppBar';

import UsfqServices from '../../services/UsfqServices';
import LoadingPopup from '../../components/loading_popup/LoadingPopup';
import { Box, Button, TextField, Grid } from '@mui/material';
import Swal from 'sweetalert2'
const Page2 = () => {

    const [loadingPopup, setLoadingPopup] = useState(false);
    const [bannerId, setBannerId] = useState('');

    useEffect(() => {
        UsfqServices.WSGetPropAllUserAD('abustamante@usfq.edu.ec');
    }, []);

    const handleBannerId = async () =>{
        if(bannerId.length!==8){
            Swal.fire({
                icon: 'error',
                title: 'Codigo Banner incorrecto',
                text: 'El formato del codigo banner no es correcto',
                confirmButtonColor: '#c41b1e',
              });
              return;
        }
        setLoadingPopup(true);
        const data = await UsfqServices.WSGetPropAllUserAD('abustamante@usfq.edu.ec');
        setLoadingPopup(false);
        console.log(data);
    }

    return (
        <div>
            <GlobalAppBar title={'PAGE 2'} />


            <Box p={2}>
                <Grid container>
                    <Grid item>
                        <TextField
                            type='number'
                            required
                            label="Codigo Banner"
                            onChange={(event)=>setBannerId(event.target.value)}
                            size="small"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        />
                    </Grid>
                    <Grid item>
                        <Box
                            width={10}
                        />
                    </Grid>
                    <Grid item alignItems="stretch" style={{ display: "flex" }}>
                        <Button color="secondary" variant="contained" size="small" onClick={handleBannerId}>
                            Buscar
                        </Button>
                    </Grid>
                </Grid>

            </Box>



            {loadingPopup && <LoadingPopup />}
        </div>
    )
}

export default Page2