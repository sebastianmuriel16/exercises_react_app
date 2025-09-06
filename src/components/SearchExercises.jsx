import { useState, useEffect } from "react"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { HorizontalScrollbar } from "./HorizontalScrollbar"
import { fetchData } from "../utils/fetchData"
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState("")
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://www.exercisedb.dev/api/v1/bodyparts')
            setBodyParts(['all', ...bodyPartsData])

        }
        fetchExercisesData()
    }, [])

    const handleSearch = async () => {
        if (search) {
            const searchedExercises = await fetchData(`http://www.exercisedb.dev/api/v1/exercises/filter?search=${search}&limit=100`);

            // const searchedExercises = exercisesData.filter((exercise) => {
            //     return (
            //         exercise.name.toLowerCase().includes(search)
            //         || exercise.targetMuscles.join().toLowerCase().includes(search)
            //         || exercise.equipments.join().toLowerCase().includes(search)
            //         || exercise.bodyParts.join().toLowerCase().includes(search)
            //     )
            // }
            // )

            setSearch("")
            setExercises(searchedExercises)
        }

    }

    const handleSetSearch = (e) => {
        const value = e.target.value
        if (value === "legs" || value === "arms") {
            setSearch(" " + value)
        }
        else {
            setSearch(value)
        }
    }

    return (
        <Stack alignItems={"center"} mt={"37px"} justifyContent={"center"} p={"20px"}>
            <Typography fontWeight={"700"} sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb={"50px"} textAlign={"center"}>
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position={"relative"} mb={"72px"}>
                <TextField
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "4px"
                        },
                        width: { lg: "800px", xs: "350px" },
                        backgroundColor: "#fff",
                        borderRadius: "40px"

                    }}
                    heigth={"76px"}
                    value={search}
                    onChange={handleSetSearch}
                    placeholder={"Search Exercises"}
                    type={"text"}  >
                </TextField>
                <Button className={"search-btn"}
                    sx={{
                        bgcolor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "56px",
                        position: "absolute",
                        right: "0px"
                    }}
                    onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true} />
            </Box>
        </Stack >
    )
}

export {
    SearchExercises
}