'use client';

import { workResults } from '@/constants/workResults';
import { Modal } from './Modal';
import { WorkResult } from './WorkResult';

type WorkProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Work({ open, onOpenChange }: WorkProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      panelClassName="modal-panel-lg"
    >
      <div className="section-stack">
        <p className="section-eyebrow">Work Experience</p>
        <h2 className="modal-title">NI System | Web Developer</h2>
        <p className="body-copy">2024.06.14 - 2025.11.07</p>
        <div className="scroll-list">
          {workResults.map((workResult) => (
            <WorkResult
              key={workResult.projectName}
              projectName={workResult.projectName}
              period={workResult.period}
              results={workResult.results}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
}
