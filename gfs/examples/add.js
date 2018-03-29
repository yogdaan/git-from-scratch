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

git.add(data)
*/

git.add(2);

console.log(git.unstaged)

// must return 2
