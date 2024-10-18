let applets = [];

fetch('applet.json')
  .then(response => response.json())
  .then(data => {
    applets = data; 
    renderApplets(applets); 
  })
  .catch(error => console.error('Error fetching JSON:', error));



  function renderApplets(applets) {
    const appletContainer = document.getElementById('appletContainer');
    appletContainer.innerHTML = '';
  

    applets.forEach(applet => {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const img = document.createElement('img');
        img.src = applet.imageUrl;
        img.classList.add('card-img-top');
        img.height = 180;

    