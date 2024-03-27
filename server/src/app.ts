import express from 'express'
import { PrismaRepositoryUsers } from "./repository/prisma/RepositoryUsers"
import { Auth } from './usecase/auth/auth';

export const app = express();

app.listen(3333,()=>{
    console.log("webhook is listening om port:" , 3333);
});

app.use(express.json());

 app.post('/auth', async (request ,response) => {
    const req = request.body;

    const prismaRepUser = new PrismaRepositoryUsers();
    const authlogin = new Auth(prismaRepUser);
    console.log(req);

    try
    {
       return  await authlogin.execute({login: req.login,pass:req.pass})
    }
    catch(err)
    {
        return response.status(400).json({
            error: err
        })
    }
});