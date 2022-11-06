(function () {
    document.querySelector('#add').addEventListener('click', function () {
      let input = document.querySelector('#text');
      let list = document.querySelector('#list'); 
      
      let item = document.createElement('li'); // create li node
      let itemText = document.createTextNode(input.value); // create text node
      
      item.appendChild(itemText); // append text node to li node
      list.appendChild(item); // append li node to list
      
      input.value = ""; // clear input
    });
  })();