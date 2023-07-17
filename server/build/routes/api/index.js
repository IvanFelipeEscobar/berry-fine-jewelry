"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemRouter = require(`./itemsRouter`);
const router = express_1.default.Router();
router.use(`/items`, itemRouter);
module.exports = router;
//# sourceMappingURL=index.js.map