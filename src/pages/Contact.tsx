import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, ArrowRight, Instagram, Github, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
               >
                 <p className="text-brand-accent font-bold tracking-[0.3em] text-sm mb-6 uppercase">Contact Us</p>
                 <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight">함께 새로운<br />흐름을 시작하세요.</h1>
                 <p className="text-lg text-gray-500 font-sans leading-relaxed mb-12">
                   비즈니스의 성장을 위한 첫 걸음입니다. 
                   봄플로우는 사소한 문의도 가볍게 넘기지 않고 진심을 다해 답변해드립니다.
                 </p>

                 <div className="space-y-8 mb-16">
                    <div className="flex items-start gap-6 group cursor-pointer">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all">
                          <Phone size={24} />
                       </div>
                       <div>
                          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                          <p className="text-2xl font-bold">010-7397-1528</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6 group cursor-pointer">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all">
                          <Mail size={24} />
                       </div>
                       <div>
                          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email</p>
                          <p className="text-2xl font-bold">laudate@naver.com</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6 group cursor-pointer">
                       <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-all">
                          <MessageSquare size={24} />
                       </div>
                       <div>
                          <p className="text-xs font-black text-green-400 uppercase tracking-widest mb-1">Kakao Talk</p>
                          <p className="text-2xl font-bold">카카오 상담 바로가기</p>
                       </div>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all cursor-pointer"><Instagram size={18} /></div>
                    <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all cursor-pointer"><Github size={18} /></div>
                    <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all cursor-pointer"><Youtube size={18} /></div>
                 </div>
               </motion.div>
            </div>

            <div className="lg:col-span-7">
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="bg-white p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-2xl"
               >
                 <h2 className="text-3xl font-sans mb-10">프로젝트 문의/진단 신청</h2>
                 
                 <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">이름 / 업체명</label>
                          <input type="text" placeholder="홍길동" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 font-sans" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">연락처</label>
                          <input type="tel" placeholder="010-0000-0000" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 font-sans" />
                       </div>
                    </div>

                    <div className="space-y-4">
                       <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">문의 서비스 유형</label>
                       <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {['웹사이트 제작', '쇼핑몰 제작', '랜딩페이지', '리뉴얼', '유지보수', '기타'].map(service => (
                            <label key={service} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-all font-sans text-sm">
                               <input type="checkbox" className="w-4 h-4 rounded accent-brand-accent" />
                               {service}
                            </label>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">예상 예산 범위</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 font-sans">
                           <option>상담 후 결정</option>
                           <option>300만원 이하 (Basic)</option>
                           <option>300만원 ~ 1000만원 (Standard)</option>
                           <option>1000만원 이상 (Premium)</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                       <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">상세 내용 및 궁금한 점</label>
                       <textarea rows={6} placeholder="원하시는 방향성이나 기존 사이트의 문제점, 희망 래퍼런스 등을 적어주세요." className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 font-sans resize-none" />
                    </div>

                    <div className="flex items-center gap-3 p-2 font-sans text-xs text-gray-400">
                       <input type="checkbox" className="w-4 h-4 accent-brand-accent" />
                       개인정보 수집 및 이용에 동의합니다.
                    </div>

                    <button className="w-full bg-brand-primary text-white py-6 rounded-[2rem] font-semibold text-xl hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center gap-3">
                       봄플로우에게 문의 보내기 <ArrowRight size={20} />
                    </button>
                 </form>
               </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
