const app = require('./src/config/server');
require('./src/app/routes/inicio')(app);

app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}...`));