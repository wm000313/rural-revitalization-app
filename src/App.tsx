/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import TabBar from './components/TabBar';
import Home from './pages/Home';
import Sell from './pages/Sell';
import Diary from './pages/Diary';
import Profile from './pages/Profile';
import Verification from './pages/Verification';
import AIQA from './pages/AIQA';
import EmergencyAid from './pages/EmergencyAid';
import Publish from './pages/Publish';
import ConsumerInteraction from './pages/ConsumerInteraction';
import PlatformNotifications from './pages/PlatformNotifications';
import MarketQuotes from './pages/MarketQuotes';
import FeaturedContent from './pages/FeaturedContent';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentPage, setCurrentPage] = useState('verification'); // 'verification', 'main', 'aiqa', 'emergency', 'consumer_interaction', 'platform_notifications', 'market_quotes', 'featured_content'
  const [hideTabBar, setHideTabBar] = useState(false);

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  if (currentPage === 'verification') {
    return (
      <div className="flex justify-center items-center bg-gray-900 min-h-screen">
        <div className="w-full sm:w-[440px] h-screen sm:h-[956px] sm:rounded-[50px] bg-[#f0fdf4] flex flex-col relative overflow-hidden shadow-2xl sm:border-[12px] sm:border-black">
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <Verification onComplete={() => setCurrentPage('main')} setHideTabBar={setHideTabBar} />
          </div>
          {!hideTabBar && <TabBar activeTab="home" setActiveTab={() => {}} />}
        </div>
      </div>
    );
  }

  if (currentPage === 'aiqa') {
    return (
      <div className="flex justify-center items-center bg-gray-900 min-h-screen">
        <div className="w-full sm:w-[440px] h-screen sm:h-[956px] sm:rounded-[50px] bg-white flex flex-col relative overflow-hidden shadow-2xl sm:border-[12px] sm:border-black">
          <AIQA navigate={navigate} />
        </div>
      </div>
    );
  }

  if (currentPage === 'emergency') {
    return (
      <div className="flex justify-center items-center bg-gray-900 min-h-screen">
        <div className="w-full sm:w-[440px] h-screen sm:h-[956px] sm:rounded-[50px] bg-white flex flex-col relative overflow-hidden shadow-2xl sm:border-[12px] sm:border-black">
          <EmergencyAid navigate={navigate} />
        </div>
      </div>
    );
  }

  if (currentPage === 'consumer_interaction') {
    return (
      <div className="flex justify-center items-center bg-gray-900 min-h-screen">
        <div className="w-full sm:w-[440px] h-screen sm:h-[956px] sm:rounded-[50px] bg-white flex flex-col relative overflow-hidden shadow-2xl sm:border-[12px] sm:border-black">
          <ConsumerInteraction navigate={navigate} />
        </div>
      </div>
    );
  }

  if (currentPage === 'platform_notifications') {
    return (
      <div className="flex justify-center items-center bg-gray-900 min-h-screen">
        <div className="w-full sm:w-[440px] h-screen sm:h-[956px] sm:rounded-[50px] bg-white flex flex-col relative overflow-hidden shadow-2xl sm:border-[12px] sm:border-black">
          <PlatformNotifications navigate={navigate} />
        </div>
      </div>
    );
  }

  if (currentPage === 'market_quotes') {
    return (
      <div className="flex justify-center items-center bg-gray-900 min-h-screen">
        <div className="w-full sm:w-[440px] h-screen sm:h-[956px] sm:rounded-[50px] bg-white flex flex-col relative overflow-hidden shadow-2xl sm:border-[12px] sm:border-black">
          <MarketQuotes navigate={navigate} />
        </div>
      </div>
    );
  }

  if (currentPage === 'featured_content') {
    return (
      <div className="flex justify-center items-center bg-gray-900 min-h-screen">
        <div className="w-full sm:w-[440px] h-screen sm:h-[956px] sm:rounded-[50px] bg-white flex flex-col relative overflow-hidden shadow-2xl sm:border-[12px] sm:border-black">
          <FeaturedContent navigate={navigate} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-gray-900 min-h-screen">
      <div className="w-full sm:w-[440px] h-screen sm:h-[956px] sm:rounded-[50px] bg-white flex flex-col relative overflow-hidden shadow-2xl sm:border-[12px] sm:border-black">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {activeTab === 'home' && <Home navigate={navigate} setActiveTab={setActiveTab} />}
          {activeTab === 'sell' && <Sell navigate={navigate} setActiveTab={setActiveTab} />}
          {activeTab === 'diary' && <Diary setActiveTab={setActiveTab} />}
          {activeTab === 'profile' && <Profile />}
          {activeTab === 'publish' && <Publish setActiveTab={setActiveTab} />}
        </div>
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
