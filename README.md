# nodemon issue reproduction

This reproduces an issue in nodemon 1.18.9 where it does not wait for an existing process to
exit before starting a new one.

To see it in action, run `yarn ; yarn start`.

Then make changes to any js file or create a new js file and make change to it.

You will see output like this:
    
    $ yarn start
    yarn run v1.12.3
    $ nodemon -r ./register index.js
    [nodemon] 1.18.9
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching: *.*
    [nodemon] starting `node -r ./register index.js`
    18068 'started up!'
    18068 'still running'
    18068 'still running'
    [nodemon] restarting due to changes...
    18068 'SIGUSR2 received, ignoring it!'
    [nodemon] starting `node -r ./register index.js`
    18113 'started up!'
    18068 'still running'
    18113 'still running'
    [nodemon] restarting due to changes...
    18113 'SIGUSR2 received, ignoring it!'
    [nodemon] starting `node -r ./register index.js`
    18135 'started up!'
    18068 'still running'
    18113 'still running'

The number at the start of each log in the process PID.  Notice how
nodemon launched a second process even though the first was still 
running.

