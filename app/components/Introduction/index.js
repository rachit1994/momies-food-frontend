import React, { useEffect, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Highlight from './Highlight';
import Plate from 'images/introBg.png';
import A from 'images/1.png';
import B from 'images/2.png';
import C from 'images/3.png';
import D from 'images/4.png';
import E from 'images/5.png';
import F from 'images/6.png';
import G from 'images/7.png';
import ImageResponsive from './imageResponsive';

export const Introduction = () => (
    <Grid
        container
        alignItems="center"
        spacing={2}
        direction="row"
    >
        <Grid item xs={1}></Grid>
        <Grid item lg={6} xs={11}>
            <Typography variant="h4" gutterBottom>
                MISSING YOUR <Highlight>MOTHERS</Highlight> HANDS ?
            </Typography>
            <Typography variant="overline">
                Introducing India's Largest Home made food delivery, Made by Mothers served to children
            </Typography>
            <Grid
                container
                spacing={2}
                alignContent="center"
                justify="center"
            >
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={4}
                    >
                        <ImageResponsive item xs={2}>
                            <img src={A} width="100%" height="100%"/>
                        </ImageResponsive>
                        <ImageResponsive item xs={2}>
                            <img src={C}/>
                        </ImageResponsive>
                        <ImageResponsive item xs={2}>
                            <img src={E} />
                        </ImageResponsive>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={5} xs={12}>
            <img src={Plate} />
        </Grid>
    </Grid>
);

export default Introduction;