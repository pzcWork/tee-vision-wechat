'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      navigationBarTitleText: '买拍宝 商品搜索'
    }, _this.components = {}, _this.data = {
      title: 1,
      checkStyle: 0,
      animationData: {}
    }, _this.computed = {}, _this.methods = {
      checkItem: function checkItem(val) {
        this.checkStyle = val - 0;
        var animation = wx.createAnimation({
          duration: 100,
          timingFunction: 'linear'
        });
        if (this.checkStyle === 2) {
          animation.translateX(-60).step();
          // animation.translateY(100).step()
          // animation.left(200).top(0).step()
          this.setData({
            animationData: animation.export()
          });
        } else if (this.checkStyle === 0) {
          animation.translateX(0).step();
          // animation.translateY(100).step()
          // animation.left(200).top(0).step()
          this.setData({
            animationData: animation.export()
          });
        }
      },
      selectPic: function selectPic() {
        var _that = this;
        wx.chooseImage({
          sizeType: ['original', 'compressed'],
          sourceType: ['album'],
          success: function success(res) {
            wx.setStorage({
              key: 'choseImgsrc',
              data: res.tempFilePaths[0]
            });
            wx.showLoading({
              mask: true,
              title: '加载中,请稍等'
            });
            var tempFilePaths = res.tempFilePaths;
            var fs = wx.getFileSystemManager();
            fs.readFile({
              filePath: tempFilePaths[0],
              encoding: 'base64',
              success: function success(data) {
                var da = data.data;
                wx.request({
                  url: 'https://ai.tee.com/shopping',
                  method: 'POST',
                  data: {
                    content: da,
                    randomValue: Date.parse(new Date()),
                    db_id: 101,
                    code: 101,
                    classid: _that.checkStyle
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: function success(res) {
                    wx.setStorage({
                      key: 'choseImgData',
                      data: res
                    });
                    wx.hideLoading({
                      title: '加载中'
                    });
                    _wepy2.default.navigateTo({
                      url: '/pages/clothing'
                    });
                  }
                });
              }
            });
          }
        });
      },
      takePhoto1: function takePhoto1() {
        var _that = this;
        wx.chooseImage({
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success: function success(res) {
            wx.setStorage({
              key: 'choseImgsrc',
              data: res.tempFilePaths[0]
            });
            wx.showLoading({
              mask: true,
              title: '加载中,请稍等'
            });
            var tempFilePaths = res.tempFilePaths;
            var fs = wx.getFileSystemManager();
            fs.readFile({
              filePath: tempFilePaths[0],
              encoding: 'base64',
              success: function success(data) {
                var da = data.data;
                wx.request({
                  url: 'https://ai.tee.com/shopping',
                  method: 'POST',
                  data: {
                    content: da,
                    randomValue: Date.parse(new Date()),
                    db_id: 101,
                    code: 101,
                    classid: _that.checkStyle
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: function success(res) {
                    wx.setStorage({
                      key: 'choseImgData',
                      data: res
                    });
                    wx.hideLoading({
                      title: '加载中'
                    });
                    _wepy2.default.navigateTo({
                      url: '/pages/clothing'
                    });
                  }
                });
              }
            });
          }
        });
      },
      takePhoto: function takePhoto() {
        wx.showLoading({
          mask: true,
          title: '加载中,请稍等'
        });
        var _that = this;
        var ctx = wx.createCameraContext();
        ctx.takePhoto({
          quality: 'low',
          success: function success(res) {
            var tempImagePath = res.tempImagePath;
            var fs = wx.getFileSystemManager();
            wx.setStorage({
              key: 'choseImgsrc',
              data: res.tempImagePath
            });
            fs.readFile({
              filePath: tempImagePath,
              encoding: 'base64',
              success: function success(data) {
                var da = data.data;
                wx.request({
                  url: 'https://ai.tee.com/shopping',
                  method: 'POST',
                  data: {
                    content: da,
                    randomValue: Date.parse(new Date()),
                    db_id: 101,
                    code: 101,
                    classid: _that.checkStyle
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: function success(res) {
                    // console.log(res)
                    wx.setStorage({
                      key: 'choseImgData',
                      data: res
                    });
                    wx.hideLoading({
                      title: '加载中'
                    });
                    _wepy2.default.navigateTo({
                      url: '/pages/clothing'
                    });
                  }
                });
              }
            });
            // this.setData({ 图片预览
            //   preSrc: res.tempImagePath
            // })
          }
        });
      },
      error: function error(e) {
        console.log(e.detail);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidGl0bGUiLCJjaGVja1N0eWxlIiwiYW5pbWF0aW9uRGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNoZWNrSXRlbSIsInZhbCIsImFuaW1hdGlvbiIsInd4IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsInRyYW5zbGF0ZVgiLCJzdGVwIiwic2V0RGF0YSIsImV4cG9ydCIsInNlbGVjdFBpYyIsIl90aGF0IiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RvcmFnZSIsImtleSIsInRlbXBGaWxlUGF0aHMiLCJzaG93TG9hZGluZyIsIm1hc2siLCJmcyIsImdldEZpbGVTeXN0ZW1NYW5hZ2VyIiwicmVhZEZpbGUiLCJmaWxlUGF0aCIsImVuY29kaW5nIiwiZGEiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiY29udGVudCIsInJhbmRvbVZhbHVlIiwiRGF0ZSIsInBhcnNlIiwiZGJfaWQiLCJjb2RlIiwiY2xhc3NpZCIsImhlYWRlciIsImhpZGVMb2FkaW5nIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ0YWtlUGhvdG8xIiwidGFrZVBob3RvIiwiY3R4IiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInF1YWxpdHkiLCJ0ZW1wSW1hZ2VQYXRoIiwiZXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxJLEdBQU87QUFDTEMsYUFBTyxDQURGO0FBRUxDLGtCQUFZLENBRlA7QUFHTEMscUJB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QUFDRDtBQXpMTyxLOzs7O0VBaEJ1QlosZUFBS2EsSTs7a0JBQW5CaEUsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S5sOaLjeWunSDllYblk4HmkJzntKInXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRpdGxlOiAxLFxuICAgICAgY2hlY2tTdHlsZTogMCxcbiAgICAgIGFuaW1hdGlvbkRhdGE6IHt9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNoZWNrSXRlbSh2YWwpIHtcbiAgICAgICAgdGhpcy5jaGVja1N0eWxlID0gdmFsIC0gMFxuICAgICAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICBkdXJhdGlvbjogMTAwLFxuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5jaGVja1N0eWxlID09PSAyKSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVgoLTYwKS5zdGVwKClcbiAgICAgICAgICAvLyBhbmltYXRpb24udHJhbnNsYXRlWSgxMDApLnN0ZXAoKVxuICAgICAgICAgIC8vIGFuaW1hdGlvbi5sZWZ0KDIwMCkudG9wKDApLnN0ZXAoKVxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tTdHlsZSA9PT0gMCkge1xuICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVYKDApLnN0ZXAoKVxuICAgICAgICAgIC8vIGFuaW1hdGlvbi50cmFuc2xhdGVZKDEwMCkuc3RlcCgpXG4gICAgICAgICAgLy8gYW5pbWF0aW9uLmxlZnQoMjAwKS50b3AoMCkuc3RlcCgpXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZWxlY3RQaWMoKSB7XG4gICAgICAgIGxldCBfdGhhdCA9IHRoaXNcbiAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJ10sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgIGtleTogJ2Nob3NlSW1nc3JjJyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitLOivt+eojeetiSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICAgIGNvbnN0IGZzID0gd3guZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKVxuICAgICAgICAgICAgZnMucmVhZEZpbGUoe1xuICAgICAgICAgICAgICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcbiAgICAgICAgICAgICAgZW5jb2Rpbmc6ICdiYXNlNjQnLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGEgPSBkYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYWkudGVlLmNvbS9zaG9wcGluZycsXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGEsXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVZhbHVlOiBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgICAgICAgICBkYl9pZDogMTAxLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiAxMDEsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzaWQ6IF90aGF0LmNoZWNrU3R5bGVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Nob3NlSW1nRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY2xvdGhpbmcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdGFrZVBob3RvMSgpIHtcbiAgICAgICAgbGV0IF90aGF0ID0gdGhpc1xuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnY2FtZXJhJ10sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgIGtleTogJ2Nob3NlSW1nc3JjJyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitLOivt+eojeetiSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICAgIGNvbnN0IGZzID0gd3guZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKVxuICAgICAgICAgICAgZnMucmVhZEZpbGUoe1xuICAgICAgICAgICAgICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcbiAgICAgICAgICAgICAgZW5jb2Rpbmc6ICdiYXNlNjQnLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGEgPSBkYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYWkudGVlLmNvbS9zaG9wcGluZycsXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGEsXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVZhbHVlOiBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgICAgICAgICBkYl9pZDogMTAxLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiAxMDEsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzaWQ6IF90aGF0LmNoZWNrU3R5bGVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Nob3NlSW1nRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY2xvdGhpbmcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdGFrZVBob3RvKCkge1xuICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSzor7fnqI3nrYknXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBfdGhhdCA9IHRoaXNcbiAgICAgICAgY29uc3QgY3R4ID0gd3guY3JlYXRlQ2FtZXJhQ29udGV4dCgpXG4gICAgICAgIGN0eC50YWtlUGhvdG8oe1xuICAgICAgICAgIHF1YWxpdHk6ICdsb3cnLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBJbWFnZVBhdGggPSByZXMudGVtcEltYWdlUGF0aFxuICAgICAgICAgICAgY29uc3QgZnMgPSB3eC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAga2V5OiAnY2hvc2VJbWdzcmMnLFxuICAgICAgICAgICAgICBkYXRhOiByZXMudGVtcEltYWdlUGF0aFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGZzLnJlYWRGaWxlKHtcbiAgICAgICAgICAgICAgZmlsZVBhdGg6IHRlbXBJbWFnZVBhdGgsXG4gICAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTY0JyxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhID0gZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FpLnRlZS5jb20vc2hvcHBpbmcnLFxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhLFxuICAgICAgICAgICAgICAgICAgICByYW5kb21WYWx1ZTogRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgZGJfaWQ6IDEwMSxcbiAgICAgICAgICAgICAgICAgICAgY29kZTogMTAxLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2lkOiBfdGhhdC5jaGVja1N0eWxlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Nob3NlSW1nRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY2xvdGhpbmcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0RGF0YSh7IOWbvueJh+mihOiniFxuICAgICAgICAgICAgLy8gICBwcmVTcmM6IHJlcy50ZW1wSW1hZ2VQYXRoXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19