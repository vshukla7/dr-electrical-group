"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "panels" | "solar" | "ac" | "pumps" | "plumbing" | "appliances"
  >("panels");
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);


  return (
    <div className="min-h-screen bg-white">
      {/* ── NAVBAR ── */}
      <nav className="site-nav" id="navbar">
        <div className="nav-inner">
          <a href="#home" className="nav-logo-link">
            <Image
              src="/logo.png"
              alt="DR Electrical Group Logo"
              width={52}
              height={52}
              style={{ height: "48px", width: "48px", objectFit: "contain", borderRadius: "6px" }}
              priority
            />
            <div className="nav-brand-text">
              <span className="nav-brand-title">DR ELECTRICAL GROUP</span>
              <span className="nav-brand-sub">Electrical &amp; Engineering Services</span>
            </div>
          </a>

          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#expertise">Expertise</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#contact" className="nav-cta">
                Contact Us
              </a>
            </li>
          </ul>

          <button
            className="hamburger-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} id="mobileMenu">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>
            Services
          </a>
          <a href="#expertise" onClick={() => setMobileMenuOpen(false)}>
            Expertise
          </a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)}>
            Products &amp; Solutions
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </a>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow2"></div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow">
              ⚡ A Complete Electrical, Plumbing &amp; Turnkey Solution
            </div>
            <h1 className="hero-title">
              Powering India's
              <br />
              <span>Electrical &amp; Technical</span>
              <br />
              Future
            </h1>
            <p className="hero-subtitle">
              DR Electrical Group is a premier service-based company delivering end-to-end
              solutions for Electrical Works, Plumbing, Air Conditioning, Appliance Repairs,
              Water Pumps, Solar Systems, and Panel Repairs — from installation to prompt
              commissioning across West Champaran, Bihar &amp; India.
            </p>
            <div className="hero-btns">
              <a href="#services" className="btn-primary">
                View Our Services
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-stat-card">
              <div className="stat-num">5 Years</div>
              <div className="stat-label">Industry &amp; Technical Expertise</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-num">1,000+</div>
              <div className="stat-label">Projects &amp; Repairs Successfully Delivered</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-num">7+</div>
              <div className="stat-label">Specialized Service Verticals</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-num">24 / 7</div>
              <div className="stat-label">Dedicated On-Call Support — Bihar &amp; India</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          Scroll
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section className="section about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-img-stack">
              <img
                className="about-img-main"
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Electrical panel technician at work"
              />
              <img
                className="about-img-accent"
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
                alt="Solar panels setup"
              />
              <div className="about-badge">
                <strong>5</strong>
                <span>
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </div>

            <div className="about-content">
              <div className="section-tag">About Us</div>
              <div className="title-line"></div>
              <h2 className="section-title">
                Your Reliable Partner in <span>Quality Engineering</span>
              </h2>
              <p className="section-desc">
                DR Electrical Group is a service-based company which provides electrical
                work, plumbing work, air conditioner repairing work, all electrical appliance
                repairing work, water pump work, solar system work, and panel repair work. We
                are a professional and experienced team based in West Champaran (WC), Bihar,
                India.
              </p>
              <p className="section-desc" style={{ marginTop: "12px" }}>
                With highly qualified technicians in electrical, plumbing, and refrigeration
                disciplines, we are committed to excellence, safety, and rapid resolution —
                standing as a trusted beacon of reliability and quality workmanship across
                the region.
              </p>

              <div className="vision-mission">
                <div className="vm-card">
                  <h4>👁 Our Vision</h4>
                  <p>
                    To develop a premier team of professionals delivering complete, reliable,
                    and modern solutions for electrical systems, solar setups, plumbing
                    networks, and power panel maintenance.
                  </p>
                </div>
                <div className="vm-card gold">
                  <h4>🎯 Our Mission</h4>
                  <p>
                    Render services with state-of-the-art expertise in electromechanical and
                    repair works while ensuring maximum safety, fast turnaround times, and
                    delivering lasting value for all clients.
                  </p>
                </div>
              </div>

              <div className="directors">
                <div className="director-card">
                  <Image
                    src="/Dir.jpeg"
                    alt="Radheshyam Yadav - Director"
                    width={56}
                    height={56}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      border: "2px solid #000000",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <div className="director-info">
                    <h5>Radheshyam Yadav</h5>
                    <span>Director &amp; Founder</span>
                  </div>
                </div>
                <div className="director-card">
                  <div className="director-avatar gold">DR</div>
                  <div className="director-info">
                    <h5>DR Technical Team</h5>
                    <span>Certified Engineers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO / SERVICES ── */}
      <section className="section what-we-do" id="services">
        <div className="section-inner">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
            <div className="section-tag">What We Do</div>
            <div className="title-line" style={{ margin: "0 auto 20px" }}></div>
            <h2 className="section-title">
              Comprehensive <span>Power Solutions</span>
            </h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              From appliance repair to electrical panel execution and turnkey solar
              installations — we cover the full lifecycle of your power, cooling, and water
              infrastructure.
            </p>
          </div>

          <div className="wwd-grid">
            {/* Card 1: Electrical & Panels */}
            <div className="wwd-card">
              <div className="wwd-card-header">
                <div className="wwd-icon">⚡</div>
                <h3>Electrical &amp; Panels</h3>
              </div>
              <div className="wwd-card-body">
                <ul className="wwd-list">
                  <li>Complete Electrical Wiring &amp; Installation Works</li>
                  <li>Panel Repair Work &amp; Switchgear Maintenance</li>
                  <li>Distribution Board (DB), MCB, MCCB &amp; Changeover Setup</li>
                  <li>LT &amp; HT Panel Diagnostics, Overhauling &amp; Rewiring</li>
                  <li>Industrial Machine Power Cabling &amp; Earthing Pits</li>
                  <li>Automatic Phase Balancer &amp; Surge Protection Systems</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Solar & Plumbing */}
            <div className="wwd-card gold-card">
              <div className="wwd-card-header">
                <div className="wwd-icon">☀️</div>
                <h3>Solar &amp; Plumbing</h3>
              </div>
              <div className="wwd-card-body">
                <ul className="wwd-list">
                  <li>Solar System Work (On-Grid, Off-Grid &amp; Hybrid)</li>
                  <li>Rooftop Solar EPC &amp; Inverter System Configuration</li>
                  <li>Complete Plumbing Work (Domestic &amp; Commercial)</li>
                  <li>Water Pump Work (Borewell, Monoblock &amp; Submersible)</li>
                  <li>Pressure Booster Pumps &amp; Automatic Float Switch Integration</li>
                  <li>CPVC/UPVC Water Supply Piping &amp; Sanitary Solutions</li>
                </ul>
              </div>
            </div>

            {/* Card 3: AC & Appliance Repairs */}
            <div className="wwd-card dark-card">
              <div className="wwd-card-header">
                <div className="wwd-icon">🔧</div>
                <h3>AC &amp; Repairs</h3>
              </div>
              <div className="wwd-card-body">
                <ul className="wwd-list">
                  <li>Air Conditioner Repairing Work (Split &amp; Window AC)</li>
                  <li>AC Chemical Deep Cleaning, Gas Refill &amp; Leak Testing</li>
                  <li>All Electrical Appliance Repairing Work</li>
                  <li>Refrigerator, Washing Machine, Geyser &amp; Microwave Repair</li>
                  <li>24/7 Rapid Emergency Response (Within Hours)</li>
                  <li>Annual Maintenance Contracts (AMC) for Homes &amp; Offices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="section expertise" id="expertise">
        <div className="expertise-pattern"></div>
        <div className="section-inner">
          <div>
            <div
              className="section-tag"
              style={{ color: "var(--gold)", background: "rgba(245,168,0,0.12)" }}
            >
              Expert At
            </div>
            <div className="title-line"></div>
            <h2 className="section-title">
              We Are <span style={{ color: "var(--gold)" }}>Experts</span> At
            </h2>
            <p className="section-desc">
              Backed by experienced technicians and modern diagnostic tools, we deliver
              dependable craftsmanship across every domain of electromechanical engineering.
            </p>
          </div>

          <div className="expertise-grid">
            <div className="exp-card">
              <div className="exp-icon">⚙️</div>
              <h4>Electrical &amp; Panel Work</h4>
              <p>
                Complete electrical wiring, LT/HT panel repair work, industrial switchgear,
                transformer connections, and emergency fault troubleshooting.
              </p>
            </div>

            <div className="exp-card gold-border">
              <div className="exp-icon">🚰</div>
              <h4>Plumbing &amp; Water Pumps</h4>
              <p>
                Full-scope plumbing work, water pump installation, submersible motor
                rewinding, pipeline layout, and pressure regulation setups.
              </p>
            </div>

            <div className="exp-card">
              <div className="exp-icon">❄️</div>
              <h4>AC &amp; Appliance Repair</h4>
              <p>
                Precision air conditioner repairing work, compressor replacement, gas
                charging, and doorstep repair for all domestic and commercial appliances.
              </p>
            </div>

            <div className="exp-card gold-border">
              <div className="exp-icon">☀️</div>
              <h4>Solar Power Systems</h4>
              <p>
                Turnkey solar system work from rooftop feasibility to panel mounting,
                inverter synchronization, and green energy maintenance contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS & SOLUTIONS TABS ── */}
      <section className="section products" id="products">
        <div className="section-inner">
          <div>
            <div className="section-tag">Products &amp; Solutions</div>
            <div className="title-line"></div>
            <h2 className="section-title">
              Precision Engineering &amp; <span>Solutions</span>
            </h2>
            <p className="section-desc">
              Explore our core technical offerings designed for residential, commercial, and
              industrial efficiency.
            </p>
          </div>

          <div className="products-tabs">
            <button
              className={`tab-btn ${activeTab === "panels" ? "active" : ""}`}
              onClick={() => setActiveTab("panels")}
            >
              Electrical Panels
            </button>
            <button
              className={`tab-btn ${activeTab === "solar" ? "active" : ""}`}
              onClick={() => setActiveTab("solar")}
            >
              Solar Systems
            </button>
            <button
              className={`tab-btn ${activeTab === "ac" ? "active" : ""}`}
              onClick={() => setActiveTab("ac")}
            >
              Air Conditioning
            </button>
            <button
              className={`tab-btn ${activeTab === "pumps" ? "active" : ""}`}
              onClick={() => setActiveTab("pumps")}
            >
              Water Pumps
            </button>
            <button
              className={`tab-btn ${activeTab === "plumbing" ? "active" : ""}`}
              onClick={() => setActiveTab("plumbing")}
            >
              Plumbing Works
            </button>
            <button
              className={`tab-btn ${activeTab === "appliances" ? "active" : ""}`}
              onClick={() => setActiveTab("appliances")}
            >
              Appliance Repair
            </button>
          </div>

          {/* TAB 1: PANELS */}
          <div className={`tab-panel ${activeTab === "panels" ? "active" : ""}`}>
            <div className="product-content">
              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: "16px",
                  }}
                >
                  Electrical Panel &amp; Switchgear Services
                </h3>
                <p className="product-desc">
                  We specialize in the fabrication, repair, overhauling, and preventative
                  maintenance of power control panels, distribution boxes, and industrial
                  switchboards with adherence to national safety codes.
                </p>
                <ul className="product-features">
                  <li>LT &amp; HT Panel Repair &amp; Rewiring</li>
                  <li>Main Distribution Board (MDB) &amp; SDB</li>
                  <li>Automatic Phase Changover Systems</li>
                  <li>Motor Control Centers (MCC Panels)</li>
                  <li>Busbar Modification &amp; Maintenance</li>
                  <li>Circuit Breaker &amp; Contactor Replacement</li>
                  <li>Earthing Testing &amp; Surge Suppressors</li>
                  <li>Industrial Automation &amp; Relays</li>
                </ul>
              </div>
              <div className="product-visual">
                <h3>Heavy-Duty Panel Solutions</h3>
                <p>
                  Engineered for maximum reliability and operator safety. Whether it is an
                  emergency breakdown or a planned plant upgrade, our technicians restore
                  power integrity fast.
                </p>
                <div
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      borderRadius: "6px",
                      padding: "12px 20px",
                      textAlign: "center",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "24px",
                        fontFamily: "Rajdhani",
                      }}
                    >
                      100%
                    </strong>
                    <span style={{ fontSize: "12px", opacity: 0.85 }}>Safety Tested</span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      borderRadius: "6px",
                      padding: "12px 20px",
                      textAlign: "center",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "24px",
                        fontFamily: "Rajdhani",
                      }}
                    >
                      24/7
                    </strong>
                    <span style={{ fontSize: "12px", opacity: 0.85 }}>On-Call Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2: SOLAR */}
          <div className={`tab-panel ${activeTab === "solar" ? "active" : ""}`}>
            <div className="product-content">
              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: "16px",
                  }}
                >
                  Turnkey Solar Rooftop &amp; Ground EPC
                </h3>
                <p className="product-desc">
                  Harness clean, affordable solar energy for your home, commercial complex, or
                  farm. We provide complete site assessment, structural design, panel
                  mounting, and net-metering.
                </p>
                <ul className="product-features">
                  <li>On-Grid Grid-Tied Solar Systems</li>
                  <li>Off-Grid Battery Backup Solar Plants</li>
                  <li>High-Efficiency Mono PERC Panels</li>
                  <li>Smart String &amp; Micro-Inverters</li>
                  <li>Solar Agricultural Water Pumping</li>
                  <li>Net-Metering Approval Assistance</li>
                  <li>Galvanized Mounting Structures</li>
                  <li>Annual Solar Panel Cleaning &amp; AMC</li>
                </ul>
              </div>
              <div className="product-visual solar">
                <h3>Clean Energy For Decades</h3>
                <p>
                  Cut your electricity bills up to 90% while building an eco-friendly energy
                  future. Installed with certified tier-1 components and heavy-duty storm-proof
                  mounting.
                </p>
                <div
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(0,0,0,0.12)",
                      borderRadius: "6px",
                      padding: "12px 20px",
                      textAlign: "center",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "24px",
                        fontFamily: "Rajdhani",
                      }}
                    >
                      25 Years
                    </strong>
                    <span style={{ fontSize: "12px", opacity: 0.85 }}>Panel Performance</span>
                  </div>
                  <div
                    style={{
                      background: "rgba(0,0,0,0.12)",
                      borderRadius: "6px",
                      padding: "12px 20px",
                      textAlign: "center",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "24px",
                        fontFamily: "Rajdhani",
                      }}
                    >
                      Up to 90%
                    </strong>
                    <span style={{ fontSize: "12px", opacity: 0.85 }}>Bill Reduction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 3: AC */}
          <div className={`tab-panel ${activeTab === "ac" ? "active" : ""}`}>
            <div className="product-content">
              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: "16px",
                  }}
                >
                  Air Conditioner Repair &amp; Servicing
                </h3>
                <p className="product-desc">
                  Keep your cooling systems operating at peak performance during scorching
                  summers with our certified refrigeration technicians.
                </p>
                <ul className="product-features">
                  <li>Split &amp; Window AC Installation</li>
                  <li>High-Pressure Chemical Jet Foam Wash</li>
                  <li>Gas Refilling (R32, R410A, R22)</li>
                  <li>Compressor Replacement &amp; Diagnostics</li>
                  <li>PCB Circuit Board Repair &amp; Sensor Check</li>
                  <li>Water Leakage &amp; Drainage Fixing</li>
                  <li>Ductable &amp; Cassette AC Servicing</li>
                  <li>Seasonal Preventative AMC Packages</li>
                </ul>
              </div>
              <div className="product-visual dark">
                <h3 style={{ color: "var(--gold)" }}>Rapid Cooling Restoration</h3>
                <p style={{ color: "rgba(255,255,255,0.85)" }}>
                  We test airflow, refrigerant pressures, and power consumption to guarantee
                  maximum cooling efficiency with minimal electric consumption.
                </p>
                <div
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(245,168,0,0.15)",
                      border: "1px solid rgba(245,168,0,0.3)",
                      borderRadius: "6px",
                      padding: "12px 20px",
                      textAlign: "center",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "24px",
                        fontFamily: "Rajdhani",
                        color: "var(--gold)",
                      }}
                    >
                      Fast
                    </strong>
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
                      Same Day Response
                    </span>
                  </div>
                  <div
                    style={{
                      background: "rgba(245,168,0,0.15)",
                      border: "1px solid rgba(245,168,0,0.3)",
                      borderRadius: "6px",
                      padding: "12px 20px",
                      textAlign: "center",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "24px",
                        fontFamily: "Rajdhani",
                        color: "var(--gold)",
                      }}
                    >
                      100%
                    </strong>
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
                      Genuine Spare Parts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 4: WATER PUMPS */}
          <div className={`tab-panel ${activeTab === "pumps" ? "active" : ""}`}>
            <div className="product-content">
              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: "16px",
                  }}
                >
                  Water Pump Installation &amp; Overhauling
                </h3>
                <p className="product-desc">
                  Complete borewell, submersible, and centrifugal water pumping solutions for
                  farms, residential societies, and commercial infrastructure.
                </p>
                <ul className="product-features">
                  <li>Submersible Pump Lowering &amp; Retrieval</li>
                  <li>Motor Rewinding (Copper Wire)</li>
                  <li>Centrifugal Monoblock Pump Servicing</li>
                  <li>Automatic Water Level Controller Systems</li>
                  <li>Starter Panel &amp; Capacitor Upgrades</li>
                  <li>Booster Pump for Multi-Story Buildings</li>
                  <li>Impeller &amp; Mechanical Seal Replacement</li>
                  <li>Borewell Flushing &amp; Pipeline Repair</li>
                </ul>
              </div>
              <div className="product-visual">
                <h3>Uninterrupted Water Supply</h3>
                <p>
                  High water pressure, leak-free operation, and robust electrical motor
                  protection ensure you never face water shortages.
                </p>
                <div
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      borderRadius: "6px",
                      padding: "12px 20px",
                      textAlign: "center",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "24px",
                        fontFamily: "Rajdhani",
                      }}
                    >
                      1 HP - 25 HP
                    </strong>
                    <span style={{ fontSize: "12px", opacity: 0.85 }}>Pump Range Handled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 5: PLUMBING */}
          <div className={`tab-panel ${activeTab === "plumbing" ? "active" : ""}`}>
            <div className="product-content">
              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: "16px",
                  }}
                >
                  Plumbing &amp; Sanitary Infrastructure
                </h3>
                <p className="product-desc">
                  Turnkey residential and commercial plumbing solutions from initial pipeline
                  routing to premium sanitary fittings, drainage networks, and leakage repair.
                </p>
                <ul className="product-features">
                  <li>CPVC, UPVC &amp; SWR Piping Installation</li>
                  <li>Concealed Bathroom Pipeline Fitting</li>
                  <li>Overhead Water Tank Setup &amp; Cleaning</li>
                  <li>Sump &amp; Drainage Line Laying</li>
                  <li>Water Pressure Testing &amp; Leak Fixing</li>
                  <li>Geyser &amp; Solar Water Heater Plumbing</li>
                  <li>Modern Taps, Valves &amp; Shower Fixes</li>
                  <li>Industrial Water Supply Pipe Networks</li>
                </ul>
              </div>
              <div className="product-visual dark">
                <h3 style={{ color: "var(--gold)" }}>Leak-Free Plumbing</h3>
                <p style={{ color: "rgba(255,255,255,0.85)" }}>
                  Executed with precision slope alignment, premium adhesive joints, and
                  pressure testing to ensure decades of hassle-free water flow.
                </p>
              </div>
            </div>
          </div>

          {/* TAB 6: APPLIANCES */}
          <div className={`tab-panel ${activeTab === "appliances" ? "active" : ""}`}>
            <div className="product-content">
              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: "16px",
                  }}
                >
                  All Electrical Appliance Repairing Work
                </h3>
                <p className="product-desc">
                  Fast, dependable, and affordable repair services for all electrical household
                  and commercial equipment right at your doorstep.
                </p>
                <ul className="product-features">
                  <li>Single &amp; Double Door Refrigerator Repair</li>
                  <li>Front Load &amp; Top Load Washing Machines</li>
                  <li>Microwave Oven &amp; Induction Cooktop</li>
                  <li>Electric Water Geyser &amp; Immersion Rods</li>
                  <li>Ceiling Fans, Exhaust &amp; Industrial Blowers</li>
                  <li>Inverter &amp; Battery Diagnostics</li>
                  <li>Mixer Grinder &amp; Kitchen Motors</li>
                  <li>Commercial Coolers &amp; Water Dispensers</li>
                </ul>
              </div>
              <div className="product-visual">
                <h3>Doorstep Repair Service</h3>
                <p>
                  Experienced technicians equipped with genuine replacement parts and testing
                  meters ensure prompt diagnosis and dependable repairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── SOLAR COMMITMENT STRIP ── */}
      <div className="strip">
        <div className="strip-inner">
          <div>
            <h2>
              Solar Power — <span style={{ color: "var(--gold)" }}>Our Clean Energy</span>{" "}
              Commitment
            </h2>
            <p>
              We provide fully customized solar projects from commercial rooftops to
              residential systems and agricultural solar water pumps. Delivering reliable,
              sustainable power across Bihar and India.
            </p>
            <ul className="strip-features">
              <li>Turnkey Solar EPC from Feasibility to Installation &amp; O&amp;M</li>
              <li>High-Efficiency Solar PV Panels &amp; Smart Grid Inverters</li>
              <li>Panel Repair &amp; Distribution Grid Safety Compliance</li>
              <li>Real-Time Generation Monitoring on Mobile &amp; Desktop</li>
              <li>Prompt 24/7 On-Call Support &amp; Preventative AMC</li>
            </ul>
          </div>
          <div className="strip-card">
            <h4>☀️ Solar &amp; Electrical Commitment</h4>
            <p>
              DR Electrical Group is dedicated to powering homes, businesses, and agriculture
              with zero compromise on safety and longevity. Handled by trained technicians
              directed by Radheshyam Yadav.
            </p>
            <div
              style={{
                marginTop: "20px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div
                style={{
                  fontFamily: "Rajdhani",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "var(--gold)",
                }}
              >
                100%
              </div>
              <div style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.85)" }}>
                Commitment to Quality, Reliability &amp; Safety
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── LEGAL / REGISTRATION SUMMARY STRIP ── */}
      <div className="legal">
        <div className="legal-inner">
          <div className="legal-item">
            <div className="legal-icon">🏛️</div>
            <div className="legal-text">
              <strong>Company</strong>
              <span>DR Electrical Group</span>
            </div>
          </div>
          <div className="legal-item">
            <Image
              src="/Dir.jpeg"
              alt="Radheshyam Yadav"
              width={48}
              height={48}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "2px solid #000000",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div className="legal-text">
              <strong>Director</strong>
              <span>Radheshyam Yadav</span>
            </div>
          </div>
          <div className="legal-item">
            <div className="legal-icon">📞</div>
            <div className="legal-text">
              <strong>Contact Numbers</strong>
              <span>+91 9955444934 / 9341070919</span>
            </div>
          </div>
          <div className="legal-item">
            <div className="legal-icon">📍</div>
            <div className="legal-text">
              <strong>Registered Location</strong>
              <span>West Champaran, Bihar, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT US ── */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div>
            <div
              className="section-tag"
              style={{ color: "var(--gold)", background: "rgba(245,168,0,0.12)" }}
            >
              Get In Touch
            </div>
            <div className="title-line"></div>
            <h2 className="section-title">
              Contact <span style={{ color: "var(--gold)" }}>Us</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.75,
                marginBottom: "8px",
              }}
            >
              Reach out to discuss your electrical, plumbing, air conditioning, appliance, or
              solar project requirements. Our dedicated team is ready to assist you.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <div className="ci-icon">📞</div>
                <div className="ci-text">
                  <strong>Phone / WhatsApp</strong>
                  <a href="tel:+919955444934">+91 9955444934</a>
                  <br />
                  <a href="tel:+919341070919">+91 9341070919</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="ci-icon">✉️</div>
                <div className="ci-text">
                  <strong>Email</strong>
                  <a href="mailto:drelectricalgroup@gmail.com">
                    drelectricalgroup@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="ci-icon">👤</div>
                <div className="ci-text">
                  <strong>Director</strong>
                  <span>Radheshyam Yadav</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="ci-icon">📍</div>
                <div className="ci-text">
                  <strong>Registered Office</strong>
                  <span>West Champaran (WC), Bihar, India</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="ci-icon">⏱️</div>
                <div className="ci-text">
                  <strong>Operating Hours</strong>
                  <span>Mon – Sun: 8:00 AM – 9:00 PM (24/7 Emergency Support)</span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Chat Card */}
          <div
            className="contact-form"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "40px 36px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "#25D366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
                  flexShrink: 0,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0, lineHeight: 1.1 }}>
                  Chat on WhatsApp
                </h3>
                <span style={{ fontSize: "13px", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Instant Support &amp; Direct Consultation
                </span>
              </div>
            </div>

            <p style={{ fontSize: "15.5px", color: "rgba(255, 255, 255, 0.76)", lineHeight: "1.75", marginBottom: "26px" }}>
              Skip long forms! Contact DR Electrical Group directly on WhatsApp for immediate technician dispatch, pricing, emergency breakdowns, plumbing, AC repair, water pump rewinding, and solar consultation.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* WhatsApp Button 1 - Primary / Director */}
              <a
                href="https://wa.me/919955444934?text=Hello%20DR%20Electrical%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#25D366",
                  color: "#ffffff",
                  padding: "16px 22px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "17px",
                  boxShadow: "0 8px 24px rgba(37, 211, 102, 0.35)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <div style={{ textAlign: "left" }}>
                    <span style={{ display: "block", fontSize: "16px", fontWeight: 700 }}>
                      Chat with Radheshyam Yadav
                    </span>
                    <span style={{ display: "block", fontSize: "13.5px", opacity: 0.95, fontWeight: 500 }}>
                      +91 9955444934 (Director / Primary)
                    </span>
                  </div>
                </div>
                <span style={{ fontSize: "20px" }}>➔</span>
              </a>

              {/* WhatsApp Button 2 - Technical Team */}
              <a
                href="https://wa.me/919341070919?text=Hello%20DR%20Electrical%20Group,%20I%20need%20technical%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(37, 211, 102, 0.14)",
                  border: "2px solid #25D366",
                  color: "#ffffff",
                  padding: "16px 22px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "17px",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <div style={{ textAlign: "left" }}>
                    <span style={{ display: "block", fontSize: "16px", fontWeight: 700 }}>
                      Chat with Support Team
                    </span>
                    <span style={{ display: "block", fontSize: "13.5px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                      +91 9341070919 (Technical &amp; Service)
                    </span>
                  </div>
                </div>
                <span style={{ fontSize: "20px", color: "#25D366" }}>➔</span>
              </a>
            </div>

            <div
              style={{
                marginTop: "28px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                <span>⚡</span>
                <span>Immediate 5-Min Response</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                <span>🔒</span>
                <span>Direct Verified Contact</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                <span>📍</span>
                <span>West Champaran, Bihar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <Image
              src="/logo.png"
              alt="DR Electrical Group Logo"
              width={48}
              height={48}
              style={{ height: "44px", width: "44px", objectFit: "contain", borderRadius: "6px" }}
            />
            <div className="nav-brand-text">
              <span className="nav-brand-title" style={{ color: "#ffffff", fontSize: "18px" }}>
                DR ELECTRICAL GROUP
              </span>
              <span className="nav-brand-sub" style={{ color: "var(--gold)" }}>
                Electrical &amp; Engineering Services
              </span>
            </div>
          </div>

          <div className="footer-text">
            © 2026 DR Electrical Group. All Rights Reserved.
            <br />
            Director: Radheshyam Yadav | Based in West Champaran (WC), Bihar, India.
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href="https://wa.me/919955444934?text=Hello%20DR%20Electrical%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "26px",
          right: "26px",
          zIndex: 9999,
          background: "#25D366",
          color: "#ffffff",
          borderRadius: "50px",
          padding: "13px 22px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 8px 28px rgba(37, 211, 102, 0.45)",
          textDecoration: "none",
          fontWeight: 700,
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "16px",
          letterSpacing: "0.05em",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
        aria-label="Chat on WhatsApp with DR Electrical Group"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
