import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8085/order";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF9rZXkiOjF9.TTXe2qtO9NDI8EuYZRa4WTmWhJqyIVjrFliN8GNAyDk";

class cartService {
  placeOrder(data) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/placeOrder`, data, {
      params: { token: token },
    });
  }
  getOrderById(id) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/getOrderById/${id}`, {
      params: { token: token },
    });
  }
  getAllOrders() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/getAllOrders`);
  }

  cancelOrder(id, data) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/cancelOrder/${id}`, data);
  }
}
export default new cartService();
