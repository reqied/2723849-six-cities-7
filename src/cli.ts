#!/usr/bin/env node
import { CLIApplication } from './cli/cli-application.js';
import { HelpCommand } from './cli/commands/help.command.js';
import { VersionCommand } from './cli/commands/version.command.js';
import { ImportCommand } from './cli/commands/import.command.js';
import {GenerateCommand} from './cli/commands/generate.command.js';
import {logger} from './shared/logger/logger.js';

const application = new CLIApplication();

application.register(new HelpCommand());
application.register(new VersionCommand());
application.register(new ImportCommand());
application.register(new GenerateCommand());

application.run(process.argv.slice(2)).catch((error: unknown) => {
  logger.error({ err: error }, 'Error while processing');
  process.exitCode = 1;
});
