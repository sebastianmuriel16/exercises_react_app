import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from '@mui/material'
import { fetchData, youtubeFetch } from '../utils/fetchData'
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
            const exerciseDbUrl = 'https://www.exercisedb.dev/api/v1'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`)
            setExerciseDetail(exerciseDetailData)

            const exerciseVideosData = await youtubeFetch(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`)
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/muscles/${exerciseDetailData.targetMuscles[0]}/exercises`)
            setTargetMuscleExercises(targetMuscleExercisesData)

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/equipments/${exerciseDetailData.equipments[0]}/exercises`)
            setEquipmentExercises(equipmentExercisesData)

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