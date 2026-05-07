'use client';

import { Modal } from './Modal';

type IntroProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Intro({ open, onOpenChange }: IntroProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <div className="section-stack">
        <p className="section-eyebrow">Introduce</p>
        <h2 className="modal-title">
          안녕하세요,
          <br />
          프론트엔드 개발자 심도연 입니다.
        </h2>
        <p className="body-copy">
          문제 해결과 사용자 경험 개선을 중심으로 끊임없이 고민합니다.
          <br />
          이커머스 스타트업에서 기능 개발과 유지보수를 통해 안정적인 서비스를
          구현해왔으며, 코드 품질을 고려한 구조적인 개발을 지향합니다.
        </p>
      </div>
    </Modal>
  );
}
