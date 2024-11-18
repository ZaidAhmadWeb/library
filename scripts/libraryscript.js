const myLibary = [
    {
        title: "book 1",
        author: "zaid",
        pages: 45,
        read: false,
    },
    {
        title: "book 2",
        author: "Shariq",
        pages: 39,
        read: true,
    },
    {
        title: "book 3",
        author: "osama",
        pages: 90,
        read: false,
    }
];


function showbooks() {
    const container = document.querySelector(".books");
    container.innerHTML = "";
    myLibary.forEach((book) => {
        const singlebook = document.createElement("div");
        singlebook.classList.add("book");

        const booktitle = document.createElement("h1");
        booktitle.style.cssText = "padding-bottom:3px;";
        const bookauthor = document.createElement("h2");
        bookauthor.style.cssText = "padding-bottom:3px;";
        const bookpages = document.createElement("p");
        bookpages.style.cssText = "padding-bottom:3px;";
        const bookread = document.createElement("input");

        bookread.setAttribute('type', 'checkbox');
        if (book.read == true) {
            bookread.setAttribute("checked", "checked");
        }


        bookpages.textContent = `${book.title} have ${book.pages} pages`;
        booktitle.textContent = `book title: ${book.title}`;
        bookauthor.textContent = `book author: ${book.author}`;

        singlebook.appendChild(booktitle);
        singlebook.appendChild(bookauthor);
        singlebook.appendChild(bookpages);
        singlebook.appendChild(bookread);

        container.appendChild(singlebook);


    })
}

showbooks();

const modal = document.querySelector("#modal");
const submitbutton = document.querySelector("#submit");
const cancelbutton = document.querySelector("#cancel");




const addbutton = document.querySelector(".addbookbutton");
addbutton.addEventListener("click", () => {
    modal.style.cssText = "display:flex;";
})

submitbutton.addEventListener("click", () => {
    const booktitle = document.querySelector("#booktitle").value;
    const bookauthor = document.querySelector("#bookauthor").value;
    const bookpages = document.querySelector("#bookpages").value;
    const bookread = document.querySelector("#read").checked;

    addBookToLibrary(booktitle, bookauthor, bookpages, bookread);

    modal.style.cssText = "display:none;";
})

cancelbutton.addEventListener("click", () => {

    modal.style.cssText = "display:none;";
})


class book{

    constructor(bookname, bookauthor, bookpages, bookread){
        this.title = bookname;
        this.author = bookauthor;
        this.pages = bookpages;
        this.read = bookread;
    }
}





function addBookToLibrary(booktitle, bookauthor, bookpages, bookread) {
    const newbook = new book(booktitle, bookauthor, bookpages, bookread);
    myLibary.push(newbook);
    showbooks();
}