import { Book } from "./Book.js";
import { UI } from "./Ui.js";
import Store from "./Store.js";




//DOM load Event 

document.addEventListener('DOMContentLoaded', Store.displayBooks);



//add event listeners

document.querySelector('#book-form').addEventListener('submit', function (e) {
    //get form values
    const titleInput = document.querySelector('#title').value,
        authorInput = document.querySelector('#author').value,
        isbnInput = document.querySelector('#isbn').value;

    //creating a new book object 
    const book = new Book(titleInput, authorInput, isbnInput);

    //create a ui object 
    const ui = new UI();


    //validate
    if (titleInput === '' || authorInput === '' || isbnInput === '') {
        ui.showAlert('Please fill in all fields', 'error');

    } else {


        //add book to list 
        ui.addBookToList(book)

        //add book to local storage
        Store.addBook(book);

        //success message
        ui.showAlert('Book added successfully', 'success')

        //clear fields
        ui.clearFields()
    }


    e.preventDefault()
});


//event listener for delete 

document.querySelector('#book-list').addEventListener('click', function (e) {
    //create ui object
    const ui = new UI();

    //delete book
    ui.deleteBook(e.target);

    //remove book from local storage
   
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);


    //delete success alert
    ui.showAlert('Book successfully removed!', 'success')


    e.preventDefault();
});

