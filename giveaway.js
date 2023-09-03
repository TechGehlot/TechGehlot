console.log("file stated")

const button = document.getElementById('giveaway_submit_btn');
button.addEventListener("click", function(e) {
  console.log('button was clicked');
  const code = document.getElementById('coupon_code_input').value;
  console.log(code);

  fetch('/giveaway_submit', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log(response)
        
        return;
      }
      throw new Error('Request failed.');
    })
    .then((data) => {
        console.log("Success:", data);
      })
    .catch(function(error) {
      console.log(error);
    });
});