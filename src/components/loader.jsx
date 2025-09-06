import { Stack } from "@mui/material"
import { ClipLoader } from "react-spinners"
const Loader = () => {
    return (
        <Stack direction={"row"} justifyContent={"center"} p={2}
            sx={{ width: "100%" }} >
            <ClipLoader color="gray" size={50} />
        </Stack>
    )
}

export {
    Loader
}