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

  const cardContainer = document.createElement("div");
  const headlineC = document.createElement("div");
  headlineC.textContent = article.headline;

  const authorC = document.createElement("div");
  const imgDivC = document.createElement("div");
  const imgC = document.createElement("img");
  imgC.src = article.authorPhoto;
  const spanC = document.createElement("span");
  spanC.textContent = `By ${article.authorName}`;
  // console.log(spanC);
  cardContainer.classList.add("card");
  headlineC.classList.add("headline");
  authorC.classList.add("author");
  imgDivC.classList.add("img-container");

  cardContainer.appendChild(headlineC);
  cardContainer.appendChild(authorC);
  authorC.appendChild(imgDivC);
  authorC.appendChild(spanC);
  imgDivC.appendChild(imgC);

  // console.log(cardContainer);
  return cardContainer;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  return axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then((res) => {
      console.log(res.data.articles.javascript);

      const divToAppendTo = document.querySelector(selector);
      const jsData = res.data.articles.javascript;
      jsData.forEach((jsD) => {
        const jsCard = Card(jsD);
        divToAppendTo.appendChild(jsCard);
      });
      const bsData = res.data.articles.bootstrap;
      bsData.forEach((bsD) => {
        const bsCard = Card(bsD);
        divToAppendTo.appendChild(bsCard);
      });
      const techData = res.data.articles.technology;
      techData.forEach((techD) => {
        const techCard = Card(techD);
        divToAppendTo.appendChild(techCard);
      });
      const jqData = res.data.articles.jquery;
      jqData.forEach((jqD) => {
        const jqCard = Card(jqD);
        divToAppendTo.appendChild(jqCard);
      });
      const nodeData = res.data.articles.node;
      nodeData.forEach((nodeD) => {
        const nodeCard = Card(nodeD);
        divToAppendTo.appendChild(nodeCard);
      });
    });
};

export { Card, cardAppender };
