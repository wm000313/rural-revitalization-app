import { ArrowLeft, Bell, Settings, Award, ShieldAlert } from 'lucide-react';

export default function PlatformNotifications({ navigate }: { navigate: (page: string) => void }) {
  const notifications = [
    {
      id: 1,
      title: '系统升级通知',
      content: '为了提供更好的服务，平台将于今晚 02:00-04:00 进行系统维护升级，期间部分功能可能无法使用，给您带来的不便敬请谅解。',
      time: '今天 14:30',
      icon: <Settings size={20} className="text-blue-500" />,
      bg: 'bg-blue-100',
      isRead: false
    },
    {
      id: 2,
      title: '认证审核通过',
      content: '恭喜！您的“有机农产品种植基地”认证已通过审核，现在您可以享受更多平台流量扶持。',
      time: '昨天 09:15',
      icon: <Award size={20} className="text-green-500" />,
      bg: 'bg-green-100',
      isRead: true
    },
    {
      id: 3,
      title: '防诈骗提醒',
      content: '近期有不法分子冒充平台客服进行诈骗，请广大农户提高警惕，平台客服不会以任何理由索要您的银行卡密码或验证码。',
      time: '2023-10-24',
      icon: <ShieldAlert size={20} className="text-orange-500" />,
      bg: 'bg-orange-100',
      isRead: true
    }
  ];

  return (
    <div className="h-full flex flex-col bg-[#f5f7fa] font-sans relative">
      <div className="pt-12 px-4 flex items-center bg-white pb-4 shadow-sm z-10 sticky top-0">
        <button onClick={() => navigate('main')} className="text-gray-800">
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 mx-auto pr-7">平台通知</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {notifications.map(item => (
            <div key={item.id} className={`bg-white rounded-2xl p-4 shadow-sm relative overflow-hidden ${!item.isRead ? 'border-l-4 border-green-500' : ''}`}>
              {!item.isRead && (
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full"></div>
              )}
              <div className="flex gap-3">
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${item.bg}`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className={`text-sm ${!item.isRead ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                      {item.title}
                    </h3>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
