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
        cardBody.style.minHeight = '200px';
    
        const title1 = document.createElement('h5');
        title1.classList.add('card-title');
        title1.textContent = applet.title1;
      

        const title2 = document.createElement('h5');
        title2.classList.add('card-title');
        title2.textContent = applet.title2;
        
    
        const text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = applet.description;
    
        const button = document.createElement('a');
        button.classList.add('btn');
        button.href = applet.link;
        button.textContent = 'Go to Applet';
        button.style.background = 'linear-gradient(to right, purple, #00f)';
        button.style.color = 'white';

      
    
        cardBody.appendChild(title1);
        cardBody.appendChild(title2);
        cardBody.appendChild(button);
        cardBody.appendChild(text);
        card.appendChild(img);
        card.appendChild(cardBody);
        appletContainer.appendChild(card);
      });
    }


    
document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredApplets = applets.filter(applet =>
      applet.title1.toLowerCase().includes(searchInput) ||
      applet.title2.toLowerCase().includes(searchInput)
    );


    

  renderApplets(filteredApplets);
});


document.getElementById('searchInput').addEventListener('input', function () {
  if (!this.value) {
    renderApplets(applets); 
  }
});