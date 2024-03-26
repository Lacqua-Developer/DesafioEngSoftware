
export interface AuthRequest{
    login: string;
    pass: string;
}

export class AuthResponse{
    id:number;
    name:string;
    token:string;
    loged: boolean;
}

export class Auth{
    async execute(request: AuthRequest) : Promise< AuthResponse>{
        console.log(request.login, request.pass) 
        return {id:1,name:'Joao Santos', token:'nfkweojrp30932uciwj238y328cq2e' , loged:true}
    }
}