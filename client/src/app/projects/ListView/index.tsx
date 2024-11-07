import { useGetTasksQuery } from '@/state/api';
import React from 'react'

type Props = {
    id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

const index = ({ id, setIsModalNewTaskOpen }: Props) => {
    const {data: tasks, error,isLoading } = useGetTasksQuery({ projectId : Number(id)})
    if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching tasks</div>;

  return  <div className="px-4 pb-8 xl:px-6 ">
    <div className="pt-5">
        
    </div>
    
    </div>
    
   
}

export default index