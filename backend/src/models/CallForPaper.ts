import { Schema, model } from "mongoose";

const CallForPaperSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
    },
    eventUrl: {
      type: String,
    },
    /* beginDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    }, */
    topics: {
      type: [String],
    },
    location: {
      type: String,
    },
    filePath: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("CallForPaper", CallForPaperSchema);
