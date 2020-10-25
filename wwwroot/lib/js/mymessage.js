
let submitForm = document.querySelector("#signupform");
    submitForm.addEventListener("submit", submitData);

      function submitData(e) {
        e.preventDefault();

          //Get values
          let name, email, message;
          name = document.getElementById("MyMessage_Name").value;
          email = document.getElementById("MyMessage_Email").value;
          message = document.getElementById("MyMessage_Message").value;

          if (name == "") {
        alert("Please enter your name !!!");
              return false;
          };
          if (email == "") {
        alert("Please enter your email !!!");
              return false;
          };
          if (message == "") {
        alert("Please enter your Message !!!");
              return false;
          };

          fetch('/api/MyMessages', {
        method: 'POST',
              headers: {
        'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({name: name, email: email, message:message})
          }).then((res) => res.json())
              .then((data) => {
        submitForm.reset();
                  alert("Your message has been sent");
              })
              .catch((error) => {
        console.error('Error', error);
              })
            
      }