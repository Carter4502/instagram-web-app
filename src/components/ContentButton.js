
const ContentButton = ({accounts, setForm, setLoading, setPostVisible, setViralPosts, setAccounts}) => {

    async function getJsonData(userName) {
        try {
          let response = await fetch('https://api.allorigins.win/raw?url=https://www.instagram.com/' + userName + '/channel/?__a=1');
          let responseJson = await response.json();
          var jsonNeeded = responseJson.graphql.user.edge_owner_to_timeline_media.edges;
          var postArray = [];
          var sum = 0;
          for (var i = 0; i < 12; i++) {
            sum += jsonNeeded[i].node.edge_media_preview_like.count;
            postArray.push({
                'id': "www.instagram.com/p/" + jsonNeeded[i].node.shortcode,
                'likes': jsonNeeded[i].node.edge_media_preview_like.count,
                'imgURL': jsonNeeded[i].node.display_url,
                'comments': jsonNeeded[i].node.edge_media_to_comment.count,
                'time': jsonNeeded[i].node.taken_at_timestamp,
                'user': userName
            })
          }
          sum /= 12;
          postArray = postArray.filter((post) => (1 - (sum / post.likes)) > 0.5)
          for (var j = 0; j < postArray.length; j++) {
              postArray[j]['viralScore'] = Math.round((1 - (sum / postArray[j].likes)) * 100)
          }
          return postArray;
         } catch(error) {
          console.error(error);
        }
      }


    function compare(a, b) {
        if (a.viralScore > b.viralScore) {
            return -1;
        }
        if (a.viralScore < b.viralScore) {
            return 1;
        }
        return 0;
    }

    async function prepData() {
        setForm(false);
        setLoading(true);
        var masterList = [];
        for (var i = 0; i < accounts.length; i++) {
            let a = await getJsonData(accounts[i].text.toLowerCase());
            masterList = masterList.concat(a);
        }
        masterList.sort(compare)
        for (var k = 0; k < masterList.length; k++) {
            try {
                if (typeof masterList[k] === undefined || !masterList[k].hasOwnProperty('likes') || !masterList[k].hasOwnProperty('viralScore') || !masterList[k].hasOwnProperty('imgURL') || !masterList[k].hasOwnProperty('id')) {
                    continue;
                }
            } catch {
                setLoading(false);
                alert("One of your accounts is either private or misspelled, please re-enter the usernames and try again.");
                setAccounts([]);
                setForm(true);
                return;
            }
        
        }
        setViralPosts(masterList);
        setLoading(false);
        if (masterList.length >= 1) {
            setPostVisible(true); 
        } else {
            setLoading(false);
            setAccounts([]);
            setForm(true);
            alert("No posts found, please add more accounts or try again later.")
        }
    }

    return (
        <div className="btnDiv">
            <button id={accounts.length > 0 ? 'analyze1':'analyze2'} onClick={() => prepData()}>
                Find Content
            </button>
        </div>
    )
}

export default ContentButton