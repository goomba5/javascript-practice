// write a javascript program to display the reading status of the following books

let library = [
    {
        author: "Jon Duckett",
        title: "HTML & CSS: Design and Build Websites",
        readingStatus: true
    },
    {
        author: "Jon Duckett",
        title: "JavaScript & JQuery",
        readingStatus: false
    },
    {
        author: "Ta-Nehisi Coates",
        title: "Black Panther: A Nation Under Our Feet, Book One",
        readingStatus: true
    }
]

// let html = "<table border='1|1'>";
let authorName = library[2].author;
showAuthor = () => {
    alert(library[2].author);
}

document.getElementById("table").innerHTML = authorName;