
const ContentButton = ({accounts, setForm, setLoading}) => {
    function prepData() {
        setForm(false);
        setLoading(true);
    }
    return (
        <div class="btnDiv">
            <button id={accounts.length > 0 ? 'analyze1':'analyze2'} onClick={() => prepData()}>
                Find Content
            </button>
        </div>
    )
}

export default ContentButton