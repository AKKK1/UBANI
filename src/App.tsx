/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesPricing } from './pages/ServicesPricing';
import { Process } from './pages/Process';
import { Portfolio } from './pages/Portfolio';
import { Offers } from './pages/Offers';
import { Blog } from './pages/Blog';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPricing />} />
            <Route path="/process" element={<Process />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LangProvider>
  );
}
