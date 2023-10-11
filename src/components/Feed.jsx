import React from 'react';
import {Box} from "@mui/material";
import Post from "./Post.jsx";

const Feed = () => {
    return (
        <Box flex={4}
             sx={{pr: {md: 0}}}
             p={2}
        >
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    );
};

export default Feed;
