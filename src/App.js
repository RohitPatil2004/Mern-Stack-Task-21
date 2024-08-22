import React from 'react';
import Card from './Card';
import './App.css';

const App = () => {
  const cards = [
    {
      image: 'https://th.bing.com/th/id/OIP.zVAIJfUINIe8jGIY-mpYEQHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7',
      name: 'Card 1',
      description: 'This is card 1 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.WX80QNXwjePncNHScRsxgAHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7',
      name: 'Card 2',
      description: 'This is card 2 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.yhRk5kt35-d8bEslUEsBIgHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7',
      name: 'Card 3',
      description: 'This is card 3 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.NYP7kqlvXE8SENML4u1qyQHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7',
      name: 'Card 4',
      description: 'This is card 4 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.BKoG1uJ11LVf3KFVKU3gnQHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7',
      name: 'Card 5',
      description: 'This is card 5 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.sqpEF__iYA3uzwy2bU363wHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7',
      name: 'Card 6',
      description: 'This is card 6 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.zVAIJfUINIe8jGIY-mpYEQHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7',
      name: 'Card 7',
      description: 'This is card 7 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.WX80QNXwjePncNHScRsxgAHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7',
      name: 'Card 8',
      description: 'This is card 8 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.yhRk5kt35-d8bEslUEsBIgHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7',
      name: 'Card 9',
      description: 'This is card 9 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.NYP7kqlvXE8SENML4u1qyQHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7',
      name: 'Card 10',
      description: 'This is card 10 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.BKoG1uJ11LVf3KFVKU3gnQHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7',
      name: 'Card 11',
      description: 'This is card 11 description'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.sqpEF__iYA3uzwy2bU363wHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7',
      name: 'Card 12',
      description: 'This is card 12 description'
    }
  ];

  return (
    <div className="app">
      <h1 style={{ color: 'white' }}>All the cards are here.</h1>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
