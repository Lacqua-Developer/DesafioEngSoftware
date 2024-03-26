
import { User } from "../entity/users";

export interface UserRepository{
    create(user:User) : Promise<void>
}