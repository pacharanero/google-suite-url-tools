import React, { useState } from 'react';
import './App.css';

function InputForm({ onGenerate }) {
  const [docUrl, setDocUrl] = useState('');
  const [folderUrl, setFolderUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(docUrl, folderUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Google Doc/Sheet/Slide URL:</span>
        </label>
        <input
          type="text"
          value={docUrl}
          onChange={(e) => setDocUrl(e.target.value)}
          placeholder="Enter Google Doc/Sheet/Slide URL"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Google Drive Folder URL:</span>
        </label>
        <input
          type="text"
          value={folderUrl}
          onChange={(e) => setFolderUrl(e.target.value)}
          placeholder="Enter Google Drive Folder URL"
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">Generate URLs</button>
    </form>
  );
}

function GeneratedLinks({ docUrl, folderUrl }) {
  if (!docUrl) return null;

  const newCopyUrl = `${docUrl.replace('/edit', '/copy')}?copyDestination=${folderUrl}`;
  const previewUrl = `${docUrl.replace('/edit', '/preview')}`;
  const exportPdfUrl = `${docUrl.replace('/edit', '/export?format=pdf')}`;
  const exportDocxUrl = `${docUrl.replace('/edit', '/export?format=docx')}`;
  const exportHtmlUrl = `${docUrl.replace('/edit', '/export?format=html')}`;
  const templateUrl = `${docUrl.replace('/edit', '/template/preview')}`;

  return (
    <div className="generated-links space-y-2">
      <h3 className="text-lg font-bold">Generated URLs</h3>
      <p>
        <a href={newCopyUrl} target="_blank" rel="noopener noreferrer" className="link link-primary">
          Create new copy of document in folder
        </a>
      </p>
      <p>
        <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="link link-primary">
          Open in preview mode
        </a>
      </p>
      <p>
        <a href={exportPdfUrl} target="_blank" rel="noopener noreferrer" className="link link-primary">
          Export as PDF
        </a>
      </p>
      <p>
        <a href={exportDocxUrl} target="_blank" rel="noopener noreferrer" className="link link-primary">
          Export as DOCX
        </a>
      </p>
      <p>
        <a href={exportHtmlUrl} target="_blank" rel="noopener noreferrer" className="link link-primary">
          Export as HTML
        </a>
      </p>
      <p>
        <a href={templateUrl} target="_blank" rel="noopener noreferrer" className="link link-primary">
          Open as template
        </a>
      </p>
    </div>
  );
}

function App() {
  const [generatedUrls, setGeneratedUrls] = useState({ docUrl: '', folderUrl: '' });

  const handleGenerate = (docUrl, folderUrl) => {
    setGeneratedUrls({ docUrl, folderUrl });
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Google Suite URL Tools</h1>
      <InputForm onGenerate={handleGenerate} />
      <GeneratedLinks docUrl={generatedUrls.docUrl} folderUrl={generatedUrls.folderUrl} />
    </div>
  );
}

export default App;
