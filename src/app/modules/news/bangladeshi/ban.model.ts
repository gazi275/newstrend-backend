import { model, Schema } from "mongoose";
import { INews } from "./ban.interface";


const NewsSchema = new Schema<INews>({
        title: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: true },
        image: { type: String, required: true },
        date: { type: String, required: true },
        newspaper: { type: String, required: true },
    });
export const newsModel = model<INews>('news', NewsSchema);