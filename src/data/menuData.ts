export interface MenuItem {
  id: string;
  name: string;
  category: string;
  isVeg: boolean;
  image?: string;
  description: string;
  basePrice: number; // Price per plate
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
  basePrice: number; // Base price per person for the package
  comboDiscount: number; // Percentage discount for combo pricing
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { id: "veg-bullets", name: "Veg Bullets", category: "starters", isVeg: true, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center", description: "Crispy potato and mixed vegetable bullets with aromatic spices", basePrice: 25 },
      { id: "felafal-kebabs", name: "Felafal Kebabs", category: "starters", isVeg: true, image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop&crop=center", description: "Traditional Middle Eastern chickpea kebabs with fresh herbs", basePrice: 30 },
      { id: "potato-popcorn", name: "Potato Popcorn", category: "starters", isVeg: true, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center", description: "Golden crispy potato bites seasoned with secret spices", basePrice: 20 },
      { id: "corn-samosa", name: "Corn Samosa", category: "starters", isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop&crop=center", description: "Flaky pastry filled with sweet corn and aromatic spices", basePrice: 22 },
      { id: "chilli-garlic-shot", name: "Chilli Garlic Shot", category: "starters", isVeg: true, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center", description: "Spicy garlic-infused mini bites with a tangy twist", basePrice: 28 },
      { id: "cheese-rolls", name: "Cheese Rolls", category: "starters", isVeg: true, image: "https://images.unsplash.com/photo-1563379091339-03246963d4d4?w=400&h=300&fit=crop&crop=center", description: "Melted cheese wrapped in crispy golden pastry", basePrice: 35 },
      { id: "chilli-paneer", name: "Chilli Paneer", category: "starters", isVeg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center", description: "Tender paneer cubes tossed in spicy chilli sauce", basePrice: 40 },
      { id: "veg-manchuria", name: "Veg Manchuria", category: "starters", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Crispy vegetable balls in tangy Indo-Chinese sauce", basePrice: 32 },
    ],
  },
  {
    id: "juices",
    title: "Juices",
    items: [
      { id: "fruit-punch", name: "Fruit Punch", category: "juices", isVeg: true, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center", description: "Refreshing blend of seasonal fruits with a hint of mint", basePrice: 35 },
      { id: "watermelon", name: "Watermelon", category: "juices", isVeg: true, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop&crop=center", description: "Pure watermelon juice - naturally sweet and hydrating", basePrice: 30 },
      { id: "muskmelon", name: "Muskmelon", category: "juices", isVeg: true, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop&crop=center", description: "Creamy muskmelon juice with delicate floral notes", basePrice: 32 },
      { id: "banana-shake", name: "Banana Shake", category: "juices", isVeg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center", description: "Rich and creamy banana shake with a touch of honey", basePrice: 40 },
      { id: "grape-punch", name: "Grape Punch", category: "juices", isVeg: true, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop&crop=center", description: "Fresh grape juice with a burst of natural sweetness", basePrice: 35 },
      { id: "badam-milk", name: "Badam Milk", category: "juices", isVeg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center", description: "Nutritious almond milk with cardamom and saffron", basePrice: 45 },
    ],
  },
  {
    id: "rice",
    title: "Flavoured Rice",
    items: [
      { id: "pulihora", name: "Pulihora", category: "rice", isVeg: true, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center", description: "Tangy tamarind rice with peanuts and aromatic spices", basePrice: 30 },
      { id: "jeera-rice", name: "Jeera Rice", category: "rice", isVeg: true, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center", description: "Fragrant basmati rice tempered with cumin seeds", basePrice: 25 },
      { id: "pudina-rice", name: "Pudina Rice", category: "rice", isVeg: true, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center", description: "Fresh mint rice with green chilies and curry leaves", basePrice: 28 },
      { id: "coriander-rice", name: "Coriander Rice", category: "rice", isVeg: true, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center", description: "Aromatic rice with fresh coriander and green spices", basePrice: 28 },
      { id: "karayapak-rice", name: "Karayapak Rice", category: "rice", isVeg: true, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center", description: "Spicy rice with curry leaves and mustard seeds", basePrice: 30 },
      { id: "fried-rice", name: "Fried Rice", category: "rice", isVeg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&crop=center", description: "Stir-fried rice with mixed vegetables and soy sauce", basePrice: 35 },
      { id: "tomato-rice", name: "Tomato Rice", category: "rice", isVeg: true, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center", description: "Tangy tomato rice with onions and aromatic spices", basePrice: 32 },
    ],
  },
  {
    id: "curries",
    title: "Curries",
    items: [
      { id: "dondakaya-masala", name: "Dondakaya Masala", category: "curries", isVeg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center", description: "Tender ivy gourd in rich onion-tomato masala", basePrice: 45 },
      { id: "gutti-vankaya", name: "Gutti Vankaya", category: "curries", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Stuffed brinjal curry with aromatic spices and coconut", basePrice: 50 },
      { id: "bendi-masala", name: "Bendi Masala", category: "curries", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Okra cooked in tangy onion-tomato gravy", basePrice: 40 },
      { id: "aritikaya-pulusu", name: "Aritikaya Pulusu", category: "curries", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Tangy raw mango curry with tamarind and spices", basePrice: 35 },
      { id: "aalo-mutter", name: "Aalo Mutter", category: "curries", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Classic potato and green peas in creamy tomato sauce", basePrice: 38 },
      { id: "mixed-veg", name: "Mixed Veg", category: "curries", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Assorted vegetables in rich and flavorful gravy", basePrice: 42 },
      { id: "paneer-masala", name: "Paneer Masala", category: "curries", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Cottage cheese in aromatic onion-tomato masala", basePrice: 55 },
      { id: "butter-paneer", name: "Butter Paneer", category: "curries", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Rich paneer in creamy butter tomato sauce", basePrice: 60 },
      { id: "methi-cheman", name: "Methi Cheman", category: "curries", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Fenugreek leaves with chickpeas in spicy gravy", basePrice: 48 },
    ],
  },
  {
    id: "fry-items",
    title: "Fry Items",
    items: [
      { id: "beerakaya-tomato", name: "Beerakaya Tomato", category: "fry-items", isVeg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center", description: "Ridge gourd stir-fried with tomatoes and spices", basePrice: 30 },
      { id: "mushroom-masala", name: "Mushroom Masala", category: "fry-items", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Fresh mushrooms cooked in aromatic onion-tomato masala", basePrice: 45 },
      { id: "bendi-fry", name: "Bendi Fry", category: "fry-items", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Crispy okra stir-fried with onions and spices", basePrice: 35 },
      { id: "donda-fry", name: "Donda Fry", category: "fry-items", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Ivy gourd stir-fried with coconut and curry leaves", basePrice: 32 },
      { id: "cabbage-pakoda", name: "Cabbage Pakoda", category: "fry-items", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Crispy cabbage fritters with gram flour and spices", basePrice: 25 },
      { id: "mixed-veg-fry", name: "Mixed Veg", category: "fry-items", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Assorted vegetables stir-fried with aromatic spices", basePrice: 38 },
      { id: "gobi-fry", name: "Gobi Fry", category: "fry-items", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Cauliflower florets stir-fried with onions and spices", basePrice: 40 },
    ],
  },
  {
    id: "biryani",
    title: "Biryani",
    items: [
      { id: "veg-dum-biryani", name: "Veg Dum Biryani", category: "biryani", isVeg: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center", description: "Aromatic basmati rice with mixed vegetables, slow-cooked in dum style", basePrice: 80 },
      { id: "bagara-rice", name: "Bagara Rice", category: "biryani", isVeg: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center", description: "Hyderabadi special rice with whole spices and fried onions", basePrice: 75 },
      { id: "veg-pulao", name: "Veg Pulao", category: "biryani", isVeg: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center", description: "Fragrant rice with mixed vegetables and aromatic spices", basePrice: 60 },
      { id: "paneer-biryani", name: "Paneer Biryani", category: "biryani", isVeg: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center", description: "Rich paneer biryani with saffron and whole spices", basePrice: 90 },
      { id: "avakaya-biryani", name: "Avakaya Biryani", category: "biryani", isVeg: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center", description: "Spicy mango pickle flavored rice with vegetables", basePrice: 70 },
      { id: "kaju-mushroom-pulao", name: "Kaju Mushroom Pulao", category: "biryani", isVeg: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center", description: "Premium pulao with cashews, mushrooms, and aromatic spices", basePrice: 85 },
      { id: "mixed-veg-pulao", name: "Mixed Veg Pulao", category: "biryani", isVeg: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center", description: "Colorful rice with assorted vegetables and mild spices", basePrice: 55 },
    ],
  },
  {
    id: "liquids",
    title: "Liquids",
    items: [
      { id: "veg-dal", name: "Veg Dal", category: "liquids", isVeg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center", description: "Mixed lentil curry with vegetables and aromatic spices", basePrice: 30 },
      { id: "leafy-dal", name: "Leafy Dal", category: "liquids", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Lentil curry with fresh green leafy vegetables", basePrice: 35 },
      { id: "sambar", name: "Sambar", category: "liquids", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Traditional South Indian lentil stew with vegetables", basePrice: 25 },
      { id: "rasam", name: "Rasam", category: "liquids", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Tangy tamarind soup with tomatoes and spices", basePrice: 20 },
      { id: "perugu-charu", name: "Perugu Charu", category: "liquids", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Yogurt-based curry with vegetables and tempering", basePrice: 28 },
      { id: "mukkala-pulusu", name: "Mukkala Pulusu", category: "liquids", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Tangy tamarind curry with drumsticks and vegetables", basePrice: 32 },
      { id: "beetroot-rasam", name: "Beetroot Rasam", category: "liquids", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Healthy beetroot rasam with tomatoes and spices", basePrice: 22 },
    ],
  },
  {
    id: "chutneys",
    title: "Chutneys",
    items: [
      { id: "sorakaya", name: "Sorakaya", category: "chutneys", isVeg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center", description: "Bottle gourd chutney with coconut and green chilies", basePrice: 15 },
      { id: "dondakaya", name: "Dondakaya", category: "chutneys", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Ivy gourd chutney with tamarind and spices", basePrice: 15 },
      { id: "tomato", name: "Tomato", category: "chutneys", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Tangy tomato chutney with onions and garlic", basePrice: 12 },
      { id: "dosakaya", name: "Dosakaya", category: "chutneys", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Yellow cucumber chutney with coconut and curry leaves", basePrice: 15 },
      { id: "gongura", name: "Gongura", category: "chutneys", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Tangy sorrel leaves chutney with spices", basePrice: 18 },
      { id: "cabbage", name: "Cabbage", category: "chutneys", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Fresh cabbage chutney with green chilies and coconut", basePrice: 12 },
      { id: "dosa-avakaya", name: "Dosa Avakaya", category: "chutneys", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Spicy mango pickle chutney for dosas", basePrice: 20 },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    items: [
      { id: "pulka", name: "Pulka", category: "breads", isVeg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&crop=center", description: "Soft whole wheat flatbread cooked on tawa", basePrice: 8 },
      { id: "rumali", name: "Rumali", category: "breads", isVeg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&crop=center", description: "Thin handkerchief-like bread, soft and delicate", basePrice: 10 },
      { id: "poori", name: "Poori", category: "breads", isVeg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&crop=center", description: "Deep-fried puffed bread, golden and crispy", basePrice: 12 },
      { id: "tandoori", name: "Tandoori", category: "breads", isVeg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&crop=center", description: "Tandoor-baked bread with a smoky flavor", basePrice: 15 },
      { id: "naans", name: "Naan's", category: "breads", isVeg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&crop=center", description: "Leavened flatbread baked in tandoor oven", basePrice: 18 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { id: "gulab-jamun", name: "Gulab Jamun", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Soft milk dumplings soaked in rose-flavored sugar syrup", basePrice: 20 },
      { id: "double-ka-metha", name: "Double Ka Metha", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Hyderabadi bread pudding with milk, nuts, and saffron", basePrice: 25 },
      { id: "kaala-jamun", name: "Kaala Jamun", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Dark, rich jamuns with a hint of cardamom and rose", basePrice: 22 },
      { id: "gajar-ka-halwa", name: "Gajar Ka Halwa", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Traditional carrot halwa with milk, ghee, and nuts", basePrice: 30 },
      { id: "kadhuka-kheer", name: "Kadhuka Kheer", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Creamy rice pudding with cardamom and dry fruits", basePrice: 25 },
      { id: "kurbani-ka-meetha", name: "Kurbani Ka Meetha", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Apricot dessert with milk, cream, and aromatic spices", basePrice: 28 },
      { id: "kasmiri-rabadi", name: "Kasmiri Rabadi", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Rich milk pudding with saffron and dry fruits", basePrice: 35 },
      { id: "moongdal-halwa", name: "Moongdal Halwa", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Lentil-based halwa with ghee, sugar, and nuts", basePrice: 32 },
      { id: "fruit-custard", name: "Fruit Custard", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Creamy custard with fresh seasonal fruits", basePrice: 25 },
      { id: "pineapple-kesar", name: "Pine Apple Kesar", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Pineapple dessert with saffron and cream", basePrice: 30 },
      { id: "triple-pudding", name: "Triple Pudding", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Three-layered pudding with chocolate, vanilla, and strawberry", basePrice: 35 },
    ],
  },
  {
    id: "live-counters",
    title: "Live Counters",
    items: [
      { id: "fruit-chat", name: "Fruit Chat", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center", description: "Fresh seasonal fruits with tangy chaat masala", basePrice: 25 },
      { id: "paani-puri", name: "Paani Puri", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop&crop=center", description: "Crispy puris filled with spiced water and chutneys", basePrice: 20 },
      { id: "chat-counter", name: "Chat Counter", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop&crop=center", description: "Live counter with various chaat items and chutneys", basePrice: 30 },
      { id: "dosa-idly", name: "Dosa & Idly", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&crop=center", description: "Fresh dosas and idlis made to order with sambar", basePrice: 35 },
      { id: "jilebi", name: "Jilebi", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Crispy spiral sweets soaked in sugar syrup", basePrice: 15 },
      { id: "bobatlu", name: "Bobatlu", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Sweet stuffed flatbread with jaggery and lentils", basePrice: 18 },
      { id: "gooli-soda", name: "Gooli Soda", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center", description: "Refreshing soda with fruit flavors and ice", basePrice: 12 },
      { id: "chocolate-fountain", name: "Chocolate Fountain", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Flowing chocolate fountain with fruits and marshmallows", basePrice: 50 },
      { id: "popcorn", name: "Popcorn", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center", description: "Freshly popped corn with butter and seasonings", basePrice: 10 },
      { id: "ice-cream", name: "Ice Cream", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center", description: "Various flavors of premium ice cream", basePrice: 25 },
      { id: "pizza-burger", name: "Pizza & Burger", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center", description: "Fresh pizza slices and veggie burgers made to order", basePrice: 40 },
      { id: "noodles-pasta", name: "Noodles & Pasta", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center", description: "Stir-fried noodles and pasta with vegetables", basePrice: 35 },
      { id: "paan", name: "Paan", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center", description: "Traditional betel leaf with sweet and savory fillings", basePrice: 8 },
      { id: "irani-chai", name: "Irani Chai", category: "live-counters", isVeg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center", description: "Traditional Iranian-style tea with milk and spices", basePrice: 15 },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { id: "mirchi-bajji", name: "Mirchi Bajji", category: "extras", isVeg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center", description: "Spicy green chilies coated in gram flour and deep-fried", basePrice: 20 },
      { id: "masala-wada", name: "Masala Wada", category: "extras", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Spiced lentil fritters with onions and curry leaves", basePrice: 18 },
      { id: "ariti-bajji", name: "Ariti Bajji", category: "extras", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Raw mango fritters with tangy spices", basePrice: 22 },
      { id: "dahi-wada", name: "Dahi Wada", category: "extras", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Lentil dumplings in spiced yogurt with chutneys", basePrice: 25 },
      { id: "chilli-garey", name: "Chilli Garey", category: "extras", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Crispy chili fritters with gram flour coating", basePrice: 20 },
      { id: "bellam-borey", name: "Bellam Borey", category: "extras", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Sweet jaggery-filled fritters, crispy outside", basePrice: 15 },
      { id: "bobatllu", name: "Bobatllu", category: "extras", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Sweet stuffed flatbread with jaggery and coconut", basePrice: 18 },
      { id: "tamalapaku-bajji", name: "Tamalapaku Bajji", category: "extras", isVeg: true, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center", description: "Crispy curry leaf fritters with gram flour", basePrice: 16 },
    ],
  },
];

export const packages: Package[] = [
  {
    id: "veg-party",
    name: "VEG-PARTY MENU",
    description: "Complete party menu with starters, main course, and desserts",
    basePrice: 450, // Base price per person
    comboDiscount: 20, // 20% discount for combo pricing
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
    basePrice: 380, // Base price per person
    comboDiscount: 15, // 15% discount for combo pricing
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

// Pricing utility functions
export const calculatePricing = (selectedItems: string[], headCount: number, menuItems: MenuItem[]) => {
  const selectedMenuItems = menuItems.filter(item => selectedItems.includes(item.id));
  const subtotal = selectedMenuItems.reduce((sum, item) => sum + item.basePrice, 0) * Math.max(0, headCount);
  
  // Discount tiers
  let discountPercentage = 0;
  if (headCount >= 200) {
    discountPercentage = 15; // 15% discount for 200+ guests
  } else if (headCount >= 100) {
    discountPercentage = 10; // 10% discount for 100+ guests
  } else if (headCount >= 50) {
    discountPercentage = 5; // 5% discount for 50+ guests
  } else if (headCount >= 25) {
    discountPercentage = 2; // 2% discount for 25+ guests
  }
  
  const discountAmount = (subtotal * discountPercentage) / 100;
  const total = subtotal - discountAmount;
  
  return {
    subtotal,
    discountPercentage,
    discountAmount,
    total,
    perPersonCost: selectedMenuItems.reduce((sum, item) => sum + item.basePrice, 0)
  };
};

// Get all menu items for pricing calculations
export const getAllMenuItems = (): MenuItem[] => {
  return menuCategories.flatMap(category => category.items);
};

// Calculate package pricing with combo discounts
export const calculatePackagePricing = (packageId: string, headCount: number) => {
  const selectedPackage = packages.find(pkg => pkg.id === packageId);
  if (!selectedPackage) {
    return null;
  }

  const baseSubtotal = selectedPackage.basePrice * Math.max(0, headCount);
  
  // Apply combo discount
  const comboDiscountAmount = (baseSubtotal * selectedPackage.comboDiscount) / 100;
  const comboTotal = baseSubtotal - comboDiscountAmount;
  
  // Additional volume discounts for larger groups
  let volumeDiscountPercentage = 0;
  if (headCount >= 200) {
    volumeDiscountPercentage = 10; // Additional 10% for 200+ guests
  } else if (headCount >= 100) {
    volumeDiscountPercentage = 5; // Additional 5% for 100+ guests
  } else if (headCount >= 50) {
    volumeDiscountPercentage = 2; // Additional 2% for 50+ guests
  }
  
  const volumeDiscountAmount = (comboTotal * volumeDiscountPercentage) / 100;
  const finalTotal = comboTotal - volumeDiscountAmount;
  
  return {
    packageName: selectedPackage.name,
    basePrice: selectedPackage.basePrice,
    subtotal: baseSubtotal,
    comboDiscount: selectedPackage.comboDiscount,
    comboDiscountAmount,
    comboTotal,
    volumeDiscountPercentage,
    volumeDiscountAmount,
    total: finalTotal,
    perPersonCost: finalTotal / Math.max(1, headCount),
    totalSavings: comboDiscountAmount + volumeDiscountAmount
  };
};
