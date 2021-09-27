require('dotenv').config();

const isDevEnv = process.env.ELEVENTY_ENV === 'dev';

module.exports = ()=> {
    return {
        eleventyComputed: {
            eleventyExcludeFromCollections: data => isDevEnv ? data.eleventyExcludeFromCollections : true,
            permalink: data => {
                if(!isDevEnv) { return false; }
                return data.permalink !== '' ? data.permalink : data.page.filePathStem.replace('/drafts/', '/blog/') + '/';
            }
        }
    }
}
