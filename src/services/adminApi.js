
const API_URL = import.meta.env.VITE_API_URL;

/* ---------- ADMIN LOGIN ---------- */
export const adminLogin = async (email, password) => {
  const res = await fetch(`${API_URL}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) throw new Error("Invalid credentials");
  return res.json();
};

/* ---------- GET LEADS ---------- */
export const getLeads = async () => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/api/leads`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) throw new Error("Unauthorized");
  return res.json();
};

/* ---------- ADD LEAD ---------- */
export const addLead = async (leadData) => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/api/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(leadData)
  });

  return res.json();
};

/* ---------- UPDATE LEAD ---------- */
export const updateLead = async (id, data) => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/api/leads/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

/* ---------- DELETE LEAD ---------- */
export const deleteLead = async (id) => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/api/leads/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });

  return res.json();
};


export const getLeadsWithFilters = async (params = {}) => {
  const token = localStorage.getItem("adminToken");

  const query = new URLSearchParams(params).toString();

  const res = await fetch(`${API_URL}/api/leads?${query}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) throw new Error("Unauthorized");
  return res.json();
};



export const updateLeadNote = async (id, adminNote) => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/api/leads/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ adminNote })
  });

  return res.json();
};
