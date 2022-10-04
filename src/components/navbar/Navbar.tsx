
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button } from '@mui/material';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <AppBar position="static" className="header-container">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Halloween 
            </Typography>
          </Box>

          <Grid container justifyContent="flex-end">
            <Box display="flex" justifyContent="start">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Histórias
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Personagens
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar História
                </Typography>
              </Box>

                <Link to='/login' className='logout'>
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                        Logout
                      </Typography>
                  </Box>
                </Link>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;