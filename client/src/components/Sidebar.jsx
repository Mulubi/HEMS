import React from 'react';
import Box from '@mui/material/Box';
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
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
    HomeRepairServiceOutlined,
    RoomOutlined
} from '@mui/icons-material';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import logoImage from 'assets/3rd Park Logo.png';

const navItems = [
    {
        text: 'Dashboard',
        icon: <HomeOutlined />
    },
    {
        text: 'User Area',
        icon: null
    },
    {
        text: 'Location',
        icon: <RoomOutlined />
    },
    {
        text: 'Work Requests',
        icon: <ReceiptLongOutlined />
    },
    {
        text: 'Equipment',
        icon: <HomeRepairServiceOutlined/>
    },
    {
        text: 'Maintenance Activities',
        icon: null
    },
    {
        text: 'Transfers',
        icon: <ReceiptLongOutlined/>
    },
    {
        text: 'Overview',
        icon: <PointOfSaleOutlined />
    },
    {
        text: 'Daily',
        icon: <TodayOutlined />
    },
    {
        text: 'Monthly',
        icon: <CalendarMonthOutlined />
    },
    {
        text: 'Breakdown',
        icon: <PieChartOutlined />
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />,
    },
]


const Sidebar = ({
    user,
    drawerWidth,
    isSidebarOpen,
    isNonMobile,
    setIsSidebarOpen
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);
  return (
    <Box component='nav'>
        {isSidebarOpen && (
            <Drawer
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                variant='persistent'
                anchor='left'
                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper': {
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSizing: 'border-box',
                        borderWidth: isNonMobile ? 0 : '2px',
                        width: drawerWidth
                    }
                }}
            >
                <Box width='100%'>
                    <Box m='1.5rem 2rem 2rem 3rem'>
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box display='flex' alignItems='center' gap='0.5rem'>
                                <Typography variant='h4' fontweight='bold'>
                                    WICE HEMS
                                </Typography>
                            </Box>
                            {! isNonMobile && (
                                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft />

                                </IconButton>
                            )}
                        </FlexBetween>

                    </Box>
                    <List>
                        {navItems.map(({ text, icon }) => {
                            if (!icon) {
                                return (
                                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem'}}>
                                        {text}

                                    </Typography>
                                );
                            }
                            const lcText = text.toLowerCase();
                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate('/${lcText}');
                                            setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor: active === lcText
                                                ? theme.palette.secondary[300]
                                                : 'transparent',
                                                color:
                                                active === lcText
                                                ? theme.palette.primary[600]
                                                : theme.palette.secondary[200],
                                            }}
                                            >
                                                <ListItemIcon
                                                sx={{
                                                    ml: '2rem',
                                                    color: active === lcText
                                                    ? theme.palette.primary[600]
                                                    : theme.palette.secondary[200],
                                                }}
                                                >
                                                    {icon}
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                                {active === lcText && (
                                                    <ChevronRightOutlined sx={{ ml: 'auto'}} />
                                                )}
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
                <Box sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: "theme.palette.primary[600]",
                    '&:hover': {
                        backgroundColor: "theme.palette.secondary[200]",
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
                >
                    <Divider/>
                    <FlexBetween textTransform="none" gap="1rem" m="0.5rem 1rem 0 2rem">
                        <Box
                            component="img"
                            alt="profile"
                            src={logoImage}
                            height="35px"
                            width="35px"
                            borderRadius="50%"
                            sx={{ objectFit: "cover"}}
                            />
                                <Box textAlign="left">
                                  <Typography fontWeight="bold" fontSize="0.9rem" sx={{ color: theme.palette.secondary[100]}}>
                                    {user.name}
                                  </Typography>
                                  <Typography fontSize="0.8rem" sx={{ color: theme.palette.secondary[200]}}>
                                    {user.role}
                                  </Typography>
                                </Box>

                            

                    </FlexBetween>
                </Box>
            </Drawer>
        )}
    </Box>
  );
};

export default Sidebar;