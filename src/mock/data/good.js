
import Mock from 'mockjs'
const goods = {
  'stirFfry': [
    {
      'id': 1,
      'name': '糖醋排骨',
      'describe': '它选用新鲜猪子排作主料，肉质鲜嫩，成菜色泽红亮油润，酸甜适中，不油不腻，口感丰富细腻 ',
      'price': '28元/份',
      'img': '/stirFfry/1.jpg',
      'score': 5
    },
    {
      'id': 2,
      'name': '水煮肉片',
      'describe': '水煮肉片肉味香辣，软嫩，易嚼。吃时肉嫩菜鲜 ，汤红油亮，麻辣味浓，最宜下饭，为家常美食之一。特色是“麻、辣、鲜、香”。',
      'price': '18元/份',
      'img': '/stirFfry/2.jpg',
      'score': 4
    },
    {
      'id': 3,
      'name': '黄焖牛肉',
      'describe': '将主料先上浆“穿衣”，下油锅炸黄，再烧焖而成。烂而不糜，嫩而不韧，醇香爽口。以牛肉配黄花、黑木耳、玉兰片等黄焖而成',
      'price': '32元/份',
      'img': '/stirFfry/3.jpg',
      'score': 4
    },
    {
      'id': 4,
      'name': '爆炒肥肠',
      'describe': '爆炒肥肠制作原料有以大肠、青椒、红椒、酸菜等。先爆炒肥肠，将其炒至表面微微焦黄，口感更好',
      'price': '25元/份',
      'img': '/stirFfry/4.jpg',
      'score': 3
    },
    {
      'id': 5,
      'name': '鱼香肉丝',
      'describe': '鱼香肉丝选料精细，成菜色泽红润、富鱼香味，吃起来具有咸甜酸辣兼备的特点，肉丝质地柔滑软嫩，是下饭菜的必选。',
      'price': '15元/份',
      'img': '/stirFfry/5.jpg',
      'score': 5
    },
    {
      'id': 6,
      'name': '泡椒鸡杂',
      'describe': '酸辣可口，鸡杂是鸡杂碎的统称，包括鸡心、鸡肝、鸡肠和鸡胗等，鲜美可口，且有多样营养素',
      'price': '18元/份',
      'img': '/stirFfry/6.jpg',
      'score': 4
    },
    {
      'id': 7,
      'name': '青椒土豆丝',
      'describe': '以土豆，青椒，大蒜，葱，盐，味精，色拉油等为原材料制作而成。做法简单，美味可口，营养丰富。',
      'price': '10元/份',
      'img': '/stirFfry/7.jpg',
      'score': 4
    },
    {
      'id': 8,
      'name': '炝炒小白菜',
      'describe': '炝炒小白菜是一款家常菜品，制作原料主要有小白菜、干辣椒等。',
      'price': '10元/份',
      'img': '/stirFfry/8.jpg',
      'score': 3
    },
    {
      'id': 9,
      'name': '三鲜汤',
      'describe': '三鲜汤主料为海参、鱿鱼、笋干，辅料有盐、味精、料酒、胡椒粉、豌豆苗、鸡鸭汤等。三鲜汤做法十分方便，味道鲜美',
      'price': '9元/份',
      'img': '/stirFfry/9.jpg',
      'score': 3
    },
    {
      'id': 10,
      'name': '紫菜蛋花汤',
      'describe': '紫菜蛋花汤属于一款速食汤，是四川传统餐后汤，其主料紫菜和鸡蛋的营养价值都比较高，因其制作简单方便，营养丰富而广受喜爱。',
      'price': '9元/份',
      'img': '/stirFfry/10.jpg',
      'score': 3
    }
  ],
  'hotPot': [
    {
      'id': 11,
      'name': '酸汤鱼火锅',
      'describe': '贵州酸汤鱼是一道菜品，制作原料主要有鲜活鱼、番茄、白醋等，美味可口，一种酸酸的感觉。汁浓味鲜，鱼肉细嫩，民族风味。因其口感独特深受贵州人民的喜爱。',
      'price': '108元/锅',
      'img': '/hotPot/1.jpg',
      'score': 5
    },
    {
      'id': 12,
      'name': '香辣小龙虾',
      'describe': '香辣小龙虾主要材料有小龙虾、辣椒等，是湖南省著名传统小吃，以小龙虾制成，口味辣鲜香，色泽红亮，质地滑嫩，滋味香辣。',
      'price': '138元/锅',
      'img': '/hotPot/2.jpg',
      'score': 4
    },
    {
      'id': 13,
      'name': '涮羊肉火锅',
      'describe': '老北京涮羊肉，正宗老北京火锅的风味，传承老北京涮羊肉的特点，采用铜锅炭火，羊肉讲究肉质细且无膻味，鲜嫩无比，其他食材新鲜。',
      'price': '118元/锅',
      'img': '/hotPot/3.jpg ',
      'score': 3
    },
    {
      'id': 14,
      'name': '芸豆猪脚',
      'describe': '主料是猪蹄，配料是土豆等，调料为花椒、干辣椒、豆瓣酱等，通过压力锅炖制的做法而成',
      'price': '98元/锅',
      'img': '/hotPot/4.jpg ',
      'score': 4
    },
    {
      'id': 15,
      'name': '辣子鸡火锅',
      'describe': '这个东西是真TM好吃',
      'price': '88元/锅',
      'img': '/hotPot/5.jpg ',
      'score': 5
    }
  ],
  'drinks': [
    {
      'id': 16,
      'name': '果粒橙',
      'describe': '大 ',
      'price': '10元/瓶',
      'img': '/drinks/1.jpg'
    },
    {
      'id': 17,
      'name': '果粒橙',
      'describe': '小 ',
      'price': '5元/瓶',
      'img': '/drinks/2.jpg'
    },
    {
      'id': 18,
      'name': '雪碧',
      'describe': '大 ',
      'price': '10元/瓶',
      'img': '/drinks/3.jpg'
    },
    {
      'id': 19,
      'name': '雪碧',
      'describe': '小 ',
      'price': '5元/瓶',
      'img': '/drinks/4.jpg'
    },
    {
      'id': 20,
      'name': '王老吉',
      'describe': '小 ',
      'price': '5元/瓶',
      'img': '/drinks/5.jpg'
    },
    {
      'id': 21,
      'name': '椰奶',
      'describe': '小 ',
      'price': '6元/瓶',
      'img': '/drinks/6.jpg'
    },
    {
      'id': 22,
      'name': '苹果醋',
      'describe': '小 ',
      'price': '7元/瓶',
      'img': '/drinks/7.jpg'
    }
  ]
}

const allGoods = (prarms) => {
  return goods
}

Mock.mock('/api/good/allGoods', 'get', allGoods)
