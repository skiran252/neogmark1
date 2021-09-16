const axios = require('axios');

const retrieveQuiz = async (category, difficulty, numOfQuestions) => {
    try {
        const url = `https://quizapi.io/api/v1/questions?apiKey=51wL3ktxPC2iqRUeeY6oE3eaDElKuyyMFq6rwQi7&category=${category}&difficulty=${difficulty}&limit=${numOfQuestions}`;
        const data = await axios.get(url);
        return data.data;
    }
    catch (err) {
        console.log(err.message);
        return null;
    }
}
module.exports = retrieveQuiz;

