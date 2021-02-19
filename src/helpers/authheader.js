export default function authHeader() {
	const user = localStorage.getItem("userId");
	const token = localStorage.getItem("token");
	if (user && token) {
	  return { "x-access-token": token };
	} else {
	  return {};
	}
  }
  