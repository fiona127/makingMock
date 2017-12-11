import express from 'express';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null,err);
    mdb = db;
});

const router = express.Router();



router.get('/users', (req, res) => {
    let users = {};
    mdb.collection('users').find({})
        .project({
            id: 1,
            fullName: 1,
            username: 1,
            description: 1
        })
        .each((err, user) => {
            assert.equal(null,err);
            if (!user){ // no more users to process
                res.send({users});
                return;

            }
            users[user.id] = user;
        });
});

router.get('/users/:userId', (req, res) => {
    mdb.collection('users')
        .findOne({id: Number(req.params.userId) })
        .then(user => res.send(user))
        .catch(console.error)
});

export default router;