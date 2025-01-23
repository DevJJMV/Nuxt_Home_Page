<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-900">My Advanced Site</h1>
        <div class="space-x-4">
          <NuxtLink to="/" class="text-gray-700 hover:text-gray-900">Home</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-gray-900">About</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-gray-900">Contact</NuxtLink>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Hero Section -->
        <div class="space-y-6">
          <h2 class="text-4xl font-bold text-gray-900">Welcome to Our Platform</h2>
          <p class="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">Feature One</h3>
            <p class="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">Feature Two</h3>
            <p class="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">Quality Service</h3>
            <p class="text-gray-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">Expert Team</h3>
            <p class="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">24/7 Support</h3>
            <p class="text-gray-600">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">About Us</h3>
            <p class="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-300 hover:text-white">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-300 hover:text-white">About</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact Info</h3>
            <p class="text-gray-300">
              Email: info@example.com<br>
              Phone: (123) 456-7890<br>
              Address: 123 Main St, City, Country
            </p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p class="text-gray-300">&copy; 2024 My Advanced Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>