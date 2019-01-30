const app = require('./src/config/server');
require('./src/app/routes/inicio')(app);
const db = require('./src/config/dbconnection');

  //Test Database
  db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error:'+ err))


app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}...`));