"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiRoutes = require(`./api`);
const router = express_1.default.Router();
router.use(`/api`, apiRoutes);
router.use((req, res) => res.send(`Whoops, that's the wrong route`));
module.exports = router;
//# sourceMappingURL=index.js.map