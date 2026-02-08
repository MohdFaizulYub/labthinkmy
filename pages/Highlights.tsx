
import React, { useState } from 'react';
import { Camera, Users, Building2, Zap, ArrowLeft, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Event Images
import event01 from '../assets/images/highlight/event/Event 01.jpeg';
import event02 from '../assets/images/highlight/event/Event 02.jpeg';
import event03 from '../assets/images/highlight/event/Event 03.jpeg';
import event04 from '../assets/images/highlight/event/Event 04.jpeg';
import event05 from '../assets/images/highlight/event/Event 05.jpeg';
import event06 from '../assets/images/highlight/event/Event 06.jpeg';
import event07 from '../assets/images/highlight/event/Event 07.jpeg';
import event08 from '../assets/images/highlight/event/Event 08.jpeg';
import event09 from '../assets/images/highlight/event/Event 09.jpeg';
import event10 from '../assets/images/highlight/event/Event 10.jpeg';
import event11 from '../assets/images/highlight/event/Event 11.jpeg';
import event12 from '../assets/images/highlight/event/Event 12.jpeg';

// Facilities Images
import facility01 from '../assets/images/highlight/facilities/Facility 01.jpeg';
import facility02 from '../assets/images/highlight/facilities/Facility 02.jpeg';
import facility03 from '../assets/images/highlight/facilities/Facility 03.jpeg';
import facility04 from '../assets/images/highlight/facilities/Facility 04.jpeg';
import facility06 from '../assets/images/highlight/facilities/Facility 06.jpeg';
import facility07 from '../assets/images/highlight/facilities/Facility 07.jpeg';
import facility08 from '../assets/images/highlight/facilities/Facility 08.jpeg';
import facility09 from '../assets/images/highlight/facilities/Facility 09.jpeg';
import facility10 from '../assets/images/highlight/facilities/Facility 10.jpeg';
import facility11 from '../assets/images/highlight/facilities/Facility 11.jpeg';
import facility12 from '../assets/images/highlight/facilities/Facility 12.jpg';
import facility13 from '../assets/images/highlight/facilities/Facility 13.jpg';
import facility14 from '../assets/images/highlight/facilities/Facility 14.jpg';
import facility15 from '../assets/images/highlight/facilities/Facility 15.jpg';
import facility16 from '../assets/images/highlight/facilities/Facility 16.jpg';

// Training Images
import training01 from '../assets/images/highlight/training/Training 01.jpg';
import training02 from '../assets/images/highlight/training/Training 02.jpg';
import training03 from '../assets/images/highlight/training/Training 03.jpeg';

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
    // TRAINING
    {
      url: training01,
      title: "Technical Safety Training",
      category: "Training",
      description: "Hands-on technical safety training for industrial specialists, featuring real-world simulations and advanced hardware."
    },
    {
      url: training02,
      title: "Industrial Skills Workshop",
      category: "Training",
      description: "Practical workshop focusing on immediate skill acquisition through direct application and expert-guided demonstrations."
    },
    {
      url: training03,
      title: "Advanced Engineering Simulation",
      category: "Training",
      description: "Advanced simulation session designed to enhance technical competency and operational safety in high-stakes environments."
    },

    // FACILITIES
    {
      url: facility01,
      title: "Main Lecture Hall",
      category: "Facilities",
      description: "State-of-the-art smart classroom with hybrid learning capabilities."
    },
    {
      url: facility02,
      title: "Collaborative Learning Hub",
      category: "Facilities",
      description: "An open, multi-functional space designed for group discussions and interactive group activities."
    },
    {
      url: facility03,
      title: "Advanced Computer Lab",
      category: "Facilities",
      description: "Equipped with high-performance workstations for technical software training and digital exploration."
    },
    {
      url: facility04,
      title: "Thinklab Innovation Center",
      category: "Facilities",
      description: "Our dedicated laboratory for research and development in industrial automation and technology."
    },
    {
      url: facility06,
      title: "Executive Seminar Room",
      category: "Facilities",
      description: "Premium seminar space tailored for high-level management and leadership development sessions."
    },
    {
      url: facility07,
      title: "Smart Classroom Alpha",
      category: "Facilities",
      description: "Modern classroom featuring integrated digital tools and interactive display systems."
    },
    {
      url: facility08,
      title: "Technical Resource Library",
      category: "Facilities",
      description: "Comprehensive collection of technical documentation and industry standards for professional research."
    },
    {
      url: facility09,
      title: "Practical Assessment Gallery",
      category: "Facilities",
      description: "Specialized environment for evaluating hands-on technical competencies and safety practices."
    },
    {
      url: facility10,
      title: "Thinklab Main Lobby",
      category: "Facilities",
      description: "Professional welcoming area designed for reception and initial briefing for program participants."
    },
    {
      url: facility11,
      title: "Multimedia Briefing Room",
      category: "Facilities",
      description: "Dedicated audio-visual suite for high-impact presentations and remote collaboration."
    },
    {
      url: facility12,
      title: "Outdoor Practical Zone",
      category: "Facilities",
      description: "Spacious outdoor area for specialized industrial drills and emergency response simulations."
    },
    {
      url: facility13,
      title: "Breakout Lounge",
      category: "Facilities",
      description: "Relaxed environment designed for informal knowledge sharing and professional networking."
    },
    {
      url: facility14,
      title: "Corporate Strategy Boardroom",
      category: "Facilities",
      description: "High-stakes decision environment for corporate consultancy and strategy development."
    },
    {
      url: facility15,
      title: "Technical Hardware Suite",
      category: "Facilities",
      description: "Inventory space for specialized technical equipment used in hands-on industrial programs."
    },
    {
      url: facility16,
      title: "Thinklab Admin Wing",
      category: "Facilities",
      description: "Management and coordination offices for all Thinklab training and programs."
    },

    // EVENTS
    {
      url: event01,
      title: "Annual Certification Gala",
      category: "Events",
      description: "Celebrating the achievements of our graduates and the successful completion of our professional development programs."
    },
    {
      url: event02,
      title: "Global Leadership Summit",
      category: "Events",
      description: "Gathering of industry leaders and corporate partners to discuss emerging trends and organizational excellence."
    },
    {
      url: event03,
      title: "Thinklab Networking Night",
      category: "Events",
      description: "Building connections between professionals, industry experts, and corporate stakeholders."
    },
    {
      url: event04,
      title: "Corporate Training Expo",
      category: "Events",
      description: "Showcasing our latest training modules and specialized consultancy frameworks to corporate partners."
    },
    {
      url: event05,
      title: "Industry Expert Workshop",
      category: "Events",
      description: "A deep-dive technical session led by global experts in industrial safety and digital transformation."
    },
    {
      url: event06,
      title: "Alumni Meet & Greet",
      category: "Events",
      description: "Strengthening the professional community by connecting past participants with current industry shifts."
    },
    {
      url: event07,
      title: "The Future of ESG Forum",
      category: "Events",
      description: "Highlighting the importance of sustainability and ethical governance in modern corporate strategy."
    },
    {
      url: event08,
      title: "Thinklab Innovation Awards",
      category: "Events",
      description: "Recognizing outstanding contributions to industrial innovation and professional excellence."
    },
    {
      url: event09,
      title: "Technical Skills Showcase",
      category: "Events",
      description: "Demonstrating the practical impact of our hands-on training via live demonstrations and case studies."
    },
    {
      url: event10,
      title: "Corporate Strategy Briefing",
      category: "Events",
      description: "Specialized briefing for executive partners on strategic workforce development and digital readiness."
    },
    {
      url: event11,
      title: "Safety & Health Awareness Day",
      category: "Events",
      description: "Dedicated event promoting the core principles of OSH and workplace safety across all industrial sectors."
    },
    {
      url: event12,
      title: "Thinklab Partnership Summit",
      category: "Events",
      description: "Exploring collaborative opportunities with regional and international partners to expand professional educational reach."
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
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all ${activeFilter === cat
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
