'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '买拍宝'
    }, _this.components = {}, _this.data = {
      title: 1,
      uploadimage: '',
      choseImgData: {},
      choseImgsrc: {},
      imgHeight: '',
      imgWidth: ''
    }, _this.computed = {}, _this.methods = {
      tonavigat: function tonavigat(e) {
        // let tourl = e.currentTarget.dataset.tourl
        // console.log(tourl)
        // wepy.navigateTo({
        //   url: '/pages/tonavigat?url=' + tourl
        // })
      },

      copyBtn: function copyBtn(url) {
        // let that = this
        console.log(url);
        wx.setClipboardData({
          // 准备复制的数据
          data: url,
          success: function success(res) {
            wx.showToast({
              title: '复制成功'
            });
          }
        });
      }
      // watch = {
      //   choseImgsrc (curVal, oldVal) {
      //     console.log('2222222222')
      //     console.log(`旧值：${oldVal}，新值：${curVal}`)
      //   }
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      // this.uploadimage = data.preload.uploadimage
      // console.log(data.preload.uploadimage)
      var _that = this;
      wx.getStorage({
        key: 'choseImgData',
        success: function success(res) {
          _that.choseImgData = res;
        }
      });
      wx.getStorage({
        key: 'choseImgsrc',
        success: function success(res) {
          var Imgsrc = res;
          wx.getImageInfo({
            src: Imgsrc.data,
            success: function success(res) {
              var params = res.width / res.height;
              _that.imgWidth = '660rpx';
              _that.imgHeight = '560rpx';
              if (params > 1.17858143) {
                _that.imgWidth = '640rpx';
                _that.imgHeight = 660 / params + 'rpx';
                console.log(_that.imgWidth, _that.imgHeight);
              } else if (params < 1.17858143) {
                _that.imgHeight = '560rpx';
                _that.imgWidth = 560 * params + 'rpx';
                // console.log(_that.imgWidth)
              } else {
                _that.imgHeight = '560rpx';
                _that.imgWidth = '660rpx';
              }
              _that.choseImgsrc = Imgsrc;
              _that.$apply();
            }
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/clothing'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3RoaW5nLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidGl0bGUiLCJ1cGxvYWRpbWFnZSIsImNob3NlSW1nRGF0YSIsImNob3NlSW1nc3JjIiwiaW1nSGVpZ2h0IiwiaW1nV2lkdGgiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b25hdmlnYXQiLCJlIiwiY29weUJ0biIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInNldENsaXBib2FyZERhdGEiLCJzdWNjZXNzIiwicmVzIiwic2hvd1RvYXN0IiwiX3RoYXQiLCJnZXRTdG9yYWdlIiwia2V5IiwiSW1nc3JjIiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwicGFyYW1zIiwid2lkdGgiLCJoZWlnaHQiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FERjtBQUVMQyxtQkFBYSxFQUZSO0FBR0xDLG9CQUFjLEVBSFQ7QUFLTEMsbUJBQWEsRUFMUjtBQU1MQyxpQkFBVyxFQU5OO0FBT0xDLGdCQUFVO0FBUEwsSyxRQVVQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsQ0FESCxFQUNNO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELE9BUE87O0FBUVJDLGVBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0FHLFdBQUdDLGdCQUFILENBQW9CO0FBQ2xCO0FBQ0FoQixnQkFBTVksR0FGWTtBQUdsQkssbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QkgsZUFBR0ksU0FBSCxDQUFhO0FBQ1hsQixxQkFBTztBQURJLGFBQWI7QUFHRDtBQVBpQixTQUFwQjtBQVNEO0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JVLEs7Ozs7OzZCQTRCQTtBQUNSO0FBQ0E7QUFDQSxVQUFJbUIsUUFBUSxJQUFaO0FBQ0FMLFNBQUdNLFVBQUgsQ0FBYztBQUNaQyxhQUFLLGNBRE87QUFFWkwsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QkUsZ0JBQU1qQixZQUFOLEdBQXFCZSxHQUFyQjtBQUNEO0FBSlcsT0FBZDtBQU1BSCxTQUFHTSxVQUFILENBQWM7QUFDWkMsYUFBSyxhQURPO0FBRVpMLGlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEIsY0FBSUssU0FBU0wsR0FBYjtBQUNBSCxhQUFHUyxZQUFILENBQWdCO0FBQ2RDLGlCQUFLRixPQUFPdkIsSUFERTtBQUVkaUIscUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QixrQkFBSVEsU0FBU1IsSUFBSVMsS0FBSixHQUFZVCxJQUFJVSxNQUE3QjtBQUNBUixvQkFBTWQsUUFBTixHQUFpQixRQUFqQjtBQUNBYyxvQkFBTWYsU0FBTixHQUFrQixRQUFsQjtBQUNBLGtCQUFJcUIsU0FBUyxVQUFiLEVBQXlCO0FBQ3ZCTixzQkFBTWQsUUFBTixHQUFpQixRQUFqQjtBQUNBYyxzQkFBTWYsU0FBTixHQUFtQixNQUFNcUIsTUFBUCxHQUFpQixLQUFuQztBQUNBYix3QkFBUUMsR0FBUixDQUFZTSxNQUFNZCxRQUFsQixFQUE0QmMsTUFBTWYsU0FBbEM7QUFDRCxlQUpELE1BSU8sSUFBSXFCLFNBQVMsVUFBYixFQUF5QjtBQUM5Qk4sc0JBQU1mLFNBQU4sR0FBa0IsUUFBbEI7QUFDQWUsc0JBQU1kLFFBQU4sR0FBa0IsTUFBTW9CLE1BQVAsR0FBaUIsS0FBbEM7QUFDQTtBQUNELGVBSk0sTUFJQTtBQUNMTixzQkFBTWYsU0FBTixHQUFrQixRQUFsQjtBQUNBZSxzQkFBTWQsUUFBTixHQUFpQixRQUFqQjtBQUNEO0FBQ0RjLG9CQUFNaEIsV0FBTixHQUFvQm1CLE1BQXBCO0FBQ0FILG9CQUFNUyxNQUFOO0FBQ0Q7QUFwQmEsV0FBaEI7QUFzQkQ7QUExQlcsT0FBZDtBQTRCRDs7OztFQXRGZ0NDLGVBQUtDLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoiY2xvdGhpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S5sOaLjeWunSdcclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdGl0bGU6IDEsXHJcbiAgICAgIHVwbG9hZGltYWdlOiAnJyxcclxuICAgICAgY2hvc2VJbWdEYXRhOiB7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNob3NlSW1nc3JjOiB7fSxcclxuICAgICAgaW1nSGVpZ2h0OiAnJyxcclxuICAgICAgaW1nV2lkdGg6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdG9uYXZpZ2F0IChlKSB7XHJcbiAgICAgICAgLy8gbGV0IHRvdXJsID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG91cmxcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3VybClcclxuICAgICAgICAvLyB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIC8vICAgdXJsOiAnL3BhZ2VzL3RvbmF2aWdhdD91cmw9JyArIHRvdXJsXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgfSxcclxuICAgICAgY29weUJ0bjogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIC8vIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICB3eC5zZXRDbGlwYm9hcmREYXRhKHtcclxuICAgICAgICAgIC8vIOWHhuWkh+WkjeWItueahOaVsOaNrlxyXG4gICAgICAgICAgZGF0YTogdXJsLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5aSN5Yi25oiQ5YqfJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHdhdGNoID0ge1xyXG4gICAgLy8gICBjaG9zZUltZ3NyYyAoY3VyVmFsLCBvbGRWYWwpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnMjIyMjIyMjIyMicpXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coYOaXp+WAvO+8miR7b2xkVmFsfe+8jOaWsOWAvO+8miR7Y3VyVmFsfWApXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgIC8vIHRoaXMudXBsb2FkaW1hZ2UgPSBkYXRhLnByZWxvYWQudXBsb2FkaW1hZ2VcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5wcmVsb2FkLnVwbG9hZGltYWdlKVxyXG4gICAgICB2YXIgX3RoYXQgPSB0aGlzXHJcbiAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleTogJ2Nob3NlSW1nRGF0YScsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgX3RoYXQuY2hvc2VJbWdEYXRhID0gcmVzXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICdjaG9zZUltZ3NyYycsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgbGV0IEltZ3NyYyA9IHJlc1xyXG4gICAgICAgICAgd3guZ2V0SW1hZ2VJbmZvKHtcclxuICAgICAgICAgICAgc3JjOiBJbWdzcmMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgIGxldCBwYXJhbXMgPSByZXMud2lkdGggLyByZXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgX3RoYXQuaW1nV2lkdGggPSAnNjYwcnB4J1xyXG4gICAgICAgICAgICAgIF90aGF0LmltZ0hlaWdodCA9ICc1NjBycHgnXHJcbiAgICAgICAgICAgICAgaWYgKHBhcmFtcyA+IDEuMTc4NTgxNDMpIHtcclxuICAgICAgICAgICAgICAgIF90aGF0LmltZ1dpZHRoID0gJzY0MHJweCdcclxuICAgICAgICAgICAgICAgIF90aGF0LmltZ0hlaWdodCA9ICg2NjAgLyBwYXJhbXMpICsgJ3JweCdcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKF90aGF0LmltZ1dpZHRoLCBfdGhhdC5pbWdIZWlnaHQpXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMgPCAxLjE3ODU4MTQzKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhhdC5pbWdIZWlnaHQgPSAnNTYwcnB4J1xyXG4gICAgICAgICAgICAgICAgX3RoYXQuaW1nV2lkdGggPSAoNTYwICogcGFyYW1zKSArICdycHgnXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfdGhhdC5pbWdXaWR0aClcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RoYXQuaW1nSGVpZ2h0ID0gJzU2MHJweCdcclxuICAgICAgICAgICAgICAgIF90aGF0LmltZ1dpZHRoID0gJzY2MHJweCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgX3RoYXQuY2hvc2VJbWdzcmMgPSBJbWdzcmNcclxuICAgICAgICAgICAgICBfdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==