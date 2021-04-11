import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log('Connected to MongoDB...')
    );
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
