import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { contractAbi } from '../abi';

@Component({
  selector: 'app-buy-sell-modal',
  templateUrl: './buy-sell-modal.component.html',
  styleUrls: ['./buy-sell-modal.component.css']
})
export class BuySellModalComponent implements OnInit {
  contractAddress = '0xYourContractAddressHere';
  contract: any;
  activeAccount!: string;
  amount!: number;

  constructor(private web3Service: Web3Service) { }

  async ngOnInit() {
    this.activeAccount = await this.web3Service.getAccount();
    this.contract = this.web3Service.getContract(contractAbi, this.contractAddress);
  }

  async buyPILA() {
    try {
      const receipt = await this.contract.methods.BuyPilaWithUSDT(this.amount).send({ from: this.activeAccount });
      console.log('Transaction successful', receipt);
    } catch (error) {
      console.error('An error occurred', error);
    }
  }
  
  async sellPILA() {
    try {
      const receipt = await this.contract.methods.SellPilaForUSDT(this.amount).send({ from: this.activeAccount });
      console.log('Transaction successful', receipt);
    } catch (error) {
      console.error('An error occurred', error);
    }
  }
  
}
