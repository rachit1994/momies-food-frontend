import React, { useEffect, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Introduction from 'components/Introduction';
import JoinUs from 'components/JoinUs';

export const Home = () => (
    <>
        <Introduction />
        <JoinUs />
    </>
);

export default Home;