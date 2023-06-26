import React, { useState } from 'react';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import logoImage from 'assets/3rd Park Logo.png';
import {
    AppBar,
    Button,
    Box,
    Divider,
    Drawer,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Toolbar,
    useTheme
} from '@mui/material';

import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
    LightModeOutlined,
    DarkModeOutlined,
    Menu,
    Search,
    ArrowDropDownOutlined,
    Handshake
} from '@mui/icons-material';

const Navbar = ({
    user,
    isSidebarOpen,
    setIsSidebarOpen,
}) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
        sx={{
            position: 'static',
            background: 'none',
            boxshadow: 'none',
        }}
    >
        <Toolbar
            sx={{ justifyContent: 'space-between'}}
        >
            { /* LEFT SIDE */}
            <FlexBetween>
                <IconButton onClick={ () => setIsSidebarOpen(!isSidebarOpen)}>
                    <Menu />
                </IconButton>
                <FlexBetween
                    backgroundColor={theme.palette.background.alt}
                    borderRadius='9px'
                    gap='2rem'
                    p='0.1rem 1.5rem'
                >
                    <InputBase placeholder='Search...' />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>

            {/* Right Side*/}
            <FlexBetween gap='1.5rem'>
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined sx={{ fontsize: '25px'}} />
                    ) : (
                        <LightModeOutlined sx={{ fontsize: '25px'}} />
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{ fontsize: '25px'}} />
                </IconButton>
                <FlexBetween>
                    <Button onClick={handleClick} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textTransform: "none", gap: "1rem"}}>
                        <Box 
                            component="img"
                            alt="profile"
                            src={logoImage}
                            height="30px"
                            width="30px"
                            borderRadius="70%"
                            sx={{ objectFit: "cover"}}
                            />
                            <Box textAlign="left">
                                  <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.secondary[100]}}>
                                    {user.name}
                                  </Typography>
                                  <Typography fontSize="0.75rem" sx={{ color: theme.palette.secondary[200]}}>
                                    {user.role}
                                  </Typography>
                                  </Box>
                                  <ArrowDropDownOutlined
                                    sx={{ color: theme.palette.secondary[300], fontSize: "25px"}}
                                  />
                    </Button>
                    <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center"}}>
                        <menuItem onClick={handleClose}> Log Out</menuItem>
                    </Menu>
                </FlexBetween>
            </FlexBetween>
        </Toolbar>
    </AppBar>
  )
};

export default Navbar;