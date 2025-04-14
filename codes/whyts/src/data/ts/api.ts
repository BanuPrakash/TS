export interface User {
    name: string,
    address?: {
        email: string
    }
}

const users: Record<string, User>  = {
    "1": {
        name : 'George',
        address: {
            email: 'george@gmail.com'
        }
    },
    "2": {
        name : 'Scarlett'
    }
}

export const getUser = (id:string): Promise<User> => Promise.resolve(users[id]);