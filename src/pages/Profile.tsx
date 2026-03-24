import { Store, Wallet, BookOpen, PhoneCall, ChevronRight, CheckCircle2, MessageSquare, Bell, Package, HeadphonesIcon, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function Profile() {
  const [showService, setShowService] = useState(false);

  if (showService) {
    return (
      <div className="min-h-full bg-[#f4fcf6] flex flex-col pb-24">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#4ade80] to-[#22c55e] pt-12 pb-6 px-4 text-white relative">
          <button onClick={() => setShowService(false)} className="absolute left-4 p-2 -ml-2">
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-xl font-bold text-center">消息与客服中心</h1>
        </div>

        <div className="flex-1 px-4 pt-6 space-y-4">
          {/* Messages */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800 text-lg">交易消息</h3>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
            <div className="text-gray-600">
              <span className="font-medium text-gray-800">买家 李小明：</span>请问西红柿新鲜吗？
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800 text-lg">系统通知</h3>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
            <div className="text-gray-600">
              【平台活动】9月助农直播节 报名通道已开启！
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800 text-lg">物流消息</h3>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
            <div className="text-gray-600 leading-relaxed">
              订单20240901002：正在配送中，预计今日18:00送达
            </div>
          </div>

          {/* Service Buttons */}
          <div className="pt-6 space-y-4">
            <button className="w-full bg-gradient-to-r from-green-100 to-green-200 text-green-800 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-sm">
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text">AI智能客服</span>
              <span className="text-green-600/30">|</span>
              <span className="text-green-700">7x24小时在线</span>
            </button>
            <button className="w-full bg-[#22c55e] text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md">
              <span>转人工客服</span>
              <span className="text-white/30">|</span>
              <span>8:00-22:00在线</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#f4fcf6] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-500 to-green-600 pt-16 pb-24 px-6 text-white rounded-b-[3rem] relative shadow-sm">
        <button 
          onClick={() => setShowService(true)}
          className="absolute top-6 right-6 p-2 bg-white/20 rounded-full backdrop-blur-sm active:scale-95 transition-transform"
        >
          <Bell size={24} className="text-white" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-green-500"></span>
        </button>
        <div className="flex items-center gap-5 mt-4">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150" alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white/30 object-cover shadow-lg" referrerPolicy="no-referrer" />
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              王大华
              <CheckCircle2 size={24} className="text-yellow-300" />
            </h2>
            <span className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium mt-3 backdrop-blur-sm border border-white/30">
              北大甄选认证农户
            </span>
          </div>
        </div>
      </div>

      {/* Data Board */}
      <div className="px-5 -mt-14 relative z-10">
        <div className="bg-white rounded-3xl shadow-md p-6 flex justify-between items-center text-center border border-gray-50">
          <div className="flex-1">
            <div className="text-3xl font-bold text-gray-800">1</div>
            <div className="text-sm text-gray-500 mt-2 font-medium">今日收入(笔)</div>
          </div>
          <div className="w-px h-12 bg-gray-100"></div>
          <div className="flex-1">
            <div className="text-3xl font-bold text-gray-800">8</div>
            <div className="text-sm text-gray-500 mt-2 font-medium">店铺浏览量</div>
          </div>
          <div className="w-px h-12 bg-gray-100"></div>
          <div className="flex-1">
            <div className="text-3xl font-bold text-gray-800">9</div>
            <div className="text-sm text-gray-500 mt-2 font-medium">粉丝数</div>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="px-5 mt-8 space-y-4">
        <button className="w-full bg-white p-6 rounded-3xl shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform border border-gray-50">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <Store size={28} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-800">我的店铺</h3>
              <p className="text-base text-gray-500 mt-1">管理商品与订单</p>
            </div>
          </div>
          <ChevronRight size={28} className="text-gray-300" />
        </button>

        <button className="w-full bg-white p-6 rounded-3xl shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform border border-gray-50">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
              <Wallet size={28} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-800">我的钱包</h3>
              <p className="text-base text-gray-500 mt-1">查看收入与提现</p>
            </div>
          </div>
          <ChevronRight size={28} className="text-gray-300" />
        </button>

        <button className="w-full bg-white p-6 rounded-3xl shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform border border-gray-50">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <BookOpen size={28} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-800">我的日记</h3>
              <p className="text-base text-gray-500 mt-1">管理已发布内容</p>
            </div>
          </div>
          <ChevronRight size={28} className="text-gray-300" />
        </button>

        <button 
          className="w-full bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-3xl shadow-md flex items-center justify-between text-white active:scale-[0.98] transition-transform mt-8"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <PhoneCall size={28} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">求助村管家</h3>
              <p className="text-base text-green-100 mt-1">一键呼叫线下帮助</p>
            </div>
          </div>
          <ChevronRight size={28} className="text-white/70" />
        </button>
      </div>
    </div>
  );
}
