'use client';

import { Mail, Phone, ExternalLink, Home as HomeIcon, FileText, TrendingUp, GraduationCap, Heart, Users, Calendar } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Custom Social Icons (since Instagram/LinkedIn are deprecated in lucide-react)
const InstagramIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  // True parallax: background scrolls at 0.5x speed
  const y = useTransform(scrollY, [0, 1000], [0, 500]);
  const opacity = useTransform(scrollY, [0, 300], [0.5, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-linen text-charcoal">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-linen/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img
                src="/logo.png"
                alt="April Broadhurst Real Estate"
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className={`font-sans text-base font-bold tracking-wider hover:text-forest transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>HOME</a>
              <a href="#about" className={`font-sans text-base font-bold tracking-wider hover:text-forest transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>ABOUT</a>
              <a href="#reviews" className={`font-sans text-base font-bold tracking-wider hover:text-forest transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>REVIEWS</a>
              <a href="#resources" className={`font-sans text-base font-bold tracking-wider hover:text-forest transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>CLIENT RESOURCES</a>
              <a
                href="https://aprilbroadhurstrealestate.kw.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-sans text-sm font-medium tracking-wider hover:bg-slate transition-colors duration-300 shadow-md"
              >
                FEATURED LISTINGS
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${scrolled ? 'text-forest' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-linen/95 backdrop-blur-md rounded-lg p-4">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="font-sans text-base font-bold tracking-wider text-charcoal hover:text-forest transition-colors">HOME</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-sans text-base font-bold tracking-wider text-charcoal hover:text-forest transition-colors">ABOUT</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="font-sans text-base font-bold tracking-wider text-charcoal hover:text-forest transition-colors">REVIEWS</a>
              <a href="#resources" onClick={() => setMobileMenuOpen(false)} className="font-sans text-base font-bold tracking-wider text-charcoal hover:text-forest transition-colors">CLIENT RESOURCES</a>
              <a
                href="https://aprilbroadhurstrealestate.kw.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-white font-sans text-sm font-medium tracking-wider hover:bg-slate transition-colors duration-300 shadow-md"
              >
                FEATURED LISTINGS
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section id="home" ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"
        />
        <motion.div
          style={{ y }}
          className="absolute inset-0 scale-110"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/josh-hild-XagggyeFTK8-unsplash.jpg')",
            }}
          />
        </motion.div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl font-medium tracking-wider mb-6 drop-shadow-2xl text-center"
          >
            APRIL BROADHURST REAL ESTATE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg md:text-xl max-w-3xl leading-loose font-bold drop-shadow-xl mb-8 text-center"
          >
            Real Estate Rooted in Tacoma
          </motion.p>

          {/* Social Icons - Let's Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-6 mb-8"
          >
            <a
              href="https://www.linkedin.com/in/april-broadhurst/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7A9AA4] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={24} />
            </a>
            <a
              href="https://www.instagram.com/april.broadhurst.real.estate/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7A9AA4] transition-colors duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon size={24} />
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://calendly.com/aprilbroadhurst"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest font-sans text-sm font-medium tracking-wider hover:bg-linen transition-colors duration-300 shadow-lg"
            >
              <Calendar size={18} />
              BOOK A CONSULTATION
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Me Section - Split Screen */}
      <section id="about" className="grid md:grid-cols-2 items-center min-h-[70vh]">
        {/* Portrait Side - Gallery Frame */}
        <div className="flex items-center justify-center p-6 bg-white">
          <div className="w-full max-w-lg">
            <div className="aspect-[3/4] border border-stone-200 rounded-sm shadow-2xl overflow-hidden">
              <img
                src="/AprilB2.jpg"
                alt="April Broadhurst"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bio Text Side */}
        <div className="flex items-center justify-center p-12 md:p-16 lg:p-24 bg-[#FAF9F6]">
          <div className="max-w-lg">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-charcoal mb-12">
              About Me
            </h2>
            <div className="font-sans text-lg text-charcoal leading-loose space-y-6">
              <p>
                I am a dedicated real estate professional serving Tacoma and the surrounding areas,
                specializing in first-time homebuyers, move-up buyers, and home sellers. With years
                of experience helping individuals and families navigate the process, I bring a
                knowledgeable, hands-on, and client-first approach to every transaction.
              </p>
              <p>
                I understand that real estate is more than just buying or selling a home—it's about
                building wealth, creating stability, and finding a place where memories are made. I am
                passionate about educating my clients, ensuring you feel empowered and confident every
                step of the way.
              </p>
              <p>
                As a Tacoma local, I have deep roots in the community and a strong network of trusted
                professionals. Beyond real estate, I am a proud mom, an active community volunteer, and
                a firm believer in giving back.
              </p>
              <p>
                If you're looking for an approachable, results-driven partner, I am ready to help you
                make your next move with confidence.
              </p>
            </div>
            <div className="mt-12">
              <a
                href="mailto:april@aprilbroadhurstrealestate.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-sans text-sm font-medium tracking-wider hover:bg-slate transition-colors duration-300 shadow-md"
              >
                <Mail size={18} />
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Resources */}
      <section id="resources" className="relative py-24 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/cody-chan-F6Xk9bXzHek-unsplash.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-center text-white mb-4">
              Client Resources
            </h2>
            <p className="font-sans text-lg text-center text-white mb-16 max-w-2xl mx-auto leading-loose">
              Everything you need to navigate your real estate journey with confidence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: HomeIcon,
                title: "Home Buyer's Guide",
                description: "Your comprehensive roadmap to purchasing a home in the Pacific Northwest",
                link: "https://home-buyer-guide.my.canva.site/home-buyer-guide"
              },
              {
                icon: FileText,
                title: "Home Seller's Guide",
                description: "Expert strategies to maximize your home's value and sell with confidence",
                link: "https://home-buyer-guide.my.canva.site/home-seller-guide"
              },
              {
                icon: TrendingUp,
                title: "Home Value Report",
                description: "Get an accurate, data-driven estimate of your property's current market value",
                link: "https://vandark.kw.com/whats-my-home-worth"
              },
              {
                icon: GraduationCap,
                title: "Home Buyer Class",
                description: "Join our educational series designed for first-time homebuyers",
                link: "https://us02web.zoom.us/meeting/register/YsGcu1aaTO2Rn8p0VCcVMA#/registration"
              },
              {
                icon: ExternalLink,
                title: "Featured Listings",
                description: "Browse my current portfolio of exceptional Pacific Northwest properties",
                link: "https://aprilbroadhurstrealestate.kw.com"
              },
              {
                icon: Heart,
                title: "Community Programs",
                description: "Learn about my commitment to giving back to Pierce County",
                link: "#community"
              }
            ].map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                target={resource.link.startsWith('http') ? '_blank' : undefined}
                rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeInUp}
                className="group bg-white/95 backdrop-blur-sm p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-forest"
              >
                <resource.icon className="w-10 h-10 text-forest mb-4 group-hover:text-charcoal transition-colors" />
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3">{resource.title}</h3>
                <p className="font-sans text-charcoal leading-loose">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section id="community" className="py-24 px-6 bg-linen">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-charcoal mb-6">
              Rooted in Tacoma
            </h2>
            <p className="font-sans text-xl text-charcoal max-w-3xl mx-auto leading-loose">
              My commitment to this community extends far beyond real estate.
              I believe in lifting others and making Pierce County a better place for all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
              className="bg-white p-10 rounded-sm shadow-md"
            >
              <Users className="w-12 h-12 text-forest mb-4" />
              <h3 className="font-serif text-3xl font-semibold text-charcoal mb-4">Tacoma Rescue Mission</h3>
              <p className="font-sans text-lg text-charcoal leading-loose mb-4">
                Proud supporter and volunteer with the Tacoma Rescue Mission, working to provide
                shelter, meals, and hope to our neighbors experiencing homelessness. Every closing
                includes a donation to continue this vital work.
              </p>
              <a
                href="https://www.trm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-forest hover:text-charcoal transition-colors font-medium"
              >
                Learn More
                <ExternalLink size={16} />
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeInUp}
              className="bg-white p-10 rounded-sm shadow-md"
            >
              <Heart className="w-12 h-12 text-forest mb-4" />
              <h3 className="font-serif text-3xl font-semibold text-charcoal mb-4">EFN Food Drive</h3>
              <p className="font-sans text-lg text-charcoal leading-loose mb-4">
                Active organizer of the Emergency Food Network (EFN) food drives, helping ensure
                that no family in Pierce County goes hungry. Together, we've collected thousands
                of pounds of food for our community.
              </p>
              <a
                href="https://www.efoodnet.org/get-involved/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-forest hover:text-charcoal transition-colors font-medium"
              >
                Learn More
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSexAJxB4HnZoEql_uKxfrXhpO7z1l4l4iiQkrBW0pOCiF7K8w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-sans text-sm font-medium tracking-wider hover:bg-slate transition-colors duration-300 shadow-md"
            >
              EMPOWERING WOMEN OF PIERCE COUNTY APPLICATION
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="relative py-24 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/gantavya-bhatt-ytPJ4kppYWE-unsplash.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-center text-white mb-4">
              Client Testimonials
            </h2>
            <p className="font-sans text-lg text-center text-white mb-16 leading-loose">
              Kind words from the families I've had the privilege to serve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                text: "April made our first home buying experience seamless and stress-free. Her knowledge of Pierce County is unmatched, and she truly cares about finding the perfect fit for your family. We couldn't be happier in our new Tacoma home!",
                author: "Emily & Jason R.",
                rating: 5
              },
              {
                text: "Working with April was an absolute joy. She's professional, responsive, and genuinely invested in her clients' success. Her deep roots in the community gave us confidence every step of the way.",
                author: "Sarah M.",
                rating: 5
              },
              {
                text: "April went above and beyond to help us sell our home and find our dream property. Her market expertise and negotiation skills are top-tier. Plus, knowing she gives back to the Tacoma community made us feel even better about working with her.",
                author: "David & Jennifer L.",
                rating: 5
              },
              {
                text: "If you want someone who genuinely cares, has deep local knowledge, and will fight for your best interests, April is your realtor. She made the entire process feel personal and guided us with warmth and expertise.",
                author: "Michael T.",
                rating: 5
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-sm shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-forest text-xl">★</span>
                  ))}
                </div>
                <p className="font-sans text-lg text-charcoal leading-loose italic mb-4">
                  "{review.text}"
                </p>
                <p className="font-serif text-xl font-semibold text-charcoal">
                  — {review.author}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <a
              href="https://www.google.com/search?q=april+broadhurst+real+estate+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-medium text-white hover:text-linen transition-colors tracking-wider"
            >
              READ MORE REVIEWS ON GOOGLE
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-24 px-6 bg-linen">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-charcoal mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-sans text-xl text-charcoal mb-12 leading-loose">
              Book a consultation today and let's discuss how I can help you achieve your real estate goals.
            </p>
            <a
              href="https://calendly.com/aprilbroadhurst"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-sans text-sm font-medium tracking-wider hover:bg-slate transition-colors duration-300 shadow-lg"
            >
              <Calendar size={18} />
              BOOK A CONSULTATION
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-3xl font-semibold mb-4">April Broadhurst</h3>
              <p className="font-sans text-sm leading-loose opacity-90">
                Real Estate Rooted in Tacoma
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold mb-4">Contact</h4>
              <div className="space-y-3 font-sans text-sm">
                <a href="mailto:april@aprilbroadhurstrealestate.com" className="flex items-center gap-2 hover:text-linen transition-colors">
                  <Mail size={16} />
                  april@aprilbroadhurstrealestate.com
                </a>
                <a href="tel:+12536175202" className="flex items-center gap-2 hover:text-linen transition-colors">
                  <Phone size={16} />
                  (253) 617-5202
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold mb-4">Connect</h4>
              <div className="space-y-3 font-sans text-sm">
                <a
                  href="https://www.linkedin.com/in/april-broadhurst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-linen transition-colors"
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/april.broadhurst.real.estate/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-linen transition-colors"
                >
                  <InstagramIcon size={16} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="font-sans text-xs opacity-75 leading-loose">
              © 2026 April Broadhurst Real Estate. All rights reserved. | Pierce County, Washington | License #: 21019110 - WA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
