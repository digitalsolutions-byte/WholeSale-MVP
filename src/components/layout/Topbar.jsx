import React from 'react';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import {
    Box,
    Typography,
    IconButton,
    Badge,
    Avatar,
    Stack,
    useTheme,
    alpha,
    Paper
} from '@mui/material';

const Topbar = () => {
    const user = useSelector((state) => state.auth.user);
    const theme = useTheme();

    return (
        <Paper
            elevation={0}
            sx={{
                width: '100%',
                borderRadius: '24px',
                background: `linear-gradient(to right, ${theme.palette.accent.main}, #f7e7ce)`,
                color: 'white',
                p: { xs: 1.5, md: 2 },
                boxShadow: ' rgba(255, 255, 255, 1) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.1)'
            }}
        >
            <Stack direction="row" alignItems="center" spacing={2} sx={{ flexGrow: 1, minWidth: 0 }}>
                <Avatar
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.2)',
                        width: 44,
                        height: 44,
                        border: '2px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <Icon icon="lucide:user" style={{ fontSize: '24px', color: 'white' }} />
                </Avatar>
                <Box sx={{ minWidth: 0 }}>
                    <Typography
                        variant="caption"
                        sx={{
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            opacity: 0.6,
                            fontSize: '0.65rem',
                            display: 'block',
                            mb: 0.2
                        }}
                    >
                        Connected User
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontSize: { xs: '0.9rem', md: '1.1rem' },
                                fontWeight: 700
                            }}
                        >
                            {user?.employeeName || 'Team Member'}
                        </Typography>
                        <Box
                            sx={{
                                px: 1.5,
                                py: 0.4,
                                borderRadius: '20px',
                                bgcolor: alpha(theme.palette.accent.main, 0.2),
                                border: `1px solid ${alpha(theme.palette.accent.main, 0.3)}`,
                                color: "white",
                                fontSize: '0.65rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'

                            }}
                        >
                            {user?.Department?.name || 'Operations'}
                        </Box>
                    </Stack>
                </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
                <IconButton
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.05)',
                        color: 'dark',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                    }}
                >
                    <Badge color="error" variant="dot" invisible={false}>
                        <Icon icon="lucide:bell" style={{ fontSize: '20px' }} />
                    </Badge>
                </IconButton>
                <IconButton
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.05)',
                        color: 'dark',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                    }}
                >
                    <Icon icon="lucide:settings" style={{ fontSize: '20px' }} />
                </IconButton>
            </Stack>
        </Paper>
    );
};

export default Topbar;
