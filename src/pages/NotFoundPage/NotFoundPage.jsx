import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="page-placeholder">
      <h1>404 — Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}
