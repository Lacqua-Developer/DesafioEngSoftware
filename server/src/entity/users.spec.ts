import { User } from './users';

test('User test app', () => {
    const user = new User();
    user.id = 1;
    user.name = 'Joao Santos';
    user.login = 'joaoS';
    user.pass = 'xyzteste';
    user.dtAdd = new Date();
    user.dtAlter = new Date();

    expect(user).toBeInstanceOf(User);
    expect(user.name).toEqual('Joao Santos');

} );