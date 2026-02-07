export const login = function (login: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (login === 'admin' && password === 'admin') resolve('admin-1234-token');
            else reject(new Error('Неправильно введен логин или пароль!'));
        }, 2000)
    })
}