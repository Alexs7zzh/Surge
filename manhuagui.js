$httpClient.post({
  url: "https://tw.manhuagui.com/tools/submit_ajax.ashx?action=user_check_login",
  headers: {
    cookie: "my=Alexs7%7cA551519B3E71A221FF73FB1B6B1B8FBD4558D320533347DC;",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.70"
  }
}, (err, resp, data) => {
  data = JSON.parse(data).shelf
  if (data > 0) $notification.post('New Manga')
  $done()
})
