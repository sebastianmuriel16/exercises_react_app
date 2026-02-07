import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from '@mui/material'
import { fetchExercises, youtubeFetch } from '../utils/fetchData'
import { Detail } from '../components/Detail'
import { ExerciseVideos } from '../components/ExerciseVideos'
import { SimilarExercises } from '../components/SimilarExercises'

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])

    const { id } = useParams()


    useEffect(() => {
        const fetchExercisesData = async () => {
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchExercises(`/exercises/${id}`)
            setExerciseDetail(exerciseDetailData.data)


            const exerciseVideosData = await youtubeFetch(`${youtubeSearchUrl}/search?query=${exerciseDetailData.data.name}`)
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchExercises(`/exercises?targetMuscles=${exerciseDetailData.data.targetMuscles[0]}`)
            setTargetMuscleExercises(targetMuscleExercisesData.data)

            const equipmentExercisesData = await fetchExercises(`/exercises?equipments=${exerciseDetailData.data.equipments[0]}`)
            setEquipmentExercises(equipmentExercisesData.data)

        }

        fetchExercisesData()
    }, [id])

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetail