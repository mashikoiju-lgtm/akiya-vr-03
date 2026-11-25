const propertyData = {

  // 物件名
  propertyName: "公園が近く自然豊かな一軒家",

  // 最初に表示する部屋（外観）
  startScene: "soto",

  // 玄関ボタンを押したときの戻り先
  entranceScene: "genkan",

  rooms: {

    // ===== 外観 =====
    soto: {
      title: "外観",
      image: "soto.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 5,
          text: "玄関へ入る",
          sceneId: "genkan"
        }
      ]
    },

    // ===== 玄関 =====
genkan: {
  title: "玄関",
  image: "genkan.jpg",
  hotSpots: [
    {
      pitch: 0,
      yaw: 200,
      text: "廊下へ進む",
      sceneId: "rouka"
    },
    {
      pitch: 0,
      yaw: 0,
      text: "外観を見る",
      sceneId: "soto"
    },
    {
      pitch: 0,
      yaw: 230,
      text: "1階洋室へ",
      sceneId: "room1"
    },
    {
      pitch: 0,
      yaw: 160,
      text: "和室へ",
      sceneId: "washitsu"
    }
  ]
},

    // ===== 廊下 =====
    rouka: {
      title: "廊下",
      image: "rouka.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 180,
          text: "玄関へ戻る",
          sceneId: "genkan"
        },
        {
          pitch: 0,
          yaw: 10,
          text: "トイレへ",
          sceneId: "toire"
        },
        {
          pitch: 0,
          yaw: -20,
          text: "洗面所へ",
          sceneId: "senmenjo"
        },
        {
          pitch: 0,
          yaw: 30,
          text: "階段へ",
          sceneId: "kaidan"
        }
      ]
    },

    // ===== 和室 =====
    washitsu: {
      title: "和室",
      image: "washitsu.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -110,
          text: "玄関へ戻る",
          sceneId: "genkan"
        }
      ]
    },

    // ===== 台所 =====
    kitchen: {
      title: "台所",
      image: "kitchen.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 145,
          text: "1階洋室へ戻る",
          sceneId: "room1"
        },
        {
          pitch: 0,
          yaw: 210,
          text: "階段へ",
          sceneId: "kaidan"
        }
      ]
    },

    // ===== 1階洋室 =====
    room1: {
      title: "1階洋室",
      image: "room1.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -50,
          text: "玄関へ戻る",
          sceneId: "genkan"
        },
        {
          pitch: 0,
          yaw: -10,
          text: "台所へ",
          sceneId: "kitchen"
        },
        
      ]
    },

    // ===== 小部屋 =====
    room2: {
      title: "小部屋",
      image: "room2.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 150,
          text: "階段へ戻る",
          sceneId: "kaidan"
        }
      ]
    },

    // ===== トイレ =====
    toire: {
      title: "トイレ",
      image: "toire.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 100,
          text: "廊下へ戻る",
          sceneId: "rouka"
        }
      ]
    },

    // ===== 洗面所 =====
    senmenjo: {
      title: "洗面所",
      image: "sennmenn.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 50,
          text: "廊下へ戻る",
          sceneId: "rouka"
        },
        {
          pitch: 0,
          yaw: 180,
          text: "浴室へ",
          sceneId: "bathroom"
        }
      ]
    },

    // ===== 浴室 =====
    bathroom: {
      title: "浴室",
      image: "bathroom.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 80,
          text: "洗面所へ戻る",
          sceneId: "senmenjo"
        }
      ]
    },

    // ===== 階段 =====
    kaidan: {
      title: "階段",
      image: "kaidan.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 10,
          text: "廊下へ戻る",
          sceneId: "rouka"
        },
        {
          pitch: 0,
          yaw: -100,
          text: "小部屋へ",
          sceneId: "room2"
        },
        {
          pitch: 0,
          yaw: -45,
          text: "台所へ",
          sceneId: "kitchen"
        },
        {
          pitch: 0,
          yaw: -70,
          text: "2階へ",
          sceneId: "nikairouka"
        },
        {
          pitch: 0,
          yaw: 220,
          text: "トイレへ",
          sceneId: "toire"
        },
        {
          pitch: 0,
          yaw: 130,
          text: "洗面所へ",
          sceneId: "senmenjo"
        }
      ]
    },

    // ===== 2階廊下 =====
    nikairouka: {
      title: "2階廊下",
      image: "nikairouka.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 0,
          text: "1階へ戻る",
          sceneId: "kaidan"
        },
        {
          pitch: 0,
          yaw: 90,
          text: "2階洋室へ",
          sceneId: "nikairoom"
        },
        {
          pitch: 0,
          yaw: 150,
          text: "2階トイレへ",
          sceneId: "nikaitoire"
        }
      ]
    },

    // ===== 2階洋室 =====
    nikairoom: {
      title: "2階洋室",
      image: "nikairoom.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 90,
          text: "収納を見る",
          sceneId: "syuunou"
        },
        {
          pitch: 0,
          yaw: 50,
          text: "2階廊下へ戻る",
          sceneId: "nikairouka"
        }
      ]
    },

    // ===== 2階収納 =====
    syuunou: {
      title: "収納",
      image: "syuunou.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 80,
          text: "2階洋室へ戻る",
          sceneId: "nikairoom"
        }
      ]
    },

    // ===== 2階トイレ =====
    nikaitoire: {
      title: "2階トイレ",
      image: "nikaitoire.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 180,
          text: "2階廊下へ戻る",
          sceneId: "nikairouka"
        }
      ]
    }

  }
};
