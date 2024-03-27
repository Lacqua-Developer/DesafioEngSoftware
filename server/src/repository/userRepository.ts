
import { User } from "../entity/users";
import { AuthRequest, AuthResponse } from "../usecase/auth/auth";

export interface IUserRepository{
    create(user:User) : Promise<void>
    auth(auth: AuthRequest) : Promise<AuthResponse> 
}