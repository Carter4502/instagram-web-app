import Header from './components/Header'
import AccountList from './components/AccountList'
import Form from './components/Form.js'
import {useState} from 'react'

function App() {
  const [accounts, setAccounts] = useState([])


  // check if account is present
  const accountExists = (account) => {
    for (var i = 0; i < accounts.length; i++) {
      if (account.text === accounts[i].text) {
        return true;
      }
    }
    return false;
  }

  // Add an account

  const addAccount = (account) => {
    const id = Math.floor(Math.random * 10000) + 1
    const newAccount = {id,...account}
    setAccounts([newAccount, ...accounts])
  }
  return (
    <div>
      <Header />
      <Form accountExists={accountExists} newAccount={addAccount}/>
      {accounts.length > 0 && <AccountList accounts={accounts} />}
    </div>


  );
}

export default App;

