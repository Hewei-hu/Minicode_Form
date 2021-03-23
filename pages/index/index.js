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
      { name: 'P', value: 'Manufacturing ' },
      { name: 'B', value: 'Business' },
    ],
    options1: [{
      city_id: '0',
      city_name: 'Below 2 years'
    },{
      city_id: '1',
      city_name: '2 (contain)-5 years'
    }, {
      city_id: '2',
      city_name: '5 years (contain) -10 years'
    }, {
      city_id: '3',
      city_name: 'Above 10 years '
    }],
    options2: [{
      city_id: '0',
      city_name: 'Below 2million'
    },{
      city_id: '1',
      city_name: '2 million (contain) - 5 million'
    }, {
      city_id: '2',
      city_name: '5 million(contain)- 10 million'
    }, {
      city_id: '3',
      city_name: '10 million(contain)- 20 million'
    },{
      city_id: '4',
      city_name: '20 million(contain)- 50 million'
    },{
      city_id: '5',
      city_name: 'Above 50 million(contain)'
    }],
    options3: [{
      city_id: '0',
      city_name: 'None'
    },{
      city_id: '1',
      city_name: '1-2'
    }, {
      city_id: '2',
      city_name: '3-5'
    }, {
      city_id: '3',
      city_name: 'Above 6'
    }],
    options4: [{
      city_id: '0',
      city_name: 'Below 10 people '
    },{
      city_id: '1',
      city_name: '10 (contain)-30'
    }, {
      city_id: '2',
      city_name: '30 (contain)-50'
    }, {
      city_id: '3',
      city_name: '50 (contain)-100'
    },{
      city_id: '4',
      city_name: 'Above 100'
    }],
    options5: [{
      city_id: '0',
      city_name: 'NO'
    }, {
      city_id: '3',
      city_name: 'YES'
    }],
    options6: [{
      city_id: '0',
      city_name: 'Ban'
    },{
      city_id: '1',
      city_name: 'Restrictive intervention'
    }, {
      city_id: '2',
      city_name: 'Selective support'
    }, {
      city_id: '3',
      city_name: 'Priority to support'
    }],
    
    options7: [{
      city_id: '0',
      city_name: 'Below BBB+'
    },{
      city_id: '1',
      city_name: 'A- to A+'
    }, {
      city_id: '2',
      city_name: 'Above AA-'
    }],
    options8: [{
      city_id: '0',
      city_name: 'Below D'
    },{
      city_id: '1',
      city_name: 'C'
    }, {
      city_id: '2',
      city_name: 'B'
    }, {
      city_id: '3',
      city_name: 'A'
    }],
    options9: [{
      city_id: '0',
      city_name: 'below 200 meters square'
    },{
      city_id: '1',
      city_name: '200 (contain) - 500'
    }, {
      city_id: '2',
      city_name: '500 (contain) - 1000'
    }, {
      city_id: '3',
      city_name: '1000 (contain) - 2000'
    }],
    options10: [{
      city_id: '0',
      city_name: 'None'
    },{
      city_id: '1',
      city_name: '1'
    }, {
      city_id: '2',
      city_name: '2'
    }, {
      city_id: '3',
      city_name: 'Above 3 (contain)'
    }],
    options11: [{
      city_id: '1',
      city_name: 'below 100k'
    },{
      city_id: '2',
      city_name: '100k (contain)-500k'
    },{
      city_id: '3',
      city_name: '500k (contain)-1 million'
    },{
      city_id: '4',
      city_name: '1 million (contain)-5 million'
    },{
      city_id: '5',
      city_name: 'Above 5million (contain)'
    }],
    options12: [{
      city_id: '0',
      city_name: 'None'
    },{
      city_id: '1',
      city_name: 'below 100k'
    }, {
      city_id: '2',
      city_name: '100k -500k'
    }, {
      city_id: '3',
      city_name: 'Above 500k '
    }],

    options13: [{
      city_id: '0',
      city_name: 'Negative growth'
    },{
      city_id: '1',
      city_name: 'Below 10%'
    }, {
      city_id: '2',
      city_name: '10% (contain)-20%'
    }, {
      city_id: '3',
      city_name: '20% (contain)-30%'
    }],
    options16: [{
      city_id: '0',
      city_name: 'None'
    },{
      city_id: '1',
      city_name: 'Below 2'
    }, {
      city_id: '2',
      city_name: '2 (contain)-5'
    }, {
      city_id: '3',
      city_name: 'Above 5 (contain)'
    }],
    options17: [{
      city_id: '0',
      city_name: 'No increased in the last three months'
    },{
      city_id: '1',
      city_name: '10%'
    }, {
      city_id: '2',
      city_name: '10-20%'
    }, {
      city_id: '3',
      city_name: 'Above 20%'
    }],
    options18: [{
      city_id: '0',
      city_name: 'Can not'
    }, {
      city_id: '2',
      city_name: 'Can'
    }],
    options19: [{
      city_id: '0',
      city_name: 'Nearly 1 year not to receive government subsidies'
    },{
      city_id: '1',
      city_name: '1-300k'
    }, {
      city_id: '2',
      city_name: '300k-500k'
    }, {
      city_id: '3',
      city_name: 'Above 500k'
    }],
    options20: [{
      city_id: '0',
      city_name: 'NO'
    }, {
      city_id: '2',
      city_name: 'YES'
    }],

    options21: [{
      city_id: '0',
      city_name: 'no residence'
    },{
      city_id: '1',
      city_name: '1'
    }, {
      city_id: '2',
      city_name: '2'
    }, {
      city_id: '3',
      city_name: 'Above 3'
    }],

    options22: [{
      city_id: '0',
      city_name: 'Debt more than 1 million'
    },{
      city_id: '1',
      city_name: '500k-1 million'
    }, {
      city_id: '2',
      city_name: 'Below 500k'
    }, {
      city_id: '3',
      city_name: 'Couple no bank debt'
    }],

    options23: [{
      city_id: '0',
      city_name: 'None'
    },{
      city_id: '1',
      city_name: 'Below 1 million'
    }, {
      city_id: '2',
      city_name: '1m-2m'
    }, {
      city_id: '3',
      city_name: 'Above 2m'
    }],

    options24: [{
      city_id: '0',
      city_name: 'Below 5m'
    },{
      city_id: '1',
      city_name: '5m-10m'
    }, {
      city_id: '2',
      city_name: '10m-20m'
    }, {
      city_id: '3',
      city_name: '20m-30m'
    }, {
      city_id: '4',
      city_name: '30m-40m'
    }, {
      city_id: '5',
      city_name: 'Above 40m'
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
    console.log('checkbox change，value：',this.data.selectedBox)
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
