
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLeadsWithFilters,
  addLead,
  updateLead,
  deleteLead,
  updateLeadNote
} from "../services/adminApi";
import "./AdminDashboard.css";

const PAGE_SIZE = 10;

const AdminDashboard = () => {
  const navigate = useNavigate();

  /* ================= STATE ================= */
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState({
    name: "",
    phone: "",
    loanType: "",
    city: "",
    status: "",
    date: "",
    from: "",
    to: ""
  });

  const [leadModal, setLeadModal] = useState(false);
  const [noteModal, setNoteModal] = useState(false);
  const [editingLead, setEditingLead] = useState(null);
  const [noteLead, setNoteLead] = useState(null);
  const [noteText, setNoteText] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    loanType: "",
    city: "",
    status: "New"
  });

  /* ================= LOAN OPTIONS ================= */
  const loanOptions = [
    "Personal Loan",
    "Home Loan",
    "Business Loan",
    "Education Loan",
    "Working Capital Loan",
    "Loan Against Property",
    "Overdraft Facility",
    "Car Loan",
    "Gold Loan",
    "Two Wheeler Loan",
    "Commercial Vehicle Loan"
  ];

  /* ================= FETCH LEADS ================= */
  const fetchLeads = async (customFilters = filters) => {
    try {
      setLoading(true);
      const data = await getLeadsWithFilters(customFilters);
      setLeads(data);
      setCurrentPage(1);
    } catch {
      localStorage.removeItem("adminToken");
      navigate("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  /* ================= STATUS UPDATE ================= */
  const handleStatusChange = async (id, status) => {
    try {
      await updateLead(id, { status });
      setLeads(leads.map(l => (l._id === id ? { ...l, status } : l)));
    } catch {
      alert("Failed to update status");
    }
  };

  /* ================= FILTERS ================= */
  const applyFilters = () => fetchLeads(filters);

  const todayFilter = () => {
    const today = new Date().toISOString().split("T")[0];
    fetchLeads({ ...filters, date: today, from: "", to: "" });
  };

  const yesterdayFilter = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    fetchLeads({ ...filters, date: d.toISOString().split("T")[0], from: "", to: "" });
  };

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(leads.length / PAGE_SIZE);
  const paginatedLeads = leads.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  /* ================= ADD / EDIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    editingLead
      ? await updateLead(editingLead._id, formData)
      : await addLead(formData);

    closeLeadModal();
    fetchLeads();
  };

  const closeLeadModal = () => {
    setLeadModal(false);
    setEditingLead(null);
    setFormData({
      fullName: "",
      phone: "",
      loanType: "",
      city: "",
      status: "New"
    });
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    await deleteLead(id);
    fetchLeads();
  };

  /* ================= NOTES ================= */
  const openNoteModal = (lead) => {
    setNoteLead(lead);
    setNoteText(lead.adminNote || "");
    setNoteModal(true);
  };

  const saveNote = async () => {
    await updateLeadNote(noteLead._id, noteText);
    setNoteModal(false);
    setNoteLead(null);
    setNoteText("");
    fetchLeads();
  };

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="admin-page">
      {/* HEADER */}
      <header className="admin-header">
        <h2>Admin Dashboard</h2>
        <div>
          <button className="btn primary" onClick={() => setLeadModal(true)}>+ Add Lead</button>
          <button className="btn danger" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      {/* FILTERS */}
      <section className="filters">
        <input placeholder="Name" onChange={e => setFilters({ ...filters, name: e.target.value })} />
        <input placeholder="Mobile" onChange={e => setFilters({ ...filters, phone: e.target.value })} />
        <select onChange={e => setFilters({ ...filters, loanType: e.target.value })}>
          <option value="">Loan Type</option>
          {loanOptions.map(o => <option key={o}>{o}</option>)}
        </select>
        <input placeholder="City" onChange={e => setFilters({ ...filters, city: e.target.value })} />
        <select onChange={e => setFilters({ ...filters, status: e.target.value })}>
          <option value="">Status</option>
          <option>New</option>
          <option>Converted</option>
          <option>Not Converted</option>
        </select>
        <input type="date" onChange={e => setFilters({ ...filters, from: e.target.value })} />
        <input type="date" onChange={e => setFilters({ ...filters, to: e.target.value })} />
        <button className="btn primary" onClick={applyFilters}>Apply</button>
        <button className="btn secondary" onClick={todayFilter}>Today</button>
        <button className="btn secondary" onClick={yesterdayFilter}>Yesterday</button>
      </section>

      {/* TABLE */}
      {loading ? (
        <p className="loading">Loading leads...</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Loan</th>
                <th>City</th>
                <th>Status</th>
                <th>Date</th>
                <th>Note</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedLeads.map(lead => (
                <tr key={lead._id}>
                  <td>{lead.fullName}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.loanType}</td>
                  <td>{lead.city}</td>
                  <td>
                    <select
                      className={`status ${lead.status.replace(" ", "").toLowerCase()}`}
                      value={lead.status}
                      onChange={e => handleStatusChange(lead._id, e.target.value)}
                    >  
                      <option>New</option>
                      <option>Converted</option>
                      <option>Not Converted</option>
                    </select>
                  </td>
                  <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td>{lead.adminNote ? "Note Added" : "—"}</td>
                  <td className="actions">  
                    <button onClick={() => {
                      setEditingLead(lead);
                      setFormData(lead);
                      setLeadModal(true);
                    }}>Edit</button>
                    <button onClick={() => openNoteModal(lead)}>Note</button>
                    <button className="danger" onClick={() => handleDelete(lead._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {/* ADD / EDIT MODAL */}
      {leadModal && (
        <div className="modal">
          <form className="modal-box" onSubmit={handleSubmit}>
            <h3>{editingLead ? "Edit Lead" : "Add Lead"}</h3>
            <input required placeholder="Full Name" value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })} />
            <input required placeholder="Mobile" value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })} />
            <select required value={formData.loanType}
              onChange={e => setFormData({ ...formData, loanType: e.target.value })}>
              <option value="">Loan Type</option>
              {loanOptions.map(o => <option key={o}>{o}</option>)}
            </select>
            <input required placeholder="City" value={formData.city}
              onChange={e => setFormData({ ...formData, city: e.target.value })} />
            <select value={formData.status}
              onChange={e => setFormData({ ...formData, status: e.target.value })}>
              <option>New</option>
              <option>Converted</option>
              <option>Not Converted</option>
            </select>
            <div className="modal-actions">
              <button className="primary">Save</button>
              <button type="button" onClick={closeLeadModal}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* NOTE MODAL */}
      {noteModal && (
        <div className="modal">
          <div className="modal-box">
            <h3>Admin Note</h3>
            <textarea rows="5" value={noteText} onChange={e => setNoteText(e.target.value)} />
            <div className="modal-actions">
              <button className="primary" onClick={saveNote}>Save</button>
              <button onClick={() => setNoteModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
