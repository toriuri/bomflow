import { motion } from 'motion/react';
import { Target, Users, Zap, Award, Search, ChevronRight } from 'lucide-react';

const posts = [
  { 
    id: 1, 
    tag: 'Web Design', 
    title: '2026년 웹 디자인 트렌드: 극도의 미니멀리즘과 마이크로 인터랙션', 
    desc: '화려한 그래픽보다 중요한 것은 사용자가 느끼는 속도와 직관성입니다. 올해 가장 주목해야 할 디자인 흐름 5가지를 소개합니다.',
    date: '2026.04.28'
  },
  { 
    id: 2, 
    tag: 'UX Story', 
    title: '랜딩페이지 고전: "왜 고객은 여기서 이탈할까?" 데이터로 본 솔루션', 
    desc: '평균 이탈률 60%를 15%로 낮춘 실제 리뉴얼 프로젝트 비하인드 스토리를 공유합니다. 핵심은 시선의 흐름입니다.',
    date: '2026.04.15'
  },
  { 
    id: 3, 
    tag: 'Marketing', 
    title: '홈페이지 제작 전 꼭 체크해야 할 SEO 필수 체크리스트 10', 
    desc: '예쁘기만 한 사이트는 죽은 사이트입니다. 구글 검색 상단에 오르기 위한 기술적 SEO 설정을 처음부터 끝까지 알려드립니다.',
    date: '2026.03.30'
  },
  { 
    id: 4, 
    tag: 'Brand Strategy', 
    title: '색상 하나로 비즈니스 신뢰도를 200% 올리는 컬러 사이콜로지', 
    desc: '브랜드 컬러가 고객의 무의식에 미치는 영향은 엄청납니다. 산업군별로 추천하는 컬러 조합과 피해야 할 금기 컬러를 정리했습니다.',
    date: '2026.03.12'
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-20"
          >
            <p className="text-brand-accent font-bold tracking-[0.3em] text-sm mb-6 uppercase">About BOMFLOW</p>
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight">우리는 흐름을 만듭니다.</h1>
            <p className="text-xl text-gray-500 font-sans leading-relaxed">
              사용자의 시선이 머무는 곳, 손가락이 움직이는 방향, 마음이 설레는 순간.<br />
              봄플로우는 당신의 브랜드가 고객의 삶으로 자연스럽게 스며드는 'Flow'를 설계합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-accent/10" />
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-sans mb-6 underline decoration-brand-accent decoration-4 underline-offset-8">브랜드 철학</h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  BOMFLOW의 'BOM'은 새로운 시작과 따뜻한 에너지를 뜻하는 '봄'과, 끊김 없는 연결을 뜻하는 'FLOW'의 결합입니다. 
                  우리는 정적인 웹사이트가 아닌, 생명력 있고 유연하게 반응하는 비즈니스 통로를 지향합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand-accent">
                    <Target size={20} />
                  </div>
                  <h4 className="font-semibold text-lg">UX 중심 접근</h4>
                  <p className="text-sm text-gray-500 font-sans">단순 심미성을 넘어 사용자의 심리와 행동 변화를 유도하는 디지털 설계</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand-accent">
                    <Award size={20} />
                  </div>
                  <h4 className="font-semibold text-lg">성과 기반 디자인</h4>
                  <p className="text-sm text-gray-500 font-sans">방문자를 팬으로, 클릭을 구매로 연결하는 실제적인 비즈니스 효과 창출</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl mb-10">대표 소개</h2>
            <div className="space-y-6 text-gray-600 font-sans leading-relaxed">
              <p>
                안녕하세요, 봄플로우의 대표 <strong>김종현</strong>입니다. 
                저는 수많은 웹사이트들이 '화려함'에는 집착하면서도 '사용성'과 '목적'을 잃어버리는 경우를 많이 보았습니다.
              </p>
              <p>
                진정한 웹사이트는 비즈니스의 언어를 사용자의 언어로 번역하는 매개체가 되어야 합니다. 
                우리는 당신의 비즈니스가 어떤 맥락에서 작동해야 하는지 집요하게 고민하고 결과물로 보여드립니다.
              </p>
              <div className="pt-6">
                <p className="text-brand-accent font-sans italic text-2xl">"비즈니스는 곧 사람의 흐름입니다."</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm aspect-[3/4] bg-gray-100 rounded-[2rem] relative overflow-hidden group">
               <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                 <p className="text-brand-primary font-bold text-xl">Kim Jong Hyun</p>
                 <p className="text-gray-500 text-sm font-sans uppercase tracking-[0.2em]">Founder & Creative Director</p>
               </div>
               <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" 
                alt="Representative"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation & target */}
      <section className="section-padding bg-gray-900 text-white">
         <div className="container-custom">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl mb-6">BOMFLOW의 차별화</h2>
               <p className="text-gray-400 max-w-2xl mx-auto font-sans">우리가 경쟁사와 다른 3가지 결정적인 이유</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <div>
                  <div className="text-brand-accent text-6xl font-sans italic mb-6">01</div>
                  <h3 className="text-2xl mb-4 font-semibold">집착하는 UX 기획</h3>
                  <p className="text-gray-500 font-sans leading-relaxed text-sm">경쟁사 분석을 넘어 사용자가 '왜 여기서 멈추는지' 데이터와 심리학을 기반으로 기획합니다.</p>
               </div>
               <div>
                  <div className="text-brand-accent text-6xl font-sans italic mb-6">02</div>
                  <h3 className="text-2xl mb-4 font-semibold">유동적인 커뮤니케이션</h3>
                  <p className="text-gray-500 font-sans leading-relaxed text-sm">일방적인 보고가 아닌, 프로젝트 전 과정을 실시간 슬랙 및 줌 미팅으로 공유하며 투명하게 진행합니다.</p>
               </div>
               <div>
                  <div className="text-brand-accent text-6xl font-sans italic mb-6">03</div>
                  <h3 className="text-2xl mb-4 font-semibold">지속 가능한 관리</h3>
                  <p className="text-gray-500 font-sans leading-relaxed text-sm">개발 후 '끝'이 아닙니다. 비즈니스가 안정될 때까지 데이터 모니터링과 피드백을 지속적으로 제공합니다.</p>
               </div>
            </div>

            <div className="mt-32 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center">
              <h3 className="text-3xl mb-10">이런 분들에게는 우리가 정답입니다.</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['디자인만 예쁜 사이트에 지친 분', '매출 전환이 일어나지 않아 고민인 분', '체계적인 유지보수가 필요한 브랜드', '초기 기획부터 전문적인 파트너를 찾는 분'].map((tag, i) => (
                  <span key={i} className="px-6 py-3 bg-white/10 rounded-full text-sm font-sans">{tag}</span>
                ))}
              </div>
            </div>
         </div>
      </section>

      {/* Insight Section Merged */}
      <section className="section-padding bg-white">
        <div className="container-custom">
           <div className="max-w-4xl mb-24">
             <p className="text-brand-accent font-bold tracking-[0.3em] text-sm mb-6 uppercase">Daily Insight</p>
             <h2 className="text-5xl md:text-7xl font-semibold mb-10 leading-tight">우리가 고민하고<br /> 연구하는 가치들.</h2>
             
             <div className="relative max-w-lg">
                <input type="text" placeholder="관심 있는 키워드를 검색하세요." className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 pr-16 font-sans" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-brand-primary text-white rounded-xl cursor-pointer hover:bg-gray-800 transition-all">
                   <Search size={20} />
                </div>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {posts.map((post, i) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[16/9] bg-gray-100 rounded-[2.5rem] overflow-hidden mb-8 relative">
                     <img 
                       src={`https://images.unsplash.com/photo-${1550000000000 + (post.id * 1234)}?auto=format&fit=crop&q=80&w=800`} 
                       alt={post.title}
                       className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-brand-primary">
                       {post.tag}
                     </div>
                  </div>
                  <p className="text-xs font-bold text-gray-400 mb-4">{post.date}</p>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-brand-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 font-sans leading-relaxed mb-6 line-clamp-2">
                    {post.desc}
                  </p>
                  <div className="flex items-center gap-2 text-brand-accent font-bold group-hover:gap-4 transition-all">
                    Read More <ChevronRight size={18} />
                  </div>
                </motion.article>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
