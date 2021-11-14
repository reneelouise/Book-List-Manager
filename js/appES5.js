// book constructor

function Book(title, author, isbn){
    this.title=title;
    this.author = author;
    this.isbn = isbn;
};

// UI constructor

function UI(){}

//create UI prototype to add book to list 
UI.prototype.addBookToList = function(book){
   const list = document.querySelector('#book-list');
   //cretate table element of a row
   const row = document.createElement('tr');

//    insert table data into table in rows

   row.innerHTML =`
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href ="#" class = "delete">X<a></td>
   `;


   list.appendChild(row);



}

//show Alert
UI.prototype.showAlert = function(message, className){
    //create div to hold alert
    const div = document.createElement('div');
    //add classes?
    div.className = `alert ${className}`;
    //add text to div which will hold message that is passed in upon calling the prototype
    div.appendChild(document.createTextNode(message));
    //div styling
    div.style.color ='white';
    div.style.padding ='7px';
    div.style.margin ='7px';
    

    //get parent
    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form')
    //insert element before container

    container.insertBefore(div, form);
    setTimeout(function(){
        document.querySelector('.alert').remove();

    },3000)




}

//delete book
UI.prototype.deleteBook = function(target){
    if(target.className ==='delete') {
        target.parentElement.parentElement.remove();
    }

}

//clear fields

UI.prototype.clearFields = function (){
    document.querySelector('#title').value= '';
    document.querySelector('#author').value= '';
    document.querySelector('#isbn').value= '';
    
}

//eventlisteners

document.querySelector('#book-form').addEventListener('submit', function(e){
    //get form values
    const titleInput = document.querySelector('#title').value,
          authorInput = document.querySelector('#author').value,
          isbnInput = document.querySelector('#isbn').value;

    //creating a new book object 
    const book = new Book(titleInput, authorInput, isbnInput);

  

    //create a ui object 
    const ui = new UI();


    //validate
    if(titleInput === '' || authorInput ==='' || isbnInput ===''){
        ui.showAlert('Please fill in all fields', 'error');
        
    }else{
  

    //add book to list 
    ui.addBookToList(book)

    //success message
    ui.showAlert('Book added successfully', 'success')

    //clear fields
    ui.clearFields()
    }


    e.preventDefault()
});


//event listener for delete 

document.querySelector('#book-list').addEventListener('click',function(e){
//create book object
    const ui = new UI();

    //delete book
    ui.deleteBook(e.target);
    
    //delete success alert
    ui.showAlert('Book successfully removed!', 'success')


    e.preventDefault();
});