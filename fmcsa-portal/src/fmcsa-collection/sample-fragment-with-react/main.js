Liferay.Loader.define('__FRAGMENT_MODULE_NAME__', [
    'module',
    'require',
    '__REACT_PROVIDER__$react'
], function (__MODULE__, __REQUIRE__) {
    (function (modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function (exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.r = function (exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            }
            Object.defineProperty(exports, '__esModule', { value: true });
        };
        __webpack_require__.t = function (value, mode) {
            if (mode & 1)
                value = __webpack_require__(value);
            if (mode & 8)
                return value;
            if (mode & 4 && typeof value === 'object' && value && value.__esModule)
                return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                    }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function (module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module['default'];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = '';
        return __webpack_require__(__webpack_require__.s = './build/liferay-npm-bundler-workdir/generated/sample-fragment-with-react.js');
    }({
        './build/liferay-npm-bundler-workdir/generated/sample-fragment-with-react.js': function (module, exports, __webpack_require__) {
            __MODULE__.exports = __webpack_require__('./src/sample-collection/sample-fragment-with-react/main.js');
        },
        './src/sample-collection/sample-fragment-with-react/main.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            var React_raw = __REQUIRE__('__REACT_PROVIDER__$react');
            var React = React_raw && React_raw.__esModule ? React_raw['default'] : React_raw;
            __webpack_exports__['default'] = function (props) {
                console.log('props', props);
                return React.createElement('h1', null, 'Hello world');
            };
        }
    }));
});
//# sourceMappingURL=main.js.map