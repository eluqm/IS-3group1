import app from './server';
import mongoose, { ConnectOptions } from 'mongoose';
import config from './config/config';

async function main() {
  const port = config.SERVER_PORT;
  const stringConnection =
    config.MONGO_URI === 'undefined'
      ? `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`
      : config.MONGO_URI;

  try {
    const mongooseOptions: ConnectOptions = {
      // connectTimeoutMS: 2000,
    };

    await mongoose.connect(stringConnection, mongooseOptions);
    console.log(
      `connected to ${config.MONGO_DATABASE} with ${stringConnection}`
    );

    app.listen(port, () => {
      console.log(`[Running] in http://localhost:${port}/`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main()
  .catch(console.error)
  .finally(() => {
    // conn.disconnect()
});
