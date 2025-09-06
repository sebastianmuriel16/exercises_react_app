import { useEffect, useState } from "react"
import { Pagination } from "@mui/material"
import { Box, Stack, Typography } from '@mui/material'
import { ExerciseCard } from "./ExerciseCard"

import { fetchData } from "../utils/fetchData"

const Exercises = ({ setExercises, bodyPart, exercises }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 9

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: "smooth" })
    }

    useEffect(() => {
        const fetchExercisesByBodyPart = async () => {
            let exercisesData = []

            if (bodyPart !== 'all') {
                exercisesData = await fetchData(`https://www.exercisedb.dev/api/v1/bodyparts/${bodyPart}/exercises?offset=0&limit=100`)
                setExercises(exercisesData)
            }
        }

        fetchExercisesByBodyPart()

    }, [bodyPart])

    return (
        <Box id="exercises"
            sx={{
                mt: { lg: "110px" },
                p: "20px"
            }}
        >
            <Typography variant={"h4"} mb={"46px"}>
                Showing Results
            </Typography>
            <Stack direction={"row"} sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap={"wrap"} justifyContent={"center"}>
                {
                    currentExercises.map((exercise) => {
                        return (
                            <ExerciseCard key={exercise.exerciseId} exercise={exercise} />
                        )
                    })
                }
            </Stack>
            <Stack mt={"100px"} alignItems={"center"}>
                {
                    exercises.length > 9 &&
                    (
                        <Pagination
                            color="standard"
                            shape="rounded"
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            page={currentPage}
                            onChange={paginate}
                            size="large" />
                    )
                }
            </Stack>
        </Box>
    )
}

export {
    Exercises
}