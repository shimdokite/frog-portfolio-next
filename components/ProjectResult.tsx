import type { ProjectResult as ProjectResultType } from '@/constants/projectResults';

type ProjectResultProps = ProjectResultType;

export function ProjectResult({
  projectName,
  role,
  period,
  link,
  description,
  responsibilities,
  skills
}: ProjectResultProps) {
  return (
    <article className="result-card">
      <div className="result-header">
        <div className="result-title-wrap">
          <h3 className="result-title">{projectName}</h3>
          <p className="result-meta">
            {role} |{' '}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              링크
            </a>
          </p>
        </div>
        <p className="result-period">{period}</p>
      </div>

      <p className="body-copy">{description}</p>

      <div className="content-block">
        <h4 className="content-label">담당</h4>
        <ul className="detail-list">
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <div className="content-block">
        <h4 className="content-label">기술</h4>
        <p className="body-copy">{skills.join(', ')}</p>
      </div>
    </article>
  );
}
