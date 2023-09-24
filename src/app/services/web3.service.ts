import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3;

  constructor() {
    this.web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
  }

  async getAccount(): Promise<string> {
    const accounts = await this.web3.eth.getAccounts();
    return accounts[0];
  }

  getContract(abi: any, address: string) {
    return new this.web3.eth.Contract(abi, address);
  }
}
