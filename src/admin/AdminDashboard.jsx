
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLeads,
  updateLeadStatus,
  deleteLead
} from "../services/adminApi";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLeads = async () => {
    try {
      const data = await getLeads();
      setLeads(data);
    } catch (err) {
      setError("Session expired. Please login again.");
      localStorage.removeItem("adminToken");
      navigate("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    await updateLeadStatus(id, newStatus);
    setLeads((prev) =>
      prev.map((lead) =>
        lead._id === id ? { ...lead, status: newStatus } : lead
      )
    );
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    await deleteLead(id);
    setLeads((prev) => prev.filter((lead) => lead._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: 60 }}>Loading...</p>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* HEADER */}
        <div style={styles.header}>
          <h2 style={styles.title}>Admin Dashboard</h2>
          <button onClick={handleLogout} style={styles.logout}>
            Logout
          </button>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        {/* TABLE */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Loan Type</th>
                <th>City</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan="7" style={styles.empty}>
                    No leads found
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead._id} style={styles.row}>
                    <td>{lead.fullName}</td>
                    <td>{lead.phone}</td>
                    <td>{lead.loanType}</td>
                    <td>{lead.city}</td>
                    <td>
                      {new Date(lead.createdAt).toLocaleDateString()}
                      <div style={styles.time}>
                        {new Date(lead.createdAt).toLocaleTimeString()}
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handleStatusChange(lead._id, lead.status)
                        }
                        style={{
                          ...styles.status,
                          backgroundColor:
                            lead.status === "Active" ? "#16a34a" : "#dc2626"
                        }}
                      >
                        {lead.status}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(lead._id)}
                        style={styles.delete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* ================= STYLES ================= */

const styles = {
  page: {
    background: "#f1f5f9",
    minHeight: "100vh",
    padding: "50px 24px"
  },
  card: {
    maxWidth: "1300px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "18px",
    padding: "30px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.1)"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px"
  },
  title: {
    margin: 0,
    fontSize: "30px",
    fontWeight: "700",
    color: "#0f172a"
  },
  logout: {
    padding: "10px 20px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600"
  },
  error: {
    color: "#dc2626",
    marginBottom: "16px",
    fontSize: "15px"
  },
  tableWrapper: {
    overflowX: "auto"
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 20px", 
    fontSize: "16px",
    textAlign: "center"
  },
  row: {
    background: "#f8fafc",
    borderRadius: "12px"
  },
  time: {
    fontSize: "13px",
    color: "#64748b",
    marginTop: "4px"
  },
  status: {
    padding: "8px 18px",
    borderRadius: "999px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "700"
  },
  delete: {
    padding: "8px 16px",
    background: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600"
  },
  empty: {
    textAlign: "center",
    padding: "40px",
    fontSize: "16px",
    color: "#64748b"
  }
};

export default AdminDashboard;
