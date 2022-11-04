const needle = require('needle');

const token = "AAAAAAAAAAAAAAAAAAAAAPDPigEAAAAAcBaV1rs3sH5RdZ1byhommcg%2FWlc%3DFqD5v3BBButJkumEArXBn5KlEZhuv4mqXnHQrdGSErkmF96Z4y";

const endpointURL = "https://api.twitter.com/2/users/by?usernames="



async function getRequest() {


    const params = {
        usernames: "elonmusk", 
        "user.fields": "created_at,description,public_metrics" 
        
    }

    const res = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2UserLookupJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request')
    }
}

(async () => {

    try {
        
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });

    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();