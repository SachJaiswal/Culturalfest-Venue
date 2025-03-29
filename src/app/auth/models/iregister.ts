import { ILogin } from './ilogin';

export interface IRegister extends ILogin {
    username: string;
    password2: string;
}