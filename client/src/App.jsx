import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brand-mark">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span>
          Campus<span className="brand-accent">OS</span>
        </span>
      </div>

      <div className="nav-links">
        <a href="#discover">Discover</a>
        <a href="#track">Track</a>
        <a href="#experiences">Experiences</a>
        <a href="#community">Community</a>
      </div>

      <div className="nav-actions">
        <button className="login-btn">Sign in</button>
        <button className="nav-cta">Get started</button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">

      <div className="hero-topline">
        <span>THE CAREER OS FOR STUDENTS</span>
        <span className="topline-arrow">↗</span>
      </div>

      <div className="hero-content">

        <div className="hero-copy">

          <h1>
            Your career
            <br />
            shouldn't feel
            <br />
            <span>scattered.</span>
          </h1>

          <p>
            Discover opportunities, track every application,
            learn from real candidate experiences, and build
            a profile that represents you.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">
              Start building →
            </button>

            <button className="secondary-btn">
              Explore the platform
            </button>
          </div>

        </div>

        <div className="hero-product">

          <div className="floating-note note-one">
            <span>APPLICATIONS</span>
            <strong>12 active</strong>
          </div>

          <div className="floating-note note-two">
            <span>PROFILE</span>
            <strong>82% complete</strong>
          </div>

          <div className="dashboard-preview">

            <div className="preview-topbar">
              <div className="preview-brand">
                CampusOS
              </div>

              <div className="preview-user">
                A
              </div>
            </div>

            <div className="preview-body">

              <div className="preview-sidebar">
                <span className="sidebar-active">Overview</span>
                <span>Opportunities</span>
                <span>Applications</span>
                <span>Experiences</span>
              </div>

              <div className="preview-main">

                <div className="preview-heading">
                  <div>
                    <small>MONDAY, AUG 24</small>
                    <h3>Your career dashboard</h3>
                  </div>

                  <span className="preview-status">
                    ● Active
                  </span>
                </div>

                <div className="preview-stats">

                  <div>
                    <small>Applications</small>
                    <strong>12</strong>
                    <span>+3 this week</span>
                  </div>

                  <div>
                    <small>Interviews</small>
                    <strong>3</strong>
                    <span>1 upcoming</span>
                  </div>

                  <div>
                    <small>Offers</small>
                    <strong>1</strong>
                    <span>Congratulations</span>
                  </div>

                </div>

                <div className="preview-applications">

                  <div className="preview-section-title">
                    <span>Recent applications</span>
                    <span>View all →</span>
                  </div>

                  <PreviewApplication
                    company="Google"
                    role="Software Engineering Intern"
                    status="Interview"
                    type="interview"
                  />

                  <PreviewApplication
                    company="Microsoft"
                    role="Software Engineer Intern"
                    status="Applied"
                    type="applied"
                  />

                  <PreviewApplication
                    company="Amazon"
                    role="SDE Intern"
                    status="OA"
                    type="oa"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="hero-bottom">

        <span>ONE PLACE FOR YOUR ENTIRE CAREER JOURNEY</span>

        <div className="hero-bottom-items">
          <span>DISCOVER</span>
          <span>→</span>
          <span>APPLY</span>
          <span>→</span>
          <span>LEARN</span>
          <span>→</span>
          <span>GROW</span>
        </div>

      </div>

    </section>
  );
}

function PreviewApplication({ company, role, status, type }) {
  return (
    <div className="preview-application">

      <div className="company-icon">
        {company.charAt(0)}
      </div>

      <div className="application-info">
        <strong>{role}</strong>
        <span>{company}</span>
      </div>

      <span className={`application-status ${type}`}>
        {status}
      </span>

    </div>
  );
}

function CareerLoop() {
  return (
    <section className="career-loop">

      <div className="section-label">
        00 / THE IDEA
      </div>

      <div className="loop-heading">
        <h2>
          A career is not
          <br />
          one application.
        </h2>

        <p>
          It is a loop. You discover something,
          apply, experience the process, learn,
          and use that knowledge for the next opportunity.
        </p>
      </div>

      <div className="loop">

        <div className="loop-item active">
          <span>01</span>
          <strong>Discover</strong>
          <p>Find opportunities worth your time.</p>
        </div>

        <div className="loop-line"></div>

        <div className="loop-item">
          <span>02</span>
          <strong>Apply</strong>
          <p>Keep every application organised.</p>
        </div>

        <div className="loop-line"></div>

        <div className="loop-item">
          <span>03</span>
          <strong>Experience</strong>
          <p>Share what actually happened.</p>
        </div>

        <div className="loop-line"></div>

        <div className="loop-item">
          <span>04</span>
          <strong>Improve</strong>
          <p>Turn every attempt into experience.</p>
        </div>

      </div>

    </section>
  );
}

function OpportunityPreview() {
  return (
    <div className="opportunity-window">

      <div className="opportunity-toolbar">

        <div>
          <span className="toolbar-label">
            DISCOVER
          </span>

          <h3>
            Opportunities
          </h3>
        </div>

        <div className="search-box">
          <span>⌕</span>
          <span>Search opportunities</span>
        </div>

      </div>

      <div className="filter-row">

        <span className="filter active">
          All
        </span>

        <span className="filter">
          Internships
        </span>

        <span className="filter">
          Hackathons
        </span>

        <span className="filter">
          Scholarships
        </span>

        <span className="filter">
          Remote
        </span>

      </div>

      <div className="opportunity-list">

        <Opportunity
          logo="G"
          title="Software Engineering Intern"
          company="Google"
          location="Bengaluru"
          tags={["Software Development", "Students"]}
          deadline="12 Sept"
        />

        <Opportunity
          logo="M"
          title="Software Engineer Intern"
          company="Microsoft"
          location="Hyderabad"
          tags={["Backend", "Cloud"]}
          deadline="18 Sept"
        />

        <Opportunity
          logo="a"
          title="SDE Internship"
          company="Amazon"
          location="Bangalore"
          tags={["DSA", "C++"]}
          deadline="24 Sept"
        />

      </div>

      <div className="opportunity-footer">
        <span>
          Showing opportunities relevant to you
        </span>

        <span className="browse-link">
          Browse all →
        </span>
      </div>

    </div>
  );
}

function Opportunity({
  logo,
  title,
  company,
  location,
  tags,
  deadline
}) {
  return (
    <div className="opportunity-item">

      <div className="opp-logo">
        {logo}
      </div>

      <div className="opp-content">

        <div className="opp-top">
          <strong>{title}</strong>

          <span className="opp-type">
            INTERNSHIP
          </span>
        </div>

        <span className="opp-company">
          {company} · {location}
        </span>

        <div className="opp-tags">

          {tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}

        </div>

      </div>

      <div className="opp-deadline">
        <span>Deadline</span>
        <strong>{deadline}</strong>
      </div>

    </div>
  );
}

function Discovery() {
  return (
    <section
      className="discovery-section"
      id="discover"
    >

      <div className="section-label">
        01 / DISCOVER
      </div>

      <div className="discovery-content">

        <div className="discovery-copy">

          <h2>
            The right
            <br />
            opportunity
            <br />
            shouldn't be
            <span> hard to find.</span>
          </h2>

          <p>
            Stop hunting through scattered LinkedIn posts,
            WhatsApp groups and spreadsheets. Find internships,
            hackathons and other opportunities in one place.
          </p>

          <div className="discovery-points">

            <FeaturePoint
              number="01"
              title="Search smarter"
              text="Filter opportunities by type, location, skills and deadline."
            />

            <FeaturePoint
              number="02"
              title="Know what you're applying to"
              text="See eligibility, deadlines and relevant information before applying."
            />

            <FeaturePoint
              number="03"
              title="Learn from other candidates"
              text="Read experiences attached directly to opportunities."
            />

          </div>

        </div>

        <div className="discovery-visual">
          <OpportunityPreview />
        </div>

      </div>

    </section>
  );
}

function FeaturePoint({ number, title, text }) {
  return (
    <div className="discovery-point">

      <span>{number}</span>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

    </div>
  );
}

function ApplicationTracker() {
  return (
    <section
      className="tracker-section"
      id="track"
    >

      <div className="section-label">
        02 / TRACK
      </div>

      <div className="tracker-heading">

        <h2>
          Stop losing track
          <br />
          of where you applied.
        </h2>

        <p>
          One timeline for every application.
          Know exactly what is waiting for you,
          what needs attention and what already happened.
        </p>

      </div>

      <div className="tracker-window">

        <div className="tracker-header">

          <div>
            <span>APPLICATION TRACKER</span>
            <h3>My applications</h3>
          </div>

          <button>
            + Add application
          </button>

        </div>

        <div className="tracker-columns">

          <TrackerColumn
            title="Applied"
            count="4"
            applications={[
              ["Razorpay", "Backend Intern"],
              ["Adobe", "Software Intern"]
            ]}
          />

          <TrackerColumn
            title="OA"
            count="2"
            applications={[
              ["Amazon", "SDE Intern"]
            ]}
          />

          <TrackerColumn
            title="Interview"
            count="3"
            applications={[
              ["Google", "SWE Intern"],
              ["Microsoft", "SWE Intern"]
            ]}
          />

          <TrackerColumn
            title="Offer"
            count="1"
            applications={[
              ["Startup", "Backend Intern"]
            ]}
          />

        </div>

      </div>

    </section>
  );
}

function TrackerColumn({ title, count, applications }) {
  return (
    <div className="tracker-column">

      <div className="column-heading">
        <span>{title}</span>
        <small>{count}</small>
      </div>

      {applications.map(([company, role]) => (
        <div
          className="tracker-card"
          key={`${company}-${role}`}
        >

          <div className="tracker-card-logo">
            {company.charAt(0)}
          </div>

          <strong>{role}</strong>

          <span>{company}</span>

          <div className="tracker-card-line"></div>

          <small>
            Updated recently
          </small>

        </div>
      ))}

    </div>
  );
}

function Experiences() {
  return (
    <section
      className="experience-section"
      id="experiences"
    >

      <div className="section-label">
        03 / EXPERIENCE
      </div>

      <div className="experience-content">

        <div className="experience-copy">

          <h2>
            Someone already
            <br />
            went through
            <br />
            <span>the interview.</span>
          </h2>

          <p>
            Why prepare blindly when students before you
            can tell you what actually happened?
          </p>

          <button className="text-btn">
            Explore experiences →
          </button>

        </div>

        <div className="experience-card">

          <div className="experience-card-top">

            <div className="experience-avatar">
              A
            </div>

            <div>
              <strong>Software Engineering Intern</strong>
              <span>Google · Interview Experience</span>
            </div>

          </div>

          <div className="experience-stage">
            <span>STAGE</span>
            <strong>Technical Interview</strong>
          </div>

          <div className="experience-tags">
            <span>DSA</span>
            <span>Arrays</span>
            <span>Binary Search</span>
            <span>Graphs</span>
          </div>

          <blockquote>
            "The first round focused heavily on arrays and
            binary search. The interviewer cared more about
            how I approached the problem than getting the
            answer immediately."
          </blockquote>

          <div className="experience-bottom">

            <span>
              Shared anonymously
            </span>

            <span>
              3 helpful votes
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

function Community() {
  return (
    <section
      className="community-section"
      id="community"
    >

      <div className="community-inner">

        <div className="section-label">
          04 / YOUR IDENTITY
        </div>

        <h2>
          Build a profile
          <br />
          that says more than
          <br />
          <span>a resume.</span>
        </h2>

        <p>
          Your skills, projects, experiences and journey —
          presented in one place you can actually share.
        </p>

        <button className="primary-btn">
          Create your profile →
        </button>

      </div>

    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="final-label">
        CAMPUSOS
      </div>

      <h2>
        Your next opportunity
        <br />
        starts here.
      </h2>

      <p>
        Discover. Apply. Learn. Repeat.
      </p>

      <button className="primary-btn">
        Get started →
      </button>

    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">

        <div className="brand">

          <div className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span>
            Campus<span className="brand-accent">OS</span>
          </span>

        </div>

        <p>
          A career operating system
          built for students.
        </p>

      </div>

      <div className="footer-links">

        <div>
          <span>PRODUCT</span>
          <a href="#discover">Discover</a>
          <a href="#track">Applications</a>
          <a href="#experiences">Experiences</a>
        </div>

        <div>
          <span>COMPANY</span>
          <a href="#">About</a>
          <a href="#">Community</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <span>ACCOUNT</span>
          <a href="#">Sign in</a>
          <a href="#">Get started</a>
        </div>

      </div>

    </footer>
  );
}

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <CareerLoop />

        <Discovery />

        <ApplicationTracker />

        <Experiences />

        <Community />

        <FinalCTA />

      </main>

      <Footer />

    </div>
  );
}

export default App;