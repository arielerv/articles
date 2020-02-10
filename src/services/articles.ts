import http from './http'

export default class ArticlesService {
    static fetch() {
        return http.get('/articles')
    }
}
