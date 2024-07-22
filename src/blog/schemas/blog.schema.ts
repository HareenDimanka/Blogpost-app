import { Document, Schema } from "mongoose";


export interface Blog extends Document {
    title: string;
    description: string;
    category: string;
    image: string;
    viewCount: number;
}

export const BlogSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    viewCount: { type: Number, default: 0 }
});