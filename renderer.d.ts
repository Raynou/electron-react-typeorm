export interface IUserAPI {
    getAllUsers: () => Promise<UserDTO[]>
};

declare global  {
    interface Window {
        userAPI: IUserAPI
    }
}