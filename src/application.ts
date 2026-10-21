import {logger} from './shared/logger/logger.js';

export class Application {
  public init(): void {
    logger.info('Application initialized');
  }
}
