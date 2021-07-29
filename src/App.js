import React from 'react';
import { FaWallet, FaPaypal } from "react-icons/fa"
import Invoices from './components/Invoices';
import Sales from './components/Sales';
import Payment from './components/Payment';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.payments = [
      {
        title: 'Salary',
        description: 'Belong Interactive',
        value: '+$2000',
        icon: FaWallet
      },
      {
        title: 'Paypal',
        description: 'Freelance Payment',
        value: '$455.00',
        icon: FaPaypal
      }
    ]
  }

  render() {
    return (
      <div>
        <Invoices />
        <Sales />
        <Payment 
        left="670px"
        title={this.payments[0].title}
        description={this.payments[0].description}
        value={this.payments[0].value}
        icon={this.payments[0].icon}
        />
        <Payment 
        left="930px"
        title={this.payments[1].title}
        description={this.payments[1].description}
        value={this.payments[1].value}
        icon={this.payments[1].icon}
        />
      </div>
    );
  }
}

export default App;
