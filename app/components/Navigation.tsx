// file: Navigation.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

/**
 * Navigation with a robust resume preview & download flow.
 * - resumeAvailableAsPdf: boolean | null
 *   true  = server confirmed PDF
 *   false = server confirmed NOT available / not PDF (show thumbnail / message)
 *   null  = unknown (try embedding, fallback to download)
 */

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : false
  );

  // true | false | null (unknown)
  const [resumeAvailableAsPdf, setResumeAvailableAsPdf] = useState<boolean | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedElRef = useRef<HTMLElement | null>(null);

  // Paths (public)
  const RESUME_PATH = "/Midhun_Resume.pdf";
  const RESUME_FILENAME = "Midhun_Resume.pdf";
  const RESUME_THUMB = "/Midhun_Resume_thumb.png";

  // header scroll handling
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // breakpoint listener
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    // matchMedia.addEventListener preferred, but support older browsers gracefully
    if ("addEventListener" in mq) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if ("removeEventListener" in mq) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // Robust PDF check: prefer HEAD, fallback to a small-range GET; if both fail, set unknown (null)
  useEffect(() => {
    let cancelled = false;

    const checkPdf = async () => {
      try {
        // Try HEAD first (fast)
        const head = await fetch(RESUME_PATH, { method: "HEAD", cache: "no-store" });
        if (cancelled) return;
        if (head.ok) {
          const ct = (head.headers.get("content-type") || "").toLowerCase();
          if (ct.includes("pdf")) {
            setResumeAvailableAsPdf(true);
            return;
          }
          // If HEAD succeeded but content-type missing or not pdf, treat as unknown (try GET)
        }

        // Try a lightweight GET (range) to inspect headers (some servers block HEAD)
        try {
          const small = await fetch(RESUME_PATH, {
            method: "GET",
            headers: { Range: "bytes=0-1023" },
            cache: "no-store",
          });
          if (cancelled) return;
          if (small.ok) {
            const ct2 = (small.headers.get("content-type") || "").toLowerCase();
            if (ct2.includes("pdf")) {
              setResumeAvailableAsPdf(true);
              return;
            }
            // If GET returned but content-type isn't pdf, mark false
            setResumeAvailableAsPdf(false);
            return;
          }
        } catch (err) {
          // network/CORS error on GET — fall through to unknown
        }

        // If we reach here: we couldn't confirm PDF via headers; set to null -> attempt embed
        setResumeAvailableAsPdf(null);
      } catch (err) {
        // network / CORS error on HEAD -> unknown, attempt embed
        if (!cancelled) setResumeAvailableAsPdf(null);
      }
    };

    checkPdf();
    return () => {
      cancelled = true;
    };
  }, [RESUME_PATH]);

  // body scroll lock while modal open
  useEffect(() => {
    const orig = document.body.style.overflow;
    if (isResumeOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = orig || "";
    return () => {
      document.body.style.overflow = orig || "";
    };
  }, [isResumeOpen]);

  // Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsResumeOpen(false);
    };
    if (isResumeOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isResumeOpen]);

  // Focus-trap + restore focus on close
  useEffect(() => {
    if (!isResumeOpen) return;

    lastFocusedElRef.current = document.activeElement as HTMLElement | null;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const container = modalRef.current;
    if (!container) return;

    const focusables = Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
      (el) => el.offsetParent !== null
    );
    if (focusables.length) focusables[0].focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const elems = Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (el) => el.offsetParent !== null
      );
      if (elems.length === 0) {
        e.preventDefault();
        return;
      }
      const first = elems[0];
      const last = elems[elems.length - 1];
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => {
      document.removeEventListener("keydown", handleTab);
      if (lastFocusedElRef.current) lastFocusedElRef.current.focus();
    };
  }, [isResumeOpen]);

  // helper: trigger download (works in most browsers; if cross-origin the download attribute may be ignored)
  const triggerDownload = () => {
    const a = document.createElement("a");
    a.href = RESUME_PATH;
    a.setAttribute("download", RESUME_FILENAME);
    // open in new tab if necessary - some browsers ignore download for cross-origin
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // iOS detection (practical UX choice)
  const isiOS = (() => {
    if (typeof navigator === "undefined") return false;
    return /iP(ad|hone|od)/i.test(navigator.userAgent);
  })();

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-surface/80 backdrop-blur-lg" : "bg-transparent"
        }`}
        style={{
          borderBottom: "1px solid rgba(230, 233, 238, 0.12)",
          boxShadow: "0 6px 18px rgba(2, 6, 23, 0.28)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center justify-center w-16 h-16 rounded-xl text-white hover:scale-105 transition-transform" aria-label="Home">
              <img src="/midhunIconDesign.png" alt="Logo" loading="lazy" />
            </a>

            <nav className="hidden md:flex items-center flex-1 justify-center gap-7">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => scrollToSection(link.href)} className="text-text-medium hover:text-text-high transition-colors relative group">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button className="bg-primary hover:bg-primary-variant text-white gap-2" onClick={openResume} aria-haspopup="dialog" aria-expanded={isResumeOpen}>
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>

            <button className="md:hidden text-text-high" onClick={() => setIsMobileMenuOpen((s) => !s)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="fixed inset-0 z-40 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div className="absolute top-20 right-0 left-0 bg-card-bg/95 backdrop-blur-lg border-b border-white/10 p-6" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }}>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button key={link.name} onClick={() => scrollToSection(link.href)} className="text-left text-text-high hover:text-accent transition-colors py-2 border-b border-white/5">
                    {link.name}
                  </button>
                ))}
                <Button className="bg-primary hover:bg-primary-variant text-white gap-2 mt-4 w-full" onClick={openResume}>
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="absolute inset-0 bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeResume} />

            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label="Resume preview"
              className={`relative z-50 w-full ${isDesktop ? "md:w-1/2 md:max-w-[50vw] md:h-[90vh] md:rounded-2xl" : "h-full"} mx-auto bg-surface/95 backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden`}
              initial={isDesktop ? { y: 40, opacity: 0, scale: 0.98 } : { y: 0, opacity: 0 }}
              animate={isDesktop ? { y: 0, opacity: 1, scale: 1 } : { y: 0, opacity: 1 }}
              exit={isDesktop ? { y: 40, opacity: 0, scale: 0.98 } : { y: 0, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              style={{
                height: isDesktop ? "90vh" : "100vh",
                maxHeight: isDesktop ? "90vh" : "100vh",
              }}
            >
              <div className="flex flex-col h-full">
                <div className="pt-6 pb-4 px-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text-high">Resume</h3>
                    <p className="text-sm text-text-medium">Preview and download</p>
                  </div>

                  <div className="md:hidden">
                    <Button onClick={triggerDownload} className="bg-primary hover:bg-primary-variant text-white gap-2">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Preview area */}
                <div className="flex-1 min-h-0">
                  {resumeAvailableAsPdf === false ? (
                    // server says not available / not pdf
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                      <div className="w-full max-w-xl">
                        <img src={RESUME_THUMB} alt="Resume preview thumbnail" className="w-full h-auto rounded-md shadow" />
                      </div>
                      <p className="text-center text-text-medium">Preview unavailable. You can still download the resume using the button below.</p>
                    </div>
                  ) : (
                    // true or null (unknown) -> attempt to embed (except iOS where we show fallback)
                    (() => {
                      if (isiOS) {
                        return (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                            <div className="w-full max-w-xl">
                              <img src={RESUME_THUMB} alt="Resume preview thumbnail" className="w-full h-auto rounded-md shadow" />
                            </div>
                            <p className="text-center text-text-medium">iOS browsers may not display PDFs inline. Open or download instead.</p>
                            <div className="flex gap-3">
                              <a href={RESUME_PATH} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border rounded">
                                Open
                              </a>
                              <button onClick={triggerDownload} className="inline-flex items-center gap-2 px-4 py-2 border rounded">
                                Download
                              </button>
                            </div>
                          </div>
                        );
                      }

                      // Non-iOS: use <object> (more tolerant) with a fallback inside it
                      return (
                        <object
                          data={RESUME_PATH}
                          type="application/pdf"
                          width="100%"
                          height="100%"
                          aria-label="Resume preview"
                          className="w-full h-full"
                        >
                          <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                            <div className="w-full max-w-xl">
                              <img src={RESUME_THUMB} alt="Resume preview thumbnail" className="w-full h-auto rounded-md shadow" />
                            </div>
                            <p className="text-center text-text-medium">This browser cannot display the PDF inline. You can download it instead.</p>
                            <div className="flex gap-3">
                              <a href={RESUME_PATH} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border rounded">
                                Open
                              </a>
                              <button onClick={triggerDownload} className="inline-flex items-center gap-2 px-4 py-2 border rounded">
                                Download
                              </button>
                            </div>
                          </div>
                        </object>
                      );
                    })()
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-4 px-6 py-4 border-t border-white/6">
                  <div />
                  <div className="flex items-center gap-3">
                    <Button variant="outline" onClick={closeResume} className="gap-2">Close</Button>
                    <div className="hidden md:block">
                      <Button onClick={triggerDownload} className="bg-primary hover:bg-primary-variant text-white gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
