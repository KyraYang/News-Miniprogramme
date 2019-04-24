const channelTitleMap = {
  'gn': '国内',
  'gj': '国际',
  'cj': '财经',
  'hlw': '互联网',
  'ty': '体育',
  'kj': '科技',
  'sh': '社会',
  'yl': '娱乐',
  'js': '军事',
}
const channelIdMap = {
  //[0]focused, [1]latest
  'gn': ["5572a108b3cdc86cf39001cd", "5572a109b3cdc86cf39001db"],
  'gj': ["5572a108b3cdc86cf39001ce", "5572a109b3cdc86cf39001de"],
  'cj': ["5572a108b3cdc86cf39001d0", "5572a109b3cdc86cf39001e0"],
  'hlw': ["5572a108b3cdc86cf39001d1", "5572a109b3cdc86cf39001e3"],
  'ty': ["5572a108b3cdc86cf39001d4", "5572a109b3cdc86cf39001e6"],
  'kj': ["5572a108b3cdc86cf39001d9", "5572a10ab3cdc86cf39001f4"],
  'sh': ["5572a109b3cdc86cf39001da", "5572a10bb3cdc86cf39001f8"],
  'yl': ["5572a108b3cdc86cf39001d5", "5572a10ab3cdc86cf39001eb"],
  'js': ["5572a108b3cdc86cf39001cf", "5572a109b3cdc86cf39001df"],
}


Page({
  data: {
    focusedNews: [],
    newsList: [{
        "title": "外媒称香港回归15年打破“经济将死”预言",
        "date": "2012-07-01T09:34:12.000Z",
        "source": "中国新闻网",
        "img": "http://img1.gtimg.com/news/pics/hv1/38/85/1076/69988613.jpg"
      }, {
        "id": 1519631218591,
        "title": "实德指媒体窃公司机密 已向某媒体递律师函",
        "date": "2012-04-21T11:32:04.000Z",
        "source": "腾讯财经",
        "img": "http://img1.gtimg.com/finance/pics/hv1/33/207/1023/66573393.jpg"
      },
      {
        "id": 1519631218595,
        "title": "公务员医疗费用成迷 学者呼吁管理应公开透明",
        "date": "2012-02-26T08:13:00.000Z",
        "source": "财新网",
        "img": "http://img1.gtimg.com/finance/pics/hv1/241/102/983/63945826.jpg"
      }, {
        "id": 1552623252481,
        "title": "王欣会：希望让“来自星星的孩子”有机会过上平等有尊严的生活",
        "date": "2019-03-15T04:09:11.000Z",
        "source": "新华网/中国政府网",
        "img": "//inews.gtimg.com/newsapp_bt/0/8148265330/641"
      }, {
        "id": 1552623252486,
        "title": "支月英：我希望有更多优秀青年投入到乡村教育 助力乡村全面振兴",
        "date": "2019-03-15T04:08:31.000Z",
        "source": "新华网/中国政府网",
        "img": "//inews.gtimg.com/newsapp_bt/0/8148265329/641"
      }
    ]

  },
  onLoad() {
    //set channel bar
    let channelTitle = []
    for (let x in channelTitleMap) {
      channelTitle.push(channelTitleMap[x])
    }
    this.setData({
      channelTitle: channelTitle
    })
    let focusedNews = []
    for (let x in channelIdMap){
      console.log(channelIdMap[x][0])
      this.getNewsContent(channelIdMap[x][0])
      
    }
  },

  //API接入
  getNewsContent(channelId){
    console.log(channelId)
    wx.request({
      url: 'https://route.showapi.com/109-35',
      data: {
        "showapi_appid": '92969', //这里需要改成自己的appid
        "showapi_sign": 'eedcb02a3323485a84c33b72074df757', //这里需要改成自己的应用的密钥secret
        "channelId": channelId,
        "page": "1",
        "needAllList": "0",
        "maxResult": "3",
        "id": ""
      },
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        let newsData = res.data
        console.log(newsData.showapi_res_body.pagebean.contentlist[0])
      }
    })
  },

  /*点击轮播图时，跳转到相关新闻
   onSwiperTap:()=>{
wx.navigateTo({
  url: '',
})
   }*/
})