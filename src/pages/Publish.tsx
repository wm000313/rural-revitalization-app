import { useState } from 'react';
import { ChevronLeft, Image as ImageIcon, Play, Search, Bell, Mic, Wand2, Video, Radio } from 'lucide-react';

export default function Publish({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [publishType, setPublishType] = useState<'text' | 'video' | 'live' | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [hasImage, setHasImage] = useState(false);

  const handleAIWrite = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedText('今天摘了满满一盆沙瓤番茄，都是自然熟的！纯天然无公害，新鲜直达~');
      setIsGenerating(false);
      setHasImage(true);
    }, 1500);
  };

  const handleAISubtitles = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  // Initial Selection Screen
  if (publishType === null) {
    return (
      <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f4fcf6] flex flex-col pb-24">
        <div className="pt-12 pb-6 px-4 text-white relative flex justify-center items-center">
          <button onClick={() => setActiveTab('diary')} className="absolute left-4 p-2 -ml-2">
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-xl font-bold">选择发布类型</h1>
        </div>
        
        <div className="flex-1 px-4 flex flex-col gap-6 pt-8">
          <button 
            onClick={() => { setPublishType('text'); setHasImage(false); }}
            className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-6 active:scale-95 transition-transform"
          >
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500">
              <ImageIcon size={32} />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-1">图文日记</h2>
              <p className="text-gray-500 text-sm">分享农作日常，支持AI写文案</p>
            </div>
          </button>

          <button 
            onClick={() => setPublishType('video')}
            className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-6 active:scale-95 transition-transform"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
              <Video size={32} />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-1">视频日记</h2>
              <p className="text-gray-500 text-sm">记录动态瞬间，智能生成字幕</p>
            </div>
          </button>

          <button 
            onClick={() => setPublishType('live')}
            className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-6 active:scale-95 transition-transform"
          >
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
              <Radio size={32} />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-1">开启直播</h2>
              <p className="text-gray-500 text-sm">实时展示农物生长，AI脚本建议</p>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f4fcf6] flex flex-col pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -left-10 top-20 w-40 h-40 text-green-600">
          <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,95.6,-3.1C94.4,11.9,86,26.5,75.8,39.4C65.6,52.3,53.6,63.5,40.1,71.2C26.6,78.9,11.6,83.1,-3.5,88.1C-18.6,93.1,-33.8,98.9,-47.1,93.5C-60.4,88.1,-71.8,71.5,-80.1,54.1C-88.4,36.7,-93.6,18.4,-92.4,0.7C-91.2,-17,-83.6,-34,-73.3,-48.1C-63,-62.2,-50,-73.4,-35.8,-80.4C-21.6,-87.4,-6.2,-90.2,8.1,-88.4C22.4,-86.6,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Header */}
      <div className="pt-12 pb-6 px-4 text-white relative z-10">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => setPublishType(null)} className="p-2 -ml-2">
            <ChevronLeft size={28} />
          </button>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">
              {publishType === 'text' ? '发布图片日记' : 
               publishType === 'video' ? '发布农户日记' : 
               '开启云种植直播'}
            </h1>
            {publishType === 'video' && <span className="text-sm opacity-90">视频</span>}
          </div>
          <button className="p-2 -mr-2 relative">
            <Bell size={24} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-[#4ade80]"></span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-4 relative z-10 flex flex-col">
        {publishType === 'text' && (
          <div className="flex flex-col flex-1">
            <div className="bg-white rounded-3xl p-4 shadow-sm mb-8">
              {!hasImage ? (
                <div 
                  onClick={() => setHasImage(true)}
                  className="w-full h-64 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 cursor-pointer active:bg-gray-100 transition-colors"
                >
                  <ImageIcon size={48} className="mb-3 text-gray-300" />
                  <span className="font-bold text-lg">点击添加图片</span>
                </div>
              ) : (
                <img src="https://picsum.photos/seed/publish1/800/600" alt="Selected" className="w-full h-64 object-cover rounded-2xl" referrerPolicy="no-referrer" />
              )}
              
              <div className="flex flex-col items-center mt-8 mb-6">
                <button className="text-[#22c55e] mb-2">
                  <Mic size={48} strokeWidth={1.5} />
                </button>
                <span className="text-base font-bold text-gray-800">按住说话</span>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <textarea 
                  className="w-full bg-transparent resize-none outline-none text-gray-700 placeholder-gray-400 text-center text-base"
                  placeholder="写下你的农作日常吧"
                  value={generatedText}
                  onChange={(e) => setGeneratedText(e.target.value)}
                  rows={2}
                ></textarea>
              </div>
            </div>
            
            <div className="mt-auto pb-6">
              <button 
                onClick={() => setActiveTab('diary')}
                className="w-full bg-[#22c55e] text-white font-bold text-lg py-3.5 rounded-full shadow-lg active:scale-95 transition-transform"
              >
                发布
              </button>
            </div>
          </div>
        )}

        {publishType === 'video' && (
          <div className="flex flex-col flex-1">
            <div className="bg-white rounded-3xl p-4 shadow-sm mb-8">
              <div className="w-full aspect-[4/3] bg-gray-900 rounded-2xl relative overflow-hidden mb-8">
                <img src="https://picsum.photos/seed/publish2/800/600" alt="Video thumbnail" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play size={32} className="text-[#22c55e] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/30 rounded-full">
                  <div className="w-1/3 h-full bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col items-center relative">
                <button 
                  onClick={handleAISubtitles}
                  className="bg-[#22c55e] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-green-200 active:scale-95 transition-transform relative z-20"
                >
                  智能加字幕
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#22c55e] rotate-45"></div>
                </button>

                {isGenerating && (
                  <div className="mt-4 bg-white rounded-2xl p-6 w-full flex flex-col items-center justify-center text-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.08)] border border-gray-50 relative z-10 animate-in fade-in slide-in-from-top-4">
                    <Wand2 className="animate-pulse mb-3 text-[#22c55e]" size={36} />
                    <span className="font-bold text-base">正在生成字幕</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto pb-6">
              <button 
                onClick={() => setActiveTab('diary')}
                className="w-full bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-white font-bold text-lg py-3.5 rounded-full shadow-lg shadow-green-200 active:scale-95 transition-transform"
              >
                发布
              </button>
            </div>
          </div>
        )}

        {publishType === 'live' && (
          <div className="flex flex-col flex-1 items-center">
            <div className="w-full bg-white rounded-full px-4 py-3 flex items-center gap-2 mb-8 shadow-sm">
              <Search size={20} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="输入直播主题（如：草莓采摘现场）" 
                className="bg-transparent outline-none flex-1 text-gray-700 text-sm"
              />
            </div>

            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8 relative">
              <img src="https://picsum.photos/seed/publish3/400/400" alt="Live cover" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-bold mb-6 shadow-sm active:scale-95 transition-transform text-base border border-gray-100 flex items-center gap-2">
              <Wand2 size={20} className="text-[#22c55e]" />
              AI直播脚本建议
            </button>

            <button className="bg-[#22c55e] text-white px-8 py-3 rounded-full font-bold mb-8 shadow-md text-base active:scale-95 transition-transform">
              直播封面
            </button>

            <div className="mt-auto w-full pb-6">
              <button 
                onClick={() => setActiveTab('diary')}
                className="w-full bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-white font-bold text-lg py-3.5 rounded-full shadow-lg shadow-green-200 active:scale-95 transition-transform"
              >
                开始直播
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
