import { ArrowLeft, Phone, AlertCircle } from 'lucide-react';

export default function EmergencyAid({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div className="h-full overflow-y-auto bg-[#fef2f2] pb-24 font-sans">
      <div className="bg-gradient-to-r from-[#ef4444] to-[#f97316] pt-12 pb-6 px-4 rounded-b-3xl shadow-md">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate('main')} className="text-white">
            <ArrowLeft size={28} />
          </button>
          <h1 className="text-2xl font-bold text-white mx-auto pr-7">紧急助农</h1>
        </div>
        <p className="text-white/90 text-center text-sm">遇到滞销、灾害等紧急情况，请立即联系我们</p>
      </div>

      <div className="px-4 -mt-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
              <Phone size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">24小时助农热线</h2>
              <p className="text-gray-500 text-sm">专业团队随时待命</p>
            </div>
          </div>
          <button className="w-full bg-red-500 text-white font-bold text-lg py-4 rounded-xl shadow-md active:scale-95 transition-transform">
            一键拨打 400-123-4567
          </button>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-4 px-2">常见紧急情况处理</h3>
        <div className="space-y-4">
          {[
            { title: '农产品严重滞销', desc: '平台将启动绿色通道，优先推荐、流量扶持。' },
            { title: '遭遇极端天气灾害', desc: '联系农业专家进行灾后补救指导，减少损失。' },
            { title: '突发病虫害爆发', desc: 'AI快速识别，专家在线会诊，提供紧急用药方案。' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm flex items-start space-x-3">
              <AlertCircle className="text-orange-500 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
