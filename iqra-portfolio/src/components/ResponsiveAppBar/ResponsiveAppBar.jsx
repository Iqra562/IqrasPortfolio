

import React, { useState, useEffect } from 'react';
import { Box, Button, styled } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom'; // Ensure this is imported
import './ResponsiveAppBar.css';
import colors from '../../ThemeProvider/colors';

const ResponsiveAppBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activePath, setActivePath] = useState(currentPath);
  const [exitingPath, setExitingPath] = useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = [
    { name: 'Home', path: '/home' },
  // { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];
  useEffect(() => {
    setActivePath(currentPath);
  }, [currentPath]);

  const handleNavItemClick = (path) => {
    handleCloseNavMenu(); 

    if (activePath) {
      setExitingPath(activePath);
    }

    setActivePath(path); 

    setTimeout(() => {
      setExitingPath(null);
    }, 1000); 
  };


  return (

    <AppBar position="static"  >
    <Container maxWidth="lg">
      <Toolbar disableGutters>

      <Typography
          variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              flexGrow:1,
              color: 'inherit', 
              textDecoration: 'none',
              fontFamily: 'Roboto',
              letterSpacing:'normal'  
            }}
          >
            <Link to="/home">
            Iqra
            </Link>
          </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Box sx={{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"space-between"}}>
<Typography>
  Iqra
</Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            disableRipple
            
            >
            <MenuIcon />
          </IconButton>
          </Box>       
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              marginTop: '55px',

              backgroundColor: 'rgba(1, 1, 0, 0.9)',
              height: '60%',
              '& .MuiList-root': {
                padding: '0px',
              },
          
              '& .MuiPaper-root': {
                position:"relative",
                left:"0",
                backgroundColor: 'transparent',
                padding:'0px',
                height:'100%',
                boxShadow:'0'
              },
            }}
            
            
          >
          {pages.map((page) => (
            <MenuItem
  className=""
  key={page.name}
  onClick={handleCloseNavMenu}
  style={{ color: 'white', width: '100vh', height:'100%', }}
>
  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Typography textAlign="center" style={{ position: 'relative', zIndex: 1 }}>
      {page.name}
      <AnimatePresence>
        {(currentPath === page.path || exitingPath === page.path) && (
          <motion.div
            initial={{ width: 0, left: '50%', color: '#69b6fa' }}
            animate={{ width: '100%', left: 0, color: currentPath === page.path ? '#69b6fa' : 'white' }}
            exit={{ width: 0, left: '50%', opacity: 0, color: 'white' }}
            transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              height: '2px',
              bottom: -2,
              backgroundColor: '#69b6fa',
              zIndex: 0,
              left: 0,
              right: 0,
            }}
            onAnimationComplete={() => {
              if (exitingPath === page.path) {
                setExitingPath(null);
              }
            }}
          />
        )}
      </AnimatePresence>
    </Typography>
  </Link>
</MenuItem>


))}

<MenuItem>
<Box sx={{backgroundColor:"",color:colors.subtitle,padding:"9px",boxShadow:"0.5px 0.2px 0px #69b6fa ",borderRadius:"3px",display: { xs: 'flex', md: 'none' }}}>
      <Typography>
        Resume
      </Typography>
    </Box> 
</MenuItem>
          </Menu>
       
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Box key={page.name} sx={{ position: 'relative', mx: 2 }}>
          <Button
            disableRipple
            onClick={() => handleNavItemClick(page.path)}
            sx={{
              my: 2,
              color: 'white',
             display: 'block',
              position: 'relative',
              zIndex: 1,
              textTransform: 'capitalize',
              fontSize: '16px',
            }}
            component={Link}
            to={page.path}
          >
            <div className="nav-item">
              {page.name}
              <AnimatePresence>
                {(currentPath === page.path || exitingPath === page.path) && (
                  <motion.div
                    initial={{ width: 0, left: '50%' , color: '#s69b6fa' }}
                    animate={{ width: '100%', left: 0,color: currentPath === page.path ? '#69b6fa' : 'white'  }}
                    exit={{ width: 0, left: '50%', opacity: 0, color: 'white' }}
                    transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      height: '2px',
                      bottom: -2,
                      color:'#69b6fa',
                      backgroundColor: '#69b6fa',
                      zIndex: 0,
                    }}
                    onAnimationComplete={() => {
                      if (exitingPath === page.path) {
                        setExitingPath(null);
                      }
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          </Button>
        </Box>
      ))}
    </Box>                    
          <Box sx={{backgroundColor:"",color:colors.subtitle,padding:"9px",boxShadow:"0.5px 0.2px 0px #69b6fa ",borderRadius:"3px",display: { xs: 'none', md: 'flex' }}}>
      <Typography>
        Resume
      </Typography>
    </Box> 

      </Toolbar>
    </Container>
  </AppBar>
    
  );
};

export default ResponsiveAppBar;
