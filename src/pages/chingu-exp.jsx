import React, { useState, useRef } from 'react';

const ChinguExperience = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});
  const videoRef = useRef(null);

  // Sample portfolio data - optimized for various media types
  const portfolioItems = [
    {
      id: 1,
      title: "Architectural VR Walkthrough",
      category: "vr",
      type: "video",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%234ECDC4'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EVR Demo%3C/text%3E%3C/svg%3E",
      media: "data:video/mp4;base64,", // Placeholder
      description: "Immersive VR experience for residential complex"
    },
    {
      id: 2,
      title: "Parametric Building Design",
      category: "3d",
      type: "model",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%2344A08D'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='16'%3E3D Model%3C/text%3E%3C/svg%3E",
      description: "Generative design for sustainable architecture"
    },
    {
      id: 3,
      title: "Product Prototype Series",
      category: "physical",
      type: "image",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='16'%3EPrototype%3C/text%3E%3C/svg%3E",
      description: "CNC machined functional prototypes"
    },
    {
      id: 4,
      title: "Interior Visualization",
      category: "render",
      type: "image",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f093fb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='16'%3ERender%3C/text%3E%3C/svg%3E",
      description: "Photorealistic interior rendering"
    },
    {
      id: 5,
      title: "Urban Planning VR",
      category: "vr",
      type: "video",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%234ECDC4'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='16'%3EUrban VR%3C/text%3E%3C/svg%3E",
      description: "City-scale VR planning tool"
    },
    {
      id: 6,
      title: "Fabrication Details",
      category: "physical",
      type: "image",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='16'%3ECNC Work%3C/text%3E%3C/svg%3E",
      description: "Precision manufacturing processes"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work', icon: '🔍', count: portfolioItems.length },
    { id: 'render', label: 'Renders', icon: '📷', count: portfolioItems.filter(item => item.category === 'render').length },
    { id: 'vr', label: 'VR', icon: '🥽', count: portfolioItems.filter(item => item.category === 'vr').length },
    { id: '3d', label: '3D Models', icon: '⚙️', count: portfolioItems.filter(item => item.category === '3d').length },
    { id: 'physical', label: 'Physical', icon: '🔧', count: portfolioItems.filter(item => item.category === 'physical').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const getMediaIcon = (type, category) => {
    if (category === 'vr') return '🥽';
    if (category === 'physical') return '🔧';
    if (type === 'video') return '📹';
    return '📷';
  };

  const MediaCard = ({ item }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (
      <div 
        className="media-card"
        onClick={() => setSelectedMedia(item)}
      >
        <div className="media-container">
          {!imageLoaded && <div className="skeleton"></div>}
          <img
            src={item.thumbnail}
            alt={item.title}
            onLoad={() => setImageLoaded(true)}
            className={`media-image ${imageLoaded ? 'loaded' : ''}`}
          />
          <div className="media-icon">
            {getMediaIcon(item.type, item.category)}
          </div>
          {item.type === 'video' && (
            <div className="play-button">
              ▶️
            </div>
          )}
        </div>
        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-description">{item.description}</p>
          <span className="category-chip">{item.category.toUpperCase()}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="chingu-experience">
      <style jsx>{`
        .chingu-experience {
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
          text-align: center;
          color: white;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          margin-bottom: 2rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          opacity: 0.95;
        }

        .tech-tags {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .tech-chip {
          background-color: rgba(255,255,255,0.2);
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .decorative-circle {
          position: absolute;
          top: 20%;
          right: 10%;
          width: 100px;
          height: 100px;
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: none;
        }

        @media (min-width: 768px) {
          .decorative-circle {
            display: block;
          }
        }

        /* Portfolio Section */
        .portfolio-section {
          padding: 4rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Category Tabs */
        .category-tabs {
          margin-bottom: 3rem;
          border-bottom: 2px solid #e0e0e0;
        }

        .tabs-container {
          display: flex;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .tabs-container::-webkit-scrollbar {
          display: none;
        }

        .tab-button {
          background: none;
          border: none;
          padding: 1rem 1.5rem;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          color: #666;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tab-button:hover {
          color: #4ECDC4;
        }

        .tab-button.active {
          color: #4ECDC4;
          border-bottom-color: #4ECDC4;
        }

        .tab-badge {
          background-color: #4ECDC4;
          color: white;
          border-radius: 12px;
          padding: 0.2rem 0.5rem;
          font-size: 0.8rem;
          min-width: 20px;
          text-align: center;
        }

        /* Portfolio Grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        /* Media Cards */
        .media-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .media-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .media-container {
          position: relative;
          padding-top: 75%;
          overflow: hidden;
        }

        .skeleton {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }

        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .media-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .media-image.loaded {
          opacity: 1;
        }

        .media-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          background-color: rgba(0,0,0,0.7);
          color: white;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(255,255,255,0.9);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .play-button:hover {
          background-color: white;
          transform: translate(-50%, -50%) scale(1.1);
        }

        .card-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .card-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .category-chip {
          background-color: #4ECDC4;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          align-self: flex-start;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          background-color: black;
          color: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
          overflow: hidden;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background-color: rgba(0,0,0,0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          z-index: 10;
          font-size: 18px;
        }

        .modal-close:hover {
          background-color: rgba(0,0,0,0.9);
        }

        .modal-media {
          text-align: center;
        }

        .modal-video {
          max-height: 70vh;
          width: 100%;
        }

        .modal-image {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
        }

        .modal-info {
          padding: 2rem;
          text-align: left;
        }

        .modal-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .modal-description {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .modal-chip {
          background-color: #4ECDC4;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 16px;
          font-size: 0.9rem;
          font-weight: 600;
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">CHINGU EXPERIENCE</h1>
        <p className="hero-subtitle">
          Harnessing the power of modern technology to bring visions to life. 
          We specialize in utilizing advanced tools such as VR, rendering systems, and 3D printing.
        </p>
        
        <div className="tech-tags">
          {['VR', '3D PRINTING', 'CNC'].map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
        </div>
        
        <div className="decorative-circle"></div>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-section">
        {/* Category Filter */}
        <div className="category-tabs">
          <div className="tabs-container">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`tab-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
                <span className="tab-badge">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedMedia(null)}
            >
              ✕
            </button>
            
            <div className="modal-media">
              {selectedMedia.type === 'video' ? (
                <video
                  ref={videoRef}
                  className="modal-video"
                  controls
                  poster={selectedMedia.thumbnail}
                >
                  <source src={selectedMedia.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedMedia.thumbnail}
                  alt={selectedMedia.title}
                  className="modal-image"
                />
              )}
              
              <div className="modal-info">
                <h2 className="modal-title">{selectedMedia.title}</h2>
                <p className="modal-description">{selectedMedia.description}</p>
                <span className="modal-chip">{selectedMedia.category.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChinguExperience;