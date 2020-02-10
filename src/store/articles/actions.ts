import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    fetchArticles: null,
    receiveArticles: ['data'],
    articlesError: ['error'],
})

export const ArticlesTypes = Types
export default Creators
