import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createJob(req: Request, res: Response) { }
export async function getAllJobs(req: Request, res: Response) {
    res.status(200);
    res.json({ "message": "Get All Jobs" });
}
export async function getJobById(req: Request, res: Response) { }
export async function updateJob(req: Request, res: Response) { }
export async function deleteJob(req: Request, res: Response) { }