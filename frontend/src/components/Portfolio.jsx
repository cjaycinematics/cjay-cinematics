import React, { useState } from 'react';
import { Video, Image, Play } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Work' },
    { id: 'memorial', label: 'Memorial Services' },
    { id: 'celebration', label: 'Celebrations of Life' },
    { id: 'events', label: 'Events & Weddings' },
  ];

  const portfolioItems = [
    { id: 1, type: 'video', category: 'memorial', title: 'Memorial Service Film' },
    { id: 2, type: 'video', category: 'memorial', title: 'Funeral Tribute' },
    { id: 3, type: 'video', category: 'celebration', title: 'Celebration of Life' },
    { id: 4, type: 'video', category: 'celebration', title: 'Legacy Interview' },
    { id: 5, type: 'video', category: 'events', title: 'Wedding Highlight Film' },
    { id: 6, type: 'video', category: 'events', title: 'Birthday Celebration' },
  ];

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 px-4 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-off-white mb-4 gold-accent inline-block">Portfolio Gallery</h2>
          <p className="text-warm-cream text-lg max-w-3xl mx-auto opacity-90">
            Explore our cinematic work. Videos and photos can be added easily as your portfolio grows.
          </p>
        </div>

        {/* Portfolio Tabs */}
        <div className="portfolio-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`portfolio-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item hover-lift">
              <div className="portfolio-placeholder">
                {item.type === 'video' ? (
                  <>
                    <Video size={48} className="mb-3" />
                    <Play size={32} className="mb-2 opacity-70" />
                  </>
                ) : (
                  <>
                    <Image size={48} className="mb-3" />
                  </>
                )}
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs opacity-70 mt-1">
                  {item.type === 'video' ? 'Video Embed Placeholder' : 'Photo Placeholder'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions for easy updates */}
        <div className="mt-12 p-6 bg-charcoal/50 border border-gold/20 rounded-lg">
          <h3 className="text-gold text-xl font-serif mb-3">Easy Portfolio Management</h3>
          <p className="text-warm-cream mb-3">
            This portfolio section is designed for you to easily add content as you create it:
          </p>
          <ul className="text-warm-cream space-y-2 text-sm ml-6">
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span><strong>Videos:</strong> Simply add YouTube or Vimeo embed URLs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span><strong>Photos:</strong> Upload images directly to the grid</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span><strong>Categories:</strong> Organize by Memorial, Celebration, or Events</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span><strong>Structure:</strong> Clean code with comments for easy editing</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
