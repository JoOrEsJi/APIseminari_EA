import Subject, { ISubject } from '../subjects/subject_model.js';
import User from '../users/user_models.js';

export const createSubject = async (subjectData: ISubject) => {
    const subject = new Subject(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    return await Subject.find();
};

export const getSubjectById = async (id: string) => {
    return await Subject.findById(id);
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await Subject.updateOne({ _id: id }, { $set: updateData });
};

export const deleteSubject = async (id: string) => {
    return await Subject.deleteOne({ _id: id });
};

export const getUsersInSubject = async (subjectId: string) => {
    const subject = await Subject.findById(subjectId).populate('alumni');
    return subject ? subject.alumni : [];
};