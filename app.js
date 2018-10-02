//initialize
const github = new GitHub;

// init UI
const ui = new UI;

// serch input
const serchUser = document.querySelector('#searchUser');

// serch input event listner
serchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        //make http call
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // show alert
                ui.showAlert('User not found', 'alert alert-danger mt-3')                
            } else {
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                ui.clearAlert();
            } 
        })
    } else {
        //clear profile
        ui.clearProfile();
        ui.clearAlert();

    }
})