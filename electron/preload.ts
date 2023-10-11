// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import { K } from './constants';

const userAPI = {
	getAllUsers: () => ipcRenderer.invoke(K.User.getAllUsers),
};

contextBridge.exposeInMainWorld('userAPI', userAPI);
