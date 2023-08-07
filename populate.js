import { readFile } from 'fs/promises';
import 'dotenv/config';
import mongoose from 'mongoose';

import Job from './models/jobModel.js';
import User from './models/userModel.js';

try {
  await mongoose.connect(process.env.MONGO_URI);
  const user = await User.findOne({ email: 'john@test.net' });
  // const user = await User.findOne({email: 'anna@test.net'})
  // const user = await User.findOne({ email: 'test@test.com' });

  const jsonJobs = JSON.parse(
    await readFile(new URL('./data/mock-data.json', import.meta.url))
  );
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });

  await Job.deleteMany({ createdBy: user._id });
  await Job.create(jobs);
  console.log('Success!');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
