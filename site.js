import { bookList } from "./books.js";

const bookHTML = (book) => `
<tr>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.summary}</td>
</tr>
`

const tableBodyElement = document.getElementById("myTableBody")
tableBodyElement.innerHTML = "";

bookList.forEach(book => {
  const firstBookHtml = bookHTML(book)
  tableBodyElement.innerHTML += firstBookHtml;
})
