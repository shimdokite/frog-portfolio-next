'use client';

import { skills } from '@/constants/skills';
import { Modal } from './Modal';

type SkillsProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Skills({ open, onOpenChange }: SkillsProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <div className="section-stack">
        <p className="section-eyebrow">Skill</p>
        <div className="content-list compact-list">
          {skills.map((skillGroup) => (
            <section className="content-block" key={skillGroup.title}>
              <h3 className="content-label">{skillGroup.title}</h3>
              <p className="body-copy">{skillGroup.skills.join(' / ')}</p>
            </section>
          ))}
        </div>
      </div>
    </Modal>
  );
}
