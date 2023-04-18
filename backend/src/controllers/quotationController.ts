import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createQuotation(req: Request, res: Response) { }
export async function getAllQuotations(req: Request, res: Response) { }
export async function getQuotationById(req: Request, res: Response) { }
export async function updateQuotation(req: Request, res: Response) { }
export async function deleteQuotation(req: Request, res: Response) { }