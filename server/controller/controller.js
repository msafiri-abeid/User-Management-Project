var usersDB = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // Validate Request
    if(!req.body) {
        res.status(400).send("Content cannot be empty");
    }

    // New user
    const user = new usersDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // Save user in a database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });
}

// retrieve and return all users/ retrieve and return single user
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;
        usersDB.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message: `User with id ${id} cannot be found!` })
            }
            else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: `Error Retriving user ${id} information!!` });
        })
    }
    else{
        usersDB.find()
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error occured while retriving user information" });
        })
    }
}

// Update a new identified user by user id
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({ message: "Data to update cannot be empty"});
    }

    const id = req.params.id;
    usersDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if(!data){
                res.status(404).send({ message: `Cannot update user with ${id}, User may not be found!` });
            }
            else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user informatio!" });
        })

}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    usersDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message: `Cannot delete user with ${id}, User may not be found!` });
            }
            else{
                res.send({ message: "User was deleted successfully!" });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error delete a user!" });
        })
}

