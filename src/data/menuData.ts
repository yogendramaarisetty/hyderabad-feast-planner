export interface MenuItem {
  id: string;
  name: string;
  category: string;
  isVeg: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface Package {
  id: string;
  name: string;
  items: string[];
  description: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { id: "veg-bullets", name: "Veg Bullets", category: "starters", isVeg: true },
      { id: "felafal-kebabs", name: "Felafal Kebabs", category: "starters", isVeg: true },
      { id: "potato-popcorn", name: "Potato Popcorn", category: "starters", isVeg: true },
      { id: "corn-samosa", name: "Corn Samosa", category: "starters", isVeg: true },
      { id: "chilli-garlic-shot", name: "Chilli Garlic Shot", category: "starters", isVeg: true },
      { id: "cheese-rolls", name: "Cheese Rolls", category: "starters", isVeg: true },
      { id: "chilli-paneer", name: "Chilli Paneer", category: "starters", isVeg: true },
      { id: "veg-manchuria", name: "Veg Manchuria", category: "starters", isVeg: true },
    ],
  },
  {
    id: "juices",
    title: "Juices",
    items: [
      { id: "fruit-punch", name: "Fruit Punch", category: "juices", isVeg: true },
      { id: "watermelon", name: "Watermelon", category: "juices", isVeg: true },
      { id: "muskmelon", name: "Muskmelon", category: "juices", isVeg: true },
      { id: "banana-shake", name: "Banana Shake", category: "juices", isVeg: true },
      { id: "grape-punch", name: "Grape Punch", category: "juices", isVeg: true },
      { id: "badam-milk", name: "Badam Milk", category: "juices", isVeg: true },
    ],
  },
  {
    id: "rice",
    title: "Flavoured Rice",
    items: [
      { id: "pulihora", name: "Pulihora", category: "rice", isVeg: true },
      { id: "jeera-rice", name: "Jeera Rice", category: "rice", isVeg: true },
      { id: "pudina-rice", name: "Pudina Rice", category: "rice", isVeg: true },
      { id: "coriander-rice", name: "Coriander Rice", category: "rice", isVeg: true },
      { id: "karayapak-rice", name: "Karayapak Rice", category: "rice", isVeg: true },
      { id: "fried-rice", name: "Fried Rice", category: "rice", isVeg: true },
      { id: "tomato-rice", name: "Tomato Rice", category: "rice", isVeg: true },
    ],
  },
  {
    id: "curries",
    title: "Curries",
    items: [
      { id: "dondakaya-masala", name: "Dondakaya Masala", category: "curries", isVeg: true },
      { id: "gutti-vankaya", name: "Gutti Vankaya", category: "curries", isVeg: true },
      { id: "bendi-masala", name: "Bendi Masala", category: "curries", isVeg: true },
      { id: "aritikaya-pulusu", name: "Aritikaya Pulusu", category: "curries", isVeg: true },
      { id: "aalo-mutter", name: "Aalo Mutter", category: "curries", isVeg: true },
      { id: "mixed-veg", name: "Mixed Veg", category: "curries", isVeg: true },
      { id: "paneer-masala", name: "Paneer Masala", category: "curries", isVeg: true },
      { id: "butter-paneer", name: "Butter Paneer", category: "curries", isVeg: true },
      { id: "methi-cheman", name: "Methi Cheman", category: "curries", isVeg: true },
    ],
  },
  {
    id: "fry-items",
    title: "Fry Items",
    items: [
      { id: "beerakaya-tomato", name: "Beerakaya Tomato", category: "fry-items", isVeg: true },
      { id: "mushroom-masala", name: "Mushroom Masala", category: "fry-items", isVeg: true },
      { id: "bendi-fry", name: "Bendi Fry", category: "fry-items", isVeg: true },
      { id: "donda-fry", name: "Donda Fry", category: "fry-items", isVeg: true },
      { id: "cabbage-pakoda", name: "Cabbage Pakoda", category: "fry-items", isVeg: true },
      { id: "mixed-veg-fry", name: "Mixed Veg", category: "fry-items", isVeg: true },
      { id: "gobi-fry", name: "Gobi Fry", category: "fry-items", isVeg: true },
    ],
  },
  {
    id: "biryani",
    title: "Biryani",
    items: [
      { id: "veg-dum-biryani", name: "Veg Dum Biryani", category: "biryani", isVeg: true },
      { id: "bagara-rice", name: "Bagara Rice", category: "biryani", isVeg: true },
      { id: "veg-pulao", name: "Veg Pulao", category: "biryani", isVeg: true },
      { id: "paneer-biryani", name: "Paneer Biryani", category: "biryani", isVeg: true },
      { id: "avakaya-biryani", name: "Avakaya Biryani", category: "biryani", isVeg: true },
      { id: "kaju-mushroom-pulao", name: "Kaju Mushroom Pulao", category: "biryani", isVeg: true },
      { id: "mixed-veg-pulao", name: "Mixed Veg Pulao", category: "biryani", isVeg: true },
    ],
  },
  {
    id: "liquids",
    title: "Liquids",
    items: [
      { id: "veg-dal", name: "Veg Dal", category: "liquids", isVeg: true },
      { id: "leafy-dal", name: "Leafy Dal", category: "liquids", isVeg: true },
      { id: "sambar", name: "Sambar", category: "liquids", isVeg: true },
      { id: "rasam", name: "Rasam", category: "liquids", isVeg: true },
      { id: "perugu-charu", name: "Perugu Charu", category: "liquids", isVeg: true },
      { id: "mukkala-pulusu", name: "Mukkala Pulusu", category: "liquids", isVeg: true },
      { id: "beetroot-rasam", name: "Beetroot Rasam", category: "liquids", isVeg: true },
    ],
  },
  {
    id: "chutneys",
    title: "Chutneys",
    items: [
      { id: "sorakaya", name: "Sorakaya", category: "chutneys", isVeg: true },
      { id: "dondakaya", name: "Dondakaya", category: "chutneys", isVeg: true },
      { id: "tomato", name: "Tomato", category: "chutneys", isVeg: true },
      { id: "dosakaya", name: "Dosakaya", category: "chutneys", isVeg: true },
      { id: "gongura", name: "Gongura", category: "chutneys", isVeg: true },
      { id: "cabbage", name: "Cabbage", category: "chutneys", isVeg: true },
      { id: "dosa-avakaya", name: "Dosa Avakaya", category: "chutneys", isVeg: true },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    items: [
      { id: "pulka", name: "Pulka", category: "breads", isVeg: true },
      { id: "rumali", name: "Rumali", category: "breads", isVeg: true },
      { id: "poori", name: "Poori", category: "breads", isVeg: true },
      { id: "tandoori", name: "Tandoori", category: "breads", isVeg: true },
      { id: "naans", name: "Naan's", category: "breads", isVeg: true },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { id: "gulab-jamun", name: "Gulab Jamun", category: "desserts", isVeg: true },
      { id: "double-ka-metha", name: "Double Ka Metha", category: "desserts", isVeg: true },
      { id: "kaala-jamun", name: "Kaala Jamun", category: "desserts", isVeg: true },
      { id: "gajar-ka-halwa", name: "Gajar Ka Halwa", category: "desserts", isVeg: true },
      { id: "kadhuka-kheer", name: "Kadhuka Kheer", category: "desserts", isVeg: true },
      { id: "kurbani-ka-meetha", name: "Kurbani Ka Meetha", category: "desserts", isVeg: true },
      { id: "kasmiri-rabadi", name: "Kasmiri Rabadi", category: "desserts", isVeg: true },
      { id: "moongdal-halwa", name: "Moongdal Halwa", category: "desserts", isVeg: true },
      { id: "fruit-custard", name: "Fruit Custard", category: "desserts", isVeg: true },
      { id: "pineapple-kesar", name: "Pine Apple Kesar", category: "desserts", isVeg: true },
      { id: "triple-pudding", name: "Triple Pudding", category: "desserts", isVeg: true },
    ],
  },
  {
    id: "live-counters",
    title: "Live Counters",
    items: [
      { id: "fruit-chat", name: "Fruit Chat", category: "live-counters", isVeg: true },
      { id: "paani-puri", name: "Paani Puri", category: "live-counters", isVeg: true },
      { id: "chat-counter", name: "Chat Counter", category: "live-counters", isVeg: true },
      { id: "dosa-idly", name: "Dosa & Idly", category: "live-counters", isVeg: true },
      { id: "jilebi", name: "Jilebi", category: "live-counters", isVeg: true },
      { id: "bobatlu", name: "Bobatlu", category: "live-counters", isVeg: true },
      { id: "gooli-soda", name: "Gooli Soda", category: "live-counters", isVeg: true },
      { id: "chocolate-fountain", name: "Chocolate Fountain", category: "live-counters", isVeg: true },
      { id: "popcorn", name: "Popcorn", category: "live-counters", isVeg: true },
      { id: "ice-cream", name: "Ice Cream", category: "live-counters", isVeg: true },
      { id: "pizza-burger", name: "Pizza & Burger", category: "live-counters", isVeg: true },
      { id: "noodles-pasta", name: "Noodles & Pasta", category: "live-counters", isVeg: true },
      { id: "paan", name: "Paan", category: "live-counters", isVeg: true },
      { id: "irani-chai", name: "Irani Chai", category: "live-counters", isVeg: true },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { id: "mirchi-bajji", name: "Mirchi Bajji", category: "extras", isVeg: true },
      { id: "masala-wada", name: "Masala Wada", category: "extras", isVeg: true },
      { id: "ariti-bajji", name: "Ariti Bajji", category: "extras", isVeg: true },
      { id: "dahi-wada", name: "Dahi Wada", category: "extras", isVeg: true },
      { id: "chilli-garey", name: "Chilli Garey", category: "extras", isVeg: true },
      { id: "bellam-borey", name: "Bellam Borey", category: "extras", isVeg: true },
      { id: "bobatllu", name: "Bobatllu", category: "extras", isVeg: true },
      { id: "tamalapaku-bajji", name: "Tamalapaku Bajji", category: "extras", isVeg: true },
    ],
  },
];

export const packages: Package[] = [
  {
    id: "veg-party",
    name: "VEG-PARTY MENU",
    description: "Complete party menu with starters, main course, and desserts",
    items: [
      "Fresh Juice",
      "Rumali Roti",
      "Butter Paneer",
      "Veg-Fry",
      "Veg Dum Biryani",
      "Guthi Vankaya",
      "White Rice",
      "Sambar",
      "Palak Dal",
      "Papad",
      "Curd",
      "Sweet",
      "Fresh Pickle",
      "Green Salad",
    ],
  },
  {
    id: "traditional-veg",
    name: "Traditional VEG MENU",
    description: "Authentic traditional South Indian vegetarian feast",
    items: [
      "Fresh Pickle",
      "Bellam Purnalu",
      "Pulihora",
      "Bajji",
      "Veg-Biryani",
      "Guthu Vankaya",
      "Veg-Fry",
      "White Rice",
      "Sambar",
      "Raitha",
      "Papad",
      "Sweet",
      "Salad",
    ],
  },
];
