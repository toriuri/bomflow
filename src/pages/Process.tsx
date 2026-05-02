import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ClipboardList, Palette, Code, Radio, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    title: '상담 및 진단',
    icon: <MessageSquare />,
    desc: '브랜드의 현재 상황과 목표를 정밀 파악합니다. 단순히 "무엇"을 만드는가가 아니라 "왜" 만드는지에 집중합니다.',
    customer: '기존 사이트 공유, 희망 래퍼런스 전달',
    duration: '1~3일'
  },
  {
    num: '02',
    title: '전략 기획',
    icon: <ClipboardList />,
    desc: '사용자 여정(User Flow)을 설계하고, 이탈을 막는 스토리보드를 작성합니다. 메뉴 구조도와 IA가 확정되는 단계입니다.',
    customer: '기획안 검토 및 메뉴 확정',
    duration: '1~2주'
  },
  {
    num: '03',
    title: 'UX/UI 디자인',
    icon: <Palette />,
    desc: '확정된 기획을 바탕으로 브랜드 고유의 시각적 언어를 만듭니다. 고정 관념을 깬 감각적인 레이아웃을 제안합니다.',
    customer: '디자인 피드백 및 시안 확정',
    duration: '2~3주'
  },
  {
    num: '04',
    title: '개발 및 테스트',
    icon: <Code />,
    desc: '최신 웹 표준(React, TypeScript 등)을 사용하여 견고하게 개발합니다. 다양한 디바이스와 브라우저 환경에서 검증합니다.',
    customer: '중간 개발 결과물 확인',
    duration: '2~4주'
  },
  {
    num: '05',
    title: '최종 오픈 및 인계',
    icon: <Radio />,
    desc: '검색 엔진 등록과 최종 배포를 진행합니다. 클라이언트가 직접 관리할 수 있도록 매뉴얼 교육과 소유권을 이전합니다.',
    customer: '잔금 결제 및 관리 매뉴얼 수령',
    duration: '1~3일'
  }
];

const pricingData = [
  {
    name: 'Basic',
    price: '150~',
    desc: '소규모 비즈니스나 개인 브랜딩을 위한 최적의 패키지',
    features: [
      '표준 반응형 웹 제작',
      '기본 SEO 최적화',
      '최대 5페이지 이내',
      '1개월 무상 유지보수',
      '관리자 페이지 제공'
    ],
    highlight: false
  },
  {
    name: 'Standard',
    price: '350~',
    desc: '성장을 준비하는 중소기업 및 전문 브랜드를 위한 강력한 솔루션',
    features: [
      'UX 전담 기획 포함',
      '메인 페이지 고도화 애니메이션',
      '고급 검색 최적화(SEO)',
      '최대 12페이지 이내',
      '3개월 무상 유지보수',
      '마케팅 추적 코드 심기'
    ],
    highlight: true
  },
  {
    name: 'Premium',
    price: '700~',
    desc: '대규모 커머스나 복잡한 로직이 필요한 엔터프라이즈 레벨',
    features: [
      '비즈니스 맞춤 솔루션 개발',
      '결제/회원 시스템 고도화',
      '초고속 로딩 튜닝(Lighthouse 90+)',
      '페이지 수 제한 없음',
      '12개월 무상 유지보수',
      '1년간 분기별 퍼포먼스 리포트'
    ],
    highlight: false
  }
];

export default function Process() {
  return (
    <div className="flex flex-col">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-32">
             <h1 className="text-5xl md:text-7xl font-semibold mb-6">Work Process</h1>
             <p className="text-xl text-gray-500 font-sans max-w-2xl mx-auto">
                걱정하지 마세요. 봄플로우의 모든 과정은<br /> 투명하고 체계적으로 관리됩니다.
             </p>
          </div>

          <div className="space-y-32 mb-40">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 flex items-start gap-8">
                  <div className="text-7xl md:text-9xl font-semibold text-brand-accent/10 italic leading-none">{step.num}</div>
                  <div className="pt-4 md:pt-10">
                    <div className="w-16 h-16 bg-brand-primary text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                       {step.icon}
                    </div>
                    <h2 className="text-4xl font-semibold mb-6">{step.title}</h2>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed">
                       {step.desc}
                    </p>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full lg:pt-10">
                   <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 flex flex-col gap-8">
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-black uppercase text-brand-accent tracking-widest pl-1">Customer's Role</p>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 font-sans text-brand-primary">
                           {step.customer}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-black uppercase text-brand-accent tracking-widest pl-1">Estimated Duration</p>
                        <div className="bg-brand-primary text-white p-6 rounded-2xl font-sans font-bold flex items-center justify-between">
                           <span>{step.duration}</span>
                           <ArrowRight size={18} />
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Section Integrated */}
          <div className="pt-20 border-t border-gray-100">
            <div className="text-center mb-20">
               <h2 className="text-5xl md:text-7xl font-semibold mb-6">Price Guide</h2>
               <p className="text-xl text-gray-500 font-sans max-w-2xl mx-auto italic">
                  "투명한 가격 정책이 신뢰의 시작입니다."
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {pricingData.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-10 rounded-[3rem] border ${
                    plan.highlight 
                      ? 'bg-brand-primary text-white border-brand-primary shadow-2xl scale-105 z-10' 
                      : 'bg-white text-brand-primary border-gray-100'
                  }`}
                >
                  {plan.highlight && (
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white py-1 px-6 rounded-full text-xs font-black uppercase tracking-widest">
                        Most Popular
                     </div>
                  )}
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 opacity-50">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                     <span className="text-sm font-bold">KRW</span>
                     <span className="text-5xl font-sans font-semibold">{plan.price}</span>
                     <span className="text-sm font-bold opacity-50">만원~</span>
                  </div>
                  <p className={`text-sm mb-10 font-sans leading-relaxed ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                     {plan.desc}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                     {plan.features.map(feature => (
                        <div key={feature} className="flex items-center gap-3">
                           <div className={`p-1 rounded-full ${plan.highlight ? 'bg-brand-accent' : 'bg-gray-100'}`}>
                              <Check size={12} className={plan.highlight ? 'text-white' : 'text-gray-500'} />
                           </div>
                           <span className="text-sm font-sans">{feature}</span>
                        </div>
                     ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className={`block w-full py-5 rounded-2xl font-bold text-center transition-all ${
                      plan.highlight 
                        ? 'bg-white text-brand-primary hover:bg-gray-100' 
                        : 'bg-brand-primary text-white hover:bg-gray-800'
                    }`}
                  >
                     상담 신청하기
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 mb-40">
               <h3 className="text-2xl mb-8 font-sans">알려드립니다</h3>
               <ul className="space-y-4 text-gray-500 font-sans text-sm list-disc pl-5">
                  <li>위 가격은 최소 산정 비용이며, 요구사항 및 복잡도에 따라 상향될 수 있습니다.</li>
                  <li>호스팅(도메인/서버) 비용은 별도이며, 희망 시 대행해 드립니다.</li>
                  <li>기획안이 명확히 있을 경우 상담 시 추가 할인이 적용될 수 있습니다.</li>
                  <li>작업 착수 시 선금 50%, 완료 후 잔금 50% 결제가 원칙입니다. (법인 시 조율 가능)</li>
               </ul>
            </div>
          </div>

          <div className="mt-20 p-16 bg-brand-accent text-white rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
             <h2 className="text-4xl md:text-5xl font-semibold mb-8">준비를 마쳤다면 시작해볼까요?</h2>
             <p className="mb-12 opacity-80 text-lg">첫 상담은 무료이며, 언제든 환영합니다.</p>
             <Link to="/contact" className="bg-white text-brand-accent px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-lg">상담 예약하기</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
