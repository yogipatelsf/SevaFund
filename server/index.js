import app from './app';
import env from './config/env';


//sdfjsdalfjsadljsa;df
const server = app.listen(env.port, () => {
  console.log(`${env.name} server is listening at port ${env.port}`);
});

export default server;
