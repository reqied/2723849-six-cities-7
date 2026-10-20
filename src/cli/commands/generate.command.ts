import {ICommand} from './command.interface';
import axios from 'axios';
import {MockServerDataType} from "../../shared/types/mock-server-data.type";

export class GenerateCommand implements ICommand {
  async execute(args: string[]): Promise<void> {
    const [count, filepath, url] = args;
    if (!count) {
      throw new Error('You must pass the <n> argument (n stands for count of offer instance to generate)');
    }
    if (!filepath) {
      throw new Error('You must pass the <filepath> argument (filepath stands for output file for generated offer )');
    }
    if (!url) {
      throw new Error('You must pass the <url> argument (url stands for server address from where command should get data for offer)');
    }
    let countNum: number;
    try {
      countNum = Number(count);
    } catch (error) {
      throw new Error('<n> must be a number');
    }
    if (!Number.isSafeInteger(countNum) || countNum <= 0) {
      throw new Error('<n> must be positive');
    }
    const response = await axios.get<MockServerDataType>(url);
    const data = response.data;
    console.log(data);


  }

  getName(): string {
    return '--generate';
  }

}
