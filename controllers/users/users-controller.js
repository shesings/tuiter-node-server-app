import people from './users.js'         // import the array of users
let users = people
const UserController = (app) => {       // use express instance app to declare HTTP GET
    app.get('/api/users', findUsers)    // request pattern /api/users to call a function
}
const findUsers = (req, res) => {       // function runs when /api/users requested
    res.json(users)                     // responds with array of users
}
export default UserController           // exports so app.js can import





