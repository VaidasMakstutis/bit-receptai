const Page = require('../components/Page.js');

class PageHome extends Page {
    constructor() {
        super();
        this.route = '';
        this.pageName = 'Home';
        this.pageTemplateName = 'home';
    }

    bodyHTML() {
        return `<h1>Receptai - home</h1>
                <p>Skaniausi receptai Kaune - uzsukite pasigardziuoti</p>
                <div class="btn">Click me!</div>
                <img src="/img/saliami-1.jpg" alt="Saliamis">
                <img src="/img/vaikiska-pica.png" alt="Vaikiska pica">
                <script src="/js/main.js"></script>`;
    }
}

module.exports = PageHome;