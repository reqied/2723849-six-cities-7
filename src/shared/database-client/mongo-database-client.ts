import {IDatabaseClient} from './database-client.interface';
import {inject, injectable} from 'inversify';
import {TYPES} from '../types/di.type.js';
import {ILogger} from '../logger/logger.interface';
import {AppConfig} from '../config/config.js';
import * as mongoose from 'mongoose';

@injectable()
export class MongoDatabaseClient implements IDatabaseClient {
  constructor(
    @inject(TYPES.Logger) private readonly logger: ILogger,
    @inject(TYPES.Config) private readonly config: AppConfig
  ) {
  }

  async connect(): Promise<void> {
    const host = this.config.get('dbHost');
    const port = this.config.get('dbPort');
    const name = this.config.get('dbName');
    const uri = `mongodb://${host}:${port}/${name}`;

    this.logger.info(`MongoDB connecting to: ${host}:${port}, ${name}`);
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000});
    this.logger.info(`MongoDB connected to ${host}:${port}, ${name}`);
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
    this.logger.info('MongoDB disconnected');
  }

}
