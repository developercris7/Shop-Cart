import { useState } from 'react';
import './App.css'
import Header from './Header';
import Options from './Options';
import Slider from './Slider';
import Filters from './Filters';
import Products from './Produts';
import Carousal from './Carousal';



function App() {

  const [activeTab, setActiveTab] = useState("Electronics")
  const [cart, setCart] = useState(false)
   const [notification,setNotification]= useState(false)
  const [activeFilter,setActiveFilter] = useState("All")

const [products , setProducts] = useState([
  
  {
      id:1,
      cover:"https://rukminim2.flixcart.com/image/612/612/krf91u80/computer/z/0/m/ideapad-slim-laptop-lenovo-original-imag57x3p7bw8y8b.jpeg?q=70",
      name:"Lenovo IdeaPad",
      price:"₹38,990",
      addCart:false,
      type:"Electronics",
      categories:"Laptop"
  },
  {
    id:2,
    cover:"https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
    name:"Macbook Air M1",
    price:"₹81,990",
    addCart:false,
      type:"Electronics",
      categories:"Laptop"
    
  },
  {
     id:3,
    cover:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/n/9/-original-imagp8xzevzkrnhq.jpeg?q=70",
    name:"HP 15s",
    price:"₹31,999",
    addCart:false,
      type:"Electronics",
      categories:"Laptop"
    
  },
  
   {
     id:4,
    cover:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/h/v/-original-imagq9hcmgg3etg8.jpeg?q=70",
    name:"ASUS 15",
    price:"₹42,990",
      addCart:false,
      type:"Electronics",
      categories:"Laptop"
    
  },
  
   {
     id:5,
    cover:"https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
    name:"APPLE iPhone 13",
    price:"₹58,499",
      addCart:false,
      type:"Electronics",
      categories:"Mobile"
    
  },
   {
     id:6,
    cover:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
    name:"iPhone 14 Plus",
    price:"₹73,990",
      addCart:false,
      type:"Electronics",
      categories:"Mobile"
    
  },
   {
     id:7,
    cover:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70",
    name:"Vivo T2x 5G",
    price:"₹12,990",
      addCart:false,
      type:"Electronics",
      categories:"Mobile"
    
  },
    {
     id:8,
    cover:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/u/s/-original-imagkp8yreabrzh2.jpeg?q=70",
    name:"realme 10 Pro 5G",
    price:"₹19,990",
      addCart:false,
      type:"Electronics",
      categories:"Mobile"
    
  },
    {
     id:9,
    cover:	"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/c/u/-original-imagnanh2yvpc4zx.jpeg?q=70",
    name:"Infinix SMART 7",
    price:"₹7,299",
      addCart:false,
      type:"Electronics",
      categories:"Mobile"
    
  },
  
    {
     id:10,
    cover:"https://rukminim2.flixcart.com/image/312/312/l0fm07k0/television/7/x/9/-original-imagc8fnpx39evgc.jpeg?q=70",
    name:"LG TV",
    price:"₹13,990",
      addCart:false,
      type:"Electronics",
      categories:"TV"
    
  },
  
   {
   id:11,
   cover:"https://rukminim2.flixcart.com/image/312/312/l572ufk0/television/e/f/g/32y1-32y1-infinix-original-imagfxczrxjjwxvf.jpeg?q=70",
   name:"Infinix Y1",
   price:"₹7,990",
   addCart:false,
      type:"Electronics",
      categories:"TV"
   
   },
   {
   id:12,
   cover:"https://rukminim2.flixcart.com/image/312/312/ku2zjww0/television/w/c/z/43path4545bl-43path4545bl-thomson-original-imag7a88xjj5y2dv.jpeg?q=70",
   name:"Thomson 9R PRO",
   price:"₹21,990",
   addCart:false,
      type:"Electronics",
      categories:"TV"
   
   },
   {
   id:13,
   cover:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/7/6/7/-original-imagqre9nqh9ug4d.jpeg?q=70",
   name:"boAt Airdopes",
     price:"₹990",
     addCart:false,
      type:"Electronics",
      categories:"Airpods"
     
   },
   {
   id:14,
   cover:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/t/f/m/airdopes-138-boat-original-imagn44qyzenzggc.jpeg?q=70",
   name:"boAT Airdopes 138",
    price:"₹999",
    addCart:false,
      type:"Electronics",
      categories:"Airpods"
   },
   {
   id:15,
   cover:"https://rukminim2.flixcart.com/image/300/300/xif0q/headphone/s/t/m/-original-imaghxgnjdgyghfw.jpeg?q=90",
   name:"APPLE AirPods pro",
   price:"₹18,999",
   addCart:false,
      type:"Electronics",
      categories:"Airpods"
   
   },
   {
      id:16,
      cover:"https://rukminim2.flixcart.com/image/300/300/xif0q/tablet/e/8/x/t21-ta-1487-nokia-original-imagm7ffgkdbqxcw.jpeg?q=70",
      name:"Nokia Tablets",
      price:"₹18,999",
      addCart:false,
      type:"Electronics",
      categories:"Mobile"
      },
       {
    id:17,
    cover:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/7/a/7/-original-imagr6pphhgpzksd.jpeg?q=70",
    name:"WOODLAND",
    price:"₹1,299",
addCart:false,
      type:"Foot Wear",
      categories:"Formals"
    },
    {
    id:18,
    cover:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/t/f/-original-imagg5r3qwkh2k4d.jpeg?q=70",
    name:"Zixer",
    price:"₹599",
    addCart:false,
      type:"Foot Wear",
      categories:"Formals"

    },
    {
    id:19,
    cover:"https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
    name:"Aadi",
    price:"₹399",
    addCart:false,
      type:"Foot Wear",
      categories:"Sneakers"

    },
    {
    id:20,
    cover:"https://rukminim2.flixcart.com/image/612/612/kph8h3k0/shoe/k/b/i/10-757-bxxy-black-original-imag3pdzmdxu3uzz.jpeg?q=70",
    name:"BXXY",
    price:"₹1,279",
  addCart:false,
      type:"Foot Wear",
      categories:"Formals"
    },
    {
    id:21,
    cover:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/b/t/-original-imagg7szbhgzmtjx.jpeg?q=70",
    name:"Aadi",
    price:"₹2,299",
addCart:false,
      type:"Foot Wear",
      categories:"Boots"
    },
    {
    id:22,
    cover:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/x/8/v/8-mrj2111-8-aadi-white-sky-blue-original-imagngphpqggd2dn.jpeg?q=70",
    name:"WOODLAND",
    price:"₹799",
     addCart:false,
      type:"Foot Wear",
      categories:"Sneakers"
  
    },
    {
    id:23,
    cover:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/4/8/1/8-k2-tan-rzisbo-tan-original-imagpycqzbjad6gy.jpeg?q=70",
    name:"Zixer",
    price:"₹799",
     addCart:false,
      type:"Foot Wear",
      categories:"Casuals"
    },
    {
      id:24,
      cover:"https://rukminim2.flixcart.com/image/612/612/k3lwuq80/shoe/z/v/h/mrj1324-10-aadi-black-original-imafmzfctw5gfxhu.jpeg?q=70",
      name:"Aadi",
      price:"₹1299",
       addCart:false,
      type:"Foot Wear",
      categories:"Casuals"
      },
          {
    id:25,
    cover:"https://rukminim2.flixcart.com/image/416/416/xif0q/dining-set/v/n/m/114-3-white-0-114-3-rosewood-sheesham-0-44-45-rectangle-86-36-0-original-imagz7acyvjffgkj.jpeg?q=70",
    name:"Dining set",
     price:"₹42,660",
    addCart:false,
      type:"Furniture",
      categories:"Table"
  
    },
    {
    id:26,
    cover:"https://rukminim2.flixcart.com/image/416/416/xif0q/cupboard-almirah/j/e/q/-original-imagqd2zj6wcyfcc.jpeg?q=70",
    name:"Metal almirah",
    price:"₹47,660",
    addCart:false,
      type:"Furniture",
      categories:"Wardrobe"
  
    },
    {
    id:27,
    cover:"https://rukminim2.flixcart.com/image/416/416/kg2l47k0/office-study-table/x/y/t/rosewood-sheesham-sheesham-wood-writing-desk-with-multi-storage-original-imafwefdgdugeh5q.jpeg?q=70",
    name:"Office table",
    price:"₹19,497",
   addCart:false,
      type:"Furniture",
      categories:"Table"
    },
    {
    id:28, 
     cover: "https://rukminim2.flixcart.com/image/416/416/kklhbbk0/office-study-chair/j/u/e/1-iron-chair-boom-all-black-nylone-base-suprema-original-imafzwthyfwnadb4.jpeg?q=70",
name: "Office chair",
    price:"₹14,832",
  addCart:false,
      type:"Furniture",
      categories:"Chair"
    },
    {
    id:29,
    cover:"https://rukminim2.flixcart.com/image/416/416/xif0q/cabinet-drawer/n/l/r/44-45-particle-board-120-65-70-ndfkcabltwhdcdy-neudot-9-119-38-original-imagzz4nfynxknbc.jpeg?q=70",
    name:"Cabinet drawer",
    price:"₹14,099",
       addCart:false,
      type:"Furniture",
      categories:"Table"
  
    },
    {
    id:30,
    cover:"https://rukminim2.flixcart.com/image/416/416/xif0q/sofa-sectional/1/q/z/-original-imagrgu2jgr4z7hg.jpeg?q=70",
    name:"sofa set",
    price:"₹17,999",
       addCart:false,
      type:"Furniture",
      categories:"Sofa"
  
    },
    {
    id:31,
    cover:"https://rukminim2.flixcart.com/image/416/416/xif0q/living-room-chair/t/s/3/71-12-white-matty-plywood-71-12-25-living-room-chair-lkbs-art-original-imaghk7ztxkesmgx.jpeg?q=70",
    name:"Room chair",
    price:"₹11,304",
  addCart:false,
      type:"Furniture",
      categories:"Chair"
    },
    {
    id:32,
     cover: "https://rukminim2.flixcart.com/image/416/416/ko0d6kw0/sofa-set/k/i/7/grey-velvet-euro-grey-3-2-3-2-mobilia-craft-grey-original-imag2k2ggwpj35gh.jpeg?q=70",
name: "Sofa set",
    price:"₹7,090",
   addCart:false,
      type:"Furniture",
      categories:"Sofa"
    },
    {
    id:33,
    cover: "https://rukminim2.flixcart.com/image/416/416/xif0q/wardrobe-closet/f/2/v/-original-imaggr65txn9rtyn.jpeg?q=70",
name: "Wardrobe",
    price:"₹23,499",
   addCart:false,
      type:"Furniture",
      categories:"Wardrobe"
  
    },
    {
    id:34,
    cover:"https://rukminim2.flixcart.com/image/416/416/xif0q/bed/h/m/k/king-203-na-no-190-particle-board-no-83-ndfkbdkwenbegan-neudot-original-imaghv62edhawzgv.jpeg?q=70",
    name:"Bed",
    price:"₹9,999",
  addCart:false,
      type:"Furniture",
      categories:"Bed"
  
    },
    {
    id:35,
    cover:"https://rukminim2.flixcart.com/image/416/416/xif0q/wardrobe-closet/a/i/n/no-82-crca-steel-49-55-cb-75ckd-origine-brgn-brown-eros-182-original-imagr98nn5xzpemh.jpeg?q=70",
    name:"Steel wardrobe",
    price:"₹22,000",
    addCart:false,
      type:"Furniture",
      categories:"Wardrobe"

    },
    {
    id:36,
    cover: "https://rukminim2.flixcart.com/image/416/416/xif0q/bed/8/f/a/queen-204-1-na-no-158-4-carbon-steel-yes-37-600002020301-tussk-r-original-imagrmfschkwghzb.jpeg?q=70",
name: "Steel bed",
    price:"₹29,999",
    addCart:false,
      type:"Furniture",
      categories:"Bed"
  

    }
  ])
 
  const slides = [
    {
      id: 1,
      cover: "https://rukminim2.flixcart.com/image/300/300/xif0q/computer/t/z/o/xl30-thin-and-light-laptop-infinix-original-imagzmncf5snymhu.jpeg?q=70",
      name: "Lenovo",
      type: "Electronics"
    },
    {
      id: 2,
      cover: "https://rukminim2.flixcart.com/image/300/300/xif0q/tablet/e/8/x/t21-ta-1487-nokia-original-imagm7ffgkdbqxcw.jpeg?q=70",
      name: "Tablets",
      type: "Electronics"
    },
    {
      id: 3,
      cover: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/2/-original-imagmkjfjwtzhaag.jpeg?q=70",
      name: "Poco X5",
      type: "Electronics"
    },
    {
      id: 4,
      cover: "https://rukminim2.flixcart.com/image/612/612/kt4ozgw0/mouse/a/d/l/toad-13-portronics-original-imag6jqawv8zhpum.jpeg?q=70",
      name: "HP Mouse",
      type: "Electronics"
    },
    {
      id: 5,
      cover: "https://rukminim2.flixcart.com/image/612/612/ksw4ccw0/watch/6/b/c/38024pp25-fastrack-men-original-imag6cu9xkhbgz4y.jpeg?q=70",
      name: "Fastrack",
      type: "Electronics"
    },
    {
      id: 6,
      cover: "https://rukminim2.flixcart.com/image/612/612/kpinwy80/headphone/r/1/q/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg?q=70",
      name: "APPLE PRO",
      type: "Electronics"
    },
    {
      id: 7,
      cover: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/y/l/e/-original-imaghxgrynxjvhkg.jpeg?q=70",
      name: "Apple Watch",
      type: "Electronics"
    },
    {
      id: 8,
      cover: "https://rukminim2.flixcart.com/image/612/612/k3lwuq80/shoe/z/v/h/mrj1324-10-aadi-black-original-imafmzfctw5gfxhu.jpeg?q=70",
      name: "aadi",
      type: "Foot Wear"
    },
    {
      id: 9,
      cover: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/k/v/5-attack-5-ase-blue-original-imagr7zcf7y5exev.jpeg?q=70",
      name: "ASE",
      type: "Foot Wear"
    },
    {
      id: 10,
      cover: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/b/m/6-mrj1241-aadi-black-original-imag7egwjqgvrhd8-bb.jpeg?q=70",
      name: "aadi",
      type: "Foot Wear"
    },
    {
      id: 11,
      cover: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/k/h/-original-imaggdy8vpknnsjg.jpeg?q=70",
      name: "Bata",
      type: "Foot Wear"
    },
    {
      id: 12,
      cover: "https://rukminim2.flixcart.com/image/612/612/kzhbfrk0/shoe/w/k/8/8-mrj1808-8-aadi-red-black-original-imagbgnfkhvhn9pr.jpeg?q=70",
      name: "aadi",
      type: "Foot Wear"
    },
    {
      id: 13,
      cover: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/y/a/g/8-1101366170-ruosh-tan-light-brown-original-imagzyxyt4fs7djw.jpeg?q=70",
      name: "Zixer",
      type: "Foot Wear"
    },
    {
      id: 14,
      cover: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/d/9/h/8-wt-530-wugatti-olive-original-imagmpm8gzsbfd7u.jpeg?q=70",
      name: "WUGATTI",
      type: "Foot Wear"
    },
    {
      id: 15,
      cover: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer-table/c/5/h/-original-imagqd2p6eaxkhhk.jpeg?q=70",
      name: "Office table",
      type: "Furniture"
    },
    {
      id: 16,
      cover: "https://rukminim2.flixcart.com/image/416/416/xif0q/tv-entertainment-unit/s/o/t/-original-imag9r2y3n6jzfrz.jpeg?q=70",
      name: "TV unit",
      type: "Furniture"
    },
    {
      id: 17,
      cover: "https://rukminim2.flixcart.com/image/416/416/k3khevk0/kitchen-cabinet/7/c/6/rosewood-sheesham-kl-1733-the-attic-honey-original-imafmz35fmycjgvu.jpeg?q=70",
      name: "Kitchen",
      type: "Furniture"
    },
    {
      id: 18,
      cover: "https://rukminim2.flixcart.com/image/416/416/kl421e80/bed-mattress/m/d/g/king-10-luxury-hotel-comfort-pocket-spring-with-extra-comfort-original-imagyaudvzftjcg7.jpeg?q=70",
      name: "Bed",
      type: "Furniture"
    },
    {
      id: 19,
      cover: "https://rukminim2.flixcart.com/image/416/416/xif0q/outdoor-table/k/n/f/650-4-seater-round-pp-950-4-magna-brown-arlavya-700-dark-brown-original-imagrhvynrqhr6af.jpeg?q=70",
      name: "Round table",
      type: "Furniture"
    },
    {
      id: 20,
      cover: "https://rukminim2.flixcart.com/image/416/416/xif0q/bed/c/g/s/-original-imagqctbsnhchzfe.jpeg?q=70",
      name: "Wood  bed",
      type: "Furniture"
    },
    {
      id: 21,
      cover: "https://rukminim2.flixcart.com/image/416/416/xif0q/coffee-table/i/5/i/-original-imaggfwk2uygzaky.jpeg?q=70",
      name: "Coffee table",
      type: "Furniture"
    }
  ]

  const filters = [
    {
      id: 1,
      title: "All",
      type: activeTab
    },
    {
      id: 2,
      title: "Laptop",
      type: "Electronics"
    },
    {
      id: 3,
      title: "Mobile",
      type: "Electronics"
    },
    {
      id: 4,
      title: "Airpods",
      type: "Electronics"
    },
    {
      id: 5,
      title: "TV",
      type: "Electronics"
    },
    {
      id: 6,
      title: "Sneakers",
      type: "Foot Wear"
    },
    {
      id: 7,
      title: "Formals",
      type: "Foot Wear"
    },
    {
      id: 8,
      title: "Casuals",
      type: "Foot Wear"
    },
    {
      id: 9,
      title: "Boots",
      type: "Foot Wear"
    },
    {
      id: 10,
      title: "Sofa",
      type: "Furniture"
    },
    {
      id: 11,
      title: "Bed",
      type: "Furniture"
    },

    {
      id: 12,
      title: "Wardrobe",
      type: "Furniture"
    },
    {
      id: 13,
      title: "Table",
      type: "Furniture"
    },
    {
      id: 14,
      title: "Chair",
      type: "Furniture"
    }
  ]
 
  const handleAddToCart = (id) => {
     const updatedProducts = products.map((product)=> (product.id === id) ? {id,cover:product.cover,
      name:product.name,
      price:product.price,
      addCart:!product.addCart,type:product.type,categories:product.categories } : (product))
      setProducts(updatedProducts)
      setNotification(true)
  }

  const handleDeleteCart = (id) => {
    const updatedProducts = products.map((product)=> (product.id === id) ? {id,cover:product.cover,
      name:product.name,
      price:product.price,
      addCart:!product.addCart,type:product.type,categories:product.categories } : (product))
      setProducts(updatedProducts)
  }
 
  return (
    <div className="App">
      <Header cart={cart} setCart={setCart} 
      cartProducts = {products.filter((product)=> product.addCart === true)}
      handleDeleteCart={handleDeleteCart}
      notification ={notification}
      setNotification ={setNotification}
      />
      <Carousal  />
      <Options
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setActiveFilter={setActiveFilter}
      />
      <Slider slides={slides.filter((slide) => slide.type === activeTab)} 
     />
      <Filters filters={filters.filter((filter) => filter.type === activeTab)} 
      activeFilter = {activeFilter}
      setActiveFilter = {setActiveFilter} />
     

<Products products = { products.filter((product) =>  (activeFilter === "All") ? (product.type === activeTab) : (product.categories === activeFilter))}
      handleAddToCart = {handleAddToCart} />
    </div>
  );
}

export default App;
