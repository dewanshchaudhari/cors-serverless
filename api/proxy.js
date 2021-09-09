const axios = require('axios');
async function proxy(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }
    try {
        const {
            url
        } = req.query;
        const {
            data
        } = await axios.get(url);
        res.send(data);
    } catch (error) {
        res.status(500);
        const response = error.response || {};
        res.send({
            message: error.message,
            response
        })
    }


}
module.exports = proxy;
