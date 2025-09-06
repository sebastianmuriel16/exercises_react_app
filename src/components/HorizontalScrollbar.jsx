import { useContext } from "react"
import { Box, Typography } from "@mui/material"
import { BodyPart } from "./BodyPart"
import { ExerciseCard } from "./ExerciseCard"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import "react-horizontal-scrolling-menu/dist/styles.css";

import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow" >
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="right-arrow" >
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    )
}



const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item, index) => (
                <Box
                    key={`${index}-${item.name}`}
                    itemID={item.name}
                    title={item.name}
                    sx={{
                        m: "0 40px",
                    }}
                >
                    {isBodyPart
                        ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                        : <ExerciseCard exercise={item} />}
                </Box>

            ))}
        </ScrollMenu>



    )
}

export {
    HorizontalScrollbar
}