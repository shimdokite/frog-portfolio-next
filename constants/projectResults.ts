export type ProjectResult = {
  projectName: string;
  role: string;
  period: string;
  link: string;
  description: string;
  responsibilities: string[];
  skills: string[];
};

export const projectResults: ProjectResult[] = [
  {
    projectName: 'dog jump',
    role: '1인 FE',
    period: '25.10 ~ 진행 중',
    link: 'https://run-jump-dog.vercel.app',
    description: '장애물을 피해 점수를 획득하는 점프게임',
    responsibilities: [
      'Canvas 기반 렌더링과 애니메이션 처리 구현',
      'requestAnimationFrame 기반 게임 루프 및 상태 관리 로직 구현',
      '키보드 및 터치 입력 처리로 모바일 환경 대응'
    ],
    skills: ['TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    projectName: 'inoico',
    role: '2인 FE',
    period: '25.06 ~ 25.08',
    link: 'https://inoico.vercel.app',
    description: '듣고 있는 음악의 분위기에 맞는 커피를 추천해주는 사이트',
    responsibilities: [
      '전반적인 기획 및 디자인 설계 진행',
      '외부 음악 인식 API(AcrCloud)를 활용한 음원 식별 기능 구현'
    ],
    skills: ['TypeScript', 'Next.js', 'React-query', 'Zustand', 'Tailwind CSS']
  },
  {
    projectName: 'ImageWorks',
    role: '1인 FE',
    period: '25.03 ~ 25.04',
    link: 'https://www.imageworks.kr',
    description:
      '교육, 출판, 디자인 컨설팅 전문 업체 Imageworks(이미지공작소) 소개 사이트',
    responsibilities: [
      'Next.js 기반 SSG 방식 구현',
      '이미지 크기 미지정으로 발생하던 Layout Shift 문제를 해결하여 Lighthouse CLS 점수 70 -> 100 개선',
      'Google Search Console, Naver Search Advisor 활용해 사이트 색인 및 검색 결과 노출 확인'
    ],
    skills: ['TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    projectName: 'GrowStory',
    role: '6인 FE',
    period: '23.09 ~ 23.10',
    link: 'https://growstory.vercel.app',
    description: '식물 집사들을 위한 커뮤니티 사이트',
    responsibilities: [
      '팀원 구성 및 핵심 서비스 아이디어 구상과 기획',
      '유저 플로우 설계를 주도하고 팀원과 협업하여 기획 상의 모순을 발견 및 개선(Figma)',
      '구글 OAuth 및 자체 로그인 기반 인증 시스템 구현',
      '사용자 정보 조회/수정 등 마이페이지 기능 구현',
      '비회원 사용자 접근성을 위한 게스트 모드 기능 구현',
      'WebSocket 기반 1:1 문의 채팅 기능 구현으로 실시간 커뮤니케이션 지원'
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'React-query',
      'Zustand',
      'React-hook-form',
      'Tailwind CSS',
      'Framer Motion'
    ]
  }
];
