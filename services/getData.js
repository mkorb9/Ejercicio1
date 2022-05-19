class Service{
    static async getData() {
        const response = await fetch('https://api-test-ln.herokuapp.com/articles')
        const data = await response.json();
        return data.articles;
    }
}

module.exports = Service;