import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppAppBar from '../../Components/AppBar';
import Hero from '../../Components/Hero';
// import LogoCollection from '../../Components/LogoCollection';
import Highlights from '../../Components/Highlights';
import Pricing from '../../Components/Pricing';
import Features from '../../Components/Features';
import Testimonials from '../../Components/Testimonials';
import FAQ from '../../Components/FAQ';
import Footer from '../../Components/Footer';
import AppTheme from '../../Components/Theme/App/AppTheme';
import Blog from '../../Components/Blog';
// import TimelineMain from '../../Components/TimelineMain';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        {/* <LogoCollection /> */}
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        {/* <Divider />
        <TimelineMain />  */}
       <Divider />
        <Pricing />
        <Divider />
        <FAQ /> 
        <Blog/>
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
