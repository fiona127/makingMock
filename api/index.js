import express from 'express';
import data from '../src/testData';

const router = express.Router();

const names = data.names.reduce((obj, name) => {
    obj[name.id] = name;
    return obj;
}, {});

router.get('/names', (req, res) => {
    res.send({
        names: names
    });
});

router.get('/names/:nameId', (req, res) => {
    let name = names[req.params.nameId];
    name.description = 'So much description, all the description'
    res.send(name);
});

export default router;