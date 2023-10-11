import React from 'react'
import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    styled,
    Typography,
} from '@mui/material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    scrollBar: {
        '&::-webkit-scrollbar': {
            width: '5px',
        },

        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 5px rgb(255, 251, 251)',
            borderRadius: '10px',
        },

        '&::-webkit-scrollbar-thumb': {
            background: '#077DFA',
            borderRadius: '10px',
        },

        '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgb(255, 251, 251)',
        },
    },
})
const Rightbar = () => {
    const StyledBox = styled(Box)
    const classes = useStyles()

    return (
        <Box
            className={classes.scrollBar}
            flex={2}
            sx={{
                display: { xs: 'none', sm: 'block' },
                p: { sm: 0, md: 2 },
                top: '20px',
                height: '600px',
                overflow: 'auto',
            }}
            position="sticky"
        >
            <Box
                sx={{
                    width: { sm: '220px', md: '240px', lg: '300px' },
                }}
            >
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Online Friends
                </Typography>
                <AvatarGroup sx={{ justifyContent: 'start' }} max={3}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        // src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        // src="https://material-ui.com/static/images/avatar/3.jpg"
                    />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/6.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Photos
                </Typography>
                <ImageList
                    cols={3}
                    sx={{
                        width: {
                            sm: '160px',
                            md: '240px',
                            lg: '300px',
                        },
                        height: {
                            sm: '60px',
                            md: '80px',
                            lg: '100px',
                        },
                    }}
                    // rowHeight={90}
                    gap={5}
                >
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/burgers.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/camera.jpg"
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>
                <Typography
                    variant="h6"
                    fontWeight={100}
                    sx={{ maxWidth: { sm: 170, md: 360 } }}
                    mt={2}
                >
                    Latest Conversations
                </Typography>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: { sm: 170, md: 360 },
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem
                        alignItems="flex-start"
                        sx={{ pl: { sm: 0, md: 1 } }}
                    >
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://material-ui.com/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{
                                            display: 'inline',
                                        }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem
                        alignItems="flex-start"
                        sx={{ pl: { sm: 0, md: 1 } }}
                    >
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{
                                            display: 'inline',
                                        }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem
                        alignItems="flex-start"
                        sx={{ pl: { sm: 0, md: 1 } }}
                    >
                        <ListItemAvatar>
                            <Avatar
                                alt="Cindy Baker"
                                src="/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{
                                            display: 'inline',
                                        }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {
                                        ' — Do you have Paris recommendations? Have you ever…'
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar
