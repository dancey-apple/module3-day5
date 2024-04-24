import fs from 'fs';
import _ from 'lodash';
import { color, log, cyan, magenta} from "console-log-colors";
import request from 'request';

const my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(cyan(my_array));

const output = _.uniq(my_array);

console.log(magenta(output));

//Syncronis File Access:
const file = fs.readFileSync('./data.json', {encoding: 'utf-8'});
console.log(cyan(file));

//ASync File Access Method:
fs.readFile('./data.json', {encoding: 'utf-8'}, (err,f) => console.log(color.magenta(f)));

request('https://jsonplaceholder.typicode.com/posts', (err, resp, body) => {
    const parsed = JSON.parse(body);
    parsed.forEach( (x) => console.log((x)));
});