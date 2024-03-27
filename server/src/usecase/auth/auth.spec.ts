import { Auth,  AuthResponse } from './auth';


describe('Auth test', () => {
    it('Login test', async ()=> {
        const authLogin = new Auth({
            create: async () =>{},

            auth: async () =>{ 

                const ret = new AuthResponse();
                ret.id = 1;
                ret.loged = true;
                ret.name = 'Administrator';
                ret.token = 'mknwekjwkçlmqlqlwqjxsfmwlçxdkxwçlax'
                return ret;
            }
        })
        const ret = await authLogin.execute({login:'admin', pass:'102030'})


        expect(ret.name).toEqual('Administrator');
    })
})