import { useState, useEffect, MouseEvent } from 'react';
import { Search, Bell, ChevronRight, MessageSquare, AlarmClock, Bot, FileSearch, ChevronLeft } from 'lucide-react';

export default function Home({ navigate, setActiveTab }: { navigate: (page: string) => void, setActiveTab: (tab: string) => void }) {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const banners = [
    {
      title: "农业部发布\n秋季助农新政策",
      tag: "最新资讯",
      subTag: "平台活动/助农政策",
      image: "https://picsum.photos/seed/farm1/800/400"
    },
    {
      title: "千万补贴发放\n助力农产品上行",
      tag: "热门活动",
      subTag: "平台补贴/流量扶持",
      image: "https://picsum.photos/seed/farm2/800/400"
    },
    {
      title: "AI农技专家\n24小时在线答疑",
      tag: "功能上新",
      subTag: "智能问答/病虫害防治",
      image: "https://picsum.photos/seed/farm3/800/400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-h-full bg-[#f0fdf4] pb-24 font-sans relative">
      {/* Header Background with Wave */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#4ade80] to-[#22c55e] z-0 rounded-b-[3rem]"></div>

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
        <div className="bg-gradient-to-r from-[#dcfce7] to-[#bbf7d0] rounded-2xl overflow-hidden relative h-36 shadow-sm group cursor-pointer">
          
          {/* Carousel Content */}
          <div className="w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
            {banners.map((banner, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 flex relative">
                <div className="w-[55%] p-4 flex flex-col justify-center z-10 relative">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300"></div>
                  <div className="bg-[#22c55e] text-white text-[10px] px-2.5 py-0.5 rounded-full w-fit mb-1.5 font-bold shadow-sm relative z-10 animate-pulse">{banner.tag}</div>
                  <h2 className="text-[#166534] text-lg font-black drop-shadow-sm tracking-wider mb-1.5 relative z-10 leading-tight whitespace-pre-line">{banner.title}</h2>
                  <div className="bg-[#14532d] text-white text-[10px] px-2 py-0.5 rounded-sm w-fit relative z-10">{banner.subTag}</div>
                </div>
                <div className="w-[45%] relative overflow-hidden">
                  <img src={banner.image} alt="Banner" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-y-0 -left-1 w-24 bg-gradient-to-r from-[#dcfce7] via-[#dcfce7]/80 to-transparent z-10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button 
            onClick={prevBanner}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-[#166534] opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white/80 shadow-sm"
          >
            <ChevronLeft size={16} strokeWidth={3} />
          </button>
          <button 
            onClick={nextBanner}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-[#166534] opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white/80 shadow-sm"
          >
            <ChevronRight size={16} strokeWidth={3} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {banners.map((_, index) => (
              <div 
                key={index} 
                onClick={(e) => { e.stopPropagation(); setCurrentBanner(index); }}
                className={`h-1.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer ${currentBanner === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Functions */}
      <div className="px-4 mt-6 relative z-10">
        <div className="bg-[#22c55e] rounded-2xl p-6 flex justify-between items-center shadow-md">
          <button onClick={() => setActiveTab('sell')} className="flex flex-col items-center gap-3 flex-1">
            <div className="w-14 h-14 bg-[#16a34a] rounded-full flex items-center justify-center shadow-lg">
              <AlarmClock size={28} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-sm tracking-wider">我要卖货</span>
          </button>
          <button onClick={() => navigate('aiqa')} className="flex flex-col items-center gap-3 flex-1">
            <div className="w-14 h-14 bg-[#16a34a] rounded-full flex items-center justify-center shadow-lg">
              <Bot size={28} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-sm tracking-wider">AI农技问答</span>
          </button>
          <button onClick={() => navigate('emergency')} className="flex flex-col items-center gap-3 flex-1">
            <div className="w-14 h-14 bg-[#16a34a] rounded-full flex items-center justify-center shadow-lg">
              <FileSearch size={28} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-sm tracking-wider">紧急助农</span>
          </button>
        </div>
      </div>

      {/* Smart Info Stream */}
      <div className="px-4 mt-8 relative z-10 mb-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 tracking-wider">智能信息流</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Card 1 */}
          <div 
            onClick={() => navigate('consumer_interaction')}
            className="bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-2xl p-4 shadow-sm flex flex-col justify-center h-32 relative overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-1 tracking-wider drop-shadow-sm">关注的消</h4>
              <h4 className="text-xl font-bold text-white tracking-wider drop-shadow-sm">费者互动</h4>
            </div>
            <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <MessageSquare size={24} className="text-white" strokeWidth={2.5} />
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            {/* Card 2 */}
            <div 
              onClick={() => navigate('platform_notifications')}
              className="bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-2xl p-4 shadow-sm flex items-center justify-center h-[58px] relative overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
              <h4 className="text-lg font-bold text-white tracking-wider drop-shadow-sm relative z-10">平台通知</h4>
            </div>
            
            {/* Card 3 */}
            <div 
              onClick={() => navigate('market_quotes')}
              className="bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-2xl p-4 shadow-sm flex items-center justify-center h-[58px] relative overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
              <h4 className="text-lg font-bold text-white tracking-wider drop-shadow-sm relative z-10">市场行情</h4>
            </div>
          </div>
        </div>

        {/* Featured Content Area */}
        <div 
          onClick={() => navigate('featured_content')}
          className="flex-1 min-h-[160px] bg-white rounded-3xl shadow-sm overflow-hidden relative group cursor-pointer border border-gray-100 mt-2 hover:shadow-md transition-shadow"
        >
          <img src="https://picsum.photos/seed/farm8/800/400" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-4 text-white">
            <div className="bg-[#22c55e] text-xs px-2 py-1 rounded-sm w-fit mb-2 font-bold shadow-sm">热门推荐</div>
            <h4 className="text-lg font-bold drop-shadow-md">当季水果热销榜单发布，快来看看你的产品上榜了吗？</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
