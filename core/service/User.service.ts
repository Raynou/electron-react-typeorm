import { AppDataSource } from '../data-source';
import { User } from '../entity/User';

export class UserService {
	async getAllUsers(): Promise<UserDTO[]> {
		const res = await AppDataSource.manager.find(User);
		return res as UserDTO[];
	}

	async createUser(userDTO: UserDTO) {
		const user = new User();
		user.firstName = userDTO.firstName;
		user.lastName = userDTO.lastName;
		user.age = userDTO.age;
		await AppDataSource.manager.save(user);
	}
}
