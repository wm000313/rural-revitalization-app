import { ArrowLeft, Eye, ThumbsUp, Clock } from 'lucide-react';

export default function FeaturedContent({ navigate }: { navigate: (page: string) => void }) {
  const articles = [
    {
      id: 1,
      title: '当季水果热销榜单发布，快来看看你的产品上榜了吗？',
      image: 'https://picsum.photos/seed/farm8/800/400',
      category: '行业分析',
      views: '1.2w',
      likes: '342',
      time: '2小时前'
    },
    {
      id: 2,
      title: '农业部：加大对新型农业经营主体信贷支持力度',
      image: 'https://picsum.photos/seed/farm9/800/400',
      category: '政策解读',
      views: '8900',
      likes: '566',
      time: '5小时前'
    },
    {
      id: 3,
      title: '如何利用短视频和直播把农产品卖到全国各地？',
      image: 'https://picsum.photos/seed/farm10/800/400',
      category: '电商运营',
      views: '2.5w',
      likes: '1205',
      time: '昨天'
    }
  ];

  return (
    <div className="h-full flex flex-col bg-[#f5f7fa] font-sans relative">
      <div className="pt-12 px-4 flex items-center bg-white pb-4 shadow-sm z-10 sticky top-0">
        <button onClick={() => navigate('main')} className="text-gray-800">
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 mx-auto pr-7">热门推荐</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="h-40 w-full relative">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-[#22c55e] text-white text-xs px-2 py-1 rounded-md font-bold shadow-sm">
                {article.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-gray-900 font-bold text-lg leading-tight mb-3">
                {article.title}
              </h3>
              <div className="flex items-center text-xs text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{article.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{article.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp size={14} />
                  <span>{article.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
