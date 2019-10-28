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

showBooks = (lib) => {
    for (let i = 0; i < lib.length; i++) {
        console.log("Book " + i);
        console.log(lib[i].author);
        console.log(lib[i].title);
        console.log(lib[i].readingStatus);
        console.log("-----------------------")
    }

}

showBooks(library);