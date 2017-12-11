import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('users').insertMany([
    { id: 1, fullName: 'Bob Hagget', username: 'bhag', password: 'hags',
      description: `Man`,
      downloadIds: [101, 102] },
    { id: 2, fullName: 'Tom Smith', username: 'tsmith', password: 'byes',
      description: `Another Man`,
      downloadIds: [] },
    { id: 3, fullName: 'Hannah Forth', username: 'hforth', password: 'jacket',
    description: `Woman`,
    downloadIds: [103, 104, 105] },
    { id: 4, fullName: 'Janet Jackson', username: 'jjackson', password: 'jacked',
    description: `Superstar`,
    downloadIds: [] }
  ]).then(response => {
    console.info('Users', response.insertedCount);
    db.collection('downloads').insertMany([
      { id: 101, download: 'Download 1', timestamp: new Date() },
      { id: 102, download: 'Download 2', timestamp: new Date() },
      { id: 103, download: 'Download 3', timestamp: new Date() },
      { id: 104, download: 'Download 4', timestamp: new Date() },
      { id: 105, download: 'Download 5', timestamp: new Date() },
      { id: 106, download: 'Download 6', timestamp: new Date() },
    ]).then(response => {
      console.info('Downloads', response.insertedCount);
      db.close();
    });
  });
});
