import people from './users.js'         // import the array of users
let users = people
const UserController = (app) => {       // use express instance app to declare HTTP GET
    app.get('/api/users', findUsers);    // request pattern /api/users to call a function
    app.get('/api/users/:uid', findUserById);
}
const findUsers = (req, res) => {
    const type = req.query.type             // retrieve type parameter from query
    if(type) {                              // if type parameter in query
        const usersOfType = users           // find users of that type
            .filter(u => u.type === type)
        res.json(usersOfType)               // respond with users of that type
        return                              // return so it doesn't continue
    }
    res.json(users)                         // otherwise respond with all users
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}
export default UserController           // exports so app.js can import





