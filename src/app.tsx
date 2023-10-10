import { createRoot } from 'react-dom/client';
import { UserController } from '../core/controller/User.controller';

function MyText() {
    return(
        <div>
            <h1>React-electron-typeorm boilerplate</h1>
        </div>
    )
}

function render() {
    const domNode =  document.getElementById('root');
    const root = createRoot(domNode);
    root.render(<MyText />);
}

render();
