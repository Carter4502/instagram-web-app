import {useState} from 'react'

const Form = ({newAccount, accountExists}) => {
    const [text, setText] = useState("")


    const onSubmit = (e) => {
        console.log({text})
        e.preventDefault()
        if (!text) {
            alert('Please type a username')
            return
        }
        if (accountExists({text})) {
            alert(text.toLowerCase() + ' has already been added.');
            setText("")
            return
        }
        newAccount({text})
        setText("")
    }
    return (
        <div>
            <form class="add-account" onSubmit={onSubmit}>
                <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="type an account name" class='add-account-sb' value={text} type="text" onChange={(e) => setText(e.target.value)}></input>
                <input class='add-account-submit' type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default Form
