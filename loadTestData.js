import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('names').insertMany([
    { id: 1, fullName: 'Bob Hagget', username: 'bhag', password: 'hags',
      description: `Man`,
      nameIds: [101, 102] },
    { id: 2, fullName: 'Tom Smith', username: 'tsmith', password: 'byes',
      description: `Another Man`,
      nameIds: [] },
    { id: 3, fullName: 'Hannah Forth', username: 'hforth', password: 'jacket',
    description: `Woman`,
      nameIds: [103, 104, 105] },
    { id: 4, fullName: 'Janet Jackson', username: 'jjackson', password: 'jacked',
    description: `Superstar`,
      nameIds: [] }
  ]).then(response => {
    console.info('Names', response.insertedCount);
    db.collection('names').insertMany([
      { id: 101, name: 'Mike Hinley', timestamp: new Date() },
      { id: 102, name: 'Jamon James', timestamp: new Date() },
      { id: 103, name: 'Tina Turner', timestamp: new Date() },
      { id: 104, name: 'Trevor Noah', timestamp: new Date() },
      { id: 105, name: 'Taylor Swift', timestamp: new Date() },
      { id: 106, name: 'Suzanne Summers', timestamp: new Date() },
    ]).then(response => {
      console.info('Names', response.insertedCount);
      db.close();
    });
  });
});
