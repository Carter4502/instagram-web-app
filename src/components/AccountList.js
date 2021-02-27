import Account from './Account'

const AccountList = ({accounts}) => {
    return (
        <div>
            {accounts.map((account) => <Account key= {account.id} userName={account} />)}
        </div>
    )
}

export default AccountList
