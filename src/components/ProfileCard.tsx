import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

export function ProfileCard({ onContact }: { onContact?: () => void }) {
  const [displayText, setDisplayText] = useState("");
  const fullText = `I'm a ${personalInfo.role}`;

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const shouldDelete = isDeleting;
      setDisplayText(fullText.substring(0, i));

      if (!shouldDelete && i === fullText.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, 3000); // Wait before starting to delete
        return;
      }

      if (shouldDelete && i === 0) {
        isDeleting = false;
        timeout = setTimeout(type, 500);
        return;
      }

      const nextTick = shouldDelete ? i - 1 : i + 1;
      i = nextTick;
      timeout = setTimeout(type, shouldDelete ? 25 : 90);
    };

    type();
    return () => clearTimeout(timeout);
  }, [fullText]);

  return (
    <>
      <div className="flex-1">
        {/* Avatar with yellow backdrop */}
        <div className="prof-avatar">
          <div className="prof-avatar__bg" />
          <div className="prof-avatar__img">
            <img src="/profile-pic.png" alt={personalInfo.name} />
          </div>
        </div>

        <h2 className="prof-name">{personalInfo.name}</h2>
        <p className="prof-role">
          <span>{displayText}</span>
          <span className="animate-pulse ml-1 text-accent">_</span>
        </p>
        <hr className="prof-divider" />

        <p className="prof-bio">
          {personalInfo.bio}
        </p>
      </div>

      <div className="prof-socials mt-auto">
        <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="prof-social" data-label="GITHUB">
          <img src="https://cdn.simpleicons.org/github/ffffff" className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity" alt="GitHub" />
        </a>
        <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="prof-social" data-label="LINKEDIN">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="prof-social" data-label="TWITTER">
          <img src="https://cdn.simpleicons.org/x/ffffff" className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity" alt="Twitter" />
        </a>
      </div>
    </>
  );
}
