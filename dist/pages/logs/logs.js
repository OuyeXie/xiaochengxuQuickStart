'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('../../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('../../npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('../../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('../../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../../npm/babel-runtime/helpers/createClass.js');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _labrador = require('../../npm/labrador/index.js');

var _labrador2 = _interopRequireDefault(_labrador);

var _util = require('../../utils/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import loadViewer from '../../actions/viewer'
//import 'whatwg-fetch'

var Logs = function (_wx$Component) {
  (0, _inherits3.default)(Logs, _wx$Component);

  function Logs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Logs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Logs.__proto__ || (0, _getPrototypeOf2.default)(Logs)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      logs: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Logs, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res, logs;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //    console.log('+++++++++++++')
                //    await new Promise(fetch('127.0.0.1:3012/ping')
                //      .then(function(response) {
                //        console.log('++++++', response)
                //        return response.text()
                //      }).then(function(body) {
                //        console.log('++++++', body)
                //      }))
                //    console.log('+++++++++++++')
                console.log('+++++++++++++');
                _context.next = 3;
                return _labrador2.default.request({
                  url: 'http://127.0.0.1:3012/ping', //仅为示例，并非真实的接口地址
                  //      data: {
                  //        x: '' ,
                  //        y: ''
                  //      },
                  //      header: {
                  //        'Content-Type': 'application/json'
                  //      },
                  success: function success(res) {
                    console.log('s+', res.data);
                  },
                  fail: function fail(res) {
                    console.log('f+', res.data);
                  },
                  complete: function complete(res) {
                    console.log('c+', res);
                  }
                });

              case 3:
                console.log('+++++++++++++');
                //    const viewer = await loadViewer();
                //    console.log('++++++++++++', viewer)
                _context.next = 6;
                return _labrador2.default.getStorage({ key: 'logs' });

              case 6:
                res = _context.sent;
                logs = res.data || [];

                this.setData({
                  logs: logs.map(function (log) {
                    return (0, _util.formatTime)(new Date(log));
                  })
                });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Logs;
}(_labrador2.default.Component);


Page(_labrador._createPage(Logs));

})(module,require);