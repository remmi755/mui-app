import React, {useState} from 'react'

import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Add from "./components/Add.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    const [mode, setMode]= React.useState("dark")


    const darkTheme = createTheme({
        palette: {
            mode:mode
        }
    })


    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar/>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Feed/>
                    <Rightbar/>
                </Stack>
                <Footer/>
                <Add/>
            </Box>
        </ThemeProvider>
    )
}

// function App() {
//
//     const BlueButton = styled(Button)({
//         backgroundColor:  "skyblue",
//         color: "#888",
//         margin: "20px",
//         borderRadius: "30px",
//         "&:hover": {
//             backgroundColor: "lightblue"
//         },
//         "&:disabled": {
//             backgroundColor: "grey",
//             color:"white"
//         }
//     })
//
//     return (
//         <>
//             <Button variant="text" size="small">text</Button>
//             <Button variant="contained" size="medium" color="otherColor" endIcon={<Send/>}>send</Button>
//             <Button variant="outlined" color="success" size="large" startIcon={<Settings/>}>settings</Button>
//             <Typography
//                 variant="h1" component="p">
//                 h1. Heading
//             </Typography>
//             <Button variant="contained" sx={{
//                 backgroundColor:  "skyblue",
//                 color: "#888",
//                 margin: "20px",
//                 "&:hover": {
//                     backgroundColor: "lightblue"
//                 },
//                 "&:disabled": {
//                     backgroundColor: "grey",
//                     color:"white"
//                 }
//             }}>My Unique button</Button>
//             <BlueButton>Another button</BlueButton>
//         </>
//     )
// }

export default App
