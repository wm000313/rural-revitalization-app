import React from 'react';
import { motion } from 'framer-motion';

const SpringBackground: React.FC = () => {
  // 生成随机的花瓣数据
  const petals = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: 10 + Math.random() * 15,
    animationDelay: Math.random() * -20,
    size: Math.random() * 12 + 8,
    // 随机选择温暖的春日色彩：浅粉、樱花粉、嫩黄、浅绿
    color: ['#fbcfe8', '#fce7f3', '#fef08a', '#dcfce7'][Math.floor(Math.random() * 4)],
    opacity: Math.random() * 0.4 + 0.3
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-5%]"
          style={{ left: p.left }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: p.animationDuration,
            delay: p.animationDelay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* 简单的花瓣 SVG */}
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color} style={{ opacity: p.opacity }}>
            <path d="M12 22C12 22 4 16 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 16 12 22 12 22Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SpringBackground;
