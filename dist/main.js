/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_12_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js */ \"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js */ \"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_10_12_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__]);\n([https_www_gstatic_com_firebasejs_10_12_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// ✅ CDNから直接import（バージョンは10.12.0などに合わせてOK）\n\n\n\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyBBmruN7YtMIdMiLjPLiJKu-9qFKis2aAo\",\n  authDomain: \"homepage-54937.firebaseapp.com\",\n  projectId: \"homepage-54937\",\n  storageBucket: \"homepage-54937.firebasestorage.app\",\n  messagingSenderId: \"225362177833\",\n  appId: \"1:225362177833:web:8b4f8da23231997ff75138\",\n  measurementId: \"G-7F86C9SCZ3\"\n};\n\nconst app = (0,https_www_gstatic_com_firebasejs_10_12_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n\n// DOM取得\nconst nameInput = document.getElementById(\"inputName\");\nconst stockInput = document.getElementById(\"inputStock\");\nconst dateInput = document.getElementById(\"inputDate\");\nconst addButton = document.getElementById(\"addButton\");\nconst table = document.getElementById(\"dataTable\");\n\n// 登録処理\n\n\naddButton.addEventListener(\"click\", async () => {\n  const name = nameInput.value;\n  const stock = stockInput.value;\n  const dateStr = dateInput.value;\n\n  if (!name || !stock || !dateStr) {\n    alert(\"すべて入力してください\");\n    return;\n  }\n\n  // 文字列からDateオブジェクトを作成\n  const date = new Date(dateStr);\n\n  try {\n    await (0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"foods\"), {\n      name,\n      stock,\n      date: https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.Timestamp.fromDate(date)  // Timestamp型に変換して保存\n    });\n    console.log(\"保存成功！\");\n  } catch (e) {\n    console.error(\"🔥 Firestore保存エラー:\", e);\n  }\n\n  // 入力欄クリア\n  nameInput.value = \"\";\n  stockInput.value = \"\";\n  dateInput.value = \"\";\n});\n\n\n\n(0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"foods\"), (snapshot) => {\n  while (table.rows.length > 1) table.deleteRow(1);\n  snapshot.forEach(doc => {\n    const data = doc.data();\n    const row = table.insertRow(-1);\n    row.insertCell(0).textContent = data.name;\n    row.insertCell(1).textContent = data.stock;\n\n    let displayDate = \"\";\n    if (data.date) {\n      // dateがTimestampならtoDate()を使い、そうでなければ文字列として表示\n      displayDate = typeof data.date.toDate === \"function\"\n        ? data.date.toDate().toLocaleString()\n        : data.date;\n    }\n    row.insertCell(2).textContent = displayDate;\n  });\n});\n\n\n\n\n\n\n\n(0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"foods\")).then(snapshot => {\n  snapshot.forEach(doc => {\n    console.log(\"取得成功:\", doc.data());\n  });\n}).catch(err => {\n  console.error(\"取得失敗:\", err);\n});\n\n\n\n\n(0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"foods\"), (snapshot) => {\n  while (table.rows.length > 1) table.deleteRow(1);\n\n  snapshot.forEach(docSnap => {\n    const data = docSnap.data();\n    const row = table.insertRow(-1);\n\n    // ✅ チェックボックス（docIdを記録）\n    const checkboxCell = row.insertCell(0);\n    const checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.dataset.docId = docSnap.id;\n    checkboxCell.appendChild(checkbox);\n\n    // 他のセル\n    row.insertCell(1).textContent = data.name;\n    row.insertCell(2).textContent = data.stock;\n\n    let displayDate = \"\";\n    if (data.date) {\n      displayDate = typeof data.date.toDate === \"function\"\n        ? data.date.toDate().toLocaleDateString()\n        : data.date;\n    }\n    row.insertCell(3).textContent = displayDate;\n  });\n});\n\n// ✅ 削除処理（チェックボックス選択分）\ndeleteSelectedButton.addEventListener(\"click\", async () => {\n  const checkboxes = table.querySelectorAll(\"input[type='checkbox']:checked\");\n  if (checkboxes.length === 0) {\n    alert(\"削除する項目を選んでください\");\n    return;\n  }\n\n  if (!confirm(`本当に${checkboxes.length}件削除しますか？`)) return;\n\n  try {\n    const deletePromises = [];\n    checkboxes.forEach(cb => {\n      const docId = cb.dataset.docId;\n      if (docId) {\n        const ref = (0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.doc)(db, \"foods\", docId);\n        deletePromises.push((0,https_www_gstatic_com_firebasejs_10_12_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(ref));\n      }\n    });\n\n    await Promise.all(deletePromises);\n    console.log(\"削除完了\");\n  } catch (err) {\n    console.error(\"🔥 削除エラー:\", err);\n  }\n});\n\ndocument.getElementById(\"goToRecipe\").addEventListener(\"click\", () => {\n    window.location.href = \"recipe.html\";\n  });\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://homepage/./src/index.js?");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;