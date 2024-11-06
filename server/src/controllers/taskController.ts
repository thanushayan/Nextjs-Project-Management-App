import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fetch tasks based on project ID
export const getTasks = async (req: Request, res: Response): Promise<void> => {
  const { projectId } = req.query;

  // Validate projectId
  const projectIdInt = parseInt(projectId as string, 10);
  if (!projectId || isNaN(projectIdInt)) {
    res.status(400).json({ message: "Invalid or missing projectId provided" });
    return;
  }

  try {
    const tasks = await prisma.task.findMany({
      where: { projectId: projectIdInt },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ message: `Error retrieving tasks: ${error.message}` });
  }
};

// Create a new task
export const createTask = async (req: Request, res: Response): Promise<void> => {
  const {
    title,
    description,
    status,
    priority,
    tags,
    startDate,
    dueDate,
    points,
    projectId,
    authorUserId,
    assignedUserId,
  } = req.body;

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId,
      },
    });
    res.status(201).json(newTask);
  } catch (error: any) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: `Error creating task: ${error.message}` });
  }
};

// Update task status
export const updateTaskStatus = async (req: Request, res: Response): Promise<void> => {
  const { taskId } = req.params;
  const { status } = req.body;

  const taskIdInt = parseInt(taskId, 10);
  if (isNaN(taskIdInt)) {
    res.status(400).json({ message: "Invalid taskId provided" });
    return;
  }

  try {
    const updatedTask = await prisma.task.update({
      where: { id: taskIdInt },
      data: { status },
    });
    res.json(updatedTask);
  } catch (error: any) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: `Error updating task: ${error.message}` });
  }
};

// Fetch tasks for a specific user
export const getUserTasks = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  const userIdInt = parseInt(userId, 10);
  if (isNaN(userIdInt)) {
    res.status(400).json({ message: "Invalid userId provided" });
    return;
  }

  try {
    const tasks = await prisma.task.findMany({
      where: {
        OR: [
          { authorUserId: userIdInt },
          { assignedUserId: userIdInt },
        ],
      },
      include: {
        author: true,
        assignee: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    console.error("Error retrieving user's tasks:", error);
    res.status(500).json({ message: `Error retrieving user's tasks: ${error.message}` });
  }
};

// Properly close Prisma client connection when process exits
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});
