import { useEffect, useState } from "react"
import { CustomPagination } from "./CustomPagination"
import { Box, Stack, Typography } from '@mui/material'
import { ExerciseCard } from "./ExerciseCard"

import { fetchExercises } from "../utils/fetchData"

const Exercises = ({ setExercises, bodyPart, exercises }) => {

    const [nextCursor, setNextCursor] = useState(null)
    const [prevCursor, setPrevCursor] = useState(null)
    const [hasNext, setHasNext] = useState(false)
    const [hasPrevious, setHasPrevious] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const updateMeta = (meta) => {
        setHasNext(!!meta?.hasNextPage)
        setNextCursor(meta?.nextCursor || null)
        setHasPrevious(!!meta?.hasPreviousPage)
        setPrevCursor(meta?.previousCursor || null)
    }

    const fetchPage = async (cursor = null, direction = 'initial') => {

        let url = `/exercises`

        if (bodyPart !== 'all') {
            url += `?bodyParts=${bodyPart}`
        }

        if (cursor) {
            const separator = url.includes('?') ? '&' : '?';
            if (direction === 'next') {
                url += `${separator}after=${cursor}`
            }
            else {
                url += `${separator}before=${cursor}`
            }
        }

        const exercisesData = await fetchExercises(url)
        setExercises(exercisesData.data)
        updateMeta(exercisesData.meta)
    }



    useEffect(() => {
        fetchPage();
        setCurrentPage(1)
    }, [bodyPart])


    const handleNextPage = () => {

        if (hasNext && nextCursor) {
            fetchPage(nextCursor, 'next')
            setCurrentPage(prev => prev + 1)
        }
    }


    const handlePreviousPage = () => {
        if (hasPrevious && prevCursor) {
            fetchPage(prevCursor, 'prev')
            setCurrentPage(prev => prev - 1)
        }
    }

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
                    exercises.map((exercise) => {
                        return (
                            <ExerciseCard key={exercise.exerciseId} exercise={exercise} />
                        )
                    })
                }
            </Stack>
            <Stack mt={"100px"} alignItems={"center"}>
                <CustomPagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    nextPageHandler={handleNextPage}
                    prevPageHandler={handlePreviousPage}
                    hasNext={hasNext}
                    hasPrevious={hasPrevious}
                />
            </Stack>
        </Box>
    )
}

export {
    Exercises
}