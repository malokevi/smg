const space = 'medhngoul5w4'
const accessToken = 'ewwwkjcg_3ycslSq5K9UAWnrIm669JAYjBKq0v63bB4'
const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
})

export const getEntries = (entryId) => {
    return client.getEntries()
}