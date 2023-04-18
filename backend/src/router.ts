import { Router } from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
} from "./controllers/jobController"

import {
  createQuotation,
  getAllQuotations,
  getQuotationById,
  updateQuotation,
  deleteQuotation
} from "./controllers/quotationController"

const router = Router();

// ----- Jobs ----- //
// Retrive Data GET
router.get("/job", getAllJobs);
router.get("/job/:id", getJobById);

// Create Data POST
router.post("job", createJob);

// Update or Replace Data PUT
router.put("job/:id", updateJob);

// Delete Data DELETE
router.delete("/job/:id", deleteJob);

// ----- Quotations ------ //
router.get("/quotations", getAllQuotations);
router.get("/quotations/:id", getQuotationById);

// Create Data POST
router.post("/quotations", createQuotation);

// Update or Replace Data PUT
router.put("/quotations/:id", updateQuotation);

// Delete Data DELETE
router.delete("/quotations/:id", deleteQuotation);

export default router