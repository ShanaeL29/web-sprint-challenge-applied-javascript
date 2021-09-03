import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // //Instantiation of elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const authorContainer = document.createElement("div");
  const photoContainer = document.createElement("div");
  const authorPhoto = document.createElement("img");
  const author = document.createElement("span");

  //Hierarchy of elements
  card.appendChild(headline);
  card.appendChild(authorContainer);
  authorContainer.appendChild(photoContainer);
  authorContainer.appendChild(author);
  photoContainer.appendChild(authorPhoto);

  //Classes
  card.classList.add("card");
  headline.classList.add("headline");
  authorContainer.classList.add("author");
  photoContainer.classList.add("img-container");

  //Set text
  headline.textContent = `${article["headline"]}`;
  authorPhoto.setAttribute("src", `${article["authorPhoto"]}`);
  author.textContent = `By ${article["authorName"]}`;

  card.addEventListener("click", function () {
    console.log(headline);
  });

  return card;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
    .get(`http://localhost:5000/api/articles`)
    .then((res) => {
      console.log(res);
      const subject1 = res.data.articles.bootstrap;
      subject1.forEach((article) => {
        const article1 = Card(article);
        document.querySelector(selector).appendChild(article1);
      });
      const subject2 = res.data.articles.javascript;
      subject2.forEach((article) => {
        const article2 = Card(article);
        document.querySelector(selector).appendChild(article2);
      });
      const subject3 = res.data.articles.jquery;
      subject3.forEach((article) => {
        const article3 = Card(article);
        document.querySelector(selector).appendChild(article3);
      });
      const subject4 = res.data.articles.node;
      subject4.forEach((article) => {
        const article4 = Card(article);
        document.querySelector(selector).appendChild(article4);
      });
      const subject5 = res.data.articles.technology;
      subject5.forEach((article) => {
        const article5 = Card(article);
        document.querySelector(selector).appendChild(article5);
      });
    })
    .catch((err) => {
      console.error(err);
    });

  return cardAppender;
};

export { Card, cardAppender };
