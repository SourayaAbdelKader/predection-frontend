// Defining variables
const name = document.querySelector('[name="name"]');
let img_src = "https://dog.ceo/api/breeds/image/random";

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
        let div = document.getElementById("api-pictue");
        img = document.createElement("img")
        img.setAttribute("src", data.message);
        img.setAttribute("alt", "Dog"); 
        div.appendChild(img)  
    })
}

const userGender = (name) => {
    fetch("https://api.genderize.io/?name="+name)
    .then((response) => response.json())
    .then((data) => {
        user_gender = data.gender;
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
        user_age = data.age;
        if (user_age) {text = document.createTextNode("Age : "+  user_age);}
        else {text = document.createTextNode("Age : No idea!")};
        creatingTags(text,"user-age");
    })
}

const userNationality = (name) => {
    fetch("https://api.nationalize.io/?name="+name)
    .then((response) => response.json())
    .then((data) => {
        user_nationality = data.country;
        if (user_nationality) {
            text = document.createTextNode( "Nationality : ");
            creatingTags(text,"user-nationality")
            user_nationality.forEach(item => {
                let box = document.createElement("div");
                let tag = document.createElement("p");
                text = document.createTextNode( item.country_id + " " + (+item.probability *100).toFixed(2) + " %");
                tag.appendChild(text);
                box.appendChild(tag);
                const element = document.getElementById("user-nationality");
                element.appendChild(box);
            });
        } else {text = document.createTextNode("No idea!")};
    });
};

userGender("ahmad")
userAge("ahmad")
userNationality("ahmad")
picture()







