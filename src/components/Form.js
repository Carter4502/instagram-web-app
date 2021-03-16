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
            <form className="add-account" onSubmit={onSubmit}>
                <input autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="type an account name" className='add-account-sb' value={text} type="text" onChange={(e) => setText(e.target.value)}></input>
                <input className='add-account-submit' type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default Form
