import { RequestHandler } from "express";
import CallForPaper from "../models/CallForPaper";

class CallForPaperController {
  static getCallForPapers: RequestHandler = async (req, res) => {
    try {
      const callForPapers = await CallForPaper.find();
      return res.status(200).json({ callForPapers });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  };

  static getCallForPaper: RequestHandler = async (req, res) => {
    try {
      const { id: callForPaperID } = req.params;
      const callForPaper = await CallForPaper.findOne({ _id: callForPaperID });
      if (!callForPaper)
        return res
          .status(404)
          .json({ msg: `No Event with id: ${callForPaperID}` });
      return res.status(200).json({ callForPaper });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  };

  static createCallForPaper: RequestHandler = async (req, res) => {
    try {
      const callForPaper = await CallForPaper.create(req.body);
      res.status(201).json({ callForPaper });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  };

  static deleteCallForPaper: RequestHandler = async (req, res) => {
    try {
      const { id: callForPaperID } = req.params;
      const callForPaper = await CallForPaper.findOneAndDelete({
        _id: callForPaperID,
      });
      if (!callForPaper)
        return res
          .status(404)
          .json({ msg: `No Event with id: ${callForPaperID}` });
      return res.status(200).json({ callForPaper });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  };

  static updateCallForPaper: RequestHandler = async (req, res) => {
    try {
      const { id: callForPaperID } = req.params;
      const callForPaper = await CallForPaper.findOneAndUpdate(
        { _id: callForPaperID },
        req.body,
        { new: true }
      );
      if (!callForPaper)
        return res
          .status(404)
          .json({ msg: `No Event with id: ${callForPaperID}` });
      return res.status(200).json({ callForPaper });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  };
}

export default CallForPaperController;
