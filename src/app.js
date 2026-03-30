const API_BASE_URL = "https://api.theawsn.shop";

//const API_BASE_URL = "https://localhost:4000"; 


// ================= REGISTER =================
async function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  try {
    const res = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (err) {
    console.error("Register error:", err);
  }
}


// ================= LOGIN =================
async function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const res = await fetch(
      "https://microservices-alb-1601462659.us-east-1.elb.amazonaws.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();
    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (err) {
    console.error("Login error:", err);
  }
}


// ================= LOAD USERS =================
async function loadUsers() {
  try {
    const res = await fetch(`${API_BASE_URL}/users`);
    const data = await res.json();

    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (err) {
    console.error("Users error:", err);
  }
}


// ================= LOAD ORDERS =================
async function loadOrders() {
  try {
    const res = await fetch(`${API_BASE_URL}/orders`);
    const data = await res.json();

    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (err) {
    console.error("Orders error:", err);
  }
}
