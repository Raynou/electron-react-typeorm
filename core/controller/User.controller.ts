export class UserController {
	async getAllUsers(): Promise<UserDTO[]> {
		const users: UserDTO[] = await window.userAPI.getAllUsers();
		return users;
	}
}
