import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import CorporatePage from './pages/CorporatePage/CorporatePage';
import SteelModelsPage from './pages/SteelModelsPage/SteelModelsPage';
import PrefabricModelsPage from './pages/PrefabricModelsPage/PrefabricModelsPage';
import ModelDetailPage from './pages/ModelDetailPage/ModelDetailPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="kurumsal" element={<CorporatePage />} />
          <Route path="celik-evler" element={<SteelModelsPage />} />
          <Route path="prefabrik-evler" element={<PrefabricModelsPage />} />
          <Route path="modeller/:slug" element={<ModelDetailPage />} />
          <Route path="projeler" element={<ProjectsPage />} />
          <Route path="projeler/:slug" element={<ProjectDetailPage />} />
          <Route path="iletisim" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
