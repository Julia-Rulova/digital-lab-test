import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import SearchInput from '../SearchInput/SearchInput';

function App() {
  const [cards, setCards] = useState([]);
  const [sortedCards, setSortedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    axios.get('https://cloud.codesupply.co/endpoint/react/data.json')
      .then((res) => {
        setCards(res.data);
        setSortedCards(res.data);
      })
      .catch((err) => {
        console.log('Ошибка:', err)
      })
  }, [])

  function handleCardClick(card) {
    setSelectedCard(card);
    setPopupOpen(true);

    document.body.style.overflow = 'hidden';
  }

  function handleClosePopup() {
    setPopupOpen(false);

    document.body.style.overflow = 'unset';
  }

  function handleSearch() {
    setSearch(!search);
  }

  function handleSortCards(value) {
    let sortCards = cards.filter(c =>
      c.title.toLowerCase().includes(value.toLowerCase()) ||
      c.text.toLowerCase().includes(value.toLowerCase())
    );

    setSortedCards(sortCards);
  }

  function handleOpenMenu() {
    setOpenMenu(true);

    document.body.style.overflow = 'hidden';
  }

  function handleCloseMenu() {
    setOpenMenu(false);

    document.body.style.overflow = 'unset';
  }

  return (
    <div className='app'>
      <Header
        onSearch={handleSearch}
        openMenu={handleOpenMenu}
      ></Header>

      <Menu
        menuOpen={openMenu}
        onClose={handleCloseMenu}
      ></Menu>

      {search &&
        <SearchInput
          sortCards={handleSortCards}
        ></SearchInput>
      }

      <Cards
        cards={sortedCards}
        cardClick={handleCardClick}
      ></Cards>

      {selectedCard &&
        <CardPopup
          card={selectedCard}
          popupOpen={popupOpen}
          onClose={handleClosePopup}
        ></CardPopup>
      }

    </div>
  );
}

export default App;
