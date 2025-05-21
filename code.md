<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>EcoAware - Home</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">EcoAware</div>
      <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <h1>Protecting Our Planet</h1>
    <p>Together, we can make a greener world. Join us in environmental conservation efforts.</p>
    <a href="about.html" class="btn">Learn More</a>
  </section>

  <footer>
    <p>EcoAware &copy; 2025 | Created by Leone Kipkemboi</p>
  </footer>
</body>
</html>

<!-- about.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About - EcoAware</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">EcoAware</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html" class="active">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="content">
    <h2>About Us</h2>
    <p>EcoAware is a youth-led initiative focused on raising awareness and taking action to combat climate change. Founded in Kenya, our mission is to involve communities in sustainable environmental practices.</p>
  </section>

  <footer>
    <p>EcoAware &copy; 2025 | Created by Leone Kipkemboi</p>
  </footer>
</body>
</html>

<!-- projects.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Projects - EcoAware</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">EcoAware</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html" class="active">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="content">
    <h2>Our Projects</h2>
    <ul class="projects-list">
      <li><strong>Tree Planting Drives</strong> - We plant trees in schools and parks to increase green cover.</li>
      <li><strong>Clean-Up Campaigns</strong> - Community efforts to clean rivers, roads, and marketplaces.</li>
      <li><strong>Workshops</strong> - Educating students on recycling, pollution, and sustainability.</li>
    </ul>
  </section>

  <footer>
    <p>EcoAware &copy; 2025 | Created by Leone Kipkemboi</p>
  </footer>
</body>
</html>

<!-- contact.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact - EcoAware</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">EcoAware</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html" class="active">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="content">
    <h2>Contact Us</h2>
    <p><strong>Email:</strong> ecoaware@example.com</p>
    <p><strong>Phone:</strong> +254 712 345 678</p>
    <p><strong>Location:</strong> Nairobi, Kenya</p>
  </section>

  <footer>
    <p>EcoAware &copy; 2025 | Created by Leone Kipkemboi</p>
  </footer>
</body>
</html>

/* style.css */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
  background-color: #f5fff9;
  color: #333;
}

header {
  background: #2b9348;
  padding: 20px 0;
  color: white;
  text-align: center;
}

.logo {
  font-size: 1.8em;
  font-weight: bold;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #2b9348;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links a:hover,
.nav-links a.active {
  text-decoration: underline;
}

.hero {
  padding: 60px 20px;
  text-align: center;
  background: #a9f0d1;
  color: #063e26;
}

.hero h1 {
  font-size: 2.5rem;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 25px;
  background: #2b9348;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.btn:hover {
  background: #16873e;
}

.content {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.projects-list {
  list-style: circle;
  padding-left: 20px;
  margin-top: 20px;
}

footer {
  background: #2b9348;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}
