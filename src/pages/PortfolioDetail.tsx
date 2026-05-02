import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Layout, Target, Search, BarChart } from 'lucide-react';

export default function PortfolioDetail() {
  const { id } = useParams();

  // Mock data for detail
  const project = {
    title: 'TechNova Corporate Renewal',
    category: '기업 사이트 / 리뉴얼',
    client: 'TechNova Global',
    duration: '8주 (기획 2주 / 디자인 3주 / 개발 3주)',
    problem: '기존 홈페이지가 모바일 대응이 미흡하고, 기업의 현대적인 이미지를 제대로 전달하지 못해 브랜드 신뢰도가 하락하고 있었습니다. 또한 정보 계층 구조가 복잡하여 방문자들이 원하는 기술 문서를 찾는 데 평균 3분 이상 소요되는 문제가 있었습니다.',
    solution: '먼저, 복잡한 메뉴를 서비스 카테고리별로 재구성하여 접근성을 60% 향상시켰습니다. 디자인적으로는 고대비 폰트와 넓은 여백을 활용하여 "정밀하고 신뢰가는" 브랜드 이미지를 구축했습니다. 특히, 모바일에서 정보 탐색이 용이하도록 스티키 네비게이션과 퀵 서치 기능을 도입했습니다.',
    result: '리뉴얼 전 대비 모바일 평균 체류 시간이 45% 증가했으며, 서비스 문의 버튼 클릭률(CTR)이 기존 대비 2.8배 성장하는 성과를 거두었습니다. TechNova 본사로부터 글로벌 표준 디자인 가이드로 채택되는 쾌거를 이루었습니다.',
    imageBefore: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  };

  return (
    <div className="flex flex-col">
      <section className="py-12 bg-gray-50">
        <div className="container-custom px-6">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-accent mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-brand-accent font-bold tracking-widest text-sm mb-4 uppercase">{project.category}</p>
              <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">{project.title}</h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-wrap gap-8 text-sm border-l border-gray-200 pl-8 mb-4 font-sans"
            >
              <div>
                <p className="text-gray-400 uppercase font-bold tracking-tighter mb-1">Client</p>
                <p className="font-bold">{project.client}</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase font-bold tracking-tighter mb-1">Duration</p>
                <p className="font-bold">{project.duration}</p>
              </div>
            </motion.div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mb-20">
             <img 
               src={project.imageAfter} 
               alt={project.title} 
               className="w-full h-auto"
               referrerPolicy="no-referrer"
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
             <div className="lg:col-span-8 space-y-20">
                <section>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center"><Search size={20} /></div>
                     <h2 className="text-3xl">문제 정의 (Problem)</h2>
                  </div>
                  <p className="text-lg text-gray-600 font-sans leading-relaxed pl-16">
                    {project.problem}
                  </p>
                </section>

                <section>
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center"><Target size={20} /></div>
                      <h2 className="text-3xl font-sans">해결 방법 (Solution)</h2>
                   </div>
                   <div className="pl-16 space-y-12">
                      <p className="text-lg text-gray-600 font-sans leading-relaxed">
                        {project.solution}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-gray-100 p-10 rounded-3xl">
                         <div className="space-y-4">
                            <p className="font-bold font-sans text-xl border-b border-gray-200 pb-2">기존 이슈 (AS-IS)</p>
                            <ul className="text-sm text-gray-500 space-y-2 font-sans">
                               <li>• 올드한 디자인과 이미지</li>
                               <li>• 낮은 모바일 호환성</li>
                               <li>• 복잡한 메뉴 구조</li>
                            </ul>
                         </div>
                         <div className="space-y-4">
                            <p className="font-bold font-sans text-xl border-b border-gray-200 pb-2">개선 포인트 (TO-BE)</p>
                            <ul className="text-sm text-brand-accent space-y-2 font-sans font-bold">
                               <li>• 프리미엄 브랜드 아이덴티티</li>
                               <li>• Full Responsive Web</li>
                               <li>• UX Flow 최적화</li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </section>

                <section>
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center"><BarChart size={20} /></div>
                      <h2 className="text-3xl font-sans">결과 (Result)</h2>
                   </div>
                   <p className="text-lg text-gray-600 font-sans leading-relaxed pl-16">
                     {project.result}
                   </p>
                </section>
             </div>

             <aside className="lg:col-span-4 sticky top-32 space-y-10">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm font-sans">
                   <h3 className="text-lg font-bold mb-6">사용된 기술 & 전략</h3>
                   <div className="flex flex-wrap gap-2 mb-8">
                      {['React', 'TypeScript', 'SEO Optimization', 'UX Strategy', 'Framer Motion', 'Lighthouse 95+'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium text-gray-500">{tag}</span>
                      ))}
                   </div>
                   <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">웹사이트 방문하기</button>
                </div>
                
                <div className="bg-brand-accent/5 p-8 rounded-3xl border border-brand-accent/10">
                   <p className="text-xs font-black uppercase text-brand-accent mb-4 tracking-widest">Review from Client</p>
                   <p className="text-gray-600 font-sans italic leading-relaxed mb-6">
                      "단순한 외형 변화가 아니라 우리 비즈니스의 본질을 꿰뚫는 기획이 놀라웠습니다. 덕분에 해외 파트너사들과의 미팅이 훨씬 수월해졌습니다."
                   </p>
                   <p className="font-bold">- TechNova Marketing Director</p>
                </div>
             </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
