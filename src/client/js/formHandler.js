function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForUrl(formText)
    console.log("::: Form Submitted :::")

    postData('http://localhost:8090/api', {name: formText})
   .then(function(res) {
     document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
     document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
     document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
   })
}

const postData = async (url = "", data = {}) => {
   const response = await fetch(url, {
       method: 'POST',
       credentials: 'same-origin',
       mode: 'cors',
       headers: {
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)
   });
   try {
       const newData = await response.json();
       console.log('Data received:', newData)
       return newData;
   } catch (error) {
       console.log('error', error);
   }
};

export { handleSubmit }
