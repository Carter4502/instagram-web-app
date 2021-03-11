import Header from './components/Header'
import AccountList from './components/AccountList'
import Form from './components/Form.js'
import ContentButton from './components/ContentButton.js'
import {useState} from 'react'
import LoadingIcon from './components/LoadingIcon.js'
function App() {
  const [accounts, setAccounts] = useState([])
  const [showForm, setForm] = useState(true)
  const [showLoading, setLoading] = useState(false)
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
      {showForm && <Form accountExists={accountExists} newAccount={addAccount}/>}
      {(accounts.length > 0 && showForm) && <AccountList accounts={accounts} onDelete={deleteAccount}/>}
      {showForm && <ContentButton accounts={accounts} setForm={setForm} setLoading={setLoading}/>}
      {showLoading && <LoadingIcon />}
    </div>


  );
}

export default App;

