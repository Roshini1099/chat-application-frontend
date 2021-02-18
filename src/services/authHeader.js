export default function authHeader() {
	const user = JSON.parse(localStorage.getItem("userId"));
	const token = JSON.parse(localStorage.getItem("token"));
	if (user && token) {
	  return { "x-access-token": token };
	} else {
	  return {};
	}
  }
  