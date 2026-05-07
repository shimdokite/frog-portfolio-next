'use client';

import { Modal } from './Modal';

type EducationProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Education({ open, onOpenChange }: EducationProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <div className="section-stack">
        <p className="section-eyebrow">Education</p>
        <p className="body-copy">백석예술대학교 | 2019.08 ~ 2021.02</p>
        <p className="body-copy">정보처리산업기사 | 2024.12</p>
        <p className="body-copy">SQLD | 2024.06</p>
      </div>
    </Modal>
  );
}
