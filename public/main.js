if (window.Telegram && window.Telegram.WebApp) {
  const app = window.Telegram.WebApp;
  app.ready();
  app.expand();
}

async function loadItems() {
  let response = await fetch('/api/items');
  
  if (response.ok) {
    const json = await response.json();
    const shoppingList = document.querySelector('.shopping-list');
    
    shoppingList.innerHTML = '';

    json.forEach(element => {
      const listItem = document.createElement('li');
      
      listItem.textContent = element;
      shoppingList.append(listItem);
    });
  }
}

loadItems();

const input = document.querySelector('#input');
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', async () => {
  const value = input.value;

if (input.value.trim().length !== 0) {
  await fetch('/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ text: value })
  });
  
  loadItems();
  input.value = '';
} else {
  return;
}
});
