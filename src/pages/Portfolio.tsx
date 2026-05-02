import { motion, AnimatePresence } from 'motion/react';
import { Filter, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['전체 보기', '기업 사이트', '브랜드 사이트', '쇼핑몰', '리뉴얼'];

const portfolioData = [
  { id: 1, title: 'TechNova Corporate', category: '기업 사이트', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', desc: '글로벌 기술 기업의 정체성을 담은 미니멀 웹사이트' },
  { id: 2, title: 'Luna Minimal Shop', category: '쇼핑몰', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', desc: '감성적인 UI와 간결한 결제 경험을 강조한 패션몰' },
  { id: 3, title: 'Flow SaaS Landing', category: '리뉴얼', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', desc: '데이터를 직관적으로 보여주는 서비스 홍보 페이지' },
  { id: 4, title: 'Urban Space Studio', category: '브랜드 사이트', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', desc: '건축 디자인 스튜디오의 예술적 감각을 녹여낸 갤러리' },
  { id: 5, title: 'Green Earth Foundation', category: '기업 사이트', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', desc: '지구 환경 보호 비영리 단체의 뉴스레터 중심 사이트' },
  { id: 6, title: 'Pulse Fitness App', category: '쇼핑몰', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800', desc: '피트니스 기어 판매 및 운동 루틴 구독 서비스' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('전체 보기');

  const filteredData = activeTab === '전체 보기' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <div className="flex flex-col">
      <section className="section-padding bg-gray-50/50">
        <div className="container-custom">
          <div className="text-center mb-16">
             <h1 className="text-5xl md:text-7xl font-semibold mb-6">Portfolio</h1>
             <p className="text-xl text-gray-500 font-sans max-w-2xl mx-auto italic">
                "우리는 결과물로 증명합니다."
             </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            <div className="p-2 bg-white rounded-full border border-gray-100 flex items-center gap-2 mr-2">
              <Filter size={14} className="ml-2 text-gray-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mr-2">Filter</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === cat ? 'bg-brand-primary text-white' : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  <Link to={`/portfolio/${item.id}`}>
                    <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-200 mb-6 relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                         <div className="bg-white text-brand-primary w-16 h-16 rounded-full flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform">
                            <ArrowRight size={24} />
                         </div>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-brand-accent tracking-[0.2em] mb-2 uppercase">{item.category}</p>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                    <p className="text-gray-400 font-sans text-sm line-clamp-2">{item.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 bg-brand-primary text-white text-center">
         <div className="container-custom px-6">
            <h2 className="text-4xl md:text-6xl mb-10 leading-tight">당신의 비즈니스도<br />전설이 될 수 있습니다.</h2>
            <Link to="/contact" className="inline-block bg-brand-accent text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-600 transition-all shadow-xl">프로젝트 시작하기</Link>
         </div>
      </section>
    </div>
  );
}
