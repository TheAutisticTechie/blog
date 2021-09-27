require('dotenv').config();

const isDevEnv = process.env.ELEVENTY_ENV === 'dev';
const todaysDate = new Date();

function showDraft(data) {
    const isDraft = 'draft' in data && data.draft !== false;
    const isFutureDate = data.page.date > todaysDate;
    return isDevEnv || (!isDraft && !isFutureDate);
}

module.exports = ()=> {
    return {
        eleventyComputed: {
            eleventyExcludeFromCollections: data => showDraft(data) ? data.eleventyExcludeFromCollections : true,
            permalink: data => showDraft(data) ? data.permalink : false,
        }
    }
}
