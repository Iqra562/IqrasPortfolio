// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import { Link, useLocation } from 'react-router-dom'; // Ensure this is imported
// import { motion } from 'framer-motion';
// import './ResponsiveAppBar.css';
// const pages = [
//   { name: 'Resume', path: '/resume' },
//   { name: 'Projects', path: '/projects' }
// ];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//                   <Link
//                     to={page.path}
//                     style={{ textDecoration: 'none', color: currentPath === page.path ? 'yellow' : 'inherit' }}
//                   >
//                     <Typography textAlign="center">
//                       {page.name}
//                     </Typography>
//                   </Link>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Box key={page.name} sx={{ position: 'relative', mx: 2 }}>
//                 <Button
//                 disableRipple
//                   onClick={handleCloseNavMenu}
//                   sx={{
//                     my: 2,
//                     color: currentPath === page.path ? '#69b6fa' : 'white',
//                     display: 'block',
//                     position: 'relative',
//                     zIndex: 1,
//                     textTransform:'capitalize',
//                     fontSize:'16px'
                
//                   }}
//                   component={Link}
//                   to={page.path}
//                 >
//    <div className="nav-item">
//             {page.name}
//             {currentPath === page.path && (
//                   <motion.div
//                     initial={{ width: 0, left: '50%' }}
//                     animate={{ width: '100%', left: 0 }}
//                     exit={{ width: 0, left: '50%' }}
//                     transition={{ duration: 1}}
                   
//                     style={{
//                       position: 'absolute',
//                       height: '2px',
//                       bottom: -2,
//                       backgroundColor: '#69b6fa',
//                       zIndex: 0,
//                     }}
//                   />
//                 )}
//           </div>
//                 </Button>
//                 <div>

//                 </div>
              
               
//               </Box>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;

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
  { name: 'About', path: '/about' },
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
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            
          >
            <MenuIcon />
          </IconButton>
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
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              height: '60%',
              '& .MuiList-root': {
                padding: '0px',
              },
          
              '& .MuiPaper-root': {
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
  style={{ color: 'white', width: '100vh', height:'100%' }}
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
      </Toolbar>
    </Container>
  </AppBar>
    
  );
};

export default ResponsiveAppBar;
