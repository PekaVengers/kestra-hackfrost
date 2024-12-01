// Market Analysis Database

const mongoose = require("mongoose");

// Utility Function for Error Handling
function handleError(error, doc, next) {
  console.error(`Error occurred: ${error.message}`);
  next(error);
}

// Job Demand Schema
const jobDemandSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // References the User model
      required: [true, "User ID is required"],
      index: true,
    },
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    // Just an Optional...
    description: {
      type: String,
      required: [true, "Give the description of the Job Title"],
      trim: false,
    },
    demand: {
      type: Number,
      required: [true, "Demand is required"],
      min: [0, "Demand must be a positive number"],
    },
    salaryRange: {
      type: String, // Example: "5L-10L"
      required: [true, "Salary range is required"],
    },
    growthForecast: {
      year: { type: Number, required: [true, "Forecast year is required"] },
      growthPercentage: {
        type: Number,
        required: [true, "Growth percentage is required"],
      },
    },
    trends: [
      {
        month: {
          type: String,
          required: [true, "Trend month is required"],
          enum: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ], // Ensure valid months
        },
        demand: { type: Number, required: [true, "Trend demand is required"] },
      },
    ],
  },
  { timestamps: true }
);

// Company Schema
const companySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      index: true,
    },
    name: {
      type: String,
      required: [true, "Company name is required"],
      unique: true,
      trim: true,
    },
    jobCount: {
      type: Number,
      required: [true, "Job count is required"],
      min: [0, "Job count must be non-negative"],
    },
  },
  { timestamps: true }
);

// Skill Schema
const skillSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      index: true,
    },
    name: {
      type: String,
      required: [true, "Skill name is required"],
      unique: true,
      trim: true,
    },
    requiredCount: {
      type: Number,
      required: [true, "Required count is required"],
      min: [0, "Required count must be non-negative"],
    },
    candidateCount: {
      type: Number,
      required: [true, "Candidate count is required"],
      min: [0, "Candidate count must be non-negative"],
    },
    premium: {
      type: Number,
      default: 0, // Optional: Premium percentage
    },
  },
  { timestamps: true }
);

// Job Location Schema
const jobLocationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      index: true,
    },
    city: {
      type: String,
      required: [true, "City name is required"],
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    jobCount: {
      type: Number,
      required: [true, "Job count is required"],
      min: [0, "Job count must be non-negative"],
    },
  },
  { timestamps: true }
);

// Contract Type Schema
const contractTypeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      index: true,
    },
    type: {
      type: String,
      required: [true, "Contract type is required"],
      enum: ["Full-time", "Part-time", "Contract", "Freelance"],
    },
    count: {
      type: Number,
      required: [true, "Count is required"],
      min: [0, "Count must be a positive number"],
    },
  },
  { timestamps: true }
);

// Add Error Handling Middleware
[
  jobDemandSchema,
  companySchema,
  skillSchema,
  jobLocationSchema,
  contractTypeSchema,
].forEach((schema) => schema.post("save", handleError));

// Models
const JobDemand = mongoose.model("JobDemand", jobDemandSchema);
const Company = mongoose.model("Company", companySchema);
const Skill = mongoose.model("Skill", skillSchema);
const JobLocation = mongoose.model("JobLocation", jobLocationSchema);
const ContractType = mongoose.model("ContractType", contractTypeSchema);

// Export Models
module.exports = {
  JobDemand,
  Company,
  Skill,
  JobLocation,
  ContractType,
};
