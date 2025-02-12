import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('about');
  const [transitionClass, setTransitionClass] = useState('');

  const handleSlide = (target, direction) => {
    // direction: 'slide-left', 'slide-right', 'slide-up', 'slide-down',
    // or for corners: 'slide-diag-left', 'slide-diag-right'
    setTransitionClass(direction + '-out');
    setTimeout(() => {
      setPage(target);
      setTransitionClass(direction + '-in');
      setTimeout(() => setTransitionClass(''), 500);
    }, 300);
  };

  const renderContent = () => {
    switch (page) {
      case 'about':
        return (
          <div className={`page-content ${transitionClass}`}>
            {/* Updated profile container with left and right text */}
            <div className="profile-container">
              <div className="side-text2 left-text">
                <div>POLYVALENT</div>
                <div>AUTONOME</div>
              </div>
              <img
                src="https://wallpapers.com/images/hd/black-and-white-profile-pictures-kkvzh5sxjpkqrufd.jpg"
                alt="Profile"
                className="profile-img"
              />
              <div className="side-text right-text">
                <div>SOCIAL</div>
                <div>POLYVALENT</div>
              </div>
              <h2 className="profile-title">ABOUT ME</h2>
            </div>
            <div className="arrows">
              <button className="arrow right" onClick={() => handleSlide('fractals', 'slide-left')}>
                →
              </button>
              <button className="arrow bottom" onClick={() => handleSlide('cub3d', 'slide-up')}>
                ↓
              </button>
              <button className="arrow left" onClick={() => handleSlide('realestate', 'slide-right')}>
                ←
              </button>
            </div>
            {/* Inverse diagonal effects for corner arrows */}
            <button className="arrow bottom-left" onClick={() => handleSlide('extraLeft', 'slide-diag-right')}>
              ↙
            </button>
            <button className="arrow bottom-right" onClick={() => handleSlide('extraRight', 'slide-diag-left')}>
              ↘
            </button>
          </div>
        );
      case 'fractals':
        return (
          <div className={`page-content ${transitionClass}`}>
            <h2>Fractals Generator Project</h2>
            <p>// ...fractals generator project details...</p>
            <button className="arrow back left" onClick={() => handleSlide('about', 'slide-right')}>
              ←
            </button>
          </div>
        );
      case 'cub3d':
        return (
          <div className={`page-content ${transitionClass}`}>
            <h2>Cub3D (Raycasting)</h2>
            <p>// ...Cub3D project details...</p>
            <button className="arrow top" onClick={() => handleSlide('about', 'slide-down')}>
              ↑
            </button>
          </div>
        );
      case 'realestate':
        return (
          <div className={`page-content ${transitionClass}`}>
            <h2>Real Estate Managing App</h2>
            <p>// ...Real Estate Managing App details...</p>
            <button className="arrow back right" onClick={() => handleSlide('about', 'slide-left')}>
              →
            </button>
          </div>
        );
      case 'extraLeft':
        return (
          <div className={`page-content ${transitionClass}`}>
            <h2>Extra Section Left</h2>
            <p>// ...extra left section details...</p>
            {/* Updated back button: now positioned at bottom-left with diagonal effect */}
            <button className="arrow back top-right" onClick={() => handleSlide('about', 'slide-diag-bl')}>
            ↗
            </button>
          </div>
        );
      case 'extraRight':
        return (
          <div className={`page-content ${transitionClass}`}>
            <h2>Extra Section Right</h2>
            <p>// ...extra right section details...</p>
            {/* Updated back button: positioned at bottom-right with diagonal effect */}
            <button className="arrow back top-left" onClick={() => handleSlide('about', 'slide-diag-br')}>
              ↖
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="app-container">{renderContent()}</div>;
}

export default App;
