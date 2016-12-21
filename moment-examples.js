var moment = require('moment');
var now = moment();

console.log(now.format());

console.log(now.format('X'));
console.log(now.format('x'));
console.log(now.valueOf());
console.log(now.format('MMM-Do: h:mma'));

var timestamp = 1482335010593;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.format('hh:m a'));

