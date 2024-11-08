import { useCreateProjectMutation } from '@/state/api';
import React, { useState } from 'react'

type Props = {
    isOpen:boolean;
    onClose: () => void;
}

const ModalNewProject = ({isOpen,onClose}: Props) => {
    const [createProject, {isLoading}] = useCreateProjectMutation();
    const [projectName,setProjectName] = useState("");
    const [description,setDescription] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    // const [teamId,setTeamId] = useState("");


    const handleSubmit = async () => {
        if(!projectName || !startDate || !endDate ) return ;

        await createProject ({
            name:projectName,
            description,
            startDate,
            endDate
        })

    }

  return (
    <div>ModalNewProject</div>
  )
}

export  default ModalNewProject