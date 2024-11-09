"use client";

import React, { useState } from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader"; // Double-check this import path
import Board from "../BoardView/index"
import List from "../ListView/index"
import Timeline from "../TimelineView"
import Table from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

 

  return  <div>
    <ModalNewTask
      isOpen={isModalNewTaskOpen}
      onClose={() => setIsModalNewTaskOpen(false)}
      />
   
 
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Conditional rendering for different tabs, e.g., Board */}
      {activeTab === "Board" && (
        <Board id ={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        
      )}
      {activeTab === "List" && (
        <List id ={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        
      )}
        {activeTab === "Timeline" && (
        <Timeline id ={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        
      )}
        {activeTab === "Table" && (
        <Table id ={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        
      )}
    </div>
 
};

export default Project;
