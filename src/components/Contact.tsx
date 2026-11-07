import { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { contact } from '../data/siteData.js';
import { useInView } from '../hooks/useInView';
import { DoodleUnderline, DoodleSparkle, DoodleArrow } from './Doodles';
import type { SocialLink } from '../types';

export default function Contact() {
  const { ref, isInView } = useInView();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.message.trim() || !formData.name.trim()) {
      return;
    }

    const emailSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Hello Victor,\n\nFrom: ${formData.name} (${formData.email || 'No email specified'})\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${contact.email}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;

    setSubmittedStatus('Email client launched! If it did not open automatically, please send directly to vicerioluwaakinlabu@gmail.com.');
    setTimeout(() => setSubmittedStatus(null), 8000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-5 h-5 text-[#333333]" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5 text-[#0000FF]" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5 text-[#0000FF]" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-[#D12828]" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 relative scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className={`max-w-3xl mb-12 transition-all duration-500 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-sm font-bold text-[#0E2A5C] mb-3 -rotate-1">
            <MessageSquare className="w-4 h-4 text-[#D12828]" />
            <span>07. GET IN TOUCH & SAY HELLO</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0E2A5C] mb-2">
            Let's Write a{' '}
            <span className="highlighter border-b-2 border-dashed border-[#D12828]">
              Message
            </span>
          </h2>
          <div className="w-44 mb-3">
            <DoodleUnderline className="w-full h-3 text-[#D12828]" />
          </div>
          <p className="text-lg sm:text-xl text-[#0E2A5C]/85">
            Open to tech apprenticeships, healthcare collaborations, research opportunities, or just talking biology and code.
          </p>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Address & Social Cards (5 cols) */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-500 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Direct Email Card with Postage Stamp look */}
            <div className="relative sketch-card p-6 bg-white rotate-0.5">
              <div className="washi-tape"></div>

              {/* Postage Stamp Doodle */}
              <div className="absolute top-4 right-4 w-12 h-14 border-2 border-dashed border-[#D12828] bg-[#FFFFA5] flex flex-col items-center justify-center -rotate-6">
                <span className="text-[10px] font-mono font-bold text-[#D12828]">AIRMAIL</span>
                <span className="text-xs">🧪💻</span>
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#333333]/80 block mb-1">
                Direct Email Address
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-lg sm:text-xl font-bold text-[#0E2A5C] hover:text-[#D12828] transition-colors break-all block mb-4"
              >
                {contact.email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="sketch-btn-secondary inline-flex items-center gap-2 px-3.5 py-1.5 text-sm cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#D12828]" />
                    <span className="text-[#D12828]">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#333333]" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Network Icon Buttons */}
            <div className="relative sketch-card p-6 bg-white -rotate-0.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#333333]/80 block mb-3">
                Connect via Social Profiles
              </span>

              <div className="space-y-2.5">
                {(contact.socials as SocialLink[]).map((soc, sIdx) => (
                  <a
                    key={sIdx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded bg-[#F4F1EA] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] hover:bg-[#FFFFA5] hover:translate-x-1 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-white border border-[#333333] flex items-center justify-center">
                        {getSocialIcon(soc.icon)}
                      </div>
                      <div>
                        <span className="block text-base font-bold text-[#0E2A5C] leading-none">
                          {soc.name}
                        </span>
                        <span className="block text-xs font-mono font-bold text-[#333333]/70">
                          {soc.handle}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#333333]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Note badge */}
            <div className="p-3.5 rounded bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-sm font-bold text-[#0E2A5C] flex items-start gap-2.5 rotate-1">
              <Sparkles className="w-4 h-4 text-[#D12828] flex-shrink-0 mt-0.5" />
              <span>
                Based at University of Ilorin. Quick to reply to emails and GitHub messages!
              </span>
            </div>
          </div>

          {/* Right Column: Hand-Drawn Contact Form (7 cols) */}
          <div
            className={`lg:col-span-7 relative sketch-card p-6 sm:p-8 bg-white transition-all duration-500 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="washi-tape"></div>

            <div className="mb-5 pb-3 border-b-2 border-[#333333]">
              <h3 className="text-2xl font-bold text-[#0E2A5C]">
                Drop a Line in the Notebook
              </h3>
              <p className="text-sm text-[#0E2A5C]/85">
                Type your message below — it automatically triggers your email client via mailto: with everything ready to send!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-[#0E2A5C] mb-1"
                  >
                    Your Name <span className="text-[#D12828]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Dr. Ada Lovelace"
                    className="w-full px-3.5 py-2 rounded-md bg-[#F4F1EA] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-[#0E2A5C] placeholder:text-[#333333]/50 text-base font-bold focus:outline-none focus:bg-[#FFFFA5] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-[#0E2A5C] mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2 rounded-md bg-[#F4F1EA] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-[#0E2A5C] placeholder:text-[#333333]/50 text-base font-bold focus:outline-none focus:bg-[#FFFFA5] transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-[#0E2A5C] mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Collaboration on Healthcare Tech / Python"
                  className="w-full px-3.5 py-2 rounded-md bg-[#F4F1EA] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-[#0E2A5C] placeholder:text-[#333333]/50 text-base font-bold focus:outline-none focus:bg-[#FFFFA5] transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-[#0E2A5C] mb-1"
                >
                  Your Message <span className="text-[#D12828]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hello Victor, I checked your portfolio and would like to connect regarding..."
                  className="w-full px-3.5 py-2 rounded-md bg-[#F4F1EA] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-[#0E2A5C] placeholder:text-[#333333]/50 text-base font-bold focus:outline-none focus:bg-[#FFFFA5] transition-all resize-y"
                />
              </div>

              {/* Status Feedback */}
              {submittedStatus && (
                <div className="p-3 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-sm font-bold text-[#0E2A5C]">
                  {submittedStatus}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="sketch-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-lg cursor-pointer"
              >
                <span>Send Letter via Email</span>
                <Send className="w-5 h-5 stroke-[2.5]" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
