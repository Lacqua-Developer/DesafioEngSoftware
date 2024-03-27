import { User } from "../../entity/users";
import { prisma } from "../../prisma";
import { AuthRequest, AuthResponse } from '../../usecase/auth/auth';
import { IUserRepository } from "../userRepository";

export class PrismaRepositoryUsers implements IUserRepository{
    auth(auth: AuthRequest): Promise<AuthResponse> {
        const ret =  prisma.users.findFirst ({
            where: {
                login:  auth.login
            }
        }).then((ret ) => {
            const resp  = new AuthResponse();
            resp.id =  ret?.id ?? 0;
            resp.name = ret?.name ?? '';
            resp.loged = ret?.login == auth.login && ret.pass == auth.pass;
            resp.token = "Not Found!";
    
            return resp;
        })


        return ret;

    }


    async create(user: User): Promise<void> {

        await prisma.users.create({data:user})
    }
    
}