import { count } from "console";
import { RequestHandler } from "express";
import { CountQueuingStrategy } from "stream/web";
import CallForPaper from "../models/CallForPaper";

interface ITopicCounts {
  topic: string;
  count: number;
}

interface ILocationCounts {
  location: string;
  count: number;
  country: string;
}

class SearchController {
  static search: RequestHandler = async (req, res) => {
    let results = await CallForPaper.find({
      title: { $regex: req.query.search },
    });
    return res.json(results);
  };

  static topics: RequestHandler = async (req, res) => {
    let results = await CallForPaper.find().select(["topics"]);

    // count topics and return an array of objects with the topic and the count
    const topics: Array<string> = results.map((call) => call.topics).flat();

    let counts: Array<ITopicCounts> = [];

    let current: string = "";
    let cnt = 0;

    for (var i = 0; i < topics.length; i++) {
      if (topics[i] != current) {
        if (cnt > 0) {
          counts.push({ topic: current, count: cnt });
        }
        current = topics[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      counts.push({ topic: current, count: cnt });
    }

    counts.sort((elementA, elementB) => {
      let a = elementA.count;
      let b = elementB.count;
      return a < b ? 1 : a > b ? -1 : 0;
    });
    return res.json(counts.slice(0, 5));
  };

  static locations: RequestHandler = async (req, res) => {
    let results = await CallForPaper.find().select(["location"]);

    // count locations and return an array of objects with the location and the count
    const locations: Array<string> = results
      .map((call) => call.location)
      .flat();

    let counts: Array<ILocationCounts> = [];

    let current: string = "";
    let cnt = 0;

    for (var i = 0; i < locations.length; i++) {
      if (locations[i] != current) {
        if (cnt > 0) {
          counts.push({
            location: current,
            count: cnt,
            country: current.split(", ")[1].toLowerCase(),
          });
        }
        current = locations[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      counts.push({
        location: current,
        count: cnt,
        country: current.split(", ")[1].toLowerCase(),
      });
    }

    counts
      .sort((elementA, elementB) => {
        let a = elementA.count;
        let b = elementB.count;
        return a < b ? 1 : a > b ? -1 : 0;
      })
      .slice(0, 5);
    return res.json(counts);
  };
}

export default SearchController;
