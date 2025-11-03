import { useState } from 'preact/hooks';
import type { HTMLAttributes } from 'preact/compat';

export type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'whatsapp' | 'email';

export interface ShareButtonsProps extends HTMLAttributes<HTMLDivElement> {
  /** URL to share */
  url?: string;
  /** Title to share */
  title?: string;
  /** Description to share */
  description?: string;
  /** Platforms to show (if not specified, shows all) */
  platforms?: SocialPlatform[];
  /** Show labels on buttons */
  showLabels?: boolean;
  /** Show dropdown menu */
  dropdown?: boolean;
  /** Optional label text */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ShareButtons component - Social category
 * Social media sharing buttons with branded colors and copy link functionality
 */
export const ShareButtons = ({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = '',
  description = '',
  platforms = ['facebook', 'twitter', 'linkedin', 'pinterest', 'whatsapp', 'email'],
  showLabels = false,
  dropdown = false,
  label,
  className = '', 
  children, 
  ...props 
}: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const shareUrls: Record<SocialPlatform, string> = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(description)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + url)}`
  };

  const platformLabels: Record<SocialPlatform, string> = {
    facebook: 'Facebook',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    pinterest: 'Pinterest',
    whatsapp: 'WhatsApp',
    email: 'Email'
  };

  const platformIcons: Record<SocialPlatform, string> = {
    facebook: 'f',
    twitter: '🐦',
    linkedin: 'in',
    pinterest: 'P',
    whatsapp: '📱',
    email: '✉️'
  };

  const handleShare = (platform: SocialPlatform) => {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const baseClass = 'share';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  const renderButtons = () => (
    <>
      {platforms.map(platform => (
        <button
          key={platform}
          className={`share-button share-button-${platform}`}
          onClick={() => handleShare(platform)}
          aria-label={`Share on ${platformLabels[platform]}`}
          type="button"
        >
          <span>{platformIcons[platform]}</span>
          {showLabels && <span>{platformLabels[platform]}</span>}
        </button>
      ))}
      <button
        className={`share-button share-button-copy ${copied ? 'share-button-copy-success' : ''}`}
        onClick={handleCopyLink}
        aria-label="Copy link"
        type="button"
      >
        <span>{copied ? '✓' : '🔗'}</span>
        {showLabels && <span>{copied ? 'Copied!' : 'Copy Link'}</span>}
      </button>
    </>
  );

  return (
    <div className={classes} {...props}>
      {label && <span className="share-label">{label}</span>}
      
      {dropdown ? (
        <div className="share-dropdown">
          <button 
            className="share-button" 
            onClick={() => setShowMenu(!showMenu)}
            type="button"
          >
            Share
          </button>
          {showMenu && (
            <div className="share-menu">
              {platforms.map(platform => (
                <div
                  key={platform}
                  className="share-menu-item"
                  onClick={() => {
                    handleShare(platform);
                    setShowMenu(false);
                  }}
                >
                  <span>{platformIcons[platform]}</span>
                  <span>{platformLabels[platform]}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="share-buttons">
          {renderButtons()}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default ShareButtons;
