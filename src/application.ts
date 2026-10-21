import {logger} from './shared/logger/logger.js';
import {config} from './shared/config/config.js';
export class Application {
  public init(): void {
    config.validate({allowed: 'strict'});
    logger.info('Application initialized');
    logger.info({ port: config.get('port') }, 'Application port');
  }
}
