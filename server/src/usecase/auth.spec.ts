import {describe, expect,it} from 'vitest'; 
import { Auth } from './auth';

describe('Auth test', () => {
    it('Login test', async ()=> {
        const authLogin = new Auth();
        const ret = await authLogin.execute({login:'JoaoS', pass:'xyzteste'})


        expect(ret.name).toEqual('Joao Santos');
    })
})