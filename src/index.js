import db from './db.json';

exports.zip2geo = (zipcode) => {
    return db[zipcode];
}

