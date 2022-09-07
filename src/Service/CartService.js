import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8085/cart";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF9rZXkiOjF9.TTXe2qtO9NDI8EuYZRa4WTmWhJqyIVjrFliN8GNAyDk";

class cartService {
  addCart(data) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/add`, data, {
      params: { token: token },
    });
  }
  getCartById(cartId) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/GetById/${cartId}`);
  }
  GetAllCartData() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/GetAllCartData`);
  }
  deleteCartById(cartId) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${cartId}`, {
      params: { token: token },
    });
  }
  deleteAllCartData() {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/deleteAll`);
  }
  updateCartItems(id, data) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/updateCartItems/${id}`, data, {
      params: { token: token },
    });
  }
  updateCart(cartId, quantity, totalPrice) {
    return axios.put(
      `${EMPLOYEE_API_BASE_URL}/update/${cartId}/${quantity}/${totalPrice}`
    );
  }
}
export default new cartService();
