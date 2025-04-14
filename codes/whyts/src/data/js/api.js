const users = {
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

export const getUser = (id) => Promise.resolve(users[id]);