import { Request, Response } from 'express';
import { createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject, getUsersInSubject } from '../subjects/subject_service.js';


export const createSubjectHandler = async (req: Request, res: Response) => {
    try {
        const subject = await createSubject(req.body);
        res.json(subject);
    } catch (error: any) { 
        res.status(500).json({ message: error.message });
    }
};

export const getAllSubjectsHandler = async (req: Request, res: Response) => {
    try {
        const subjects = await getAllSubjects();
        res.json(subjects);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const subject = await getSubjectById(req.params.id);
        res.json(subject);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSubjectHandler = async (req: Request, res: Response) => {
    try {
        const subject = await updateSubject(req.params.id, req.body);
        res.json(subject);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try {
        const result = await deleteSubject(req.params.id);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUsersInSubjectHandler = async (req: Request, res: Response) => {
    try {
        const users = await getUsersInSubject(req.params.id);
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};