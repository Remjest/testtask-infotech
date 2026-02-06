export const login = function (login: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (login === 'admin' && password === 'admin') resolve('admin-1234-token');
            else reject(new Error('incorrect username or password'));
        }, 2000)
    })
}