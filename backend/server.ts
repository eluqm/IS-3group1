import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/v1/', (req, res)=>{
    res.json({hola: 'Hola'})
})

app.use('*', (req, res) => {
    res.status(400).json({error: `not found`})
})

export default app;