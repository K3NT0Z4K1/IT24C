class AppletList {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.applets = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderAppletList(this.applets); 
        this.bindSearchEvent();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            const data = await response.json();
            this.applets = data.applets; // Update to access the applets array
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderAppletList(applets, container) {
        container.innerHTML = applets.map(applet => 
            `<button class="btn btn-primary" style="margin-top:15px; width:25rem" onclick="location.href='${applet.link}'">
                ${applet.title}
            </button><br>`
        ).join('');
    }

    bindSearchEvent() {
        const appletSearchBar = document.getElementById('appletSearchBar');
        const appletSearchListContainer = document.getElementById('appletSearchList');

        appletSearchBar.addEventListener('input', () => {
            this.filterApplets(appletSearchBar.value, appletSearchListContainer);
        });

        this.renderAppletList(this.applets, appletSearchListContainer);
    }

    filterApplets(query, searchListContainer) {
        const filteredApplets = this.applets.filter(applet => 
            applet.title.toLowerCase().includes(query.toLowerCase()) || 
            applet.description.toLowerCase().includes(query.toLowerCase())
        );

        searchListContainer.innerHTML = '';
        this.renderAppletList(filteredApplets, searchListContainer);
    }
}

// Initialize the applet list with the JSON file
const appletList = new AppletList('applet-4.json');
