class CardList {
    constructor(cards) {
        this.cards = cards;
        this.init();
    }

    init() {
        this.renderCardList(this.cards, 'studentList');
        this.bindSearchEvent();
    }

    renderCardList(cards, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = cards.map(card => 
            `<div class="card applet-card" style="margin-bottom: 1rem;">
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">${card.program}</p>
                </div>
            </div>`
        ).join('');
    }

    bindSearchEvent() {
        const cardSearchBar = document.getElementById('studentSearchBar');
        const cardSearchListContainer = document.getElementById('studentSearchList');

        cardSearchBar.addEventListener('input', () => {
            this.filterCards(cardSearchBar.value, cardSearchListContainer);
        });

        // Render the full card list initially
        this.renderCardList(this.cards, 'studentList');
    }

    filterCards(query, searchListContainer) {
        const filteredCards = this.cards.filter(card => {
            const fullName = `${card.name} ${card.program}`;
            return fullName.toLowerCase().includes(query.toLowerCase());
        });

        // Render filtered cards
        this.renderCardList(filteredCards, 'studentSearchList');
    }
}

// Sample card data directly in JavaScript
const cardData = [
    { name: 'John Doe', program: 'Computer Science' },
    { name: 'Jane Smith', program: 'Information Technology' },
    { name: 'Emily Johnson', program: 'Software Engineering' },
    { name: 'Michael Brown', program: 'Web Development' }
];

// Instantiate the CardList with the sample data
const cardList = new CardList(cardData);
