export interface MenuItem {
  id: string;
  name: string;
  category: string;
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
      { id: "veg-bullets", name: "Veg Bullets", category: "starters" },
      { id: "felafal-kebabs", name: "Felafal Kebabs", category: "starters" },
      { id: "potato-popcorn", name: "Potato Popcorn", category: "starters" },
      { id: "corn-samosa", name: "Corn Samosa", category: "starters" },
      { id: "chilli-garlic-shot", name: "Chilli Garlic Shot", category: "starters" },
      { id: "cheese-rolls", name: "Cheese Rolls", category: "starters" },
      { id: "chilli-paneer", name: "Chilli Paneer", category: "starters" },
      { id: "veg-manchuria", name: "Veg Manchuria", category: "starters" },
    ],
  },
  {
    id: "juices",
    title: "Juices",
    items: [
      { id: "fruit-punch", name: "Fruit Punch", category: "juices" },
      { id: "watermelon", name: "Watermelon", category: "juices" },
      { id: "muskmelon", name: "Muskmelon", category: "juices" },
      { id: "banana-shake", name: "Banana Shake", category: "juices" },
      { id: "grape-punch", name: "Grape Punch", category: "juices" },
      { id: "badam-milk", name: "Badam Milk", category: "juices" },
    ],
  },
  {
    id: "rice",
    title: "Flavoured Rice",
    items: [
      { id: "pulihora", name: "Pulihora", category: "rice" },
      { id: "jeera-rice", name: "Jeera Rice", category: "rice" },
      { id: "pudina-rice", name: "Pudina Rice", category: "rice" },
      { id: "coriander-rice", name: "Coriander Rice", category: "rice" },
      { id: "karayapak-rice", name: "Karayapak Rice", category: "rice" },
      { id: "fried-rice", name: "Fried Rice", category: "rice" },
      { id: "tomato-rice", name: "Tomato Rice", category: "rice" },
    ],
  },
  {
    id: "curries",
    title: "Curries",
    items: [
      { id: "dondakaya-masala", name: "Dondakaya Masala", category: "curries" },
      { id: "gutti-vankaya", name: "Gutti Vankaya", category: "curries" },
      { id: "bendi-masala", name: "Bendi Masala", category: "curries" },
      { id: "aritikaya-pulusu", name: "Aritikaya Pulusu", category: "curries" },
      { id: "aalo-mutter", name: "Aalo Mutter", category: "curries" },
      { id: "mixed-veg", name: "Mixed Veg", category: "curries" },
      { id: "paneer-masala", name: "Paneer Masala", category: "curries" },
      { id: "butter-paneer", name: "Butter Paneer", category: "curries" },
      { id: "methi-cheman", name: "Methi Cheman", category: "curries" },
    ],
  },
  {
    id: "fry-items",
    title: "Fry Items",
    items: [
      { id: "beerakaya-tomato", name: "Beerakaya Tomato", category: "fry-items" },
      { id: "mushroom-masala", name: "Mushroom Masala", category: "fry-items" },
      { id: "bendi-fry", name: "Bendi Fry", category: "fry-items" },
      { id: "donda-fry", name: "Donda Fry", category: "fry-items" },
      { id: "cabbage-pakoda", name: "Cabbage Pakoda", category: "fry-items" },
      { id: "mixed-veg-fry", name: "Mixed Veg", category: "fry-items" },
      { id: "gobi-fry", name: "Gobi Fry", category: "fry-items" },
    ],
  },
  {
    id: "biryani",
    title: "Biryani",
    items: [
      { id: "veg-dum-biryani", name: "Veg Dum Biryani", category: "biryani" },
      { id: "bagara-rice", name: "Bagara Rice", category: "biryani" },
      { id: "veg-pulao", name: "Veg Pulao", category: "biryani" },
      { id: "paneer-biryani", name: "Paneer Biryani", category: "biryani" },
      { id: "avakaya-biryani", name: "Avakaya Biryani", category: "biryani" },
      { id: "kaju-mushroom-pulao", name: "Kaju Mushroom Pulao", category: "biryani" },
      { id: "mixed-veg-pulao", name: "Mixed Veg Pulao", category: "biryani" },
    ],
  },
  {
    id: "liquids",
    title: "Liquids",
    items: [
      { id: "veg-dal", name: "Veg Dal", category: "liquids" },
      { id: "leafy-dal", name: "Leafy Dal", category: "liquids" },
      { id: "sambar", name: "Sambar", category: "liquids" },
      { id: "rasam", name: "Rasam", category: "liquids" },
      { id: "perugu-charu", name: "Perugu Charu", category: "liquids" },
      { id: "mukkala-pulusu", name: "Mukkala Pulusu", category: "liquids" },
      { id: "beetroot-rasam", name: "Beetroot Rasam", category: "liquids" },
    ],
  },
  {
    id: "chutneys",
    title: "Chutneys",
    items: [
      { id: "sorakaya", name: "Sorakaya", category: "chutneys" },
      { id: "dondakaya", name: "Dondakaya", category: "chutneys" },
      { id: "tomato", name: "Tomato", category: "chutneys" },
      { id: "dosakaya", name: "Dosakaya", category: "chutneys" },
      { id: "gongura", name: "Gongura", category: "chutneys" },
      { id: "cabbage", name: "Cabbage", category: "chutneys" },
      { id: "dosa-avakaya", name: "Dosa Avakaya", category: "chutneys" },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    items: [
      { id: "pulka", name: "Pulka", category: "breads" },
      { id: "rumali", name: "Rumali", category: "breads" },
      { id: "poori", name: "Poori", category: "breads" },
      { id: "tandoori", name: "Tandoori", category: "breads" },
      { id: "naans", name: "Naan's", category: "breads" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { id: "gulab-jamun", name: "Gulab Jamun", category: "desserts" },
      { id: "double-ka-metha", name: "Double Ka Metha", category: "desserts" },
      { id: "kaala-jamun", name: "Kaala Jamun", category: "desserts" },
      { id: "gajar-ka-halwa", name: "Gajar Ka Halwa", category: "desserts" },
      { id: "kadhuka-kheer", name: "Kadhuka Kheer", category: "desserts" },
      { id: "kurbani-ka-meetha", name: "Kurbani Ka Meetha", category: "desserts" },
      { id: "kasmiri-rabadi", name: "Kasmiri Rabadi", category: "desserts" },
      { id: "moongdal-halwa", name: "Moongdal Halwa", category: "desserts" },
      { id: "fruit-custard", name: "Fruit Custard", category: "desserts" },
      { id: "pineapple-kesar", name: "Pine Apple Kesar", category: "desserts" },
      { id: "triple-pudding", name: "Triple Pudding", category: "desserts" },
    ],
  },
  {
    id: "live-counters",
    title: "Live Counters",
    items: [
      { id: "fruit-chat", name: "Fruit Chat", category: "live-counters" },
      { id: "paani-puri", name: "Paani Puri", category: "live-counters" },
      { id: "chat-counter", name: "Chat Counter", category: "live-counters" },
      { id: "dosa-idly", name: "Dosa & Idly", category: "live-counters" },
      { id: "jilebi", name: "Jilebi", category: "live-counters" },
      { id: "bobatlu", name: "Bobatlu", category: "live-counters" },
      { id: "gooli-soda", name: "Gooli Soda", category: "live-counters" },
      { id: "chocolate-fountain", name: "Chocolate Fountain", category: "live-counters" },
      { id: "popcorn", name: "Popcorn", category: "live-counters" },
      { id: "ice-cream", name: "Ice Cream", category: "live-counters" },
      { id: "pizza-burger", name: "Pizza & Burger", category: "live-counters" },
      { id: "noodles-pasta", name: "Noodles & Pasta", category: "live-counters" },
      { id: "paan", name: "Paan", category: "live-counters" },
      { id: "irani-chai", name: "Irani Chai", category: "live-counters" },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { id: "mirchi-bajji", name: "Mirchi Bajji", category: "extras" },
      { id: "masala-wada", name: "Masala Wada", category: "extras" },
      { id: "ariti-bajji", name: "Ariti Bajji", category: "extras" },
      { id: "dahi-wada", name: "Dahi Wada", category: "extras" },
      { id: "chilli-garey", name: "Chilli Garey", category: "extras" },
      { id: "bellam-borey", name: "Bellam Borey", category: "extras" },
      { id: "bobatllu", name: "Bobatllu", category: "extras" },
      { id: "tamalapaku-bajji", name: "Tamalapaku Bajji", category: "extras" },
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
