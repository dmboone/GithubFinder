class Github {
    constructor(){ // Register app with github and then enter client id and client secret
        this.client_id = '9fd783085eb3c97339b2'; 
        this.client_secret = '120f99314046ca88866f2d3764b7ffc105398cdf';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile // same as profile : profile
        }
    }
}