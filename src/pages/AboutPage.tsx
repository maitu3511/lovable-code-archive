import aboutHeroBg from "../assets/heroes/about-hero.jpg";
import React from "react";
import { AboutSection } from "../components/AboutSection";
import { HeroBackgroundVideo } from "../components/HeroBackgroundVideo";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { TrustStats } from "../components/TrustStats";
import { PageType } from "../types";
import founderFirasatAsset from "../assets/founder-firasat-ali-new.png.asset.json";
const founderFirasatPortrait = founderFirasatAsset.url;
import {
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  ArrowRight,
  GraduationCap,
  Quote,
  Send,
} from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-[#FFFFFF] text-[#111111] animate-in fade-in duration-300">
      {/* Page Hero Header with Distinctive Zoom Background */}
      <div className="relative py-16 sm:py-24 mb-12 overflow-hidden border-b border-[#E8E1D0] bg-[#FAF9F5]">
        {/* Topic-Related Agency Strategy Background Image with Ken Burns / Zoom Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img decoding="async" fetchPriority="high"
            src={aboutHeroBg}
            alt="About DigiBasera Strategic Digital Agency Headquarters"
            className="absolute inset-0 w-full h-full object-cover object-center animate-hero-zoom opacity-30 filter brightness-105 contrast-105"
            referrerPolicy="no-referrer"
          />
          <HeroBackgroundVideo
            poster={aboutHeroBg}
            webmSrc="/assets/videos/about-hero-bg.webm"
            mp4Src="/assets/videos/about-hero-bg.mp4"
            opacity={0.35}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#FAF9F5]/75 to-[#FAF9F5]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/90" />
        </div>


        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/18 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-4 font-heading shadow-xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Agency Profile & Lineage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] font-heading tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
              Digibasera
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#444444] mt-3 max-w-3xl leading-relaxed font-medium">
            A full-service Digital Marketing, Technology & Strategy Agency committed to turning
            digital ideas into measurable commercial pipeline and enterprise value.
          </p>
        </div>
      </div>

      {/* Main Core About Narrative */}
      <AboutSection
        onOpenConsultation={() => onOpenConsultation("Comprehensive Digital Partnership")}
        onNavigateToServices={() => onNavigate("services")}
      />

      {/* Trust Stats Bar */}
      <div className="my-16">
        <TrustStats />
      </div>

      {/* Zinmatt Association In-Depth Spotlight */}
      <section className="py-16 bg-[#111111] text-white border-y border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest font-heading border border-white/10">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Strategic Ecosystem Partnership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                Official Business Associate of Zinmatt
              </h2>

              <p className="text-sm text-[#E8E1D0] leading-relaxed">
                Digibasera works in direct association with <strong>Zinmatt</strong>, combining
                cutting-edge agency execution with proven academic and professional training
                frameworks. This alliance ensures our strategies are built on standardized,
                quality-assured methodologies.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-heading block">
                    Agency Tech Standards
                  </span>
                  <p className="text-xs text-[#E8E1D0]/80">
                    Enterprise-grade tech stacks, structured sprint deliverables, and data
                    governance.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-heading block">
                    Talent & Skill Pipeline
                  </span>
                  <p className="text-xs text-[#E8E1D0]/80">
                    Continuous training on the latest generative AI, search algorithms, and paid ad
                    platforms.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("training")}
                  className="px-6 py-3 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Explore Zinmatt Training Programs</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-xl bg-white text-[#111111] border-2 border-[#D4AF37] shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D0]">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B16] font-heading">
                    Quality Benchmarks
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <ul className="space-y-3 text-xs text-[#555555]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>
                      <strong>ISO 9001:2015</strong> aligned process & service delivery framework.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Certified Google & Meta performance ad strategies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>White-hat SEO and generative engine optimization practices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Transparent client reporting with direct attribution data.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership & Core Team Showcase */}
      <section className="py-16 bg-[#F8F8F6] border-y border-[#E8E1D0]" id="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Founder Spotlight Card */}
          <div className="mb-16 bg-white rounded-2xl border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_-15px_rgba(17,17,17,0.08)] overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] max-w-sm w-full shadow-lg aspect-3/4">
                  <img
                    src={founderFirasatPortrait}
                    alt="Firasat Ali - Founder & Chief Strategist, Digibasera"
                    className="w-full h-full object-cover object-center filter brightness-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#111111] text-[10px] font-bold uppercase tracking-wider mb-1">
                      <Sparkles className="w-3 h-3 text-[#111111]" />
                      <span>Founder & Chief Strategist</span>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white">Firasat Ali</h3>
                    <p className="text-xs text-[#E8E1D0]/90">Digibasera Leadership</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest font-heading">
                  <Quote className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Founder's Vision & Commitment</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] font-heading tracking-tight">
                  Turning Digital Ambition into{" "}
                  <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227]">
                    Tangible Market Dominance
                  </span>
                </h2>

                <blockquote className="border-l-4 border-[#D4AF37] pl-4 text-sm sm:text-base text-[#444444] italic leading-relaxed">
                  "At Digibasera, our founding mission is simple yet uncompromising: to provide
                  ambitious brands with the strategic clarity, technical excellence, and aggressive
                  execution required to outperform their competition. Every campaign we launch and
                  every platform we build is engineered directly for commercial ROI."
                </blockquote>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Under Firasat Ali's leadership, Digibasera has scaled from a dedicated regional
                  consultancy into a multi-capability digital agency and official associate of
                  Zinmatt, serving high-growth brands across e-commerce, real estate, healthcare,
                  B2B manufacturing, and consumer tech.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() =>
                      onOpenConsultation("Direct Consultation with Founder Firasat Ali")
                    }
                    className="px-6 py-3 rounded-full bg-[#111111] hover:bg-[#222222] text-[#FAF9F5] hover:text-[#D4AF37] font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-[#D4AF37] shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Consult with Firasat Ali</span>
                  </button>

                  <div className="text-xs text-[#666666] font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Direct Strategist Session Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3 font-heading">
              <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Leadership & Growth Engineers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading tracking-tight">
              Meet Our Core Team
            </h2>
            <p className="text-sm text-[#555555] mt-2">
              Cross-functional growth architects, full-stack engineers, and certified performance
              marketing specialists dedicated to accelerating your brand's digital revenue.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Strategic Growth Director",
                role: "Head of Performance Marketing",
                exp: "8+ Years Exp",
                specialty: "Meta & Google Ads Funnels, Scaled ROAS, B2B Acquisition",
                image:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Lead Technical Architect",
                role: "Full-Stack Web & E-Commerce Lead",
                exp: "7+ Years Exp",
                specialty: "React, Next.js, Headless Shopify, Core Web Vitals",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Senior SEO Strategist",
                role: "Organic Search & Local 3-Pack Lead",
                exp: "6+ Years Exp",
                specialty: "Technical SEO, High-Authority Outreach, GEO Ranking",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Creative Brand Director",
                role: "UI/UX & Visual Architecture",
                exp: "6+ Years Exp",
                specialty: "High-Conversion Creatives, Visual Identities, Motion Design",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E8E1D0] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden bg-[#111111]">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111] bg-[#D4AF37] px-2 py-0.5 rounded">
                      {member.exp}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <h3 className="text-sm font-bold text-[#111111] font-heading">{member.role}</h3>
                  <p className="text-xs text-[#9A7B16] font-semibold">{member.name}</p>
                  <p className="text-[11px] text-[#666666] leading-relaxed pt-1 border-t border-[#E8E1D0]/60">
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Digibasera Section */}
      <WhyChooseUs onOpenConsultation={() => onOpenConsultation("Agency Partnership Inquiry")} />

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="p-8 rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] space-y-4">
          <h3 className="text-2xl font-bold text-[#111111] font-heading">
            Let's Discuss Your Growth Goals
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] max-w-xl mx-auto">
            Schedule a 30-minute discovery call with our senior growth strategists to evaluate your
            digital roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenConsultation("About Us Strategy Call")}
              className="px-6 py-3.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="px-6 py-3.5 rounded-md bg-white hover:bg-[#F8F8F6] text-[#111111] border border-[#E8E1D0] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Explore Our Services</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
