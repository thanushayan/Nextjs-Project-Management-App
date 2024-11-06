"use client";

import React, { useState } from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader"; // Double-check this import path
import Board from "../BoardView/index"

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

 

  return  <div>
   
      {/* Render ProjectHeader with activeTab and setActiveTab props */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Conditional rendering for different tabs, e.g., Board */}
      {activeTab === "Board" && (
        <Board id ={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        
      )}
    </div>
 
};

export default Project;
