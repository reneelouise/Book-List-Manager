export class UI {

    addBookToList(bookToAdd) {
        // const { title, author, isbn } = bookToAdd; - destructuring example
        const list = document.querySelector('#book-list');
        //cretate table element of a row
        const row = document.createElement('tr');

        //    insert table data into table in rows

        row.innerHTML = `
        <td>${bookToAdd.title}</td>
        <td>${bookToAdd.author}</td>
        <td>${bookToAdd.isbn}</td>
        <td data-isbn=${bookToAdd.isbn}><a href ="#" data-isbn=${bookToAdd.isbn} class = "delete">X<a></td>
        `;


        list.appendChild(row);

    }


    showAlert(message, className) {
        //create div to hold alert
        const div = document.createElement('div');
        //add classes?
        div.className = `alert ${className}`;
        //add text to div which will hold message that is passed in upon calling the prototype
        div.appendChild(document.createTextNode(message));
        //div styling
        div.style.color = 'white';
        div.style.padding = '7px';
        div.style.margin = '7px';


        //get parent
        const container = document.querySelector('.container');

        const form = document.querySelector('#book-form')
        //insert element before container

        container.insertBefore(div, form);
        
        setTimeout(function () {
            document.querySelector('.alert').remove();

        }, 3000)




    }

    deleteBook(element) {
        if (element.className === 'delete') {
            element.parentElement.parentElement.remove();
        }

    }

    clearFields() {
        document.querySelector('form').reset();
        // document.querySelector('#title').value = '';
        // document.querySelector('#author').value = '';
        // document.querySelector('#isbn').value = '';



    }
}
