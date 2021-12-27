import Resize from './resize';
import './scrollto';

const foo = (() => Promise.resolve().then(() => console.log('Hello world')))();

Resize.init();
