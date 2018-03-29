const gfs = require('../gfs');

/*
start by creating a git for a data
this will contain a data `1` which
will be stored into our git system.

gfs() ->
@params:
                value -> data to be stored
                branch -> branch to be stored into
                number -> equivalent of sha256 in `git`
*/
const git = new gfs(1,'master',1);

/*
to add data to the staging state
use:

git.add(data);
*/

git.add(2);

/*
use : git.commit() to commit your work
make sure to `add` your work before commiting it
*/

git.commit();

console.log(git); // prints the content of `git`
console.log();

/*
To rollback to a previous commit
use:

git.rollback(number)

here number is the sha256 equivalent of original `git`
*/

git.rollback(1) // rollback to number->1

console.log(git);

/*
Must be a JSON object

gfs {
  value: 1,
  right: null,
  left:
   gfs {
     value: 2,
     right: null,
     left: null,
     branch: 'master',
     unstaged: null,
     number: 2 },
  branch: 'master',
  unstaged: 2,
  number: 1 }

gfs {
  value: 1,
  right: null,
  left: null,
  branch: 'master',
  unstaged: 2,
  number: 1 }

*/
