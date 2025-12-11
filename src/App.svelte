<script>
  import { _, locale } from "svelte-i18n";
  import LanguageSwitcher from "./components/LanguageSwitcher.svelte";

  // Performance: Import images statically to enable tree shaking
  import logoG from "./assets/logo-gokai-labs.png";

  const currentYear = new Date().getFullYear();

  // Form handling
  let formData = $state({
    name: "",
    email: "",
    message: "",
  });

  let formStatus = $state({
    loading: false,
    message: "",
    type: "", // 'success' or 'error'
  });

  async function handleSubmit(event) {
    event.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      formStatus = {
        loading: false,
        message: "Please fill in all fields.",
        type: "error",
      };
      return;
    }

    // Show loading state
    formStatus = {
      loading: true,
      message: "",
      type: "",
    };

    // For Netlify Forms, the form will submit normally
    // We just show loading state and let Netlify handle the rest
    try {
      // Small delay to show loading state
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Netlify Forms will handle the submission
      // The form will redirect or show success based on Netlify settings
      formStatus = {
        loading: false,
        message: "Message sent successfully! We'll get back to you soon.",
        type: "success",
      };

      // Reset form after successful submission
      formData = { name: "", email: "", message: "" };

      // Clear success message after 5 seconds
      setTimeout(() => {
        formStatus = { loading: false, message: "", type: "" };
      }, 5000);
    } catch (error) {
      formStatus = {
        loading: false,
        message: "There was an error sending your message. Please try again.",
        type: "error",
      };
    }
  }

  const navLinks = [
    { href: "#services", key: "services" },
    { href: "#work", key: "work" },
    { href: "#testimonials", key: "testimonials" },
    { href: "#contact", key: "contact" },
  ];

  const services = [
    {
      key: "webDesign",
      icon: "💎",
    },
    {
      key: "webDevelopment",
      icon: "🚀",
    },
    {
      key: "seo",
      icon: "📊",
    },
    {
      key: "branding",
      icon: "✨",
    },
    {
      key: "uiux",
      icon: "🎨",
    },
    {
      key: "marketing",
      icon: "📱",
    },
  ];

  const projects = [
    {
      title: "Green Ghost",
      category: "Cannabis & Lifestyle",
      description:
        "Premium cannabis dispensary and delivery service in Phuket. High-quality organic selection with a unique community vibe.",
      image:
        "https://green.gd/images/banners/green-ghost-best-degen-weed-shop-delivery-01.avif", // Green/Abstract
      url: "https://green.gd/",
    },
    {
      title: "Art Fate",
      category: "Art Gallery",
      description:
        "Online gallery featuring unique graffiti, street art, and urban contemporary works from emerging artists.",
      image: "https://art-fate.com/cdn/shop/files/art-fate-banner.jpg", // Street Art
      url: "https://art-fate.com/",
    },
    {
      title: "Amann Inkspiration",
      category: "Tattoo & Fine Art",
      description:
        "Exquisite street art, paintings, and tattoo gallery. Where geometry meets soul in Phuket.",
      image: "https://amann-inkspiration.com/assets/street-art-04.jpg", // Tattoo/Ink
      url: "https://amann-inkspiration.com/",
    },
    {
      title: "GhostVerse",
      category: "Web3 & NFT DAO",
      description:
        "Community-driven collectible NFT DAO on MultiversX. Empowering governance through digital ownership.",
      image: "https://ghostverse.org/social.png", // Digital/Cyber
      url: "https://ghostverse.org/",
    },
  ];

  const testimonials = [
    {
      name: "Wilfrid Roze",
      role: "Founder, Ea Labs",
      content:
        "Gokai Labs delivered exceptional AI solutions that transformed our research capabilities. Their technical expertise and innovative approach helped us achieve breakthrough results in our AI-driven projects.",
      rating: 5,
    },
    {
      name: "Barbara Stoecklin",
      role: "Creative Director, Art Fate",
      content:
        "Working with Gokai Labs was an inspiring experience. They perfectly captured our artistic vision while implementing cutting-edge web technologies. The result exceeded all our expectations.",
      rating: 5,
    },
    {
      name: "Nati Douchamps",
      role: "CEO, Green Ghost",
      content:
        "Gokai Labs brought our bold vision to life with remarkable precision and creativity. Their attention to detail and technical mastery made our platform launch a complete success.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50+", label: "projects" },
    { number: "30+", label: "clients" },
    { number: "15+", label: "experience" },
    { number: "98%", label: "satisfaction" },
  ];
</script>

<div class="min-h-screen bg-black text-white">
  {#if $locale}
    <!-- Navigation -->
    <nav class="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <a href="/" class="flex text-2xl font-bold" aria-label="Gokai Labs">
            <img src={logoG} alt="" class="w-8 h-8 object-contain" />
            <span>okai Labs</span>
          </a>
          <div class="hidden md:flex space-x-8">
            {#each navLinks as link}
              <a
                href={link.href}
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {$_("navigation." + link.key)}
              </a>
            {/each}
            <LanguageSwitcher />
          </div>
          <button
            class="md:hidden text-gray-300"
            aria-label="Toggle navigation menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="min-h-screen flex items-center">
        <div class="max-w-7xl mx-auto px-6 py-20">
          <div class="text-center md:text-left">
            <div class="inline-block mb-4">
              <span
                class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                {$_("hero.badge")}
              </span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {$_("hero.title")}
            </h1>
            <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto md:mx-0">
              {$_("hero.subtitle")}
            </p>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#contact"
                class="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                {$_("cta.getStarted")}
              </a>
              <a
                href="#work"
                class="border border-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {$_("cta.viewWork")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-20 bg-gray-900/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">{$_("services.title")}</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              {$_("services.subtitle")}
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each services as service}
              <div
                class="group border border-gray-700 p-8 rounded-2xl hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div
                  class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  {service.icon}
                </div>
                <h3 class="text-2xl font-semibold mb-3">
                  {$_("services." + service.key + ".title")}
                </h3>
                <p class="text-gray-400">
                  {$_("services." + service.key + ".description")}
                </p>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            {#each stats as stat}
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div class="text-blue-100">{$_("stats." + stat.label)}</div>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <!-- Portfolio Section -->
      <section id="work" class="py-20 bg-gray-900/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">{$_("work.title")}</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">{$_("work.subtitle")}</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each projects as project}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                class="group border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 bg-gray-800/20 block"
              >
                <div class="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </div>
                <div class="p-6">
                  <div class="flex items-center justify-between mb-2">
                    <span
                      class="text-sm text-blue-400 font-semibold tracking-wide uppercase"
                      >{project.category}</span
                    >
                    <svg
                      class="w-5 h-5 text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </div>
                  <h3
                    class="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p class="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            {/each}
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">{$_("testimonials.title")}</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              {$_("testimonials.subtitle")}
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {#each testimonials as testimonial}
              <div class="border border-gray-700 p-8 rounded-2xl">
                <div class="flex mb-4">
                  {#each Array(testimonial.rating) as _}
                    <svg
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                  {/each}
                </div>
                <p class="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div class="font-semibold">{testimonial.name}</div>
                  <div class="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">{$_("contact.title")}</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              {$_("contact.subtitle")}
            </p>
          </div>

          <form
            class="space-y-6"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onsubmit={handleSubmit}
          >
            <!-- Hidden form-name field for Netlify -->
            <input type="hidden" name="form-name" value="contact" />

            <!-- Honeypot field for spam protection -->
            <div style="display: none;">
              <label
                >Don't fill this out if you're human: <input
                  name="bot-field"
                /></label
              >
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-300 mb-2"
                  >{$_("form.name")}</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  bind:value={formData.name}
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={$_("form.namePlaceholder")}
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-300 mb-2"
                  >{$_("form.email")}</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  bind:value={formData.email}
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={$_("form.emailPlaceholder")}
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-300 mb-2"
                >{$_("form.message")}</label
              >
              <textarea
                id="message"
                name="message"
                rows="4"
                bind:value={formData.message}
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={$_("form.messagePlaceholder")}
                required
              ></textarea>
            </div>
            {#if formStatus.message}
              <div
                class="text-center p-4 rounded-lg {formStatus.type === 'success'
                  ? 'bg-green-900/50 text-green-400 border border-green-700'
                  : 'bg-red-900/50 text-red-400 border border-red-700'}"
              >
                {formStatus.message}
              </div>
            {/if}
            <button
              type="submit"
              disabled={formStatus.loading}
              class="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {#if formStatus.loading}
                Sending...
              {:else}
                {$_("form.sendMessage")}
              {/if}
            </button>
          </form>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-white/10 bg-black/80 py-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div class="md:col-span-2">
            <div class="flex mb-4" aria-label="Gokai Labs">
              <img src={logoG} alt="" class="w-8 h-8 object-contain" />
              <h3 class="text-2xl font-bold">okai Labs</h3>
            </div>
            <p class="text-gray-400 mb-4">{$_("footer.description")}</p>
            <div class="flex space-x-4">
              <a
                href="https://x.com/gokailabs"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                  ><path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  /></svg
                >
              </a>
              <a
                href="https://github.com/gokaiorg"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors"
                aria-label="View our GitHub repository"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                  ><path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path></svg
                >
              </a>
              <a
                href="https://linkedin.com/company/gokai-labs"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                  ><path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path></svg
                >
              </a>
              <a
                href="https://medium.com/@GokaiLabs"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors"
                aria-label="Read our blog on Medium"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                  ><path
                    d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
                  /></svg
                >
              </a>
              <a
                href="https://opensea.io/Gokai"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors"
                aria-label="View our NFTs on OpenSea"
              >
                <img
                  src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.png"
                  alt="OpenSea"
                  class="w-6 h-6 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              <a
                href="https://huggingface.co/GokaiLabs"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors"
                aria-label="Explore our AI models on Hugging Face"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                  ><path
                    d="M12,2A10,10 0 1,0 22,12A10,10 0 0,0 12,2ZM8,9.5A1.5,1.5 0 1,1 9.5,8A1.5,1.5 0 0,1 8,9.5ZM16,9.5A1.5,1.5 0 1,1 17.5,8A1.5,1.5 0 0,1 16,9.5ZM12,15A3,3 0 0,1 9,12H11A1,1 0 0,0 12,13A1,1 0 0,0 13,12H15A3,3 0 0,1 12,15Z"
                  /></svg
                >
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">
              {$_("footer.quickLinks")}
            </h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#services"
                  class="text-gray-400 hover:text-white transition-colors"
                  >{$_("navigation.services")}</a
                >
              </li>
              <li>
                <a
                  href="#work"
                  class="text-gray-400 hover:text-white transition-colors"
                  >{$_("navigation.work")}</a
                >
              </li>
              <li>
                <a
                  href="#testimonials"
                  class="text-gray-400 hover:text-white transition-colors"
                  >{$_("navigation.testimonials")}</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  class="text-gray-400 hover:text-white transition-colors"
                  >{$_("navigation.contact")}</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">
              {$_("footer.contactInfo")}
            </h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:message@gokai.org"
                  class="hover:text-white transition-colors"
                  >message@gokai.org</a
                >
              </li>
              <li class="font-semibold text-white mt-3 mb-1">Paris Office</li>
              <li>
                <a
                  href="https://g.co/kgs/RHP7Y39"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white transition-colors"
                  >1 Square du Thimerais, 75017 Paris, France</a
                >
              </li>
              <li>
                <a
                  href="tel:+33651368196"
                  class="hover:text-white transition-colors"
                  >📱 +33 6 51 36 81 96</a
                >
              </li>
              <li class="font-semibold text-white mt-3 mb-1">Phuket Office</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/vLRAqzczGYxm339T8"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white transition-colors"
                  >26, 19 Wiset Rd, Rawai, Phuket 83130</a
                >
              </li>
              <li>
                <a
                  href="tel:+66949486177"
                  class="hover:text-white transition-colors"
                  >📱 +66 94 948 6177</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="border-t border-gray-800 pt-8 text-center text-sm text-gray-400"
        >
          <p>© {currentYear} {$_("site.title")}. {$_("footer.rights")}</p>
        </div>
      </div>
    </footer>
  {/if}
</div>
