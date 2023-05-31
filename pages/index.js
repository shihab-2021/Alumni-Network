import Link from "next/link";
import Layout from "../components/Layout";
import HeroSection from "../components/Home/HeroSection";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import FeaturesSection from "../components/Home/FeaturesSection";
import FAQSection from "../components/Home/FAQSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import Head from "next/head";
import EventsSection from "../components/Home/EventsSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Alumni Network</title>
      </Head>
      <HeroSection />
      <EventsSection />
      <FeaturesSection />
      <FAQSection />
      <TestimonialsSection />
    </Layout>
  );
}
