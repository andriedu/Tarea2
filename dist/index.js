"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const app_module_1 = require("./app.module");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield app_module_1.AppDataSource.initialize();
            console.log("DB conectado");
            console.log(process.env.DB_USERNAME);
            app_1.default.listen(3000);
            console.log("puerto:", 3000);
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();