import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white border-t border-white/5 pt-20 pb-10">
      <div className="container-custom px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-sans font-semibold mb-4">봄플로우</h2>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              사용자의 경험(UX)을 중심으로 비즈니스의 흐름을 디자인합니다. 
              단순한 웹사이트를 넘어, 당신의 성장을 돕는 파트너가 되겠습니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 font-sans">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} />
                <a href="mailto:laudate@naver.com" className="hover:text-brand-accent transition-colors">laudate@naver.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} />
                <a href="tel:010-7397-1528" className="hover:text-brand-accent transition-colors">010-7397-1528</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>대표 김종현 | 서울특별시</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 font-sans">Menu</h3>
            <ul className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-brand-accent transition-colors">ABOUT</a></li>
              <li><a href="/service" className="hover:text-brand-accent transition-colors">SERVICE</a></li>
              <li><a href="/portfolio" className="hover:text-brand-accent transition-colors">PORTFOLIO</a></li>
              <li><a href="/process" className="hover:text-brand-accent transition-colors">PROCESS</a></li>
              <li><a href="/contact" className="hover:text-brand-accent transition-colors">CONTACT</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
          <p>© 2026 BOMFLOW. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
