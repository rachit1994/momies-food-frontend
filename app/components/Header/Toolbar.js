import React from 'react';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';

export const CustomToolbar = styled(Toolbar)`
    padding-left: 90px !important;
    padding-right: 90px !important;
    .logo {
        width: 50px;
        height: 50px;
    }
    & > button {
        margin: 0px 20px;
    }
`;

export default CustomToolbar;
