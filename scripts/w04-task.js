/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
name: "Chase Wallace",
photo: "images/fampic.jpeg",
favoriteFoods: [
    "Pizza", 
    "Spaghetti", 
    "Ice Cream", 
    "Pancakes"
],
hobbies: ["Reading", "Playing video games", "Working out"
],
placesLived:[]
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Smithfield, UT",
        length: "18 year"
    }
);
myProfile.placesLived.push(
    {
        place: "Cedar City, UT",
        length: "2 year"
    }
);
myProfile.placesLived.push(
    {
        place: "Idaho Falls, ID",
        length: "3 year"
    }
);
myProfile.placesLived.push(
    {
        place: "Naga, Philippines",
        length: "2 year"
    }
);



/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = `Profile picture of ${myProfile.name}`;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = placeLived.place;
    document.querySelector('#places-lived').appendChild(dtElement);
    let ddElement = document.createElement('dd');
    ddElement.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(ddElement);
});

