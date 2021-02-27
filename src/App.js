import Header from './components/Header'
import AccountList from './components/AccountList'
import Form from './components/Form.js'
import {useState} from 'react'

function App() {
  const [accounts, setAccounts] = useState([])



  // Add an account

  const addAccount = (account) => {
    const id = Math.floor(Math.random * 10000) + 1
    const newAccount = {id,...account}
    setAccounts([newAccount, ...accounts])
  }
  return (
    <div>
      <Header />
      <Form newAccount={addAccount}/>
      {accounts.length > 0 && <AccountList accounts={accounts} />}
    </div>


  );
}

export default App;

