import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring/hooks';

const cards = [
    {
      title: 'Build faster ⚡️',
      description:
        'Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.',
      image: 'https://divjoy.com/static/images/undraw_collection.svg',
      imageRatio: 784 / 1016
    },
    {
      title: 'Tweak anything 👩‍🎨',
      description:
        'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
      image: 'https://divjoy.com/static/images/undraw_upload.svg',
      imageRatio: 839 / 1133
    },
    {
      title: 'Export your code 🚀',
      description:
        "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
      image: 'https://divjoy.com/static/images/undraw_static_assets.svg',
      imageRatio: 730 / 1030
    }
  ];
// Displays a row of cards
// Usage of hook is within <Card> component below
function Spring() {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, i) => (
          <div className="column">
            <div>
              <div className="card-title">{card.title}</div>
              <div className="card-body">{card.description}</div>
              <img className="card-image" src={card.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Spring
