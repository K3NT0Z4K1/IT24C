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

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
    
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = applet.title;
    
        const text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = applet.description;
    
        const button = document.createElement('a');
        button.classList.add('btn', 'btn-primary');
        button.href = applet.link;
        button.textContent = 'Go to Applet';
    
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);
        appletContainer.appendChild(card);
      });
    }


    
document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredApplets = applets.filter(applet =>
      applet.title.toLowerCase().includes(searchInput)
    );


    

  renderApplets(filteredApplets);
});


document.getElementById('searchInput').addEventListener('input', function () {
  if (!this.value) {
    renderApplets(applets); 
  }
});