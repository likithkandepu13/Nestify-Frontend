import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import FeaturedHomestays from './components/FeaturedHomestays';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isAuthFormVisible, setIsAuthFormVisible] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <FeaturedDestinations />
            <FeaturedHomestays />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onProfileClick={() => setIsAuthFormVisible(true)} 
        onPageChange={setCurrentPage}
      />
      
      <main className="pt-16">
        {renderPage()}
      </main>
      
      <Footer onPageChange={setCurrentPage} />
      
      <AuthForm
        isVisible={isAuthFormVisible}
        onClose={() => setIsAuthFormVisible(false)}
      />
    </div>
  );
}

export default App;