import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe, Layout as LayoutIcon, ShoppingBag, Zap, MessageSquare, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center section-padding bg-brand-secondary overflow-hidden text-brand-primary">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue rounded-full blur-[100px]" />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-accent font-bold tracking-[0.3em] text-sm mb-6 uppercase"
          >
            Digital Agency & UX Design
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-semibold mb-8 leading-[1.1]"
          >
            비즈니스의 흐름을<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">새롭게 디자인하다</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
          >
            사용자가 머물고 싶고, 비즈니스가 순환되는 최적의 디지털 공간을 만듭니다. 
            봄플로우는 당신의 가치를 성과로 증명합니다.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
              프로젝트 문의하기 <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="bg-white border border-brand-accent/20 text-brand-primary px-10 py-4 rounded-full font-bold hover:bg-brand-muted transition-all">
              포트폴리오 보기
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest text-gray-400 font-bold uppercase">Scroll Down</span>
          <div className="w-[1px] h-10 bg-gray-200" />
        </motion.div>
      </section>

      {/* Why BOMFLOW Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl mb-6">왜 봄플로우인가요?</h2>
              <p className="text-gray-500 font-sans">
                우리는 단순히 예쁜 웹사이트를 만드는 것에 그치지 않습니다. 
                사용자의 행동 패턴을 분석하고, 비즈니스 성장에 직결되는 최적의 유입 경로(Flow)를 설계합니다.
              </p>
            </div>
            <Link to="/about" className="text-brand-accent font-bold flex items-center gap-2 hover:gap-4 transition-all mb-2">
              우리의 철학 더 보기 <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'UX 중심 설계', 
                desc: '사용자의 시선과 클릭의 흐름을 분석하여 이탈률을 최소화하는 비즈니스 경로를 만듭니다.',
                icon: <LayoutIcon className="text-brand-accent" />
              },
              { 
                title: '매출로 이어지는 랜딩', 
                desc: '강력한 카피라이팅과 전략적인 배치를 통해 방문자를 실제 고객으로 전환시킵니다.',
                icon: <Zap className="text-brand-accent" />
              },
              { 
                title: '1:1 밀착 케어', 
                desc: '공장 찍어내기식이 아닌, 각 브랜드의 정체성과 목표에 맞춘 독립적인 기획을 수행합니다.',
                icon: <CheckCircle2 className="text-brand-accent" />
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 border border-white rounded-3xl bg-brand-muted/10 hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-gray-500 font-sans leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl">함께한 성과들</h2>
            <Link to="/portfolio" className="border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-brand-primary transition-all font-bold">전체 포트폴리오</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: 'TechNova Corporate', category: '기업 사이트', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
              { title: 'Luna Minimal Shop', category: '쇼핑몰', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
              { title: 'Flow SaaS Landing', category: '랜딩페이지', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
              { title: 'Urban Space Studio', category: '브랜드 사이트', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800' },
            ].map((item, i) => (
              <Link key={i} to={`/portfolio/${i}`} className="group block relative overflow-hidden rounded-3xl aspect-[16/10]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                  <p className="text-xs font-bold tracking-widest text-brand-accent mb-2 uppercase">{item.category}</p>
                  <h3 className="text-2xl font-semibold group-hover:text-brand-accent transition-colors">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl md:text-5xl mb-6 font-sans">준비된 서비스</h2>
            <p className="text-gray-500 font-sans max-w-2xl mx-auto">
              비즈니스의 성격과 목적에 최적화된 맞춤형 솔루션을 제안합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '웹사이트 제작', icon: <Globe size={24} />, desc: '브랜드 가치를 담은 기업 및 브랜드 웹사이트' },
              { title: '쇼핑몰 제작', icon: <ShoppingBag size={24} />, desc: '구매 전환을 극대화하는 커머스 플랫폼' },
              { title: '랜딩페이지', icon: <Zap size={24} />, desc: '놀라운 효율의 고도화된 마케팅 랜딩페이지' },
              { title: '유지보수', icon: <MessageSquare size={24} />, desc: '끊김 없는 비즈니스를 위한 정기 관리 서비스' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-brand-accent">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3 font-sans">{item.title}</h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section / Contact Form Preview */}
      <section className="section-padding bg-white relative">
         <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">더 늦기 전에,<br /><span className="text-brand-accent underline">흐름</span>을 바꾸세요.</h2>
              <p className="text-lg text-gray-500 mb-10 font-sans leading-relaxed">
                현재 운영 중인 사이트의 진단이 필요하신가요? 
                새로운 프로젝트의 시작이 고민이신가요? 
                봄플로우가 함께 고민하겠습니다.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Fast Call</p>
                    <p className="text-xl font-bold">010-7397-1528</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Inquiry</p>
                    <p className="text-xl font-bold">laudate@naver.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-warm/50 p-8 md:p-12 rounded-[2.5rem] border border-brand-accent/10 shadow-sm relative z-10">
              <h3 className="text-2xl mb-8 font-sans">무료 상담 신청</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">이름</label>
                    <input type="text" placeholder="성함 또는 업체명" className="w-full bg-white border border-brand-accent/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">연락처</label>
                    <input type="tel" placeholder="010-0000-0000" className="w-full bg-white border border-brand-accent/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">서비스 선택</label>
                  <select className="w-full bg-white border border-brand-accent/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all">
                    <option>웹사이트 제작</option>
                    <option>쇼핑몰 제작</option>
                    <option>랜딩페이지</option>
                    <option>리뉴얼</option>
                    <option>유지보수</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">문의 내용</label>
                  <textarea rows={4} placeholder="프로젝트에 대해 간략히 설명해주세요." className="w-full bg-white border border-brand-accent/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all resize-none" />
                </div>
                <button className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg">상담 메시지 보내기</button>
              </form>
            </div>
         </div>
      </section>
    </div>
  );
}
