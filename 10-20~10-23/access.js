function createPhotoCard(photoURL, caption) {
    var photoCardSection = document.createElement('section');
    photoCardSection.classList.add('photo-card');

    var imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('img-container');
    photoCardSection.appendChild(imgContainerDiv);

    var img = document.createElement('img');
    img.classList.add('person-photo-img');
    img.src = photoURL;
    imgContainerDiv.appendChild(img);

    var captionContainer = document.createElement('div');
    captionContainer.classList.add('caption');
    captionContainer.textContent = caption;

    photoCardSection.appendChild(captionContainer);

    console.log('photoCardSection:', photoCardSection);

    return photoCardSection;
}

var newPhotoCard = createPhotoCard("http://placekitten.com/320/320/", "A cute kitten");
var photoCardContainer = document.getElementById('photo-card-container');
var userSpecifiedContent = "<img src=x onerror=\"alert('Uh oh!')\">";

// photoCardContainer.innerHTML += "<div class=\"lorem-card\">" + userSpecifiedContent + "</div>";

// photoCardContainer.textContent += userSpecifiedContent;

var newDiv = document.createElement('div');
newDiv.textContent = userSpecifiedContent;
newDiv.classList.add('photo-card');

newDiv.style.color = 'orange';
newDiv.style.border = '3px dashed purple';

var newSpan = document.createElement('span');
newSpan.classList.add('photo-card');

var newTextNode = document.createTextNode(userSpecifiedContent);
newSpan.appendChild(newTextNode);

newDiv.appendChild(newSpan);
// newDiv.parentNode.removeChild();

// better way to do above would be to add another class to css and then add a class to it
console.log('newDiv', newDiv);
// appends the new div to the end of the photocard container
photoCardContainer.appendChild(newPhotoCard);


// *************************EVENT HANDLING ****************************************************************



