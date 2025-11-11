import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ 605:
/***/ ((module) => {

module.exports = eval("require")("../@actions/core");


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("path");
// EXTERNAL MODULE: ./node_modules/@vercel/ncc/dist/ncc/@@notfound.js?../@actions/core
var core = __nccwpck_require__(605);
;// CONCATENATED MODULE: ./index.js




try {
    const repoPath = process.cwd(); // Корень репозитория
    console.log(`📁 Repo path: ${repoPath}`);

    const files = external_fs_namespaceObject.readdirSync(repoPath);
    console.log("Файлы в корне репозитория:");
    console.log(files);

    // Пример: прочитать конкретный файл
    const readmePath = __nccwpck_require__.ab + "README.md";
    if (external_fs_namespaceObject.existsSync(__nccwpck_require__.ab + "README.md")) {
        const content = external_fs_namespaceObject.readFileSync(readmePath, "utf8");
        console.log("Содержимое README.md:");
        console.log(content.slice(0, 200) + "..."); // первые 200 символов
    } else {
        console.log("README.md не найден 😅");
    }
} catch (error) {
    core.setFailed(error.message);
}

