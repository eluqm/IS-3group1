import { Schema, model } from 'mongoose';

const CallForPaperSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    eventTitle: {
      type: String,
    },
    eventUrl: {
      type: String,
    },
    beginDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    tags: {
      type: [String],
    },
    location: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('CallForPaper', CallForPaperSchema);