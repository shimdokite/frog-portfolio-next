import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '심도연 | Frontend Developer',
  description: '실무 서비스 개선과 유지보수 경험을 중심으로 정리한 프론트엔드 개발자 포트폴리오'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
