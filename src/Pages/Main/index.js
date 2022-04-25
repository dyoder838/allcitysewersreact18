import React from 'react';
import CustomStyles from './style.module.css';
import Grid from '@mui/material/Grid';
import Nav from '../../Components/Nav';


export default function MainPage() {

    

    return (

        <Grid container className={CustomStyles.root} >
            
            <Grid item xs={12}>

                <Nav />

            </Grid>

            <Grid item xs={6}>

                <div>
                   
                </div>

            </Grid>

        </Grid>   

    )
}