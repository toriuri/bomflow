import { motion } from 'motion/react';
import { Globe, ShoppingBag, Zap, RefreshCw, Wrench, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    id: 'web',
    title: '웹사이트 제작',
    icon: <Globe />,
    recommended: ['기업 브랜딩이 필요한 업체', '고급스러운 포트폴리오 사이트', '정보 전달이 명확해야 하는 공공기관'],
    scope: ['맞춤형 UI/UX 디자인', '반응형 퍼블리싱', '관리자 페이지 구성', 'SEO 검색 최적화'],
    duration: '4주 ~ 8주',
    examples: '기업 사이트, 브랜드 공식 홈페이지, 커뮤니티',
    desc: '브랜드의 신뢰도를 높이고 핵심 정보를 효율적으로 전달하는 가장 완벽한 베이스캠프를 구축합니다.'
  },
  {
    id: 'mall',
    title: '쇼핑몰 제작',
    icon: <ShoppingBag />,
    recommended: ['자사 쇼핑몰 구축 희망 브랜드', '디자인 커스터마이징이 필요한 상점', '글로벌 판매를 준비 중인 기업'],
    scope: ['결제 시스템 연동', '회원/주문 관리 솔루션', '모바일 최적화 UX', '마케팅 대시보드'],
    duration: '6주 ~ 10주',
    examples: '패션 브랜드 몰, 코스메틱 전문 몰, 식품 구독 플랫폼',
    desc: '심미성은 기본, 구매 전환율을 극대화하는 UX 흐름을 통해 실제 매출 성장을 견인합니다.'
  },
  {
    id: 'landing',
    title: '랜딩페이지',
    icon: <Zap />,
    recommended: ['신규 서비스 런칭 전 사전 마케팅', '특정 이벤트 홍보 및 회원 모집', '강력한 클릭 유도가 필요한 광고 목적'],
    scope: ['메인 카피라이팅 기획', '초고속 로딩 최적화', 'DB 수집 폼 연동', 'A/B 테스트 레이아웃'],
    duration: '1주 ~ 3주',
    examples: '이벤트 페이지, 앱 사전예약, 전문직 상담 페이지',
    desc: '단 하나의 목표에 집중합니다. 방문자가 스크롤을 멈추고 버튼을 누르게 만드는 고농축 디자인을 제공합니다.'
  },
  {
    id: 'renewal',
    title: '리뉴얼',
    icon: <RefreshCw />,
    recommended: ['오래된 디자인으로 브랜드 이미지가 노후된 곳', '최신 웹 표준 및 반응형 지원이 안 되는 곳', '속도가 느리고 사용자가 불편해하는 사이트'],
    scope: ['기존 데이터 이전', '현재 문제점 정밀 진단', '새로운 브랜드 아이덴티티 반영', '최신 웹 트렌드 적용'],
    duration: '4주 ~ 8주',
    examples: '기존 홈페이지 전체 개편, UI 개선 프로젝트',
    desc: '단순히 겉모습만 바꾸는 것이 아니라, 낡은 로직을 혁신하고 현재 비즈니스 속도에 최적화된 새로운 생명력을 불어넣습니다.'
  },
  {
    id: 'maintenance',
    title: '유지보수',
    icon: <Wrench />,
    recommended: ['상주 개발자가 없어 관리에 어려움을 겪는 곳', '지속적인 콘텐츠 업데이트가 필요한 곳', '정기적인 보안 및 시스템 체크가 필요한 기업'],
    scope: ['배너 및 텍스트 수정', '버그 픽스 및 보안 패치', '신규 기능 모듈 추가', '속도 및 트래픽 모니터링'],
    duration: '상시 (월 단위)',
    examples: '정기 관리 대행, 기술 지원 서비스',
    desc: '당신이 비즈니스의 본질에 집중할 수 있도록, 웹사이트의 모든 기술적 고민을 봄플로우가 책임집니다.'
  }
];

export default function Service() {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeService = services.find(s => s.id === activeId)!;

  return (
    <div className="flex flex-col">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6">Service Area</h1>
            <p className="text-xl text-gray-500 font-sans max-w-2xl mx-auto">
               비즈니스 목적에 따른 최적화된 제작 옵션을 선택하세요. 
               우리는 당신의 도전을 성과로 바꿉니다.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-4 gap-4 mb-20 no-scrollbar justify-center">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold whitespace-nowrap transition-all ${
                  activeId === s.id ? 'bg-brand-primary text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                }`}
              >
                <span className={activeId === s.id ? 'text-brand-accent' : 'text-gray-300'}>{s.icon}</span>
                {s.title}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-7">
               <div className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="p-4 bg-white rounded-2xl shadow-sm text-brand-accent scale-150">
                        {activeService.icon}
                     </div>
                     <h2 className="text-4xl md:text-5xl">{activeService.title}</h2>
                  </div>
                  <p className="text-2xl text-gray-600 font-sans leading-relaxed mb-12">
                     "{activeService.desc}"
                  </p>
                  
                  <div className="space-y-10">
                     <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                           <CheckCircle size={14} /> 이런 분들에게 추천
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           {activeService.recommended.map((item, i) => (
                              <span key={i} className="px-4 py-2 bg-white rounded-lg border border-gray-100 text-sm font-sans text-gray-700">{item}</span>
                           ))}
                        </div>
                     </div>
                     <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                           <CheckCircle size={14} /> 작업 범위
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 font-sans">
                           {activeService.scope.map((item, i) => (
                              <li key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
               <div className="bg-brand-primary text-white p-10 rounded-[3rem] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-8">Summary info</h3>
                    <div className="space-y-8">
                       <div className="flex gap-6">
                          <div className="p-3 bg-white/10 rounded-xl"><Clock size={24} /></div>
                          <div>
                             <p className="text-sm font-bold opacity-50 uppercase mb-1">예상 기간</p>
                             <p className="text-2xl font-sans">{activeService.duration}</p>
                          </div>
                       </div>
                       <div className="border-t border-white/10 pt-8">
                          <p className="text-sm font-bold opacity-50 uppercase mb-4">결과물 예시</p>
                          <p className="text-lg font-sans leading-relaxed">{activeService.examples}</p>
                       </div>
                    </div>
                  </div>
                  <button className="w-full mt-12 bg-brand-accent text-white py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all">이 서비스로 문의하기</button>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
