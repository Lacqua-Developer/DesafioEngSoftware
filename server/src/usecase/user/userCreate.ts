import { IUserRepository } from "../../repository/userRepository";

export interface AuthRequest{
    login: string;
    pass: string;
}

export class AuthResponse{
    id!: number;
    name!: string;
    token!: string;
    loged!: boolean;
}

export class Create{
    constructor(
        private userRep: IUserRepository
    ){}
    
    async execute(request: AuthRequest) : Promise< AuthResponse>{
        const resp =   await this.userRep.auth(request);
        return {id:resp.id,name:resp.name, token: resp.token , loged:resp.loged}
    }
}