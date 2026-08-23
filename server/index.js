import express from 'express'
import dotenv from 'dotenv'
import dbconnect from './config/db.js';
import authrouter from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import applicationRoutes from './routes/application.route.js';
import opportunityRoutes from './routes/opportunities.route.js';
import experienceRoutes from './routes/experience.route.js';
import dashboardRoutes from './routes/dashboard.route.js';
import discussionRoutes from "./routes/discussion.route.js";
dotenv.config()
dbconnect()

const app=express();
app.use(express.json());


app.use('/api/auth',authrouter);
app.use('/api/users', userRoutes);
app.use('/api/applications',applicationRoutes);
app.use('/api/opportunities',opportunityRoutes);
app.use('/api/experience',experienceRoutes);
app.use('/api/dashboard',dashboardRoutes);
app.use('/api/discussion',discussionRoutes);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
})