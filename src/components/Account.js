import { FaTimes } from 'react-icons/fa'

const Account = ({userName}) => {
    return (
        <center>
            <div class="accountDiv">
            <h2 class="account">@{userName.text.toLowerCase()}<FaTimes style={{color: "#ff6961", cursor: "pointer"}} /></h2>
            </div>
        </center>
        
    )
}

export default Account
