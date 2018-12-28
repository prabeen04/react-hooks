import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring/hooks';
const cards = [
    {
      title: 'Build faster',
      description:
        'Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.',
      image: 'https://divjoy.com/static/images/undraw_collection.svg',
      imageRatio: 784 / 1016
    },
    {
      title: 'Tweak anything',
      description:
        'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
      image: 'https://divjoy.com/static/images/undraw_upload.svg',
      imageRatio: 839 / 1133
    },
    {
      title: 'Export your code',
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
        {Array.from(cards).map((card, i) => (
          <div className="column">
            <Card>
              <div className="card-title">{card.title}</div>
              <div className="card-body">{card.description}</div>
              <img className="card-image" src={card.image} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Spring
function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();
  
  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);
  
  // The useSpring hook
  const [animatedProps, setAnimatedProps] = useSpring({
    // Array containing [rotateX, rotateY, and scale] values.
    // We store under a single key (xys) instead of separate keys ...
    // ... so that we can use animatedProps.xys.interpolate() to ...
    // ... easily generate the css transform value below.
    xys: [0, 0, 1],
    // Setup physics
    config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];
        
        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}