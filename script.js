const URL = "https://striveschool-api.herokuapp.com/books";
const container = document.getElementById("books-container");
function createBookCard(book) {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  col.innerHTML = `
    <div class="card">
      <img src="${book.img}" class="card-img-top" alt="${book.title}">
      <div class="card-body d-flex flex-column justify-content-between">
        <div>
          <h6 class="card-title">${book.title}</h6>
          <p class="card-text text-muted">Prezzo: ${book.price}€</p>
        </div>
        <button class="btn btn-danger mt-3 scarta-btn">Scarta</button>
      </div>
    </div>
  `;

  col.querySelector(".scarta-btn").addEventListener("click", () => {
    col.remove();
  });

  return col;
}


fetch(URL)
  .then(res => res.json())
  .then(books => {
    books.forEach(book => {
      const card = createBookCard(book);
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Errore", err));
