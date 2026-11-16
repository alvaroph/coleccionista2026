
<template>
  <div class="layout">
    <!-- HEADER -->
    <header class="header">
      <div class="container header-content">
        <NuxtLink to="/" class="brand">
          <img
            src="https://www.institutpedralbes.cat/wp-content/uploads/2021/05/logo.jpg"
            alt="Institut Pedralbes"
            class="logo"
          />
        </NuxtLink>

        <nav>
          <NuxtLink to="/">Inici</NuxtLink>
        </nav>
         <nav>
          <NuxtLink to="/detail">Detail</NuxtLink>
        </nav>
         <nav>
          <NuxtLink to="/favorites">Favorites</NuxtLink>
        </nav>
         <nav>
          <NuxtLink to="/search">Search</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- CONTENIDO DE CADA PÁGINA -->
    <main class="main container">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container footer-content">
        <span>© {{ new Date().getFullYear() }} Institut Pedralbes</span>
        <span>Desenvolupament d'aplicacions web</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f7f9fb;
  color: #231f20;
  font-family: Arial, sans-serif;
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

/* HEADER */
.header {
  background: white;
  border-bottom: 4px solid #00aeef;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
}

.logo {
  width: 210px;
  max-width: 100%;
  display: block;
}

nav a {
  color: #231f20;
  text-decoration: none;
  font-weight: 600;
}

nav a:hover {
  color: #00aeef;
}

/* CONTENIDO */
.main {
  flex: 1;
  padding-top: 40px;
  padding-bottom: 40px;
}

/* FOOTER */
.footer {
  background: #231f20;
  color: white;
  padding: 22px 0;
  border-top: 4px solid #00aeef;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
}

@media (max-width: 600px) {
  .logo {
    width: 160px;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
