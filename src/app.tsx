import * as ReactDOM from 'react-dom';
import { UserController } from '../core/controller/User.controller';

function render() {
    return(
        <div>
            <h1>React-electron-typeorm boilerplate</h1>
        </div>
    )
}

function render2() {
    ReactDOM.render(<h2>Este es un test</h2>, document.body);
    getUsers().then(res => console.log(res));
}

async function getUsers(): Promise<UserDTO[]> {
    const userController = new UserController();
    return await userController.getAllUsers();
}

render();
render2();