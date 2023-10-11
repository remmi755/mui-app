import React from 'react'
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputAdornment,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
} from '@mui/material'
import {
    Clear,
    Mail,
    Notifications,
    Pets,
    Search as SearchIcon,
} from '@mui/icons-material'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between',
        // backgroundColor:"aquamarine"
    })

    const Search = styled('div')(({ theme }) => ({
        backgroundColor: 'white',
        padding: '0 10px',
        borderRadius: theme.shape.borderRadius,
        width: '40%',
    }))

    const Icons = styled(Box)(({ theme }) => ({
        display: 'none',
        gap: '20px',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    }))

    const UserBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }))

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Your Logo
                </Typography>
                <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search bgcolor={'error'}>
                    <InputBase
                        mr={5}
                        sx={{ color: 'grey', width: '100%' }}
                        placeholder="Search..."
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: 'lightgrey' }} />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <Clear
                                    sx={{
                                        color: 'lightgrey',
                                        cursor: 'pointer',
                                    }}
                                />
                            </InputAdornment>
                        }
                    />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(event) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
