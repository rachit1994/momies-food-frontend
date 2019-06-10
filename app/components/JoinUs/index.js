import React, { useEffect, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BackgroundBlue from './BackgroundBlue';
import Cooking from 'images/chef.png';
import Button from '@material-ui/core/Button';

export const JoinUs = () => (
    <BackgroundBlue
        container
        spacing={2}
        alignItems="center"
        justify="center"
        direction="column"
    >
        <Grid item style={{ marginTop: 50 }}>
            <Typography variant="h4" gutterBottom>Have Passion for Cooking?</Typography>
        </Grid>
        <Grid item>
            <Grid
                container
                spacing={4}
            >
                <Grid item lg={1} sm={false}></Grid>
                <Grid item sm={5}>
                    <Grid container alignItems="center" justify="center" direction="column" style={{ height: '100%' }}>
                        <Grid item>
                            <Typography gutterBottom>
                                Join our first Mother Entrepreneur community, who cook with passion and Get Recognition.
                            </Typography>
                        </Grid>
                        <Grid item style={{ marginTop: 20 }}>
                            <Button fullWidth variant="outlined" color="primary" style={{ border: 'solid 2px red'}}>
                                Cook for other children, Like your own !
                            </Button>
                        </Grid>
                    </Grid>
                    
                </Grid>

                <Grid item sm={6}>
                    <img src={Cooking} alt="cooking" height={400}/>
                </Grid>
            </Grid>

        </Grid>
    </BackgroundBlue>
);

export default JoinUs;