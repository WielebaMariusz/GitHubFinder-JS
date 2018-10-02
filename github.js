class GitHub {
    constructor(){
        this.client_id = 'c46b760a79dbf8b8d871';
        this.client_secret = '8865bf55b410e9cfa6c07590aa4b259e1865b669';
        this.repos_sort = 'created: asc';
        this.repos_count = 10;
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
                
        return {
            profile,
            repos
        } 
    }
}