import { FaTimes } from 'react-icons/fa'

const Account = ({account, onDelete}) => {
    return (
        <center>
            <div class="accountDiv">
            <h2 class="account">@{account.text.toLowerCase()}<FaTimes onClick={() => onDelete(account.id)} style={{color: "#ff6961", cursor: "pointer"}} /></h2>
            </div>
        </center>
        
    )
}

export default Account
