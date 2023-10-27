//loading data into the document
document.addEventListener("DOMContentLoaded", ()=>{
    const bookReview = document.getElementById("book-review");
        const booklist = document.getElementById('book-list');

    //fetching data from google api
    fetch('https://www.googleapis.com/books/v1/volumes?q=motorbikes')
       .then(res => res.json()
            .then(data=>{
                data.items.forEach(book => {
                    const bookInfo = book.volumeInfo;
                const bookItem = document.createElement('div');
                bookItem.classList.add('book');
                bookItem.innerHTML = `
                    <h2>${bookInfo.title}</h2>
                    <p><strong>Authors:</strong> ${bookInfo.authors}</p>
                    <p><strong>Published Date:</strong> ${bookInfo.publishedDate}</p>
                    <img src="${bookInfo.imageLinks.thumbnail}" alt="Book Cover">
                    <div class="comments">//where to add comments
              <!-- Existing comments will be displayed here -->
            </div>
            <form class="commentForm">
              <textarea class="commentText" placeholder="Write your comment..."></textarea>
              <button type="submit">Post Comment</button>
            </form>
                `;
            //list of books
                const bookListItem = document.createElement('li');
          bookListItem.classList.add('book');
          bookListItem.innerHTML = `
            <h5>${bookInfo.title}</h5>
          `;
                

                
                bookReview.appendChild(bookItem);
                booklist.appendChild(bookListItem);
                             


                        //creating description button
                const button = document.createElement('button')
                button.textContent = 'Description'
                button.addEventListener('click', () => {
                    if(bookInfo.description){

                    
                    const descriptionDiv = document.createElement('div')
                    descriptionDiv.textContent = bookInfo.description
                    // newDiv.textContent = bookInfo.description                    
                    
                    bookItem.appendChild(descriptionDiv)
                    }else{
                        alert('No description available for this book.')
                    }

                    
                    
                    
                })
                bookItem.appendChild(button);
                   ;
                

            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        }));
        ///it is not working as expected
        const searchButton = document.getElementById("search-button");
    const searchBar = document.getElementById("search-bar");

    searchButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        
        const searchTerm = searchBar.value.trim();

        if (searchTerm !== "") {
            // Redirect to the search result page with the search term as a query parameter
           
        } else {
          alert("Please enter a search term.");
        }
    });


      });
      

