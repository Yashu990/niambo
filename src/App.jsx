import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ConsultingPage from './pages/ConsultingPage'
import PodcastPage from './pages/PodcastPage'
import InnovationPage from './pages/InnovationPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import NewsPage from './pages/NewsPage'
import ResourcesPage from './pages/ResourcesPage'
import BlogPostDetail from './pages/BlogPostDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-body flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulting" element={<ConsultingPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
