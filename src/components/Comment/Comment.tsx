import { useState } from 'preact/hooks';
import type { HTMLAttributes } from 'preact/compat';

export interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  /** Comment author name */
  author: string;
  /** Author avatar image URL or element */
  avatar?: string | preact.ComponentChildren;
  /** Comment timestamp */
  timestamp?: string;
  /** Comment text content */
  text: string;
  /** Nested replies */
  replies?: CommentProps[];
  /** Show like action */
  onLike?: () => void;
  /** Show reply action */
  onReply?: () => void;
  /** Show delete action */
  onDelete?: () => void;
  /** Show edit action */
  onEdit?: (newText: string) => void;
  /** Is deleted */
  deleted?: boolean;
  /** Like count */
  likes?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Comment component - Social category
 * Comment display with avatar, author, timestamp, actions, and nested replies
 */
export const Comment = ({ 
  author,
  avatar,
  timestamp,
  text,
  replies = [],
  onLike,
  onReply,
  onDelete,
  onEdit,
  deleted = false,
  likes = 0,
  className = '', 
  children, 
  ...props 
}: CommentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    if (onEdit) {
      onEdit(editText);
      setIsEditing(false);
    }
  };

  const baseClass = 'comment';
  const deletedClass = deleted ? 'comment-deleted' : '';
  const editingClass = isEditing ? 'comment-editing' : '';
  
  const classes = [baseClass, deletedClass, editingClass, className]
    .filter(Boolean)
    .join(' ');

  if (deleted) {
    return (
      <div className={classes} {...props}>
        <p className="comment-text">[This comment has been deleted]</p>
      </div>
    );
  }

  return (
    <div className={classes} {...props}>
      <div className="comment-avatar">
        {typeof avatar === 'string' ? (
          <img src={avatar} alt={author} />
        ) : avatar ? (
          avatar
        ) : (
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            background: 'var(--color-primary)', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            {author.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      
      <div className="comment-content">
        <div className="comment-header">
          <span className="comment-author">{author}</span>
          {timestamp && <span className="comment-timestamp">{timestamp}</span>}
        </div>
        
        {isEditing ? (
          <div className="comment-editing">
            <textarea
              className="comment-edit-input"
              value={editText}
              onInput={(e) => setEditText((e.target as HTMLTextAreaElement).value)}
            />
            <div>
              <button onClick={handleEdit} type="button">Save</button>
              <button onClick={() => setIsEditing(false)} type="button">Cancel</button>
            </div>
          </div>
        ) : (
          <p className="comment-text">{text}</p>
        )}
        
        <div className="comment-actions">
          {onLike && (
            <button className="comment-action" onClick={onLike} type="button">
              👍 Like {likes > 0 && `(${likes})`}
            </button>
          )}
          {onReply && (
            <button className="comment-action" onClick={onReply} type="button">
              💬 Reply
            </button>
          )}
          {onEdit && !isEditing && (
            <button className="comment-action" onClick={() => setIsEditing(true)} type="button">
              ✏️ Edit
            </button>
          )}
          {onDelete && (
            <button className="comment-action" onClick={onDelete} type="button">
              🗑️ Delete
            </button>
          )}
        </div>
        
        {replies.length > 0 && (
          <div className="comment-replies">
            {replies.map((reply, index) => (
              <Comment key={index} {...reply} />
            ))}
          </div>
        )}
      </div>
      
      {children}
    </div>
  );
};

export default Comment;
