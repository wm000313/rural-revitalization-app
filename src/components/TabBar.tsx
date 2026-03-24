import { Home, ShoppingBag, Plus, BookOpen, User } from 'lucide-react';

export default function TabBar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-end pb-6 pt-2 px-2 z-50 rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center justify-center w-16 pb-1 ${activeTab === 'home' ? 'text-green-600' : 'text-gray-400'}`}>
        <Home size={26} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
        <span className="text-[11px] mt-1 font-bold">首页</span>
      </button>
      <button onClick={() => setActiveTab('sell')} className={`flex flex-col items-center justify-center w-16 pb-1 ${activeTab === 'sell' ? 'text-green-600' : 'text-gray-400'}`}>
        <ShoppingBag size={26} strokeWidth={activeTab === 'sell' ? 2.5 : 2} />
        <span className="text-[11px] mt-1 font-bold">卖货</span>
      </button>
      
      <div className="w-16 flex justify-center">
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-green-500/20 rounded-full blur-xl pointer-events-none animate-pulse"></div>
        <button 
          onClick={() => setActiveTab('sell')} 
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-full p-4 shadow-2xl border-4 border-white active:scale-95 transition-all duration-300 ${activeTab === 'sell' ? 'bg-[#16a34a] shadow-green-600/50 text-white' : 'bg-gradient-to-br from-[#4ade80] to-[#16a34a] text-white shadow-green-500/50'}`}
        >
          <Plus size={32} strokeWidth={3} className={`transition-transform duration-300 ${activeTab === 'sell' ? 'rotate-45' : ''}`} />
        </button>
      </div>

      <button onClick={() => setActiveTab('diary')} className={`flex flex-col items-center justify-center w-16 pb-1 ${activeTab === 'diary' ? 'text-green-600' : 'text-gray-400'}`}>
        <BookOpen size={26} strokeWidth={activeTab === 'diary' ? 2.5 : 2} />
        <span className="text-[11px] mt-1 font-bold">日记</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center justify-center w-16 pb-1 ${activeTab === 'profile' ? 'text-green-600' : 'text-gray-400'}`}>
        <User size={26} strokeWidth={activeTab === 'profile' ? 2.5 : 2} />
        <span className="text-[11px] mt-1 font-bold">我的</span>
      </button>
    </div>
  );
}
