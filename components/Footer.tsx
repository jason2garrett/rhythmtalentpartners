import { Mail } from "lucide-react";
import { SITE } from "@/lib/content";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo id="footer" invert />
            <p className="mt-5 font-body text-sm leading-relaxed text-white/60">
              {SITE.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <h4 className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Explore
              </h4>
              <ul className="mt-4 space-y-2.5 font-body text-sm text-white/70">
                <li><a href="#expertise" className="hover:text-secondary">Expertise</a></li>
                <li><a href="#focus" className="hover:text-secondary">Focus Areas</a></li>
                <li><a href="#process" className="hover:text-secondary">The Process</a></li>
                <li><a href="#testimonials" className="hover:text-secondary">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Get in Touch
              </h4>
              <ul className="mt-4 space-y-2.5 font-body text-sm text-white/70">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2 hover:text-secondary"
                  >
                    <Mail size={15} />
                    {SITE.email}
                  </a>
                </li>
                <li className="max-w-xs text-white/60">{SITE.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 font-body text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Rhythm Talent Partners. All rights
            reserved.
          </span>
          <span>San Francisco Bay Area · Serving clients nationally</span>
        </div>
      </div>
    </footer>
  );
}
