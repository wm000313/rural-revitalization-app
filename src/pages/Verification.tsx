import { useState, useRef, type ChangeEvent } from 'react';
import { FileText, UserCheck, ShieldCheck, Check, ChevronLeft, MonitorPlay, Camera, Award, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FarmerAvatar from '../components/FarmerAvatar';

export default function Verification({ onComplete, setHideTabBar }: { onComplete: () => void, setHideTabBar: (hide: boolean) => void }) {
  const [step, setStep] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [organicCert, setOrganicCert] = useState<string | null>(null);
  const [heritageCert, setHeritageCert] = useState<string | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showAgreementModal, setShowAgreementModal] = useState(false);
  const organicInputRef = useRef<HTMLInputElement>(null);
  const heritageInputRef = useRef<HTMLInputElement>(null);

  // Step 0: Guide
  // Step 1: Login
  // Step 2: WeChat Success
  // Step 3: Advanced Certification
  // Step 4: Brand Empowerment
  // Step 5: Face Scan
  // Step 6: Success
  // Step 7: Agreement

  const goToStep = (newStep: number) => {
    setStep(newStep);
    if (newStep > 1) {
      setHideTabBar(true);
    } else {
      setHideTabBar(false);
    }
  };

  const renderGuide = () => (
    <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f0fdf4] flex flex-col relative font-sans">
      <div className="pt-10 pb-4 text-center relative z-10">
        <h1 className="text-3xl font-black text-white tracking-wider drop-shadow-md" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>认证流程指引</h1>
      </div>
      
      <div className="flex-1 px-4 flex flex-col gap-6 pb-48 pt-4 relative z-10">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 flex items-center shadow-sm">
          <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mr-4 shrink-0">
            <FileText size={32} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">1.线上实名认证</h3>
            <p className="text-gray-600 text-sm leading-relaxed">提交身份证及个人信息<br/>完成线上实名认证</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-6 flex items-center shadow-sm opacity-90">
          <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mr-4 shrink-0">
            <UserCheck size={32} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">2.线下协管员核实</h3>
            <p className="text-gray-600 text-sm leading-relaxed">村协管员上门核实<br/>农户真实信息与种植情况</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 flex items-center shadow-sm opacity-90">
          <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mr-4 shrink-0">
            <ShieldCheck size={32} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">3.成为认证卖家</h3>
            <p className="text-gray-600 text-sm leading-relaxed">审核通过后<br/>获得认证农户售卖权限</p>
          </div>
        </div>
        {/* Decorative Space Filler */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/50 backdrop-blur-md rounded-3xl border border-white/80 p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-300/30 rounded-full blur-3xl -mr-10 -mt-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400/30 rounded-full blur-2xl -ml-10 -mb-10"></div>
          
          {/* Floral accent near avatar */}
          <div className="absolute top-6 left-6 text-pink-300/60 rotate-12">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C12 22 4 16 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 16 12 22 12 22Z" />
            </svg>
          </div>
          <div className="absolute bottom-16 right-6 text-yellow-300/50 -rotate-12">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C12 22 4 16 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 16 12 22 12 22Z" />
            </svg>
          </div>

          <FarmerAvatar size={100} className="mb-4 z-10" />
          
          <h4 className="text-green-900 font-black text-xl mb-2 z-10 tracking-wider">加入我们，助力乡村振兴</h4>
          <p className="text-green-800/80 text-sm text-center font-bold z-10 leading-relaxed">
            让优质农产品直达千家万户<br/>提高收入，打造个人品牌
          </p>
        </motion.div>

        <div className="mt-8 mb-12">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => goToStep(1)}
            className="w-full py-4 bg-[#16a34a] rounded-full text-white text-xl font-black shadow-[0_10px_20px_rgba(22,163,74,0.3)] relative z-20"
          >
            立即注册
          </motion.button>
        </div>
      </div>
    </div>
  );

  const renderLogin = () => (
    <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f0fdf4] flex flex-col relative font-sans">
      {/* Top Right Icon */}
      <div className="absolute top-6 right-6">
        <div className="relative">
          <MonitorPlay size={32} className="text-white" strokeWidth={1.5} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#4ade80]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center pt-32 px-6">
        <h1 className="text-6xl font-black text-white tracking-widest drop-shadow-md mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
          我是农户
        </h1>
        <p className="text-2xl text-green-900 font-medium tracking-wider mb-40">
          微信授权快速登录
        </p>

        <button
          onClick={() => goToStep(2)}
          className="w-full max-w-[280px] py-4 bg-[#22c55e] rounded-full text-white text-2xl font-bold shadow-[0_8px_16px_rgba(34,197,94,0.3)] active:scale-95 transition-transform"
        >
          微信授权登录
        </button>
      </div>
    </div>
  );

  const renderWeChatSuccess = () => (
    <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f0fdf4] flex flex-col relative font-sans">
      <div className="absolute top-6 right-6">
        <div className="relative">
          <MonitorPlay size={32} className="text-white" strokeWidth={1.5} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#4ade80]"></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center pt-32 px-6">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-8">
          <Check size={48} className="text-green-500" strokeWidth={3} />
        </div>
        
        <h1 className="text-4xl font-black text-white tracking-widest drop-shadow-md mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          微信授权成功
        </h1>
        <p className="text-xl text-green-900 font-medium tracking-wider mb-32">
          即将进行下一步验证
        </p>

        <button
          onClick={() => goToStep(3)}
          className="w-full max-w-[280px] py-4 bg-[#22c55e] rounded-full text-white text-2xl font-bold shadow-[0_8px_16px_rgba(34,197,94,0.3)] active:scale-95 transition-transform"
        >
          下一步：高级认证
        </button>
      </div>
    </div>
  );

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>, type: 'organic' | 'heritage') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'organic') {
          setOrganicCert(reader.result as string);
        } else {
          setHeritageCert(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const renderAdvancedCert = () => (
    <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f0fdf4] flex flex-col relative font-sans">
      <div className="absolute top-6 right-6 z-10">
        <button onClick={() => goToStep(4)} className="text-white font-medium text-lg bg-black/20 px-4 py-1 rounded-full active:scale-95 transition-transform">
          跳过
        </button>
      </div>

      <div className="pt-16 pb-6 text-center">
        <h1 className="text-4xl font-black text-[#166534] tracking-wider drop-shadow-sm">农户高级认证</h1>
      </div>

      <div className="flex-1 px-4 space-y-4 overflow-y-auto pb-32 scrollbar-hide">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">绿色有机资质证书</h3>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={organicInputRef} 
            onChange={(e) => handleImageUpload(e, 'organic')} 
          />
          {organicCert ? (
            <div className="relative w-full h-32 rounded-xl overflow-hidden border-2 border-green-500">
              <img src={organicCert} alt="Organic Certificate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => organicInputRef.current?.click()}>
                <span className="text-white font-bold flex items-center gap-2"><Upload size={20}/> 重新上传</span>
              </div>
            </div>
          ) : (
            <button onClick={() => organicInputRef.current?.click()} className="w-full py-4 bg-gradient-to-r from-[#16a34a] to-[#15803d] rounded-xl text-white text-lg font-bold flex items-center justify-center shadow-md active:scale-95 transition-transform">
              <Camera className="mr-2" size={24} />
              点击上传绿色有机证书照片
            </button>
          )}
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">非遗农艺技艺证明</h3>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={heritageInputRef} 
            onChange={(e) => handleImageUpload(e, 'heritage')} 
          />
          {heritageCert ? (
            <div className="relative w-full h-32 rounded-xl overflow-hidden border-2 border-green-500">
              <img src={heritageCert} alt="Heritage Certificate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => heritageInputRef.current?.click()}>
                <span className="text-white font-bold flex items-center gap-2"><Upload size={20}/> 重新上传</span>
              </div>
            </div>
          ) : (
            <button onClick={() => heritageInputRef.current?.click()} className="w-full py-4 bg-gradient-to-r from-[#16a34a] to-[#15803d] rounded-xl text-white text-lg font-bold flex items-center justify-center shadow-md active:scale-95 transition-transform">
              <Camera className="mr-2" size={24} />
              点击上传非遗技艺证明材料
            </button>
          )}
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">专属标识预览</h3>
          <div className="space-y-3">
            <div className={`flex items-center p-3 rounded-xl border transition-colors ${organicCert ? 'bg-green-50 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.2)]' : 'bg-gray-50 border-gray-200'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors ${organicCert ? 'bg-green-500' : 'bg-gray-300'}`}>
                <Check size={20} className="text-white" strokeWidth={3} />
              </div>
              <span className={`text-lg font-bold transition-colors ${organicCert ? 'text-green-700' : 'text-gray-400'}`}>绿色有机农户</span>
            </div>
            <div className={`flex items-center p-3 rounded-xl border transition-colors ${heritageCert ? 'bg-red-50 border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'bg-gray-50 border-gray-200'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors ${heritageCert ? 'bg-red-500' : 'bg-gray-300'}`}>
                <Award size={20} className="text-white" />
              </div>
              <span className={`text-lg font-bold transition-colors ${heritageCert ? 'text-red-600' : 'text-gray-400'}`}>非遗农艺从业者</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 px-6">
        <button
          onClick={() => goToStep(4)}
          className="w-full py-4 bg-[#22c55e] rounded-full text-white text-2xl font-bold shadow-[0_8px_16px_rgba(34,197,94,0.3)] active:scale-95 transition-transform"
        >
          下一步
        </button>
      </div>
    </div>
  );

  const renderBrandEmpowerment = () => (
    <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f0fdf4] flex flex-col relative font-sans">
      <div className="absolute top-6 right-6 z-10">
        <button onClick={() => goToStep(5)} className="text-white font-medium text-lg bg-black/20 px-4 py-1 rounded-full active:scale-95 transition-transform">
          跳过
        </button>
      </div>

      <div className="pt-16 pb-6 text-center">
        <h1 className="text-4xl font-black text-[#166534] tracking-wider drop-shadow-sm">北大甄选 品牌赋能</h1>
      </div>

      <div className="flex-1 px-4 pt-4">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 relative">
          <div className="space-y-6 mt-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                <Check size={20} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-2xl font-bold text-gray-900">1. 产品品质达标</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                <Check size={20} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-2xl font-bold text-gray-900">2. 月度日记发布≥5篇</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                <Check size={20} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-2xl font-bold text-gray-900">3. 用户好评率≥95%</span>
            </div>
          </div>
          
          <div className="mt-12 text-right">
            <span className="text-3xl font-black text-gray-900 tracking-widest">北大甄选</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-0 right-0 px-12">
        <button
          onClick={() => setShowReviewModal(true)}
          className="w-full py-4 bg-[#22c55e] rounded-full text-white text-2xl font-bold shadow-[0_8px_16px_rgba(34,197,94,0.3)] active:scale-95 transition-transform"
        >
          立即申请
        </button>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center px-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowReviewModal(false)}></div>
          
          {/* Modal Content */}
          <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden relative z-10 animate-[scale-up_0.2s_ease-out]">
            <div className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] py-6 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <MonitorPlay size={32} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-widest drop-shadow-sm">审核中</h3>
            </div>
            
            <div className="p-8 text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                审核成功将会为您佩戴上<br/><span className="text-[#166534] font-bold text-xl tracking-wider">北大甄选徽章</span>
              </p>
              
              <button
                onClick={() => {
                  setShowReviewModal(false);
                  goToStep(5);
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full text-white text-xl font-bold shadow-md active:scale-95 transition-transform"
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderFaceScan = () => {
    const handleScan = () => {
      setScanning(true);
      setTimeout(() => {
        goToStep(6);
      }, 2000);
    };

    return (
      <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f0fdf4] flex flex-col relative font-sans">
        <div className="absolute top-6 right-6">
          <div className="relative">
            <MonitorPlay size={32} className="text-white" strokeWidth={1.5} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#4ade80]"></div>
          </div>
        </div>
        <div className="pt-16 pb-6 text-center">
        <h1 className="text-4xl font-black text-[#166534] tracking-wider drop-shadow-sm">实名认证·刷脸验证</h1>
      </div>
        
        <div className="flex-1 flex flex-col items-center px-6 pt-10">
          <div className="w-full aspect-square max-w-[280px] border-[3px] border-white/60 rounded-lg relative flex items-center justify-center mb-16">
            {/* Corner markers */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-[6px] border-l-[6px] border-white rounded-tl-sm"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-[6px] border-r-[6px] border-white rounded-tr-sm"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-[6px] border-l-[6px] border-white rounded-bl-sm"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-[6px] border-r-[6px] border-white rounded-br-sm"></div>
            
            <span className="text-3xl font-bold text-gray-900 tracking-widest">
              {scanning ? '识别中...' : '人脸识别中'}
            </span>
            
            {scanning && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse"></div>
            )}
          </div>

          <button
            onClick={handleScan}
            disabled={scanning}
            className="w-full max-w-[280px] py-4 bg-[#22c55e] rounded-full text-white text-2xl font-bold shadow-[0_8px_16px_rgba(34,197,94,0.3)] active:scale-95 transition-transform"
          >
            开始识别
          </button>
        </div>
      </div>
    );
  };

  const renderSuccess = () => (
    <div className="min-h-full bg-gradient-to-b from-[#4ade80] to-[#f0fdf4] flex flex-col relative font-sans overflow-hidden">
      {/* Confetti pieces */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-blue-500 rotate-45"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-red-500 rotate-12"></div>
      <div className="absolute top-40 left-1/4 w-2 h-4 bg-yellow-400 rotate-45"></div>
      <div className="absolute top-32 right-10 w-3 h-3 bg-purple-500 rotate-45"></div>
      <div className="absolute top-1/3 left-8 w-2 h-2 bg-pink-500 rounded-full"></div>
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-yellow-500 rotate-12"></div>

      <div className="absolute top-6 left-4 z-10">
        <ChevronLeft size={36} className="text-gray-900" onClick={() => goToStep(1)} />
      </div>
      <div className="pt-6 pb-6 text-center relative z-10">
        <h1 className="text-2xl font-bold text-gray-900 tracking-widest">认证结果</h1>
      </div>
      
      <div className="flex-1 flex flex-col items-center pt-16 px-6 relative z-10">
        <div className="w-36 h-36 bg-[#22c55e] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(34,197,94,0.3)] mb-10 border-[6px] border-green-400/50">
          <Check size={80} className="text-white" strokeWidth={4} />
        </div>
        
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-widest">认证通过!</h2>
        <p className="text-2xl text-gray-800 mb-20">您已成为平台认证农户</p>

        <button
          onClick={() => goToStep(7)}
          className="w-full max-w-[280px] py-4 bg-[#16a34a] rounded-full text-white text-2xl font-bold shadow-[0_8px_16px_rgba(22,163,74,0.3)] active:scale-95 transition-transform"
        >
          签署电子协议
        </button>
      </div>
    </div>
  );

  const renderAgreement = () => (
    <div className="min-h-full bg-[#f4fcf6] flex flex-col relative font-sans">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#4ade80] to-[#22c55e] pt-12 pb-24 px-6 text-white relative rounded-b-[2.5rem]">
        <h1 className="text-2xl font-bold text-center tracking-wider">平台审核状态</h1>
      </div>
      
      <div className="flex-1 px-4 flex flex-col -mt-16 relative z-10">
        <div className="bg-white rounded-[2rem] p-6 shadow-sm mb-auto border border-gray-50">
          <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
            <span className="text-lg font-bold text-gray-800">审核状态:</span>
            <div className="flex items-center text-[#22c55e] bg-green-50 px-3 py-1.5 rounded-full">
              <Check size={18} className="mr-1 bg-[#22c55e] text-white rounded-full p-0.5" />
              <span className="text-sm font-bold">已通过初审</span>
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <div className="w-1 h-4 bg-[#22c55e] rounded-full"></div>
            电子合作协议
          </h3>
          
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 text-center border border-green-100/50 mb-8 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-bl-full"></div>
            <FileText size={32} className="text-green-500 mx-auto mb-3 opacity-80" />
            <h4 className="text-xl font-black text-[#166534] mb-2 tracking-wide">《农户平台合作协议》</h4>
            <p className="text-gray-500 text-sm">请仔细阅读协议内容，确认无误后签署</p>
          </div>
          
          <button 
            onClick={() => setShowAgreementModal(true)}
            className="w-full py-3.5 bg-green-50 text-green-700 rounded-full text-lg font-bold active:scale-95 transition-transform border border-green-200"
          >
            阅读协议
          </button>
        </div>

        <div className="pb-8 pt-6 px-2">
          <button
            onClick={() => {
              setHideTabBar(false);
              onComplete();
            }}
            className="w-full py-4 bg-[#22c55e] rounded-full text-white text-xl font-bold shadow-lg shadow-green-500/20 active:scale-95 transition-transform"
          >
            签署协议
          </button>
        </div>
      </div>

      {/* Agreement Modal */}
      {showAgreementModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAgreementModal(false)}></div>
          
          <div className="bg-white rounded-3xl w-full max-w-md h-[70vh] flex flex-col relative z-10 animate-[scale-up_0.2s_ease-out]">
            <div className="py-4 border-b border-gray-100 flex items-center justify-center relative">
              <h3 className="text-lg font-bold text-gray-900">《农户平台合作协议》</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 text-sm text-gray-600 leading-relaxed space-y-4">
              <p><span className="font-bold text-gray-800">甲方：</span>乡村振兴农产品直采平台</p>
              <p><span className="font-bold text-gray-800">乙方：</span>入驻农户（即您）</p>
              
              <h4 className="font-bold text-gray-800 mt-4">一、 合作内容</h4>
              <p>1. 甲方为乙方提供农产品展示、销售、助农直播及农技问答等线上服务。</p>
              <p>2. 乙方承诺所售农产品符合国家质量安全标准，如实描述产品信息，不掺假、不售假。</p>

              <h4 className="font-bold text-gray-800 mt-4">二、 双方权利与义务</h4>
              <p>1. <span className="font-bold">甲方权利：</span>有权对乙方的资质及商品进行审核；有权对违规商品进行下架处理。</p>
              <p>2. <span className="font-bold">乙方义务：</span>按时发货，保证商品质量；积极配合处理消费者售后问题。</p>
              
              <h4 className="font-bold text-gray-800 mt-4">三、 费用与结算</h4>
              <p>1. 平台作为助农项目，目前对认证农户实行<span className="text-green-600 font-bold">免佣金</span>政策。</p>
              <p>2. 订单交易资金将在买家确认收货后，于T+1个工作日结算至乙方平台钱包。</p>

              <h4 className="font-bold text-gray-800 mt-4">四、 违约责任</h4>
              <p>若乙方因产品质量问题引发严重客诉，甲方有权取消其“北大甄选”标识及认证资格。</p>
              
              <p className="mt-6 text-gray-400 text-xs text-center">-- 到底了 --</p>
            </div>
            
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => setShowAgreementModal(false)}
                className="w-full py-3 bg-[#22c55e] rounded-full text-white text-lg font-bold active:scale-95 transition-transform"
              >
                我已阅读并同意
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  switch (step) {
    case 0: return renderGuide();
    case 1: return renderLogin();
    case 2: return renderWeChatSuccess();
    case 3: return renderAdvancedCert();
    case 4: return renderBrandEmpowerment();
    case 5: return renderFaceScan();
    case 6: return renderSuccess();
    case 7: return renderAgreement();
    default: return renderGuide();
  }
}
