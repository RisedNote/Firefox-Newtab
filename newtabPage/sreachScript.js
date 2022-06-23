// grabs all links from the shortcuts

const uiNames = document.querySelectorAll("a[href]");
const uiNamesarr = Array.from(uiNames);

let objOfLinks = [];
objOfLinks = uiNamesarr.map((item) => {
	return {name: item.firstChild.data, link: item.attributes.href.nodeValue};
});

let arrOfNames = []
objOfLinks.forEach((e) => {
  
  arrOfNames.push(e.name);
})

// if the input search has a similar pattern it takes you to that website 
document.querySelector(".search-form").addEventListener( "keydown", function( e ) { 
  let keyCode = e.keyCode || e.which; // runs when user presses "enter" key
  if ( keyCode === 13 ) {
    const userInput = document.querySelector(".search-form").value; // grabs what user typed

    const match = arrOfNames.find(name => {
      if (name.toLowerCase().substring(0, 3).includes(userInput.toLowerCase())) { // checks if user input is a substring of 3 in the "nameArray"
        return true;
      }
    });

    //console.log(match);

    let linkToOpen = false;
    objOfLinks.forEach((e) => {
      if (match === e.name) {
        linkToOpen = e.link;
      } 
    });
    if (linkToOpen) {
      window.open(linkToOpen, "_self");
    } else {
      const baseLink = "https://search.brave.com/search?q=";
      const link = baseLink.concat(userInput);
      console.log(link);
      window.open(link, "_self");
    }
  }
}, false);
