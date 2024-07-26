const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception! 💥 shutdown...');
  console.log(err.name, err.message);
  process.exit(1);
  s;
});

dotenv.config({ path: './config.env' });
const app = require('./app');

// console.log(process.env);
// 4) Start Server
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => ('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  (`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  ('UnHundler Rejection! 💥 Shutting down...');
  (err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
