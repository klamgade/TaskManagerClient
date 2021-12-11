import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const mainNavigation = (props) => {
  return (
    <Fragment>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6'>Task Manager</Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default mainNavigation;
