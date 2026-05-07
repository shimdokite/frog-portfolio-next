type WorkResultProps = {
  projectName: string;
  period: string;
  results: string[];
};

export function WorkResult({ projectName, period, results }: WorkResultProps) {
  return (
    <article className="result-card compact-result-card">
      <div className="result-header">
        <h3 className="result-title">{projectName}</h3>
        <p className="result-period">{period}</p>
      </div>
      <ul className="detail-list">
        {results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </article>
  );
}
