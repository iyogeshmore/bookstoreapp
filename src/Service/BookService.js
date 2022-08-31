import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8085/book";

class BookService {
  getAllBooks() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/getall`);
  }
  sortBookByName() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/sortByBookName`);
  }
  sortByLowToHighPrice() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/sortByLowToHighPrice`);
  }
  sortByHighToLowPrice() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/sortByHighToLowPrice`);
  }
}

export default new BookService();
