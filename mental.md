
---

### 🧠 **Topic**: *Mental Health Awareness for Teens in Kenya*  
Let’s call the site: **Mind Matters Kenya**

This organization raises awareness about teen mental health, provides resources for support, hosts events in schools, and trains teachers and counselors across the country.

---

### ✅ `index.html` – Home Page
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mind Matters Kenya - Home</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">Mind Matters Kenya</div>
      <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about.html">About Us</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <h1>Because Every Teen’s Mind Matters</h1>
    <p>Promoting mental wellness, emotional resilience, and open conversations among Kenyan youth.</p>
    <a href="about.html" class="btn">Learn More</a>
  </section>

  <section class="content">
    <h2>What We Do</h2>
    <p>Mind Matters Kenya is a nonprofit focused on raising awareness and improving mental health services for teenagers across Kenya. Through school outreach, campaigns, and digital resources, we aim to destigmatize mental illness and provide support where it's needed most.</p>

    <h3>Key Programs</h3>
    <ul>
      <li><strong>School Mental Health Days:</strong> Bringing workshops, talks, and counseling sessions to high schools across Kenya.</li>
      <li><strong>Online Resource Hub:</strong> A platform with guides on anxiety, depression, stress management, and self-care for teens.</li>
      <li><strong>Peer Support Groups:</strong> Creating safe spaces where students can talk and share freely.</li>
      <li><strong>Training for Educators:</strong> Equipping teachers and school counselors to spot early warning signs and offer proper help.</li>
    </ul>

    <h3>Why Teen Mental Health?</h3>
    <p>Many young people suffer in silence due to stigma or lack of understanding. Mental health conditions like anxiety and depression often start during adolescence, yet access to care remains limited in many Kenyan schools and communities.</p>

    <h3>2024 Impact Highlights</h3>
    <ul>
      <li>25,000 students reached across 70 schools in 15 counties</li>
      <li>Over 800 teachers trained in youth mental health first aid</li>
      <li>Launched the “Open Up” podcast with over 10,000 monthly teen listeners</li>
    </ul>

    <h3>Get Involved</h3>
    <p>Join us in transforming the mental wellness landscape in Kenya. Whether you're a teen, parent, teacher, or donor—there's a role for you in this journey.</p>

    <h3>Contact</h3>
    <p>Email us: <a href="mailto:support@mindmatters.ke">support@mindmatters.ke</a></p>
    <p>Follow us on social: <strong>@mindmatters.ke</strong></p>
  </section>

  <footer>
    <p>Mind Matters Kenya &copy; 2025 | Because Every Teen’s Mind Matters</p>
  </footer>
</body>
</html>
```

---

### ✅ `about.html` – About Page
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Us - Mind Matters Kenya</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">Mind Matters Kenya</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html" class="active">About Us</a></li>
      </ul>
    </nav>
  </header>

  <section class="content">
    <h2>About Mind Matters Kenya</h2>
    <p>Founded in 2021 by a team of psychologists, educators, and youth advocates, Mind Matters Kenya was born from a simple but urgent question: *Why aren’t we talking about mental health in our schools?* Today, we’re proud to lead one of the most impactful teen mental wellness movements in East Africa.</p>

    <h3>Our Vision</h3>
    <p>A Kenya where every young person can talk openly about their mental health and access the support they need without fear or shame.</p>

    <h3>Our Mission</h3>
    <ul>
      <li>To create safe, supportive environments for teens in schools and communities.</li>
      <li>To normalize mental health conversations among youth, families, and educators.</li>
      <li>To bridge the gap between mental health needs and services for young people.</li>
    </ul>

    <h3>Meet Our Team</h3>
    <ul>
      <li><strong>Dr. Sylvia Kiplagat</strong> – Clinical Psychologist and Founder</li>
      <li><strong>Brian Odhiambo</strong> – Program Director, Youth Advocate</li>
      <li><strong>Rose Wanjiku</strong> – School Outreach Coordinator</li>
      <li><strong>Musa Okello</strong> – Digital Content & Media Manager</li>
    </ul>

    <h3>Partner With Us</h3>
    <p>We work with NGOs, schools, healthcare providers, and government institutions to create sustainable support systems. Let’s collaborate to create a better future for our youth.</p>

    <h3>Testimonials</h3>
    <blockquote>“Mind Matters Kenya changed how our students think and feel about mental health. We’ve seen a real shift in attitudes since their first visit.” — *Principal, Karura High School*</blockquote>

    <blockquote>“I finally had the courage to open up about my anxiety after attending one of their workshops. Thank you for making us feel seen.” — *17-year-old student, Kisumu*</blockquote>

    <h3>Join Us</h3>
    <p>Ready to take a stand for youth mental wellness? Whether you're a volunteer, mental health professional, or just someone who cares, we welcome you to be part of the change.</p>
  </section>

  <footer>
    <p>Mind Matters Kenya &copy; 2025 | Because Every Teen’s Mind Matters</p>
  </footer>
</body>
</html>
```

---

---

### ✅ `style.css`
```css
/* General reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: #f7fafa;
  color: #333;
  padding: 0;
}

/* Navigation */
header {
  background-color: #4b7bec;
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a.active,
.nav-links a:hover {
  border-bottom: 2px solid #ffdd59;
}

/* Hero section */
.hero {
  background: linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: #222;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  background-color: #4b7bec;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #3867d6;
}

/* Main content section */
.content {
  padding: 3rem 2rem;
  max-width: 900px;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  border-radius: 12px;
  margin-top: -2rem;
  margin-bottom: 3rem;
}

.content h2, .content h3 {
  color: #4b7bec;
  margin-bottom: 0.5rem;
}

.content p, .content ul {
  margin-bottom: 1.5rem;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

blockquote {
  background-color: #f1f8ff;
  border-left: 4px solid #4b7bec;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 6px;
  font-style: italic;
}

/* Footer */
footer {
  background-color: #4b7bec;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 600px) {
  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .btn {
    width: 100%;
    display: inline-block;
  }
}
```

---

This stylesheet gives the website:

- ✨ A soft modern blue theme for calmness  
- 📱 Mobile-friendly responsive layout  
- 📚 Clean typography and spacing for readability  
- 🧠 A subtle personality appropriate for mental health awareness  
