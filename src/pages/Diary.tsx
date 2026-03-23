import { useState } from 'react';
import { ChevronLeft, Bell, ThumbsUp, MessageSquare, ChevronRight, Send, Search, Camera } from 'lucide-react';

export default function Diary({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [view, setView] = useState<'feed' | 'detail' | 'timeline'>('feed');

  if (view === 'detail') {
    return (
      <div className="min-h-full bg-[#f4fcf6] flex flex-col pb-24">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#4ade80] to-[#22c55e] pt-12 pb-6 px-4 text-white relative">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setView('feed')} className="p-2 -ml-2">
              <ChevronLeft size={28} />
            </button>
            <button className="p-2 -mr-2 relative">
              <Bell size={24} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-[#4ade80]"></span>
            </button>
          </div>
          <div className="flex items-center gap-3 px-2">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-14 h-14 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
            <div>
              <h1 className="text-xl font-bold">王大华的日记：</h1>
              <p className="text-base opacity-90">今日采摘新鲜青菜</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 -mt-4 relative z-10">
          <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">
            <img src="https://picsum.photos/seed/farm1/800/600" alt="Post" className="w-full h-48 object-cover rounded-2xl mb-4" referrerPolicy="no-referrer" />
            <p className="text-lg font-bold text-gray-800 mb-4 leading-relaxed">
              今天一早采摘的露天青菜，纯天然无公害，新鲜直达~
            </p>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 border border-gray-100 flex items-center">
                <input type="text" placeholder="请输入你的评论..." className="bg-transparent outline-none w-full text-sm text-gray-700" />
              </div>
              <button className="bg-[#22c55e] text-white px-5 py-2 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-transform">
                发送
              </button>
            </div>

            <div className="flex items-center justify-around py-2 border-t border-gray-50">
              <button className="flex items-center gap-2 text-gray-700 font-bold">
                <ThumbsUp size={24} className="text-[#22c55e] fill-[#22c55e]" />
                <span className="text-lg">点赞 32</span>
              </button>
              <button className="flex items-center gap-2 text-gray-700 font-bold">
                <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-yellow-300 font-bold text-xs">¥</div>
                <span className="text-lg">打赏</span>
              </button>
            </div>
          </div>

          {/* Comments */}
          <div className="px-2">
            <h3 className="text-lg font-bold text-gray-800 mb-4">粉丝互动</h3>
            <div className="space-y-4">
              {[
                { name: '李大姐', text: '看着就新鲜，买了5斤！', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100' },
                { name: '助农小哥', text: '支持农户，已下单', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
                { name: '张阿姨', text: '给家人买点绿色蔬菜', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100' },
              ].map((comment, i) => (
                <div key={i} className="flex items-center justify-between bg-white/50 p-2 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <p className="text-sm text-gray-800"><span className="font-bold">{comment.name}：</span>{comment.text}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'timeline') {
    return (
      <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f4fcf6] flex flex-col pb-24">
        <div className="pt-12 pb-6 px-4 text-white text-center relative">
          <button onClick={() => setView('feed')} className="absolute left-4 top-12 p-2 -ml-2">
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-2xl font-bold mt-2">我的作物生长故事</h1>
        </div>

        <div className="flex-1 px-4 relative mt-8">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-[#86efac] -translate-y-1/2 z-0"></div>

          <div className="flex justify-between items-center relative z-10 h-[400px]">
            {[
              { date: '4月12日', text: '今天开始播种啦，翻土撒种，期待发芽', img: 'https://picsum.photos/seed/farm2/200/300', top: true },
              { date: '4月28日', text: '冒芽了，嫩嫩的芽尖太可爱，今天出芽了', img: 'https://picsum.photos/seed/farm6/200/300', top: false },
              { date: '5月20日', text: '小苗长得很快，已经长出好几片叶子，开始搭架子了', img: 'https://picsum.photos/seed/farm3/200/300', top: true },
              { date: '6月15日', text: '开花了，白色的花一朵朵，坐等结果', img: 'https://picsum.photos/seed/farm7/200/300', top: false },
              { date: '7月22日', text: '大丰收！红彤彤的番茄，今天摘了满满一筐', img: 'https://picsum.photos/seed/farm4/200/300', top: true },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center w-1/5 ${item.top ? 'justify-start' : 'justify-end'} h-full relative`}>
                {item.top ? (
                  <>
                    <div className="text-sm font-bold text-gray-800 mb-2">{item.date}</div>
                    <img src={item.img} alt={item.date} className="w-16 h-24 object-cover rounded-xl shadow-sm mb-4" referrerPolicy="no-referrer" />
                    <div className="w-3 h-3 bg-white border-2 border-[#22c55e] rounded-full absolute top-1/2 -translate-y-1/2"></div>
                    <div className="w-0.5 h-12 bg-[#86efac] absolute top-1/2 -translate-y-full mt-1.5"></div>
                    <p className="text-[10px] text-gray-700 mt-4 px-1 text-center leading-tight absolute top-1/2 pt-4">{item.text}</p>
                  </>
                ) : (
                  <>
                    <p className="text-[10px] text-gray-700 mb-4 px-1 text-center leading-tight absolute bottom-1/2 pb-4">{item.text}</p>
                    <div className="w-0.5 h-12 bg-[#86efac] absolute bottom-1/2 translate-y-full mb-1.5"></div>
                    <div className="w-3 h-3 bg-white border-2 border-[#22c55e] rounded-full absolute bottom-1/2 translate-y-1/2"></div>
                    <div className="text-sm font-bold text-gray-800 mt-4 mb-2">{item.date}</div>
                    <img src={item.img} alt={item.date} className="w-16 h-24 object-cover rounded-xl shadow-sm" referrerPolicy="no-referrer" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action Button for Publishing */}
        <div className="sticky bottom-28 flex justify-end px-6 pointer-events-none z-40">
          <button 
            onClick={() => setActiveTab('publish')}
            className="w-14 h-14 bg-[#22c55e] rounded-full shadow-lg shadow-green-600/30 flex items-center justify-center text-white active:scale-95 transition-transform pointer-events-auto"
          >
            <Camera size={28} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f4fcf6] flex flex-col pb-24">
      {/* Header */}
      <div className="pt-12 pb-4 px-4 flex items-center justify-between text-white">
        <div className="flex items-baseline gap-4">
          <h1 className="text-2xl font-bold">推荐</h1>
          <h2 className="text-lg opacity-80 font-medium">关注</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-1">
            <Search size={24} />
          </button>
          <button className="p-1 relative">
            <Bell size={24} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#4ade80]"></span>
          </button>
        </div>
      </div>

      {/* Feed Content */}
      <div className="flex-1 px-4 mt-2">
        {/* Timeline Banner */}
        <div 
          onClick={() => setView('timeline')}
          className="bg-white/40 backdrop-blur-sm rounded-2xl p-3 mb-4 flex items-center justify-between cursor-pointer active:scale-95 transition-transform border border-white/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-full flex items-center justify-center text-white font-bold shadow-sm">
              我
            </div>
            <div>
              <h3 className="text-gray-800 font-bold text-sm">我的作物生长故事</h3>
              <p className="text-gray-600 text-xs">记录点滴，见证丰收</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-gray-500" />
        </div>

        <div 
          onClick={() => setView('detail')}
          className="bg-white rounded-3xl p-4 shadow-sm mb-6 cursor-pointer active:scale-[0.98] transition-transform"
        >
          <div className="relative mb-4">
            <img src="https://picsum.photos/seed/farm5/800/600" alt="Post" className="w-full h-64 object-cover rounded-2xl" referrerPolicy="no-referrer" />
            <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-6 h-6 rounded-full border border-white object-cover" referrerPolicy="no-referrer" />
              <span className="text-white text-xs font-medium pr-1">王大华</span>
            </div>
          </div>
          <p className="text-lg font-bold text-gray-800 mb-6 leading-relaxed">
            今天摘了满满一盆沙瓤番茄，都是自然熟的！
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <ThumbsUp size={24} className="text-gray-700" />
                <span className="text-xl font-bold text-gray-800">128</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#22c55e] p-1.5 rounded flex items-center justify-center">
                  <MessageSquare size={16} className="text-white fill-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-800 block leading-none">36</span>
                  <span className="text-xs text-gray-500">看起来好新鲜！</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <ChevronRight size={20} className="text-gray-400" />
              <button className="bg-[#22c55e] text-white px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-1 active:scale-95 transition-transform relative">
                <div className="absolute -top-4 -left-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-800 font-bold border-2 border-white shadow-sm">
                  $
                </div>
                <span className="ml-4">打赏</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Publishing */}
      <div className="sticky bottom-28 flex justify-end px-6 pointer-events-none z-40">
        <button 
          onClick={() => setActiveTab('publish')}
          className="w-14 h-14 bg-[#22c55e] rounded-full shadow-lg shadow-green-600/30 flex items-center justify-center text-white active:scale-95 transition-transform pointer-events-auto"
        >
          <Camera size={28} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
