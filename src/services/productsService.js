import http from "../http-common";

class ProductsDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }
}

export default new ProductsDataService();
