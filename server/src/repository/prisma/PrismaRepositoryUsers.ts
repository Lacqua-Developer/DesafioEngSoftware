import { User } from "../../entity/users";
import { UserRepository } from "../userRepository";

export class PrismaRepositoryUsers implements UserRepository{
    async create(user: User): Promise<void> {
        console.log(user);
    }
    
}