import pagesPartial from "./pages/pages.partial.js";

export default {
    initial : "resting",
    type : "parallel",
    
    states : {
        pages : pagesPartial,
    },
};