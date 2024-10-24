import {createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Project{
   id:number;
   name:string;
   description?:string;
   startDate?:string;
   endDate?:string;
}

export enum Priority {
    Urgent = "Urgent",
    High = "High",
    Medium = "Medium",
    Low = "Low",
    Backlog = "Backlog",
 }

export enum Status {
    ToDo = "To Do",
    WorkInProgress = "Work In Progress",
    UnderReview = "Under Review",
    Completed = "Completed"

}
export interface Task {
    id:number;
    title:string;
    description?:string;
    status?:Status;
    priority?:Priority;
    tags?:string;
    startDate?:string;
    dueDate?:string;
    points?:number;
    projectId?:number;
    authorUserId?:number;
    assignedUserId?:number;
}

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: "api",
    tagTypes:[],
    endpoints:(build) => ({}),
})

export const {} = api ;