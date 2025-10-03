import React from 'react';

const TaskCard = ({ task, onToggle, onDelete }) => {
    return (
        <div className="card my-2">
            <div className="card-body d-flex justify-content-between align-items-center">
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                </span>
                <div>
                    <button className="btn btn-sm btn-success me-2" onClick={() => onToggle(task._id)}>
                        {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => onDelete(task._id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
