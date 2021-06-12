const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // instantiating the elements
  const headerContainer = document.createElement('div')
  const spanContainer  = document.createElement('span')
  const h1Container = document.createElement('h1')
  const span1Conatainer = document.createElement('span')
  //we need to create class name
  headerContainer.classList.add('header')
  spanContainer.classList.add('date')
  span1Conatainer.classList.add('temp')
  //we need to put the element to div
  headerContainer.appendChild(spanContainer)
  headerContainer.appendChild(h1Container)
  headerContainer.appendChild(span1Conatainer)
  //we need to put data inside the container 
  spanContainer.textContent = `${date}`
  h1Container.textContent =`${title}`
  span1Conatainer.textContent = `${temp}`

// return 
  return headerContainer;
  
}







const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

   const divToAppendTo = document.querySelector(selector)
   const header = Header('Sayo Lovingfoss', 'August 4th','Birthday')
   divToAppendTo.appendChild(header)




}

export { Header, headerAppender }
