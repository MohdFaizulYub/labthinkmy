
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pb-24">
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Partner With Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to initiate a transformation? Fill out the form below or reach out to our corporate desks.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">General Enquiries</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><Mail size={20} /></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-slate-900 font-medium">contact@thinklab.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><Phone size={20} /></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-slate-900 font-medium">03-2282 9118</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Global Headquarters</h3>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><MapPin size={20} /></div>
                <div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-slate-900 font-medium leading-relaxed">
                    Lot 1.47 Tower A, Ground Floor,<br />
                    Bangsar Trade Centre, Jalan Pantai Baharu,<br />
                    59200 KL
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-12">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Corporate Email</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Organization / Company</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Tech Solutions Inc." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Contact Number</label>
                  <input type="tel" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="+60" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service of Inquiry</label>
                <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>Corporate program</option>
                  <option>HSE Competency</option>
                  <option>ESG Consultancy</option>
                  <option>IT Consultancy</option>
                  <option>Blockchain and AI Consultancy</option>
                  <option>Branding and Digital Media</option>
                  <option>Event Management</option>
                  <option>Sports Development</option>
                  <option>Project Management</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all min-h-[150px]" placeholder="How can we help your organization?"></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                Submit Inquiry <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
