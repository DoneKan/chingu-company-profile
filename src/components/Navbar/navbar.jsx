import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home,
  Info,
  DesignServices,
  ContactMail,
  ArrowDropDown,
  Construction,
  ThreeDRotation,
  Person,
  Login,
  Logout
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Create AnimatedBox for efficient animations
const AnimatedBox = motion(Box);

// HideOnScroll component for showing/hiding navbar while scrolling
const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  // Handle scroll events for navbar appearance change
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Menu handlers
  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigation items
  const navItems = [
    { text: 'Home', path: '/', icon: <Home /> },
    { text: 'About', path: '/about', icon: <Info /> },
    { text: 'Contact', path: '/contact', icon: <ContactMail /> }
  ];

  const serviceItems = [
    { text: 'Studio', path: '/services/studio', icon: <DesignServices /> },
    { text: 'Experience', path: '/services/experience', icon: <ThreeDRotation /> },
    { text: 'Transcendence', path: '/services/transcendence', icon: <Construction /> }
  ];

  const userMenuItems = [
    { text: 'Profile', path: '/profile', icon: <Person /> },
    { text: 'Login', path: '/login', icon: <Login /> },
    { text: 'Logout', path: '/logout', icon: <Logout /> }
  ];

  // Check if a path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Mobile drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        p: 2,
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ 
          my: 2, 
          color: 'black',
          textDecoration: 'none',
          fontWeight: 700,
          letterSpacing: 1
        }}>
          CHINGU
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.text} 
            disablePadding 
            component={RouterLink} 
            to={item.path}
            sx={{
              backgroundColor: isActive(item.path) ? `${theme.palette.primary.main}15` : '',
              '&:hover': {
                backgroundColor: `${theme.palette.primary.main}10`,
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: isActive(item.path) ? theme.palette.primary.main : '' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ 
                fontWeight: isActive(item.path) ? 600 : 400,
                color: isActive(item.path) ? theme.palette.primary.main : 'inherit'
              }}
            />
          </ListItem>
        ))}

        <ListItem 
          button 
          onClick={(e) => e.stopPropagation()}
          sx={{
            backgroundColor: isActive('/services') ? `${theme.palette.primary.main}15` : 'transparent',
            '&:hover': {
              backgroundColor: `${theme.palette.primary.main}10`,
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <DesignServices />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>

        {serviceItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={RouterLink} 
            to={item.path}
            sx={{ 
              pl: 4,
              backgroundColor: isActive(item.path) ? `${theme.palette.primary.main}10` : 'transparent',
              '&:hover': {
                backgroundColor: `${theme.palette.primary.main}05`,
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: isActive(item.path) ? theme.palette.primary.main : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{ 
                fontWeight: isActive(item.path) ? 600 : 400,
                color: isActive(item.path) ? theme.palette.primary.main : 'inherit'
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      
        <AppBar 
          position="fixed" 
          elevation={scrolled ? 4 : 0}
          sx={{
            transition: 'all 0.3s ease',
            bgcolor: scrolled ? 'background.paper' : '',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? 4 : 'none',
            color: scrolled ? 'text.primary' : 'black'
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Brand logo */}
              <AnimatedBox
                component={RouterLink}
                to="/"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  mr: 2
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Typography
                    variant="h5"
                    noWrap
                    sx={{
                      fontWeight: 700,
                      letterSpacing: '0.1rem',
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box component="span" sx={{ display: 'inline-block', position: 'relative' }}>
                      C
                      <Box
                        component="span"
                        sx={{
                          position: 'absolute',
                          top: -3,
                          right: -6,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          bgcolor: theme.palette.secondary.main
                        }}
                      />
                    </Box>
                    HINGU
                  </Typography>
                </Box>
              </AnimatedBox>

              {/* Mobile menu icon */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              {/* Desktop navigation links */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    sx={{ 
                      mx: 1, 
                      color: 'inherit',
                      position: 'relative',
                      '&::after': isActive(item.path) ? {
                        content: '""',
                        position: 'absolute',
                        width: '70%',
                        height: '3px',
                        bottom: '6px',
                        left: '15%',
                        backgroundColor: theme.palette.secondary.main,
                        borderRadius: '2px'
                      } : {}
                    }}
                  >
                    {item.text}
                  </Button>
                ))}

                {/* Services dropdown */}
                <Button
                  onClick={handleOpenServicesMenu}
                  sx={{ 
                    color: 'inherit',
                    mx: 1,
                    position: 'relative',
                    '&::after': isActive('/services') ? {
                      content: '""',
                      position: 'absolute',
                      width: '70%',
                      height: '3px',
                      bottom: '6px',
                      left: '15%',
                      backgroundColor: theme.palette.secondary.main,
                      borderRadius: '2px'
                    } : {}
                  }}
                  endIcon={<ArrowDropDown />}
                >
                  Services
                </Button>
                <Menu
                  anchorEl={anchorElServices}
                  open={Boolean(anchorElServices)}
                  onClose={handleCloseServicesMenu}
                  sx={{
                    mt: '45px',
                    '& .MuiPaper-root': {
                      borderRadius: 2,
                      boxShadow: 3,
                      mt: 1.5
                    }
                  }}
                  transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                >
                  {serviceItems.map((item) => (
                    <MenuItem 
                      key={item.text} 
                      onClick={handleCloseServicesMenu}
                      component={RouterLink}
                      to={item.path}
                      sx={{ 
                        px: 2, 
                        py: 1,
                        minWidth: 180,
                        borderLeft: isActive(item.path) ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent'
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40, color: isActive(item.path) ? theme.palette.primary.main : 'inherit' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={item.text}
                        primaryTypographyProps={{ 
                          fontWeight: isActive(item.path) ? 600 : 400 
                        }}
                      />
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* User menu */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="User"
                      src="/static/images/avatar/default.jpg"
                      sx={{ 
                        width: 36, 
                        height: 36,
                        border: `2px solid ${scrolled ? theme.palette.primary.main : 'white'}`
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{
                    mt: '45px',
                    '& .MuiPaper-root': {
                      borderRadius: 2,
                      boxShadow: 3
                    }
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {userMenuItems.map((item) => (
                    <MenuItem 
                      key={item.text} 
                      onClick={handleCloseUserMenu}
                      component={RouterLink}
                      to={item.path}
                    >
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
     

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better mobile performance
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box' },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Add toolbar placeholder to prevent content from hiding under the navbar */}
      <Toolbar />
    </Box>
  );
};

export default Navbar;