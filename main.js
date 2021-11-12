const app = require('./app');

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Runnin' and a runnin' on port: ${PORT}`);
});
