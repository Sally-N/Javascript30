// write an object constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.info = function () {
            console.log(title + " by " + author, + pages, + read)
        }
    }
}

// instanstiate the object
const bookOne = new Book('River', "Wendy", "20", "I gave up")
console.log(bookOne);

// If you’re using constructors to make your objects it is best to define functions on the prototype of that object.