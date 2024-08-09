const express = require('express');
// initialize express
const app = express();
// port 
const port = 5000;

// middleware
app.use(express.json());

let users = [];

// http methods=get,post,delete,update

app.get('/', (req, res) => {
    try {
        res.send("Hey EveryOne");
    } catch (err) {
        console.log(err);
    }
});

// post
app.post("/postdata", (req, res) => {
    try {
        const { id, name, place } = req.body;
        const user = { id: id, name: name, place: place };
        users.push(user); // add the user to the users array
        res.send(user);
        console.log(user);
    } catch (err) {
        console.log(err);
    }
});

// get
app.get('/getdata', (req, res) => {
    try {
        res.send(users);
        console.log(users);
    } catch (err) {
        console.log(err);
    }
});

// update
app.put('/updatedata/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { name, place } = req.body;
        const userIndex = users.findIndex(user => user.id == id);

        if (userIndex !== -1) {
            users[userIndex] = { id, name, place };
            res.send(users[userIndex]);
        } else {
            res.status(404).send({ message: 'user not found' });
        }
    } catch (err) {
        console.log(err);
    }
});

//delete
app.delete('/deletedata/:id', (req, res) => {
    try {
        const { id } = req.params;

        const userIndex = users.findIndex(user => user.id == id);

        if (userIndex !== -1) {
           const deleteUser = users.splice(userIndex, 1);
            res.send(deleteUser[0]);
        } else {
            res.status(404).send({ message: 'user not found' });
        }
    } catch (err) {
        console.log(err);
    }
});


// listen or running port
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});