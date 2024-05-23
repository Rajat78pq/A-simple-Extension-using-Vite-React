import Express from 'express';
import cors from 'cors';

const app = Express()
const PORT = 3000;

app.use(cors());
app.use(Express.json());

app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
});

app.get('/msg',(req, res)=>{
    const data = {message:'Hello Future'}
    res.json(data);
    console.log(data);
})

const corsOptions = {
    origin : 'http://localhost:5173'
}

app.use(cors(corsOptions));