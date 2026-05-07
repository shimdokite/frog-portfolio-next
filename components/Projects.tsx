'use client';

import { projectResults } from '@/constants/projectResults';
import { Modal } from './Modal';
import { ProjectResult } from './ProjectResult';

type ProjectsProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Projects({ open, onOpenChange }: ProjectsProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      panelClassName="modal-panel-lg"
    >
      <div className="section-stack">
        <p className="section-eyebrow">Project</p>
        <div className="scroll-list">
          {projectResults.map((projectResult) => (
            <ProjectResult
              key={projectResult.projectName}
              {...projectResult}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
}
