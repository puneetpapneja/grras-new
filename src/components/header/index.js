import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Grid2,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useTheme, useMediaQuery } from '@mui/material';
import SocialMedia from 'components/social-media';
import Contact from 'components/contact';
import { MENUES } from 'utils/constants';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({}); // Track open submenus in the drawer

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setHoveredMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setHoveredMenu(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleSubMenuToggle = (menuLabel) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuLabel]: !prev[menuLabel]
    }));
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#000', padding: '8px 16px' }}>
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* Social Media Links */}
          <SocialMedia />
          {!isMobile && (
            <Typography
              variant="h7"
              sx={{ color: 'floralwhite', display: 'flex', alignItems: 'center' }}
            >
              Red Hat Authorized Training and Certification Partner since 2008
            </Typography>
          )}
          {/* Contact Details */}
          <Contact />
          {isMobile && (
            <Typography
              variant="body2"
              sx={{
                color: 'floralwhite',
                display: 'flex',
                alignItems: 'center',
                fontSize: 'x-small'
              }}
            >
              Red Hat Authorized Training and Certification Partner since 2008
            </Typography>
          )}
        </Toolbar>
      </AppBar>

      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" sx={{ color: 'black', display: 'flex', alignItems: 'center' }}>
            <img
              src="assets/images/logo.jpg"
              alt="Logo"
              style={{ height: 50, objectFit: 'contain', marginRight: '16px' }}
            />
          </Typography>

          {/* Responsive Menu */}
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
                sx={{ marginLeft: 'auto', color: 'black' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                <Box sx={{ width: 250 }}>
                  <List>
                    {MENUES.map((menu, index) => (
                      <React.Fragment key={index}>
                        <ListItem button onClick={() => handleSubMenuToggle(menu.label)}>
                          <ListItemText primary={menu.label} />
                          {menu.children ? (
                            openSubMenus[menu.label] ? (
                              <ExpandLessIcon />
                            ) : (
                              <ExpandMoreIcon />
                            )
                          ) : null}
                        </ListItem>
                        {menu.children && (
                          <Collapse in={openSubMenus[menu.label]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {menu.children.map((child, childIndex) => (
                                <React.Fragment key={childIndex}>
                                  <ListItem
                                    button
                                    sx={{ pl: 4 }}
                                    onClick={() =>
                                      child.children ? handleSubMenuToggle(child.label) : null
                                    }
                                  >
                                    <ListItemText primary={child.label} />
                                    {child.children ? (
                                      openSubMenus[child.label] ? (
                                        <ExpandLessIcon />
                                      ) : (
                                        <ExpandMoreIcon />
                                      )
                                    ) : null}
                                  </ListItem>
                                  {child.children && (
                                    <Collapse
                                      in={openSubMenus[child.label]}
                                      timeout="auto"
                                      unmountOnExit
                                    >
                                      <List component="div" disablePadding>
                                        {child.children.map((subChild, subIndex) => (
                                          <ListItem button key={subIndex} sx={{ pl: 6 }}>
                                            <a
                                              href={subChild.link}
                                              style={{
                                                textDecoration: 'none',
                                                color: 'inherit'
                                              }}
                                            >
                                              {subChild.label}
                                            </a>
                                          </ListItem>
                                        ))}
                                      </List>
                                    </Collapse>
                                  )}
                                </React.Fragment>
                              ))}
                            </List>
                          </Collapse>
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            MENUES.map((menu, index) => (
              <Box
                key={index}
                onMouseEnter={(e) => handleMenuOpen(e, menu.label)}
                onMouseLeave={handleMenuClose}
                sx={{ position: 'relative', display: 'inline-block', marginLeft: '16px' }}
              >
                <Button
                  sx={{
                    color: hoveredMenu === menu.label ? '#1976d2' : 'black',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    margin: '0 10px',
                    '&:hover': {
                      color: '#1976d2 ', // Hover color for button text
                      backgroundColor: 'transparent' // Ensure no background color is added
                    }
                  }}
                >
                  {menu.label}
                </Button>
                {menu.children && (
                  <Menu
                    anchorEl={anchorEl}
                    open={hoveredMenu === menu.label}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    MenuListProps={{ onMouseLeave: handleMenuClose }}
                    slotProps={{
                      paper: {
                        sx: {
                          top: '90px !important', // Adjust the top position
                          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)', // Optional styling
                          padding: 2, // Optional padding
                          overflow: 'auto',
                          '& .MuiMenuItem-root:hover': {
                            backgroundColor: '#f0f0f0', // Hover background color
                            color: '#1976d2' // Hover text color
                          }
                        }
                      }
                    }}
                  >
                    <Grid2 container spacing={1} sx={{ minWidth: '100px' }}>
                      {menu.children.map((child, childIndex) => (
                        <Grid2 item xs={2} key={childIndex}>
                          {child?.children?.length ? (
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 'bold', mb: 1, minHeight: 28 }}
                            >
                              {child.label}
                            </Typography>
                          ) : (
                            <MenuItem key={`menu_item_${childIndex}`}>
                              <a
                                href={child.link}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                              >
                                {child.label}
                              </a>
                            </MenuItem>
                          )}

                          {child.children &&
                            child.children.map((subChild, subIndex) => (
                              <MenuItem key={subIndex}>
                                <a
                                  href={subChild.link}
                                  style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                  {subChild.label}
                                </a>
                              </MenuItem>
                            ))}
                        </Grid2>
                      ))}
                    </Grid2>
                  </Menu>
                )}
              </Box>
            ))
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
