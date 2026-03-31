import { useState, useEffect } from "react";
import LOGO_SRC from "./logoData";
import "./App.css";

const PHONE = "9312235075";
const PHONE_DISPLAY = "(931) 223-5075";
const PHONE_HREF = `tel:+1${PHONE}`;
const EMAIL = "kcssouthernsoulandmore@gmail.com";

const MENU = {
  Mains: [
    { name: "Smothered Pork Chops", desc: "Bone-in chops slow-cooked in rich onion gravy, served with two sides", price: "$14.99" },
    { name: "Fried Catfish Plate", desc: "Golden-fried catfish with hush puppies & house-made tartar sauce", price: "$13.99" },
    { name: "BBQ Ribs", desc: "Fall-off-the-bone pork ribs glazed with our signature BBQ sauce", price: "$18.99" },
    { name: "Oxtail Stew", desc: "Slow-braised oxtail simmered in a rich, savory tomato broth", price: "$19.99" },
    { name: "Fried Chicken (Half)", desc: "Crispy Southern fried chicken, seasoned with our secret blend", price: "$12.99" },
    { name: "Shrimp & Grits", desc: "Gulf shrimp over creamy stone-ground grits with smoked sausage gravy", price: "$15.99" },
  ],
  Sides: [
    { name: "Collard Greens", desc: "Slow-simmered with smoked turkey and a touch of pepper vinegar", price: "$4.99" },
    { name: "Candied Yams", desc: "Sweet & buttery with cinnamon, nutmeg, and brown sugar", price: "$4.99" },
    { name: "Mac & Cheese", desc: "Baked four-cheese blend with a golden breadcrumb crust", price: "$4.99" },
    { name: "Cast Iron Cornbread", desc: "Golden, fluffy skillet cornbread with honey butter", price: "$2.99" },
    { name: "Red Beans & Rice", desc: "Creole-style with andouille sausage and holy trinity", price: "$4.99" },
    { name: "Fried Okra", desc: "Crispy cornmeal-dusted okra with remoulade dipping sauce", price: "$3.99" },
  ],
  Desserts: [
    { name: "Sweet Potato Pie", desc: "Grandma's recipe — smooth, perfectly spiced, and soul-warming", price: "$5.99" },
    { name: "Banana Pudding", desc: "Layered with 'Nilla wafers, fresh banana, and whipped cream", price: "$4.99" },
    { name: "Peach Cobbler", desc: "Warm Georgia peaches under a buttery, flaky golden crust", price: "$5.99" },
    { name: "Bread Pudding", desc: "Classic Southern bread pudding with vanilla bourbon sauce", price: "$5.49" },
  ],
};

const TESTIMONIALS = [
  { text: "Best soul food in Columbia, TN! The oxtail is out of this world. KC's never disappoints.", author: "Marcus T." },
  { text: "KC's feels like eating at grandma's house. Pure love in every single bite. We drive 45 minutes just to come here.", author: "Latisha R." },
  { text: "The mac & cheese alone is worth the drive. Absolutely incredible food and even better people.", author: "James W." },
];

export default function App() {
  const [page, setPage] = useState("Home");
  const [menuTab, setMenuTab] = useState("Mains");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setHeroVisible(false);
    setTimeout(() => setHeroVisible(true), 50);
  }, [page]);

  const navigate = (p) => {
    setPage(p);
    setMobileOpen(false);
  };

  return (
    <div className="app">
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <div className="nav__logo" onClick={() => navigate("Home")}>
          <img src={LOGO_SRC} alt="KC's Southern Soul & More" className="nav__logo-img" />
          <div className="nav__logo-text">
            <span className="nav__brand">KC's Southern Soul</span>
            <span className="nav__sub">& More</span>
          </div>
        </div>

        <ul className="nav__links">
          {["Home", "Menu", "Contact"].map((l) => (
            <li key={l} className={`nav__link${page === l ? " nav__link--active" : ""}`} onClick={() => navigate(l)}>
              {l}
            </li>
          ))}
        </ul>

        <a href={PHONE_HREF} className="btn btn--red nav__cta">
          <span>📞</span> Call to Order
        </a>

        <button className={`hamburger${mobileOpen ? " hamburger--open" : ""}`} onClick={() => setMobileOpen((o) => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer${mobileOpen ? " mobile-drawer--open" : ""}`}>
        {["Home", "Menu", "Contact"].map((l) => (
          <button key={l} className="mobile-drawer__link" onClick={() => navigate(l)}>{l}</button>
        ))}
        <a href={PHONE_HREF} className="btn btn--red mobile-drawer__cta">📞 Call to Order — {PHONE_DISPLAY}</a>
      </div>

      {/* ══════════════════ HOME ══════════════════ */}
      {page === "Home" && (
        <main>
          {/* Hero */}
          <section className={`hero${heroVisible ? " hero--visible" : ""}`}>
            <div className="hero__content">
              <p className="eyebrow">Columbia, Tennessee</p>
              <h1 className="hero__title">
                Southern Soul<br />
                <em>Cooked with Love</em>
              </h1>
              <p className="hero__sub">
                Authentic comfort food rooted in tradition. Every dish seasoned from the heart and served straight from the skillet.
              </p>
              <div className="hero__btns">
                <a href={PHONE_HREF} className="btn btn--red btn--lg">📞 Call to Order</a>
                <button className="btn btn--outline btn--lg" onClick={() => navigate("Menu")}>View Menu →</button>
              </div>
              <div className="hero__address">
                <span>📍</span> 102 Depot Street, Columbia, TN
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__img-wrap">
                <img src={LOGO_SRC} alt="KC's Southern Soul & More Logo" className="hero__logo-big" />
              </div>
              <div className="hero__ring hero__ring--1" />
              <div className="hero__ring hero__ring--2" />
            </div>
          </section>

          {/* Stats */}
          <div className="stats-bar">
            {[
              { val: "100%", label: "Fresh Daily" },
              { val: "Family", label: "Owned & Operated" },
              { val: "★ 5.0", label: "Community Rated" },
              { val: "Soul", label: "In Every Bite" },
            ].map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__val">{s.val}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* About */}
          <section className="about">
            <div className="about__visual">
              <div className="about__img-box">
                <img src={LOGO_SRC} alt="KC's Logo" className="about__img" />
              </div>
              <div className="about__corner" />
            </div>
            <div className="about__text">
              <p className="eyebrow">Our Story</p>
              <h2 className="section-title">Cooking from the<br />Soul Since Day One</h2>
              <p className="body-text">
                KC's Southern Soul & More was born from a deep love of authentic, hearty Southern cooking — the kind that warms you from the inside out. Every recipe is rooted in tradition, seasoned with care, and served with genuine hospitality.
              </p>
              <p className="body-text">
                Whether you're grabbing lunch on Depot Street or feeding the whole family, we've got something that'll make you feel right at home. Good food, good people, and good vibes — every single time.
              </p>
              <a href={PHONE_HREF} className="btn btn--red">📞 {PHONE_DISPLAY}</a>
            </div>
          </section>

          {/* Menu Preview */}
          <section className="preview">
            <div className="preview__header">
              <p className="eyebrow">Fan Favorites</p>
              <h2 className="section-title">What We're Serving</h2>
              <p className="body-text" style={{ maxWidth: 460, margin: "0 auto 48px" }}>A taste of what's waiting for you at 102 Depot Street</p>
            </div>
            <div className="preview__grid">
              {[MENU.Mains[0], MENU.Mains[4], MENU.Sides[2], MENU.Desserts[0]].map((item) => (
                <div className="menu-card" key={item.name}>
                  <div className="menu-card__top">
                    <span className="menu-card__name">{item.name}</span>
                    <span className="menu-card__price">{item.price}</span>
                  </div>
                  <p className="menu-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <button className="btn btn--outline btn--lg" onClick={() => navigate("Menu")}>See Full Menu →</button>
            </div>
          </section>

          {/* Testimonials */}
          <section className="testimonials">
            <p className="eyebrow eyebrow--light">What Folks Are Saying</p>
            <h2 className="section-title section-title--light">Straight from the Community</h2>
            <div className="testi-grid">
              {TESTIMONIALS.map((t) => (
                <div className="testi-card" key={t.author}>
                  <div className="testi-card__stars">★★★★★</div>
                  <p className="testi-card__quote">"{t.text}"</p>
                  <p className="testi-card__author">— {t.author}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section className="cta-banner">
            <div className="cta-banner__inner">
              <h2 className="cta-banner__title">Ready to Eat?</h2>
              <p className="cta-banner__sub">Call us to place your order — pickup available at 102 Depot Street, Columbia TN</p>
              <a href={PHONE_HREF} className="btn btn--white btn--lg">📞 Call {PHONE_DISPLAY}</a>
            </div>
          </section>
        </main>
      )}

      {/* ══════════════════ MENU ══════════════════ */}
      {page === "Menu" && (
        <main>
          <div className={`page-hero${heroVisible ? " page-hero--visible" : ""}`}>
            <div className="page-hero__inner">
              <p className="eyebrow">Fresh Every Day</p>
              <h1 className="page-hero__title">Our Menu</h1>
              <p className="page-hero__sub">Authentic Southern soul food made to order. Call us to place yours.</p>
            </div>
          </div>

          <div className="menu-tabs">
            {Object.keys(MENU).map((tab) => (
              <button key={tab} className={`menu-tab${menuTab === tab ? " menu-tab--active" : ""}`} onClick={() => setMenuTab(tab)}>
                {tab}
              </button>
            ))}
          </div>

          <div className="menu-section">
            <div className="menu-grid">
              {MENU[menuTab].map((item) => (
                <div className="menu-card menu-card--full" key={item.name}>
                  <div className="menu-card__top">
                    <span className="menu-card__name">{item.name}</span>
                    <span className="menu-card__price">{item.price}</span>
                  </div>
                  <p className="menu-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="cta-banner cta-banner--dark">
            <div className="cta-banner__inner">
              <h2 className="cta-banner__title">Ready to Order?</h2>
              <p className="cta-banner__sub">Call us for pickup at 102 Depot Street, Columbia TN</p>
              <a href={PHONE_HREF} className="btn btn--red btn--lg">📞 Call {PHONE_DISPLAY}</a>
            </div>
          </section>
        </main>
      )}

      {/* ══════════════════ CONTACT ══════════════════ */}
      {page === "Contact" && (
        <main>
          <div className={`page-hero${heroVisible ? " page-hero--visible" : ""}`}>
            <div className="page-hero__inner">
              <p className="eyebrow">Get In Touch</p>
              <h1 className="page-hero__title">Find Us &<br />Place Your Order</h1>
              <p className="page-hero__sub">We'd love to hear from you. One call is all it takes.</p>
            </div>
          </div>

          <section className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-info__title">Visit & Contact</h2>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item__icon">📍</div>
                  <div>
                    <label className="contact-item__label">Address</label>
                    <p className="contact-item__val">102 Depot Street<br />Columbia, TN, United States</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item__icon">📞</div>
                  <div>
                    <label className="contact-item__label">Phone</label>
                    <a href={PHONE_HREF} className="contact-item__val contact-item__link">{PHONE_DISPLAY}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item__icon">✉️</div>
                  <div>
                    <label className="contact-item__label">Email</label>
                    <a href={`mailto:${EMAIL}`} className="contact-item__val contact-item__link">{EMAIL}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item__icon">📸</div>
                  <div>
                    <label className="contact-item__label">Instagram</label>
                    <a href="https://instagram.com/kcssouthernsoul_llc" target="_blank" rel="noreferrer" className="contact-item__val contact-item__link">@kcssouthernsoul_llc</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item__icon">🎵</div>
                  <div>
                    <label className="contact-item__label">TikTok</label>
                    <a href="https://tiktok.com/@kcs.southern.soul" target="_blank" rel="noreferrer" className="contact-item__val contact-item__link">@kcs.southern.soul</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-order-box">
              <div className="contact-order-box__logo">
                <img src={LOGO_SRC} alt="KC's Logo" style={{ width: 110, height: 110, objectFit: "contain", borderRadius: "50%", background: "#F5EDD6" }} />
              </div>
              <h2 className="contact-order-box__title">Order by Phone</h2>
              <p className="contact-order-box__sub">
                The easiest way to get your Southern Soul fix — just give us a call and we'll have your order ready for pickup at 102 Depot Street.
              </p>
              <a href={PHONE_HREF} className="btn btn--red btn--lg btn--full">📞 Call to Order Now</a>
              <div className="contact-order-box__divider" />
              <p className="contact-order-box__hours-title">Hours</p>
              <p className="contact-order-box__hours-note">Call us for current hours and daily specials — we're always cooking something good.</p>
            </div>
          </section>

          <section className="cta-banner">
            <div className="cta-banner__inner">
              <h2 className="cta-banner__title">Hungry? Let's Talk.</h2>
              <p className="cta-banner__sub">We're ready to take your order — pickup at 102 Depot Street, Columbia TN</p>
              <a href={PHONE_HREF} className="btn btn--white btn--lg">📞 Call {PHONE_DISPLAY}</a>
            </div>
          </section>
        </main>
      )}

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__logo" onClick={() => navigate("Home")}>
          <img src={LOGO_SRC} alt="KC's Southern Soul" className="footer__logo-img" />
          <div>
            <div className="footer__brand">KC's Southern Soul & More</div>
            <div className="footer__address">102 Depot St · Columbia, TN</div>
          </div>
        </div>
        <div className="footer__links">
          {["Home", "Menu", "Contact"].map((l) => (
            <button key={l} className="footer__link" onClick={() => navigate(l)}>{l}</button>
          ))}
        </div>
        <a href={PHONE_HREF} className="footer__phone">📞 {PHONE_DISPLAY}</a>
        <p className="footer__copy">© 2024 KC's Southern Soul & More LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
