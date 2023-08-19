console.log('helo node')

import slugify from 'slugify';
//import Topla from './my-module.js';
import { topla, hello } from './my-module.js';


 const title =  slugify('some string','+');

 console.log(title);
 console.log(topla(2,5));
 hello();