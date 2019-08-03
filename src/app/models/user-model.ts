import { User } from '../dtos/user';

export class UserModel implements User{
    userId: number;    
    firstName: string;
    lastName: string;
    getInitials(): string {
        throw new Error("Method not implemented.");
    }

}
