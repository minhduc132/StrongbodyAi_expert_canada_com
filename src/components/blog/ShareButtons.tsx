"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Share2, Check } from "lucide-react";

interface ShareButtonsProps {
    url: string;
    title: string;
    description?: string;
    labels?: {
        shareTitle: string;
        copySuccess: string;
    };
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, labels }) => {
    const [copied, setCopied] = React.useState(false);

    const shareUrl = encodeURIComponent(url);
    const shareTitle = encodeURIComponent(title);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    };

    const handleShare = (link: string) => {
        window.open(link, "_blank", "width=600,height=600,noopener,noreferrer");
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    url,
                });
            } catch (error) {
                if ((error as Error).name !== "AbortError") {
                    console.error("Error sharing:", error);
                    copyToClipboard();
                }
            }
        } else {
            copyToClipboard();
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[#111827]">{labels?.shareTitle || "Share this article"}</h3>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => handleShare(shareLinks.facebook)}
                    className="w-10 h-10 rounded-lg bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-all shadow-md active:scale-95"
                    title="Share on Facebook"
                >
                    <Facebook size={18} />
                </button>
                <button
                    onClick={() => handleShare(shareLinks.twitter)}
                    className="w-10 h-10 rounded-lg bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-all shadow-md active:scale-95"
                    title="Share on Twitter"
                >
                    <Twitter size={18} />
                </button>
                <button
                    onClick={() => handleShare(shareLinks.linkedin)}
                    className="w-10 h-10 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-all shadow-md active:scale-95"
                    title="Share on LinkedIn"
                >
                    <Linkedin size={18} />
                </button>
                <button
                    onClick={handleNativeShare}
                    className="w-10 h-10 rounded-lg bg-[#FAFAFA] text-[#111827] border border-[#E9EAEC] flex items-center justify-center hover:bg-[#E9EAEC] transition-all shadow-sm relative active:scale-95"
                    title="Share or Copy Link"
                >
                    {copied ? (
                        <div className="flex items-center justify-center transition-all scale-110">
                            <Check size={18} className="text-green-600" />
                        </div>
                    ) : (
                        <Share2 size={18} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;
