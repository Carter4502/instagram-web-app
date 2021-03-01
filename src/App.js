import Header from './components/Header'
import AccountList from './components/AccountList'
import Form from './components/Form.js'
import {useState} from 'react'

function App() {
  const [accounts, setAccounts] = useState([])


  // check if account is present
  const accountExists = (account) => {
    for (var i = 0; i < accounts.length; i++) {
      if (account.text.toLowerCase() === accounts[i].text) {
        return true;
      }
    }
    return false;
  }

  // Add an account

  const addAccount = (account) => {
    const id = Math.floor(Math.random() * 10000) + 1
    account.text = account.text.toLowerCase()
    const newAccount = {id, ...account}
    setAccounts([newAccount, ...accounts])
  }

  // delete an account

  const deleteAccount = (id) => {
    setAccounts(accounts.filter((account) => account.id !== id))
  }
  return (
    <div class="mainDiv">
      <Header />
      <Form accountExists={accountExists} newAccount={addAccount}/>
      {accounts.length > 0 && <AccountList accounts={accounts} onDelete={deleteAccount}/>}
      <div class="btnDiv"><button id={accounts.length > 0 ? 'analyze1':'analyze2'}>Find Content</button></div>

    </div>


  );
}

export default App;

