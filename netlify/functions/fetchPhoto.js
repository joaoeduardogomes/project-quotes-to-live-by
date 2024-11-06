
exports.handler = async (event, context) => {
    const apiKey = process.env.PEXELS_API_KEY;
    const query = event.queryStringParameters.query;

    const url = `https://api.pexels.com/v1/search?query=${query}&orientation=square&per_page=50`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error('Error fetching Pexels data:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to fetch Pexels data' }),
        };
    }
};