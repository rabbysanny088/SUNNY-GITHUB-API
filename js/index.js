let searchBtn = document.querySelector("#searchButn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();

  searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if(userText!=''){
        // Fetch API 
        ui.showProfile('', true);
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            // console.log(data)
            if(data.message == "Not Found"){
                //Show Alert
                ui.showAlert("User not Found!", "alert alert-danger");
            }else{
                //Show profile
                ui.showProfile(data, false);
                ui.repos();
            }
        })

     

    }else{
        // Clear Profile

        ui.clearProfile();
    }
 })


//  let typed  = new Typed(".auto-typed", {
//     strings: ["SearchHere"],
//     typeSpeed: 170,
//     backSkpeed: 150,
//     loop: true
// });