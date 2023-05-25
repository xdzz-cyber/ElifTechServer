const express = require('express');

const createError = require('http-errors');
const shopsRouter = require('./routes/shops');
const cartsRouter = require('./routes/carts');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {seed} = require("./common/seed");

const port = 3000 || process.env.PORT;

dotenv.config();

const app = express();

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

seed().then(() => {
    console.log('Data seeding completed.');
}).catch((error) => {
    console.error('Error seeding data:', error);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/shops', shopsRouter);
app.use('/carts', cartsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
  // res.render('error');
});

app.listen(port, () => {
  console.log(`Server is listening on port - ${port}...`)
})