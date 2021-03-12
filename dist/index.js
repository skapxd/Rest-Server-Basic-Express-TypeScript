"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router/router"));
const port = process.env.PORT || 3000;
const app = express_1.default();
// middlewares
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
// Router
app.use(router_1.default);
// Init Server
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
