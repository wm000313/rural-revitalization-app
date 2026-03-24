import { ArrowLeft, TrendingUp, TrendingDown, Search, Filter } from 'lucide-react';

export default function MarketQuotes({ navigate }: { navigate: (page: string) => void }) {
  const quotes = [
    {
      id: 1,
      name: '大豆',
      price: '3.20',
      unit: '元/斤',
      trend: 'up',
      change: '+0.15',
      date: '10-26',
      market: '全国平均'
    },
    {
      id: 2,
      name: '玉米',
      price: '1.45',
      unit: '元/斤',
      trend: 'down',
      change: '-0.02',
      date: '10-26',
      market: '全国平均'
    },
    {
      id: 3,
      name: '小麦',
      price: '1.38',
      unit: '元/斤',
      trend: 'up',
      change: '+0.01',
      date: '10-26',
      market: '华北地区'
    },
    {
      id: 4,
      name: '苹果 (红富士)',
      price: '4.50',
      unit: '元/斤',
      trend: 'up',
      change: '+0.30',
      date: '10-26',
      market: '山东产区'
    },
    {
      id: 5,
      name: '生猪 (外三元)',
      price: '7.80',
      unit: '元/斤',
      trend: 'down',
      change: '-0.10',
      date: '10-26',
      market: '全国平均'
    }
  ];

  return (
    <div className="h-full flex flex-col bg-[#f0fdf4] font-sans relative">
      <div className="pt-12 px-4 flex items-center bg-gradient-to-r from-[#4ade80] to-[#22c55e] pb-6 text-white shadow-sm z-10 sticky top-0">
        <button onClick={() => navigate('main')} className="text-white">
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-xl font-bold mx-auto pr-7">市场行情</h1>
      </div>

      <div className="bg-white/80 backdrop-blur-sm px-4 py-3 shadow-sm z-10 flex gap-2">
        <div className="flex-1 bg-gray-100 rounded-full flex items-center px-4 py-2">
          <Search size={18} className="text-gray-400 mr-2" />
          <input type="text" placeholder="搜索农产品..." className="bg-transparent outline-none w-full text-sm text-gray-700" />
        </div>
        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
          <Filter size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="flex bg-gray-50 px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <div className="flex-1">农产品</div>
            <div className="w-24 text-right">均价</div>
            <div className="w-20 text-right">涨跌</div>
          </div>
          <div className="divide-y divide-gray-100">
            {quotes.map((item) => (
              <div key={item.id} className="flex px-4 py-4 items-center hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-sm">{item.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.market}</div>
                </div>
                <div className="w-24 text-right">
                  <div className="font-bold text-gray-900">{item.price}</div>
                  <div className="text-xs text-gray-400">{item.unit}</div>
                </div>
                <div className="w-20 text-right flex justify-end">
                  <div className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-md ${
                    item.trend === 'up' ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'
                  }`}>
                    {item.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
