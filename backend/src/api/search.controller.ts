import { RequestHandler } from "express";
import CallForPaper from "../models/CallForPaper";

class SearchController {
  static search: RequestHandler = async (req, res) => {
    let results = await CallForPaper.find({'title': {'$regex': req.query.search}});
    return res.json(results);
  };
}

export default SearchController;
