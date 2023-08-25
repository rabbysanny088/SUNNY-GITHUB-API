class UI{
    constructor(){
        this.profile = document.querySelector("#profile");
    }

    showProfile(user, isLoading) {
        if(isLoading){
            this.profile.innerHTML = '<p>Loading...</p>'
        }else{
            this.clearAlert();
        this.profile.innerHTML = `
        <div class="card card-body mb-3>
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid rounded-circle mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge bg-primary p-2">Public Repos: ${user.public_repos}</span>
        <span class="badge bg-secondary p-2">Public Gists: ${user.gists}</span>
        <span class="badge bg-success p-2">Followers: ${user.followers}</span>
        <span class="badge bg-info p-2">Following: ${user.following}</span>
        <br><br>

        <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>   
            <li class="list-group-item">Website/Blog: ${user.blog}</li>   
            <li class="list-group-item">Location: ${user.location}</li>   
            <li class="list-group-item">Member Since: ${user.created_at}</li>   
        </ul>

        </div>
        </div>
        </div>
        
        `
        }
    }


    clearProfile(){
        this.profile.innerHTML = "";
    }

    showAlert(message, className){
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));

        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        container.insertBefore(div, search);
    }

    clearAlert(){
        let currentAlert = document.querySelector(".alert");
        if(currentAlert){
            currentAlert.remove();
        }
    }
}