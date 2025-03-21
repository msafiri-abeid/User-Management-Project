const axios = require('axios');

exports.homeRoute = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://user-management-project-rae0.onrender.com')
    .then((response) => {
        res.render('index', {users: response.data});
    })
    .catch(err => {
        res.send(err);
    })
};

exports.addUser = (req, res) => {
    res.render('add-user');
};

exports.updateUser = (req, res) => {
    axios.get('https://user-management-project-rae0.onrender.com', { params: {id:req.query.id}})
    .then((userdata) => {
        res.render('update-user', {user: userdata.data});
    })
    .catch(err => {
        res.send(err);
    })
};