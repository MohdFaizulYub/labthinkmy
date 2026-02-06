
import React, { useState } from 'react';
import { Camera, Users, Building2, Zap, ArrowLeft, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryItem {
  url: string;
  title: string;
  category: string;
  description: string;
}

const Highlights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ['All', 'Training', 'Facilities', 'Events'];

  const galleryItems: GalleryItem[] = [
    { 
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200", 
      title: "Main Lecture Hall", 
      category: "Facilities",
      description: "State-of-the-art smart classroom with hybrid learning capabilities. Designed for maximum engagement and technological integration."
    },
    { 
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200", 
      title: "Global Leadership Summit", 
      category: "Events",
      description: "Annual gathering of industry experts and corporate partners to discuss emerging trends and organizational excellence."
    },
    { 
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200", 
      title: "Technical Engineering Lab", 
      category: "Training",
      description: "Hands-on technical safety training for industrial specialists, featuring real-world simulations and advanced hardware."
    },
    { 
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200", 
      title: "Executive Boardroom", 
      category: "Facilities",
      description: "High-stakes decision environment for corporate consultancy and strategy development. Equipped with premium conferencing tools."
    },
    { 
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200", 
      title: "Team Innovation Cycle", 
      category: "Training",
      description: "Collaborative brainstorming session during the Management Excellence program, fostering creative problem-solving and team synergy."
    },
    { 
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200", 
      title: "Digital Transformation Hub", 
      category: "Facilities",
      description: "Our dedicated space for emerging technology exploration, focusing on AI, Blockchain, and Industry 4.0 applications."
    },
    { 
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200", 
      title: "Networking Gala", 
      category: "Events",
      description: "Post-certification networking event for alumni and partners, strengthening the Thinklab professional community."
    },
    { 
      url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200", 
      title: "HSE Practical Assessment", 
      category: "Training",
      description: "Live safety drills and emergency response simulations conducted by certified health and safety professionals."
    },
    { 
      url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1200", 
      title: "Breakout Lounge", 
      category: "Facilities",
      description: "Relaxed environment designed for informal knowledge sharing and professional networking between sessions."
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <div className="pb-24">
      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div 
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setSelectedIndex(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl bg-white shadow-2xl rounded-[2.5rem] animate-in zoom-in-95 duration-300 overflow-hidden flex flex-col md:flex-row">
            {/* Standardized Square Image Frame with Navigation */}
            <div className="w-full md:w-[500px] shrink-0 bg-slate-100 aspect-square relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-100 group/frame">
              <img 
                src={selectedItem.url} 
                alt={selectedItem.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500" 
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all opacity-0 group-hover/frame:opacity-100 -translate-x-2 group-hover/frame:translate-x-0"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all opacity-0 group-hover/frame:opacity-100 translate-x-2 group-hover/frame:translate-x-0"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Info Section */}
            <div className="flex-grow p-8 md:p-12 flex flex-col justify-between bg-white overflow-y-auto max-h-[60vh] md:max-h-auto">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">
                      {selectedItem.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                      {selectedItem.title}
                    </h2>
                  </div>
                  <button 
                    onClick={() => setSelectedIndex(null)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900 shrink-0"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="pt-2">
                  <p className="text-slate-600 leading-relaxed text-justify">
                    {selectedItem.description}
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between shrink-0">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Thinklab Highlights &copy;
                </div>
                <div className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em]">
                  Item {(selectedIndex ?? 0) + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Gallery & Highlights</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed text-justify">
            A visual documentation of Thinklab's commitment to excellence, showcasing our environments, our people, and the tangible impact of our programs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setSelectedIndex(null);
              }}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeFilter === cat 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedIndex(index)}
              className="relative group overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm break-inside-avoid cursor-pointer"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full w-fit">
                    <Maximize2 className="text-white w-5 h-5" />
                  </div>
                </div>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                   {item.category === 'Training' && <Zap size={14} />}
                   {item.category === 'Facilities' && <Building2 size={14} />}
                   {item.category === 'Events' && <Users size={14} />}
                   {item.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-justify line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-300">
             <Camera className="mx-auto w-12 h-12 text-slate-300 mb-4" />
             <p className="text-slate-500 font-medium">No highlights available for this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Highlights;
