import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from './Toolbar';
import Typography from '@material-ui/core/Typography';
import HideOnScroll from 'components/HideOnScroll';
import Button from '@material-ui/core/Button';
import logo from 'images/logo.jpg';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

export const Header = (props) => (
    <React.Fragment>
        <HideOnScroll {...props}>
            <AppBar position="sticky">
                <Toolbar>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item>
                            {/* <img src={logo} alt="logo" className="logo" /> */}
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" noWrap>
                                Momies food
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                        <Grid item>
                            <Link href="/">
                                <Button>Home</Button>
                            </Link>
                            <Link href="/register">
                                <Button color="secondary">Register</Button>
                            </Link>
                        </Grid>
                    </Grid>
                    
                </Toolbar>
            </AppBar>
        </HideOnScroll>
        <Toolbar />
    </React.Fragment>
);

export default Header;
