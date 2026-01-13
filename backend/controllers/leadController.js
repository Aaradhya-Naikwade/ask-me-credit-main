// import Lead from "../models/Lead.js";

// /* ---------- CREATE LEAD (USER FORM SUBMIT) ---------- */
// export const createLead = async (req, res) => {
//   try {
//     const { fullName, phone, loanType, city } = req.body;

//     if (!fullName || !phone || !loanType || !city) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const lead = await Lead.create({
//       fullName,
//       phone,
//       loanType,
//       city
//     });

//     res.status(201).json({
//       message: "Lead created successfully",
//       lead
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// /* ---------- GET ALL LEADS (ADMIN) ---------- */
// export const getAllLeads = async (req, res) => {
//   try {
//     const leads = await Lead.find().sort({ createdAt: -1 });
//     res.status(200).json(leads);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// /* ---------- UPDATE LEAD STATUS (ADMIN) ---------- */
// export const updateLeadStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     if (!["Active", "Inactive"].includes(status)) {
//       return res.status(400).json({ message: "Invalid status value" });
//     }

//     const lead = await Lead.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!lead) {
//       return res.status(404).json({ message: "Lead not found" });
//     }

//     res.status(200).json({
//       message: "Status updated successfully",
//       lead
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// /* ---------- DELETE LEAD (ADMIN) ---------- */
// export const deleteLead = async (req, res) => {
//   try {
//     const lead = await Lead.findByIdAndDelete(req.params.id);

//     if (!lead) {
//       return res.status(404).json({ message: "Lead not found" });
//     }

//     res.status(200).json({ message: "Lead deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };




















import Lead from "../models/Lead.js";

/* ---------- CREATE LEAD (USER + ADMIN) ---------- */
export const createLead = async (req, res) => {
  try {
    const { fullName, phone, loanType, city } = req.body;

    if (!fullName || !phone || !loanType || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const lead = await Lead.create({
      fullName,
      phone,
      loanType,
      city
    });

    res.status(201).json({ message: "Lead created", lead });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ---------- GET ALL LEADS WITH FILTERS (ADMIN) ---------- */
// export const getAllLeads = async (req, res) => {
//   try {
//     const { status, from, to, date } = req.query;

//     let filter = {};

//     // Status filter
//     if (status) {
//       filter.status = status;
//     }

//     // Specific date
//     if (date) {
//       const start = new Date(date);
//       start.setHours(0, 0, 0, 0);

//       const end = new Date(date);
//       end.setHours(23, 59, 59, 999);

//       filter.createdAt = { $gte: start, $lte: end };
//     }

//     // Date range
//     if (from && to) {
//       filter.createdAt = {
//         $gte: new Date(from),
//         $lte: new Date(to)
//       };
//     }

//     const leads = await Lead.find(filter).sort({ createdAt: -1 });

//     res.status(200).json(leads);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };
export const getAllLeads = async (req, res) => {
  try {
    const { name, phone, loanType, city, status, date, from, to } = req.query;

    let filter = {};

    if (name) filter.fullName = { $regex: name, $options: "i" };
    if (phone) filter.phone = { $regex: phone };
    if (loanType) filter.loanType = { $regex: loanType, $options: "i" };
    if (city) filter.city = { $regex: city, $options: "i" };
    if (status) filter.status = status;

    if (date) {
      const start = new Date(date);
      start.setHours(0, 0, 0, 0);
      const end = new Date(date);
      end.setHours(23, 59, 59, 999);
      filter.createdAt = { $gte: start, $lte: end };
    }

    if (from && to) {
      filter.createdAt = {
        $gte: new Date(from),
        $lte: new Date(to)
      };
    }

    const leads = await Lead.find(filter).sort({ createdAt: -1 }); // LATEST FIRST

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


/* ---------- UPDATE LEAD (EDIT + STATUS + NOTE) ---------- */
export const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({ message: "Lead updated", lead });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ---------- DELETE LEAD ---------- */
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({ message: "Lead deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
