# oss-wechat-miniprogram-multipartuploader

a wechat miniprogram multipart uploader

```
npm install oss-wechat-miniprogram-multipartuploader --save
```

## MultipartUploader

parameters:

- filePath {String} upload tempfile path
- bucketName {String} your target bucket
- ak {String} your access key
- sk {String} your secret key
- func {Function} upload successful will excute
- option {Object}
  - maxConcurrency {Number} default is 5, must be less than 10
  - chunkSize {Number} default 5x1024x1024 bytes
  - timeout {Number} default 10000 ms

```javascript
import MultipartUploader from 'ali-oss-wx
wx.chooseMessageFile({
  count: 1,
  success: (res) => {
    // init
    const uploader = new MultipartUploader(
      res.tempFiles[0],
      "your bucket",
      "region",
      "ak",
      "sk",
      //  upload is successful will excute the func
      (res) => {
        console.log(res);
      }
    );
    // upload
    uploader.multipartUpload();
  },
  fail: (err) => {
    console.log(err);
  },
});
```

TODO

- [ ] test case
- [ ] retry
- [ ] abort multipart
- [ ] resume upload
