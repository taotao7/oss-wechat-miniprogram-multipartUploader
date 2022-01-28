# oss-wechat-miniprogram-multipartUploader

a wechat miniprogram multipart uploader

```
npm install oss-wechat-miniprogram-multipartUploader --save
```

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
- [ ] abort multipart
- [ ] resume upload