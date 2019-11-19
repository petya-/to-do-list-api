import mongoose from 'mongoose';
import Todo from './Todo';

const connectDb = () => mongoose.connect(process.env.MONGO_URL);

const models = {Todo};
export {connectDb};
export default models;
