

setInterval(() => {
  console.log(process.pid, 'still running');
}, 5000);

process.on('SIGUSR2', () => {
  console.log(process.pid, 'SIGUSR2 received, ignoring it!');
});

console.log(process.pid, 'started up!');


