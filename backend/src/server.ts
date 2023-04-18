import express from "express"
import router from "./router"
import { protect } from "./modules/auth"
import morgan from "morgan"
import cors from 'cors';
import { createNewUser, signin } from "./controllers/userController";

const app = express()

// Middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Routes
app.use('/api', protect, router);
app.post('/register', createNewUser)
app.post('/signin', signin)
export default app