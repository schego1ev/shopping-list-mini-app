if (window.Telegram && window.Telegram.WebApp) {
  const app = window.Telegram.WebApp;
  app.ready();
  app.expand();
}

async function loadItems() {
  let response = await fetch('/api/items');
  
  if (response.ok) {
    let json = await response.json();
    console.log(json);
  }
}
