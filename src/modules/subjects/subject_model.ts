import { Schema, model, Document } from 'mongoose';
import { IUser } from '../users/user_models.js';

export interface ISubject extends Document {
    name: string;
    teacher: string;
    alumni: IUser[];
}

const SubjectSchema = new Schema<ISubject>({
    name: { type: String, required: true },
    teacher: { type: String, required: true },
    alumni: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Subject = model<ISubject>('Subject', SubjectSchema);

export default Subject;