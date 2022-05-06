import React, {useState, useEffect} from 'react';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import BookList from './components/BookList/BookList';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import AdsSlider from './components/AdsSlider/AdsSlider';
import Banner from './components/Banner/Banner';
import MainFooter from './components/MainFooter/MainFooter';
import TrendingList from './components/Trending/TrendingList';
import axios from 'axios';

const BestSell = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'THE PHENOMENAL INTERNATIONAL BESTSELLER - 1 MILLION COPIES SOLDTransform your life with tiny changes in behaviour - starting now. People think that when you want to change your life, you need to think big.',
    price: 551,
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/831/9781847941831.jpg'
  },
  {
    id: 2,
    title: 'Jujutsu Kaisen, Vol. 9, 9',
    author: 'Gege Akutami',
    description: `Yuji Itadori is resolved to save the world from cursed spirits, but he soon learns that the best way to do it is to slowly lose his humanity and become one himself!`,
    price: 616,
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/726/9781974718726.jpg'
  },
  {
    id: 3,
    title: 'Spy X Family, Vol. 6, 6',
    author: 'Tatsuya Endo',
    description: `An action-packed comedy about a fake family that includes a spy, an assassin and a telepath! Master spy Twilight is unparalleled when it comes to going undercover on dangerous missions for the betterment of the world. But when he receives the ultimate assignment--to get married and have a kid--he may finally be in over his head!

    Twilight and Nightfall enter an underground tennis tournament, hoping for an opportunity to gain a secret intelligence document that could very well bring the wo...`,
    price: 531,
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/137/9781974725137.jpg'
  },
  {
    id: 4,
    title: 'Chainsaw Man, Vol. 4, 4',
    author: 'Tatsuki Fujimoto',
    description: `Broke young man + chainsaw dog demon = Chainsaw Man!`,
    price: 482,
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/279/9781974717279.jpg'
  },
  {
    id: 5,
    title: 'Attack on Titan 34',
    author: 'Hajime Isayama',
    description: 'The blockbuster action manga that inspired the epic anime stampedes towards its thrilling conclusion! FREEDOM...',
    price: 652,
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/362/9781646512362.jpg'
  },
  {
    id: 6,
    title: 'Kaiju No. 8, Vol. 1, 1',
    author: 'Naoya Matsumoto',
    description: 'Kafka wants to clean up kaiju, but not literally! Will a sudden metamorphosis stand in the way of his dream?',
    price: 531,
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/984/9781974725984.jpg'
  },
  {
    id: 7,
    title: 'Grandmaster of Demonic Cultivation: Mo DAO Zu Shi (Novel) Vol. 1',
    author: 'Mo Xiang Tong Xiu',
    description: "Also known as MDZS, the blockbuster danmei/Boys' Love novels from China that inspired comics, animation, and the live-action series The Untamed--which amassed billions of views, including on Netflix!",
    price: 1093,
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/195/9781648279195.jpg'
  },
  {
    id: 8,
    title: 'Ikigai',
    author: 'Francesc Miralles',
    description: "Even if we don't know it yet.Ikigai translates as `a reason to live' or `a reason to jump out of bed in the morning'. There, finding your ikigai is considered the key to longevity - and to happiness.",
    price: 391,
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/895/9781786330895.jpg'
  },
  {
    id: 9,
    title: 'Chainsaw Man, Vol. 1, 1',
    author: 'Tatsuki Fujimoto',
    description: "Broke young man + chainsaw dog demon = Chainsaw Man! Denji was a small-time devil hunter just trying to survive in a harsh world. After being killed on a job, he is revived by his pet devil-dog Pochita and becomes something new and dangerous--Chainsaw Man!",
    price: 482,
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/939/9781974709939.jpg'
  },
]


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [graphicNovels, setGraphicNovels] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    axios.get(`https://reactjs-683b3-default-rtdb.firebaseio.com/graphicnovel.json`)
    .then(res => {
      const loadedBooks = [];
      const responseData = res.data;
      for (const key in responseData) {
        loadedBooks.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
          author: responseData[key].author,
        });
      }
      setGraphicNovels(loadedBooks);
    })
    .catch(error => console.log(error))

    axios.get(`https://reactjs-683b3-default-rtdb.firebaseio.com/nowtrending.json`)
    .then(res => {
      const loadedBooks = [];
      const responseData = res.data;
      for (const key in responseData) {
        loadedBooks.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
          author: responseData[key].author,
        });
      }
      setTrendingBooks(loadedBooks);
    })
    .catch(error => console.log(error))
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <MainHeader onShowCart={showCartHandler}/>
      <div style = {{marginTop: '100px'}}>
        <Banner/>
      </div>
      <AdsSlider/>
      <TrendingList items={trendingBooks} />
      <BookList items={BestSell} text="Best Seller" />
      <BookList items={graphicNovels} text="Graphic Novels" />

      <MainFooter/>
    </CartProvider>

  );
}

export default App;
