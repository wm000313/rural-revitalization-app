import { useState } from 'react';
import { Search, Bell, Mic, ChevronLeft, ChevronRight, Check, ArrowUp } from 'lucide-react';

export default function Sell({ navigate, setActiveTab }: { navigate: (page: string) => void, setActiveTab: (tab: string) => void }) {
  const [step, setStep] = useState(1);

  // Step 1: Voice Input
  const renderStep1 = () => (
    <div className="min-h-full bg-gradient-to-b from-[#32d74b] via-[#86efac] to-[#f0fdf4] pb-24 font-sans relative flex flex-col">
      {/* Top Search Bar */}
      <div className="pt-12 px-4 flex items-center gap-3 relative z-10">
        <div className="flex-1 bg-white rounded-full flex items-center px-4 py-2.5 shadow-sm">
          <Search size={20} className="text-gray-400 mr-2" />
          <input type="text" placeholder="搜索农产品、农技知识..." className="bg-transparent outline-none w-full text-sm placeholder-gray-400" />
        </div>
        <div className="relative">
          <Bell size={28} className="text-white" strokeWidth={1.5} />
          <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full border border-[#32d74b]"></span>
        </div>
      </div>

      {/* Banner */}
      <div className="px-4 mt-6 relative z-10">
        <div className="bg-gradient-to-r from-[#dcfce7] to-[#bbf7d0] rounded-2xl overflow-hidden relative h-40 shadow-sm flex">
          <div className="flex-1 p-5 flex flex-col justify-center z-10">
            <div className="bg-[#22c55e] text-white text-xs px-3 py-1 rounded-full w-fit mb-2 font-bold shadow-sm">轮播Banner</div>
            <h2 className="text-[#166534] text-3xl font-black drop-shadow-sm tracking-wider mb-2">轮播Banner</h2>
            <div className="bg-[#14532d] text-white text-xs px-2 py-1 rounded-sm w-fit">平台活动/助农政策</div>
          </div>
          <div className="w-1/2 relative">
            <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800" alt="Banner" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            <div className="w-3 h-1.5 rounded-full bg-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
          </div>
        </div>
      </div>

      {/* Voice Input */}
      <div className="flex-1 flex flex-col items-center justify-center mt-10 relative z-10">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-48 h-48 bg-white/20 rounded-full animate-ping"></div>
          <div className="absolute w-36 h-36 bg-white/40 rounded-full"></div>
          <button 
            onClick={() => setStep(2)}
            className="relative z-10 flex items-center justify-center"
          >
            <Mic size={120} className="text-white drop-shadow-lg" strokeWidth={1} />
          </button>
        </div>
        <p className="text-gray-800 text-lg mt-12 font-medium tracking-wide">按住说话，描述你的商品</p>
      </div>
    </div>
  );

  // Step 2: Camera
  const renderStep2 = () => (
    <div className="absolute inset-0 bg-black z-[60] flex flex-col">
      {/* Top Bar */}
      <div className="pt-12 px-4 pb-4 flex items-center justify-between relative z-10">
        <button onClick={() => setStep(1)} className="text-white">
          <ChevronLeft size={28} />
        </button>
        <div className="bg-[#16a34a] text-white px-3 py-1.5 rounded-full flex items-center gap-1 text-sm font-bold border border-white/20">
          特级果 <ChevronRight size={16} className="rotate-90" />
        </div>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative">
        <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800" alt="Camera" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        
        {/* Bounding Box */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white"></div>
          </div>
        </div>

        {/* Right Side Sample Images */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200" className="w-16 h-16 rounded-xl object-cover border-2 border-white/50" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200" className="w-16 h-16 rounded-xl object-cover border-2 border-white/50" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200" className="w-16 h-16 rounded-xl object-cover border-2 border-white/50" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200" className="w-16 h-16 rounded-xl object-cover border-2 border-white/50" referrerPolicy="no-referrer" />
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="h-32 bg-black flex items-center justify-between px-8 pb-6">
        <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/30">
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <button onClick={() => setStep(3)} className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full"></div>
        </button>
        <div className="w-12 text-white text-center text-sm">22</div>
      </div>
    </div>
  );

  // Step 3: Confirm Info & Pricing
  const renderStep3 = () => (
    <div className="min-h-full bg-gradient-to-b from-[#32d74b] via-[#86efac] to-[#f0fdf4] pb-24 font-sans relative">
      {/* Top Search Bar */}
      <div className="pt-12 px-4 flex items-center gap-3 relative z-10">
        <div className="flex-1 bg-white rounded-full flex items-center px-4 py-2.5 shadow-sm">
          <Search size={20} className="text-gray-400 mr-2" />
          <input type="text" placeholder="搜索农产品、农技知识..." className="bg-transparent outline-none w-full text-sm placeholder-gray-400" />
        </div>
        <div className="relative">
          <Bell size={28} className="text-white" strokeWidth={1.5} />
          <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full border border-[#32d74b]"></span>
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-wider mb-2">特级西红柿</h2>
            <div className="bg-[#1f2937] text-white text-sm px-3 py-1 rounded-full w-fit">
              建议定价3.5-4.2元/斤
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200" alt="Tomato" className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-white/50" referrerPolicy="no-referrer" />
        </div>

        {/* AI Dynamic Pricing Card */}
        <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">AI动态定价</h3>
          <p className="text-gray-600 mb-4 text-sm">AI参考售价：3.8元/斤</p>
          
          {/* Chart Placeholder */}
          <div className="h-32 relative w-full mb-2 ml-4">
            {/* Simple SVG Line Chart */}
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
              <polyline 
                fill="none" 
                stroke="#22c55e" 
                strokeWidth="1.5" 
                points="0,30 20,28 40,20 60,25 80,10 100,20" 
              />
              <polygon 
                fill="url(#gradient)" 
                points="0,30 20,28 40,20 60,25 80,10 100,20 100,40 0,40" 
                opacity="0.2"
              />
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Data points */}
              <circle cx="0" cy="30" r="1.5" fill="#22c55e" />
              <circle cx="20" cy="28" r="1.5" fill="#22c55e" />
              <circle cx="40" cy="20" r="1.5" fill="#22c55e" />
              <circle cx="60" cy="25" r="1.5" fill="#22c55e" />
              <circle cx="80" cy="10" r="1.5" fill="#22c55e" />
              <circle cx="100" cy="20" r="1.5" fill="#22c55e" />
            </svg>
            {/* Y-axis labels */}
            <div className="absolute -left-6 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400">
              <span>350</span>
              <span>450</span>
              <span>00</span>
            </div>
            {/* Horizontal lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="w-full border-b border-gray-100"></div>
              <div className="w-full border-b border-gray-100"></div>
              <div className="w-full border-b border-gray-100"></div>
            </div>
          </div>
        </div>

        {/* Market Data Card */}
        <div className="bg-[#dcfce7] rounded-3xl p-5 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-3">市场行情数据</h3>
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-800">昨日均价：3.6元/斤</span>
            <span className="text-gray-800">今日均价：3.7元/斤</span>
          </div>
          <div className="flex items-center text-sm text-gray-800">
            价格走势：<ArrowUp size={16} className="text-red-500 mx-1" /> <span className="text-gray-900">小幅上涨</span>
          </div>
        </div>

        <button onClick={() => setStep(4)} className="w-full bg-[#22c55e] text-white text-lg font-bold py-4 rounded-full shadow-lg mt-8 active:scale-95 transition-transform">
          下一步
        </button>
      </div>
    </div>
  );

  // Step 4: Logistics
  const renderStep4 = () => (
    <div className="min-h-full bg-gradient-to-b from-[#32d74b] via-[#86efac] to-[#f0fdf4] pb-24 font-sans relative">
      {/* Top Search Bar */}
      <div className="pt-12 px-4 flex items-center gap-3 relative z-10">
        <div className="flex-1 bg-white rounded-full flex items-center px-4 py-2.5 shadow-sm">
          <Search size={20} className="text-gray-400 mr-2" />
          <input type="text" placeholder="搜索农产品、农技知识..." className="bg-transparent outline-none w-full text-sm placeholder-gray-400" />
        </div>
        <div className="relative">
          <Bell size={28} className="text-white" strokeWidth={1.5} />
          <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full border border-[#32d74b]"></span>
        </div>
      </div>

      <div className="px-4 mt-6">
        <h2 className="text-3xl font-black text-gray-900 tracking-wider mb-6">物流推荐</h2>

        <div className="space-y-4">
          {/* Card 1 */}
          <div className="bg-[#dcfce7] rounded-2xl p-5 relative shadow-sm">
            <div className="absolute top-0 left-0 bg-[#16a34a] text-white text-xs px-3 py-1.5 rounded-br-xl rounded-tl-2xl font-bold">
              推荐
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">极速达物流</h3>
            <p className="text-gray-700 text-sm mb-1 flex items-center gap-1"><span className="text-orange-500 font-bold">¥</span> 运费：2.5元/公斤</p>
            <p className="text-gray-700 text-sm flex items-center gap-1"><ArrowUp size={14} className="text-gray-500" /> 时效：次日达</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f0fdf4] rounded-2xl p-5 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">农速物流</h3>
            <p className="text-gray-700 text-sm mb-1 flex items-center gap-1"><span className="text-orange-500 font-bold">¥</span> 运费：2.2元/公斤</p>
            <p className="text-gray-700 text-sm flex items-center gap-1"><ArrowUp size={14} className="text-gray-500" /> 时效：2-3日达</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f0fdf4] rounded-2xl p-5 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">绿通物流</h3>
            <p className="text-gray-700 text-sm mb-1 flex items-center gap-1"><span className="text-orange-500 font-bold">¥</span> 运费：2.0元/公斤</p>
            <p className="text-gray-700 text-sm flex items-center gap-1"><ArrowUp size={14} className="text-gray-500" /> 时效：3-4日达</p>
          </div>
        </div>

        <button onClick={() => setStep(5)} className="w-full bg-[#16a34a] text-white text-xl font-bold py-4 rounded-full shadow-lg mt-8 active:scale-95 transition-transform">
          一键发布
        </button>
      </div>
    </div>
  );

  // Step 5: Publish Success
  const renderStep5 = () => (
    <div className="min-h-full bg-gradient-to-b from-[#32d74b] via-[#86efac] to-[#f0fdf4] pb-24 font-sans relative">
      {/* Top Search Bar */}
      <div className="pt-12 px-4 flex items-center gap-3 relative z-10">
        <div className="flex-1 bg-white rounded-full flex items-center px-4 py-2.5 shadow-sm">
          <Search size={20} className="text-gray-400 mr-2" />
          <input type="text" placeholder="搜索农产品、农技知识..." className="bg-transparent outline-none w-full text-sm placeholder-gray-400" />
        </div>
        <div className="relative">
          <Bell size={28} className="text-white" strokeWidth={1.5} />
          <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full border border-[#32d74b]"></span>
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-[#15803d] rounded-full p-1">
            <Check size={24} className="text-white" strokeWidth={3} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-wider">发布成功</h2>
        </div>

        <div className="bg-[#dcfce7] rounded-3xl p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 to-transparent"></div>
          <h3 className="text-2xl font-serif tracking-widest text-gray-900 mb-6 relative z-10">沙瓤西红柿</h3>
          
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400" alt="Tomato" className="w-48 h-48 object-contain mb-6 relative z-10 drop-shadow-xl rounded-full" referrerPolicy="no-referrer" />
          
          <p className="text-gray-800 text-sm relative z-10">自然熟透的沙瓤西红柿，清晨现摘，酸甜多汁</p>
        </div>
        
        <button onClick={() => setActiveTab('home')} className="w-full bg-white text-[#16a34a] border-2 border-[#16a34a] text-lg font-bold py-4 rounded-full shadow-sm mt-8 active:scale-95 transition-transform">
          返回首页
        </button>
      </div>
    </div>
  );

  return (
    <>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
      {step === 5 && renderStep5()}
    </>
  );
}
