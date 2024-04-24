import _ from 'lodash';
import { color, log, cyan, magenta} from "console-log-colors";

const my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(cyan(my_array));

const output = _.uniq(my_array);

console.log(magenta(output));

const backwards = _.sortBy(my_array, (a,b) => b < a );

console.log(cyan(backwards));