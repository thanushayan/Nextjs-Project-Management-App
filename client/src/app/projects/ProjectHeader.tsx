import Header from '@/components/Header';
import React, { useState } from 'react'

type Props = {
  activeTab:string;
  setActiveTab: (tabName:string) => void;
}

const ProjectHeader = ({activeTab,setActiveTab}: Props) => {
  const [isModalNewProjectOpen,setIsModalProjectOpen] = useState(false);

  return (
  <div className="px-4 xl:px-6">
    {/* modal new project */}
    <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
      <Header name="Product Design Development"/>

    </div>

  </div>
  ); 
  
};
type TabButtonProps {
  name: string;
  icon: React.ReactNode;
  setActiveTab: (tabName: string) => void;
  activeTab: string;
}

const TabButton = ({name,icon,setActiveTab,activeTab}: TabButtonProps) => {
  const isActive = activeTab === name;

  return (
    <button 
    className={`relative flex items-center gap-2 px-1 py-2 text-gray-500 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px after:w-full hover:text-blue-600 dark:text-n`}
  )

}

export default ProjectHeader;