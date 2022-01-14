
// A Handler Function for button while submitting
function handleSubmit(ev) {
    ev.preventDefault()
    // Getting the id when the user enters a URL and select its value
    let infoUI = document.querySelector('#NewURL').value
    const { CheckForURL } = Client
    if (CheckForURL(infoUI)){
        // ONLY if the URL is valid it will fetch its INFORMATION
        console.log("Submitted")
        postINFO('http://localhost:8081/apiUrl', {url: infoUI})
        .then((fetchedData) => {  // SELECTING Portions to Display the data of EXTERNAL API
            document.querySelector('#text').innerText = `1) ${fetchedData.sentence_list[0].text}`
            document.querySelector('#agreement').innerText = `2) ${fetchedData.agreement}`
            document.querySelector('#subjectivity').innerText = `3) ${fetchedData.subjectivity}`
            document.querySelector('#confidence').innerText = `4)  ${fetchedData.confidence}`
            document.querySelector('#irony').innerText = `5) ${fetchedData.irony}`
            document.querySelector('#score_tag').innerText = `6) ${fetchedData.score_tag}`
        })
    } else {  // IF it's not valid it will pop up an ERROR
        alert("Re-Enter URL")
        document.querySelector('#NO').innerText = "Re-Enter URL"
    }
}

// ROUTE FOR POSTING DATA AND INTERACTION WITH EXPRESS SERVER
const postINFO =  async (url='', newData={}) => {
    // console.log("PostData", data)
    const response = await fetch(url,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newData)
    })
    try{
        return await response.json() // Return the fetched data from EXTERNAL API
    }
    catch(err){
        console.log(err)
    }
}
export {handleSubmit} 
