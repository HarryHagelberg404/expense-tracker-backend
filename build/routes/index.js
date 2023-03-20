"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apikey_1 = __importDefault(require("../auth/apikey"));
const permission_1 = __importDefault(require("../helpers/permission"));
const ApiKey_1 = require("../database/model/ApiKey");
const signup_1 = __importDefault(require("./access/signup"));
const login_1 = __importDefault(require("./access/login"));
const logout_1 = __importDefault(require("./access/logout"));
const token_1 = __importDefault(require("./access/token"));
const credential_1 = __importDefault(require("./access/credential"));
const blog_1 = __importDefault(require("./blog"));
const blogs_1 = __importDefault(require("./blogs"));
const profile_1 = __importDefault(require("./profile"));
const router = express_1.default.Router();
/*---------------------------------------------------------*/
router.use(apikey_1.default);
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
router.use((0, permission_1.default)(ApiKey_1.Permission.GENERAL));
/*---------------------------------------------------------*/
router.use('/signup', signup_1.default);
router.use('/login', login_1.default);
router.use('/logout', logout_1.default);
router.use('/token', token_1.default);
router.use('/credential', credential_1.default);
router.use('/profile', profile_1.default);
router.use('/blog', blog_1.default);
router.use('/blogs', blogs_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map