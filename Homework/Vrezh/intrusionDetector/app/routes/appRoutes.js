"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cameraController_1 = require("./../controllers/cameraController");
const express_1 = require("express");
const dtObjController_1 = require("./../controllers/dtObjController");
const login_1 = require("./../controllers/login");
class AppRouter {
    constructor(token) {
        this.token = token;
        this.cameraController = new cameraController_1.CameraController();
        this.objectController = new dtObjController_1.ObjectController();
        this.loginController = new login_1.LoginController(token);
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/camera', this.cameraController.getCameras);
        this.router.get('/camera', this.cameraController.getCamerasWithRange);
        this.router.get('/camera/:id', this.cameraController.getCameraById);
        this.router.delete('/camera/:id', this.cameraController.deleteCameraById);
        this.router.put('/camera/:id', this.cameraController.updateCameraById);
        this.router.get('/objects', this.objectController.getObjects);
        this.router.get('/object/:id', this.objectController.getObjectById);
        this.router.delete('/object/:id', this.objectController.deleteObjectById);
        this.router.put('/object', this.objectController.mergeObjects);
        this.router.post('/login', this.loginController.login);
    }
    getRouter() {
        return this.router;
    }
}
exports.AppRouter = AppRouter;
//# sourceMappingURL=appRoutes.js.map