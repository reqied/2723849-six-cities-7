import {ICommand} from './command.interface';

export class GenerateCommand implements ICommand {
  execute(args: string[]): void {
    console.log(args.join(' '));
  }

  getName(): string {
    return "--generate";
  }

}
