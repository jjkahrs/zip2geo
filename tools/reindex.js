import fs from 'fs';
import raw from './us-zip-code-latitude-and-longitude.json';

const reindex = () => {
    console.log('Starting...');
    let obj = {};
    raw.map( ds => {
        const zipcode = ds.fields.zip;
        const latitude = ds.fields.latitude;
        const longitude = ds.fields.longitude;
        const dst = ds.fields.dst ? true : false;
        const timezone = ds.fields.timezone;
        
        let loc = {};
        loc.latitude = latitude;
        loc.longitude = longitude;
        loc.dst = dst;
        loc.timezone = timezone;
        obj[zipcode] = loc;
    });
    const json = JSON.stringify(obj);
    fs.writeFile('./src/db.json', json, err => console.log('Finished!'));
    fs.writeFile('./dist/db.json', json, err => console.log('Finished!'));
}

reindex();
