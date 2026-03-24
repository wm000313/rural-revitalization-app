import { useState, useRef, useEffect } from 'react';
import { Mic, ArrowLeft, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FarmerAvatar from '../components/FarmerAvatar';

interface Message {
  id: number;
  type: 'user' | 'ai';
  text: string;
}

export default function AIQA({ navigate }: { navigate: (page: string) => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      text: '您好！我是您的AI农技专家。您可以点击上方麦克风语音提问，或者在下方输入框中直接输入您的问题，例如：“水稻叶子发黄怎么办？”'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const newMsg: Message = { id: Date.now(), type: 'user', text };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      let aiText = "这是一个AI生成的回复。根据您描述的情况，建议您密切关注作物生长状态，适时补充所需养分，并注意病虫害的预防。如果情况严重，请及时联系当地农技人员进行实地诊断。";
      
      if (text.includes('水稻') || text.includes('发黄')) {
        aiText = "水稻叶片发黄可能是由缺氮、缺锌或是水分管理不当引起的。建议：\n1. 检查田间是否缺水或长期积水。\n2. 适当追施尿素等速效氮肥。\n3. 如果是缺锌引起的“缩苗”，可喷施硫酸锌溶液。";
      } else if (text.includes('蚜虫')) {
        aiText = "关于蚜虫的防治建议：\n1. 物理防治：悬挂黄板诱杀成虫，或用清水/肥皂水冲洗。\n2. 生物防治：引入七星瓢虫等天敌，或喷施微生物农药。\n3. 药剂防治：可选用苦参碱类生物农药，注意避开作物开花期喷施。";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'ai', text: aiText }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleMicClick = () => {
    if (isRecording) {
      setIsRecording(false);
      handleSend("水稻叶子发黄怎么办？");
    } else {
      setIsRecording(true);
      // Automatically stop recording after 2 seconds for demo purposes
      setTimeout(() => {
        setIsRecording(false);
        handleSend("水稻叶子发黄怎么办？");
      }, 2000);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-[#d4f5d4] to-[#f4fcf6] font-sans relative">
      <div className="pt-12 px-4 flex items-center mb-4 flex-shrink-0">
        <button onClick={() => navigate('main')} className="text-gray-800">
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mx-auto pr-7">AI农技问答</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {/* Voice Input Area */}
        <div className="mb-6 flex justify-center">
          <div 
            onClick={handleMicClick}
            className={`bg-white/60 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center border border-white shadow-sm cursor-pointer transition-all duration-300 w-full max-w-sm ${isRecording ? 'scale-105 shadow-green-200 ring-4 ring-green-100' : 'hover:scale-105'}`}
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white mb-3 shadow-lg transition-colors duration-300 ${isRecording ? 'bg-red-500 animate-pulse shadow-red-500/30' : 'bg-[#32d74b] shadow-green-500/30'}`}>
              <Mic size={36} />
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-1 drop-shadow-md">
              {isRecording ? '正在聆听...' : '点击说话'}
            </h2>
            <p className="text-gray-600 text-xs">比如 “水稻叶子发黄怎么办”</p>
          </div>
        </div>

        {/* Chat History */}
        <div className="space-y-4">
          {messages.map((msg) => (
            <motion.div 
              initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={msg.id} 
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.type === 'ai' && (
                <div className="w-10 h-10 rounded-full bg-white border-2 border-green-200 overflow-hidden flex-shrink-0 mr-2 shadow-sm flex items-center justify-center p-1">
                  <FarmerAvatar size={32} />
                </div>
              )}
              
              <div className={`max-w-[75%] rounded-2xl p-4 shadow-sm text-sm ${
                msg.type === 'user' 
                  ? 'bg-[#32d74b] text-white rounded-tr-sm' 
                  : 'bg-white text-gray-800 rounded-tl-sm border border-green-50'
              }`}>
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-1' : ''}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-green-200 overflow-hidden flex-shrink-0 mr-2 shadow-sm flex items-center justify-center p-1">
                <FarmerAvatar size={32} />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-green-50 flex items-center gap-2">
                <Loader2 size={16} className="text-[#32d74b] animate-spin" />
                <span className="text-sm text-gray-500">AI正在思考...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Bottom Input Area */}
      <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-100 p-4 pb-8 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] z-20">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
            placeholder="输入您的问题..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
          />
          <button 
            onClick={() => handleSend(inputValue)}
            disabled={!inputValue.trim() || isTyping}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all ${
              !inputValue.trim() || isTyping ? 'bg-gray-300' : 'bg-[#32d74b] hover:bg-green-600 hover:scale-105 active:scale-95'
            }`}
          >
            <Send size={20} className="ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
