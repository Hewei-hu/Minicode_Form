Page({
    onPullDownRefresh () {
    wx.stopPullDownRefresh()
  },
  data: {
    flag:true,
    flag1:true,
    flag2:true,
    name:'',
    sum:'',
    sum1:'',
    real1:'',
    sum2:'',
    real2:'',
    score1:'',
    score2:'',
    items: [
      { name: 'P', value: '制造业额度' },
      { name: 'B', value: '商贸业额度' },
    ],
    options1: [{
      city_id: '0',
      city_name: '2年以内'
    },{
      city_id: '1',
      city_name: '2（含）-5年'
    }, {
      city_id: '2',
      city_name: '5年（含）-10年'
    }, {
      city_id: '3',
      city_name: '10年（含）以上'
    }],
    options2: [{
      city_id: '0',
      city_name: '200万以下'
    },{
      city_id: '1',
      city_name: '200万（含）-500万'
    }, {
      city_id: '2',
      city_name: '500万（含）-1000万'
    }, {
      city_id: '3',
      city_name: '1000万（含）-2000万'
    },{
      city_id: '4',
      city_name: '2000万（含）-5000万'
    },{
      city_id: '5',
      city_name: '5000万（含）以上'
    }],
    options3: [{
      city_id: '0',
      city_name: '未设立'
    },{
      city_id: '1',
      city_name: '1-2家'
    }, {
      city_id: '2',
      city_name: '3-5家'
    }, {
      city_id: '3',
      city_name: '6家以上'
    }],
    options4: [{
      city_id: '0',
      city_name: '10人以内'
    },{
      city_id: '1',
      city_name: '10（含）-30人'
    }, {
      city_id: '2',
      city_name: '30（含）-50人'
    }, {
      city_id: '3',
      city_name: '50人（含）-100人'
    },{
      city_id: '4',
      city_name: '100人以上'
    }],
    options5: [{
      city_id: '0',
      city_name: '不是高新技术企业'
    }, {
      city_id: '3',
      city_name: '是高新技术企业'
    }],
    options6: [{
      city_id: '0',
      city_name: '禁止类'
    },{
      city_id: '1',
      city_name: '限制性介入'
    }, {
      city_id: '2',
      city_name: '选择性支持'
    }, {
      city_id: '3',
      city_name: '优先支持或经开区主导行业'
    }],
    options1: [{
      city_id: '0',
      city_name: '2年以内'
    },{
      city_id: '1',
      city_name: '2（含）-5年'
    }, {
      city_id: '2',
      city_name: '5年（含）-10年'
    }, {
      city_id: '3',
      city_name: '10年（含）以上'
    }],
    options2: [{
      city_id: '0',
      city_name: '200万以下'
    },{
      city_id: '1',
      city_name: '200万（含）-500万'
    }, {
      city_id: '2',
      city_name: '500万（含）-1000万'
    }, {
      city_id: '3',
      city_name: '1000万（含）-2000万'
    },{
      city_id: '4',
      city_name: '2000万（含）-5000万'
    },{
      city_id: '5',
      city_name: '5000万（含）以上'
    }],
    options3: [{
      city_id: '0',
      city_name: '未设立'
    },{
      city_id: '1',
      city_name: '1-2家'
    }, {
      city_id: '2',
      city_name: '3-5家'
    }, {
      city_id: '3',
      city_name: '6家以上'
    }],
    options4: [{
      city_id: '0',
      city_name: '10人以内'
    },{
      city_id: '1',
      city_name: '10（含）-30人'
    }, {
      city_id: '2',
      city_name: '30（含）-50人'
    }, {
      city_id: '3',
      city_name: '50人（含）-100人'
    },{
      city_id: '4',
      city_name: '100人以上'
    }],
    options5: [{
      city_id: '0',
      city_name: '不是高新技术企业'
    }, {
      city_id: '3',
      city_name: '是高新技术企业'
    }],
    options6: [{
      city_id: '0',
      city_name: '禁止类'
    },{
      city_id: '1',
      city_name: '限制性介入'
    }, {
      city_id: '2',
      city_name: '选择性支持'
    }, {
      city_id: '3',
      city_name: '优先支持或经开区主导行业'
    }],

    options7: [{
      city_id: '0',
      city_name: 'BBB+及以下'
    },{
      city_id: '1',
      city_name: 'A-至A+'
    }, {
      city_id: '2',
      city_name: 'AA-及以上'
    }],
    options8: [{
      city_id: '0',
      city_name: 'D级及以下'
    },{
      city_id: '1',
      city_name: 'C级'
    }, {
      city_id: '2',
      city_name: 'B级'
    }, {
      city_id: '3',
      city_name: 'A级'
    }],
    options9: [{
      city_id: '0',
      city_name: '200平米以内'
    },{
      city_id: '1',
      city_name: '200（含）-500平米'
    }, {
      city_id: '2',
      city_name: '500（含）-1000平米'
    }, {
      city_id: '3',
      city_name: '1000（含）平米-2000平米'
    }],
    options10: [{
      city_id: '0',
      city_name: '无银行授信'
    },{
      city_id: '1',
      city_name: '1家'
    }, {
      city_id: '2',
      city_name: '2家'
    }, {
      city_id: '3',
      city_name: '3家及以上'
    }],
    options11: [{
      city_id: '1',
      city_name: '10万以内'
    },{
      city_id: '2',
      city_name: '10（含）-50万'
    },{
      city_id: '3',
      city_name: '50（含）-100万'
    },{
      city_id: '4',
      city_name: '100（含）-500万'
    },{
      city_id: '5',
      city_name: '500万以上'
    }],
    options12: [{
      city_id: '0',
      city_name: '未缴纳所得税'
    },{
      city_id: '1',
      city_name: '10万以内'
    }, {
      city_id: '2',
      city_name: '10-50万'
    }, {
      city_id: '3',
      city_name: '50万以上'
    }],

    options13: [{
      city_id: '0',
      city_name: '负增长'
    },{
      city_id: '1',
      city_name: '10%以下'
    }, {
      city_id: '2',
      city_name: '10%（含）-20%'
    }, {
      city_id: '3',
      city_name: '20%（含）-30%'
    }],
    options16: [{
      city_id: '0',
      city_name: '没有'
    },{
      city_id: '1',
      city_name: '2个以内'
    }, {
      city_id: '2',
      city_name: '2（含）-5个'
    }, {
      city_id: '3',
      city_name: '5（含）个以上'
    }],
    options17: [{
      city_id: '0',
      city_name: '近3个月电费未增长'
    },{
      city_id: '1',
      city_name: '增长10%'
    }, {
      city_id: '2',
      city_name: '10-20%'
    }, {
      city_id: '3',
      city_name: '20%以上'
    }],
    options18: [{
      city_id: '0',
      city_name: '不可提供审计报告'
    }, {
      city_id: '2',
      city_name: '可提供审计报告'
    }],
    options19: [{
      city_id: '0',
      city_name: '近1年未获得政府补助'
    },{
      city_id: '1',
      city_name: '1-30万'
    }, {
      city_id: '2',
      city_name: '30-50万'
    }, {
      city_id: '3',
      city_name: '50万以上'
    }],
    options20: [{
      city_id: '0',
      city_name: '未获奖'
    }, {
      city_id: '2',
      city_name: '获奖'
    }],

    options21: [{
      city_id: '0',
      city_name: '实际控制人无住宅'
    },{
      city_id: '1',
      city_name: '有1套住宅'
    }, {
      city_id: '2',
      city_name: '有2套住宅'
    }, {
      city_id: '3',
      city_name: '有3套及以上住宅'
    }],

    options22: [{
      city_id: '0',
      city_name: '负债100万以上'
    },{
      city_id: '1',
      city_name: '负债50-100万'
    }, {
      city_id: '2',
      city_name: '负债50万以内'
    }, {
      city_id: '3',
      city_name: '实际控制人夫妻无银行负债'
    }],

    options23: [{
      city_id: '0',
      city_name: '未投入机器设备'
    },{
      city_id: '1',
      city_name: '100万以内'
    }, {
      city_id: '2',
      city_name: '100-200万'
    }, {
      city_id: '3',
      city_name: '200万以上'
    }],

    options24: [{
      city_id: '0',
      city_name: '500万以内'
    },{
      city_id: '1',
      city_name: '500-1000万'
    }, {
      city_id: '2',
      city_name: '1000-2000万'
    }, {
      city_id: '3',
      city_name: '2000-3000万'
    }, {
      city_id: '4',
      city_name: '3000-4000万'
    }, {
      city_id: '5',
      city_name: '4000万以上'
    }],
    selected: {}
  },
    change1 (e) {
    this.setData({
      selected1: { ...e.detail }
    })
  },
  change2 (e) {
    this.setData({
      selected2: { ...e.detail }
    })
   
  },
  change3 (e) {
    this.setData({
      selected3: { ...e.detail }
    })
  },
  change4 (e) {
    this.setData({
      selected4: { ...e.detail }
    })
  }, 
   change5 (e) {
    this.setData({
      selected5: { ...e.detail }
    })
  },
  change6 (e) {
    this.setData({
      selected6: { ...e.detail }
    })
  },
  change7 (e) {
    this.setData({
      selected7: { ...e.detail }
    })
   
  },
  change8 (e) {
    this.setData({
      selected8: { ...e.detail }
    })
  },
  change9 (e) {
    this.setData({
      selected9: { ...e.detail }
    })
  }, 
   change10 (e) {
    this.setData({
      selected10: { ...e.detail }
    })
  },
  change11 (e) {
    this.setData({
      selected11: { ...e.detail }
    })
  },
  change12 (e) {
    this.setData({
      selected12: { ...e.detail }
    })
   
  },
  change13 (e) {
    this.setData({
      selected13: { ...e.detail }
    })
  },
  
  change16 (e) {
    this.setData({
      selected16: { ...e.detail }
    })
  },
  change17 (e) {
    this.setData({
      selected17: { ...e.detail }
    })
   
  },
  change18 (e) {
    this.setData({
      selected18: { ...e.detail }
    })
  },
  change19 (e) {
    this.setData({
      selected19: { ...e.detail }
    })
  }, 
   change20 (e) {
    this.setData({
      selected20: { ...e.detail }
    })
  },
  change21 (e) {
    this.setData({
      selected21: { ...e.detail }
    })
  },
  change22 (e) {
    this.setData({
      selected22: { ...e.detail }
    })
   
  },
  change23 (e) {
    this.setData({
      selected23: { ...e.detail }
    })
  },
  change24 (e) {
    this.setData({
      selected24: { ...e.detail }
    })
  },
  Input:function(e){
    this.setData({
      score:e.detail.value
      
    });
  },
  Input1:function(e){
    this.setData({
      score1:e.detail.value
    });
  },
  Input2:function(e){
    this.setData({
      score2:e.detail.value
    });
  },
  Input3:function(e){
    this.setData({
      score3:e.detail.value
    });
  },
  checkboxChange: function (e) {
    this.setData({
      selectedBox :e.detail.value
    });
    console.log('checkbox发生change事件，携带value值为：',this.data.selectedBox)
  },
  submit:function(){
    var number = (this.data.selected1.id*1 + this.data.selected2.id*1 + this.data.selected3.id*1 + this.data.selected4.id*1+ this.data.selected5.id*1+ this.data.selected6.id*1 + this.data.selected7.id*1 + this.data.selected8.id*1 + this.data.selected9.id*1 + this.data.selected10.id*1 + this.data.selected11.id*1 + this.data.selected12.id*1 + this.data.selected13.id*1 + this.data.selected16.id*1 + this.data.selected17.id*1 + this.data.selected18.id*1 + this.data.selected19.id*1 + this.data.selected20.id*1 + this.data.selected21.id*1 + this.data.selected22.id*1 + this.data.selected23.id*1 + this.data.selected24.id*1)/75;
    var one = number * (this.data.score1*1/3 - this.data.score2*1);
    var two = number * (this.data.score1*1/6 - this.data.score2*1);
    var top = this.data.score3*2;
    var upnumber = 500;
    if (one > top && top < upnumber){
      this.setData({
        real1 :  top,
      });
    }
    else if (one > upnumber){
      this.setData({
        real1 :  upnumber,
      });
    }
    else{
      this.setData({
        real1 :  one,
      });
    }
    this.setData({
      sum : number ,
      flag: false
    });
    if (two > top && top < upnumber){
      this.setData({
        real2 :  top,
      });
    }
    else if (two > upnumber)
    {
      this.setData({
        real2 : upnumber,
      });
    }
    else{
      this.setData({
        real2 :  two,
      });
    }
    this.setData({
      name : this.data.score ,
      flag: false
    });

    this.setData({
      sum : number ,
      flag: false
    });
    
    if (this.data.selectedBox == "B" )
    {
      this.setData({
        sum1 :one,
        flag1:true,
      });
      this.setData({
        sum2 :two,
        flag2:false,
      });
    }
    else if(this.data.selectedBox == "P" )
    {
      this.setData({
        sum1 :one,
        flag1:false,
      });
      this.setData({
        sum2 :two,
        flag2:true,
      });
    }
   
    else 
    {
      this.setData({
        sum1 :one,
        flag1:true,
      });
      this.setData({
        sum2 :two,
        flag2:true,
      });
    }
  },
  close () {
    // 关闭select
    this.selectComponent('#select').close()
  },
  oonLoad: function(options) {
    // Do some initialize when page load.
  },
  onShow: function() {
    // Do something when page show.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onShareTimeline(){},
  onPageScroll: function() {
    // Do something when page scroll
  },
  onResize: function() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: ' updating view.'
    }, function() {
      // this is setData callback
    })
  }
})