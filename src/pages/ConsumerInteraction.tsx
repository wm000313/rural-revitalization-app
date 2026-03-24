import { ArrowLeft, MessageSquare, Heart, Star, MoreHorizontal } from 'lucide-react';

export default function ConsumerInteraction({ navigate }: { navigate: (page: string) => void }) {
  const interactions = [
    {
      id: 1,
      user: '王先生',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0',
      action: '评价了你的商品',
      content: '“收到的大米非常新鲜，口感很好，下次还会再来买！”',
      target: '东北长粒香米 5kg',
      time: '10分钟前',
      type: 'comment'
    },
    {
      id: 2,
      user: '李女士',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&backgroundColor=e2e8f0',
      action: '关注了你的店铺',
      content: '',
      target: '',
      time: '1小时前',
      type: 'follow'
    },
    {
      id: 3,
      user: '张老板',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Max&backgroundColor=e2e8f0',
      action: '收藏了你的日记',
      content: '“今年雨水充足，果园的长势喜人，期待大丰收...”',
      target: '',
      time: '昨天',
      type: 'like'
    }
  ];

  return (
    <div className="h-full flex flex-col bg-[#f5f7fa] font-sans relative">
      <div className="pt-12 px-4 flex items-center bg-white pb-4 shadow-sm z-10 sticky top-0">
        <button onClick={() => navigate('main')} className="text-gray-800">
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 mx-auto pr-7">消费者互动</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {interactions.map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                    <img src={item.avatar} alt={item.user} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">{item.user}</h3>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </div>
                <button className="text-gray-400">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <div className="pl-13">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium text-green-600 mr-1">{item.action}</span>
                </p>
                {item.content && (
                  <div className="bg-gray-50 rounded-xl p-3 mb-2 text-sm text-gray-600">
                    {item.content}
                  </div>
                )}
                {item.target && (
                  <div className="flex items-center gap-2 mt-2 bg-green-50 px-3 py-2 rounded-lg w-fit">
                    <div className="w-8 h-8 bg-white rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <Heart size={16} className="text-green-500" fill="currentColor" />
                    </div>
                    <span className="text-xs text-green-800 font-medium">{item.target}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
