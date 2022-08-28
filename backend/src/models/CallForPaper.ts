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
    importantDates: {
      type: Array,
    },
    topics: {
      type: [String],
    },
    location: {
      type: String,
      required: true,
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
