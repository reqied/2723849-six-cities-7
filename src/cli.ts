#!/usr/bin/env node
import { Application } from './application.js';
import { CLIApplication } from './cli/cli-application.js';
import { HelpCommand } from './cli/commands/help.command.js';
import { VersionCommand } from './cli/commands/version.command.js';
import { ImportCommand } from './cli/commands/import.command.js';
import { GenerateCommand } from './cli/commands/generate.command.js';
import { logger } from './shared/logger/logger.js';

const application = new Application();
const cli = new CLIApplication();

cli.register(new HelpCommand());
cli.register(new VersionCommand());
cli.register(new ImportCommand());
cli.register(new GenerateCommand());

async function main(): Promise<void> {
  application.init();
  await cli.run(process.argv.slice(2));
}

main().catch((error: unknown) => {
  logger.error({ err: error }, 'Application failed');
  process.exitCode = 1;
});
