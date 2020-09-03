import React, { useEffect } from 'react';
import KanbanCard from './KanbanCard';
import { Issue, getIssues } from '../../redux/actions';
import KanbanCardForm from './KanbanCardForm';
import { connect } from 'react-redux';

interface KanbanColumnProps {
  title: string;
  issues: Issue[];
  firstColumn?: boolean;
  boardId: number;
  columnId: number;
  getIssues: Function;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  title,
  issues,
  firstColumn,
  boardId,
  columnId,
  getIssues,
}) => {
  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div className="KanbanColumn">
      <h1 className="KanbanColumn__title">{title}</h1>
      <div className="KanbanColumn__issues">
        {issues &&
          issues.map((issue) => (
            <KanbanCard
              key={issue.id}
              id={issue.id}
              title={issue.title}
              description={issue.description}
              columnId={issue.columnId}
            />
          ))}
        {firstColumn && (
          <KanbanCardForm boardId={boardId} columnId={columnId} />
        )}
      </div>
    </div>
  );
};

export default connect(null, { getIssues })(KanbanColumn);
