//functions
// creates paragraph tags and adds texts to them
const creatingTags = (text,id) => {
    let tag = document.createElement("p");
    tag.appendChild(text);
    const element = document.getElementById(id);
    element.appendChild(tag);
}
// fetches the dog picture randomly
const picture = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        let div = document.getElementById("picture");
        img = document.createElement("img")
        img.setAttribute("src", data.message);
        img.setAttribute("alt", "Dog"); 
        div.appendChild(img);
    })
    .catch(error => {
        element.parentElement.innerHTML = `Error: ${error}`;
        console.error('There was an error!', error);
    });
};

const userGender = (name) => {
    fetch("https://api.genderize.io/?name="+name)
    .then((response) => response.json())
    .then((data) => {
        let user_gender = data.gender;
        probability = data.probability;
        if (user_gender) {text = document.createTextNode("Gender : " + user_gender.charAt(0).toUpperCase() + user_gender.slice(1) + " " + probability*100 + "%");}
        else {text = document.createTextNode("Gender : No idea!")} 
        creatingTags(text,"user-gender")  
    })
}

const userAge = (name) => {
    fetch("https://api.agify.io/?name="+name)
    .then((response) => response.json())
    .then((data) => {
        let user_age = data.age;
        if (user_age) {text = document.createTextNode("Age : "+  user_age);}
        else {text = document.createTextNode("Age : No idea!")};
        creatingTags(text,"user-age");
    })
}

const userNationality = (name) => {
    fetch("https://api.nationalize.io/?name="+name)
    .then((response) => response.json())
    .then((data) => {
        let user_nationality = data.country;
        text = document.createTextNode( "Nationality : ");
        creatingTags(text,"user-nationality")
        if (user_nationality.length != 0) {
            user_nationality.forEach(item => {
                let box = document.createElement("div");
                let tag = document.createElement("p");
                text = document.createTextNode( item.country_id + " " + (+item.probability *100).toFixed(2) + " %");
                tag.appendChild(text);
                box.appendChild(tag);
                const element = document.getElementById("user-nationality");
                element.appendChild(box);
            });
        } else {answer = document.createTextNode("No idea!");
            let element = document.getElementById("user-nationality");
            element.appendChild(answer);
    };
    });
};


// In the following section, I was trying to create a login, sign up pop up, but there is an error I couldn't fix on time
/*
function login(showhide){
    if(showhide == "show"){
        document.getElementById('popupbox').style.visibility="visible";
    }else if(showhide == "hide"){
        document.getElementById('popupbox').style.visibility="hidden"; 
    }
}

login("show");
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const login = getElementById("log_in");

login.addEventListener("click", () =>{
    if (localStorage.getItem(username)){
            if (password = localStorage.getItem(username)){
                login("hide");
    }};
});

const signup = getElementById("signup");
signup.addEventListener("click", () =>{
    localStorage.setItem(username, password);
    login("hide")
});*/

// retrieving results
clicked = 0;
const button = document.getElementById("button");
const reset = document.getElementById("reset");

for (let i=0; i<4; i++){
    picture();
}

button.addEventListener("click", () => {
    let user_name = document.getElementById("user_name").value;
    if (user_name.length > 0) {
        userGender(user_name);
        userAge(user_name);
        userNationality(user_name);
    }
})

// create the reset button for a better switching between submitting the input and reloading the page
reset.addEventListener("click", () => {
    window.location.reload()
});
