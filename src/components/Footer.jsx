import { Box, Stack, Typography } from "@mui/material"

import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
    return (
        <Box mt={"80px"} bgcolor={"#fff3f4"}>
            <Stack gap={"40px"} alignItems={"center"} px={"40px"} pt={"24px"}>
                <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
                <Typography variant={"h5"} pb={"40px"} mt={"20px"}>
                    Made using ExerciseDB API (v2.0.0) and RapidAPI
                </Typography>
            </Stack>
        </Box>
    )
}

export {
    Footer
}