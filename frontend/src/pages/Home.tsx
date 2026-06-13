import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Details from '../components/Details';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';
import DashboardPreview from '../components/DashboardPreview';
import Mentors from '../components/Mentors';
import Outcomes from '../components/Outcomes';
import Journey from '../components/Journey';
import ProjectShowcase from '../components/ProjectShowcase';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Details />
        <About />
        <WhyChoose />
        <DashboardPreview />
        <Mentors />
        <Outcomes />
        <Journey />
        <ProjectShowcase />
        <Testimonials />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
