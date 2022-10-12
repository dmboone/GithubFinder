class Github {
    constructor(){ // Register app with github and then enter client id and client secret
        this.client_id = '9fd783085eb3c97339b2'; 
        this.client_secret = '0e88c5636590bbfd8115aade165dd2003c6ff027';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile, // same as profile : profile
            repos // same as repos : repos
        }
    }
}