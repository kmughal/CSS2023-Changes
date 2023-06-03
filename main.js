import { exampleFunction } from "exampleModule";

import * as luxon from "luxon";
const el = document.getElementById("root");

el.innerHTML = "The date/time from luxon:" + luxon.DateTime.utc().toString();

exampleFunction();
