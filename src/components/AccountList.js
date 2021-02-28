import Account from './Account'

const AccountList = ({accounts, onDelete}) => {
    return (
        <div>
            {accounts.map((account) => <Account onDelete={onDelete} key= {account.id} account={account} />)}
        </div>
    )
}

export default AccountList
