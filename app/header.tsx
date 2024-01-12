import React, { useEffect, useState, useRef } from 'react';

export default function Header() {
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [headerBackground, setHeaderBackground] = useState('transparent');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skill', label: 'Skill' },
    { id: 'projects', label: 'Projects' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveNavItem(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderBackground('white');
    } else {
      setHeaderBackground('transparent');
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleClickOutsideMenu = (e: MouseEvent) => {
    if (
      mobileNavRef.current &&
      !mobileNavRef.current.contains(e.target as Node)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768); // 초기 렌더링 시 모바일 여부를 설정합니다.
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutsideMenu);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutsideMenu);

    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setActiveNavItem('home'); // 홈 섹션을 활성화합니다.
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`header flex items-center justify-between text-center text-base font-roboto header-background-transition ${headerBackground === 'white' ? 'text-black' : 'text-white'
        }`}
      style={{ backgroundColor: headerBackground }}
    >
      <div
        id="logo"
        className="logo text-center"
        onClick={scrollToTop} // 로고 클릭 시 scrollToTop 함수 호출
        style={{ cursor: 'pointer' }} // 마우스 커서를 포인터로 변경
      >
        Frontend Developer
      </div>
      {isMobile && (
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          <img
            src="image/menu.png"
            alt="Menu Icon"
            style={{
              width: '32px',
              height: '32px',
              filter: headerBackground === 'white' ? 'invert(0%)' : 'invert(100%)',
            }}
          />
        </div>
      )}
      <nav ref={mobileNavRef} className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="navList">
          {sections.map((section) => (
            <li className="navItem" key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => scrollToSection(section.id)}
                className={`${activeNavItem !== section.id ? 'text-gray-100' : ''}`}
                style={{
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
