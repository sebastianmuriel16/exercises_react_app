import { Typography, Stack, Button } from "@mui/material"

import BodyPartImage from '../assets/icons/body-part.png'
import TargetMuscleImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {

    const { bodyParts, gifUrl, name, targetMuscles, equipments, instructions } = exerciseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyParts
        }
        , {
            icon: TargetMuscleImage,
            name: targetMuscles
        }
        , {
            icon: EquipmentImage,
            name: equipments
        }
    ]

    return (
        <Stack
            gap={"60px"}
            sx={{
                flexDirection: { lg: 'row' },
                p: '20px',
                alignItems: 'center'
            }}
        >
            <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant={"h3"} >
                    {name}
                </Typography>
                <Typography variant={"h6"}>
                    {
                        instructions?.map((item, index) => (
                            <p key={index} style={{ margin: '15px 0' }}>
                                {item}
                            </p>
                        ))
                    }
                </Typography>
                {extraDetail.map((item, index) => (
                    <Stack key={index} direction={"row"} gap={"24px"} alignItems={"center"}>
                        <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
                            <img src={item.icon} alt={bodyParts} style={{ width: '40px', height: '40px' }} />
                        </Button>
                        <Typography textTransform={"capitalize"} variant={"h5"}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

        </Stack>
    )
}

export {
    Detail
}