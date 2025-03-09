import React, { useState } from 'react';
import {
  Button,
  Theme,
} from "react-daisyui";

function InputForm({ onGenerate }) {
  const [docUrl, setDocUrl] = useState('');
  const [folderUrl, setFolderUrl] = useState('');

  const handleGenerate = (type) => {
    onGenerate(docUrl, folderUrl, type);
  };

  const handleFillTestDoc = () => {
    setDocUrl('https://docs.google.com/document/d/156pDeN0RAiIwn7AaLb94klYj2GH68sE8-QsQpwls2ls/edit?tab=t.0');
  };

  const handleFillTestFolder = () => {
    setFolderUrl('https://drive.google.com/drive/folders/18CR4clx2Wv0TmPPAMgZNx-23WRmp58FH');
  };

  return (
    <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box">
      <legend className="fieldset-legend">Google Suite URL Tools</legend>
      <div className="relative">
        <label className="label">
          <span className="label-text blur-xs">Google Doc/Sheet/Slide URL:</span>
        </label>
        <input
          type="text"
          value={docUrl}
          onChange={(e) => setDocUrl(e.target.value)}
          placeholder="Enter full Google Doc/Sheet/Slide URL"
          className="input input-bordered w-full"
        />
        <button onClick={handleFillTestDoc} className="btn btn-secondary absolute right-0 top-0 mt-8 mr-2">Fill Test Doc</button>
      </div>
      <div className="relative">
        <label className="label">
          <span className="label-text">Google Drive Folder URL:</span>
        </label>
        <input
          type="text"
          value={folderUrl}
          onChange={(e) => setFolderUrl(e.target.value)}
          placeholder="Enter full Google Drive Folder URL"
          className="input input-bordered w-full"
        />
        <button onClick={handleFillTestFolder} className="btn btn-secondary absolute right-0 top-0 mt-8 mr-2">Fill Test Folder</button>
      </div>
      <div className="space-y-2">
        <button onClick={() => handleGenerate('newCopy')} className="btn btn-primary w-1/3 mx-auto mb-2">Generate New Copy URL</button>
        <button onClick={() => handleGenerate('preview')} className="btn btn-primary w-1/3 mx-auto mb-2">Generate Preview URL</button>
        <button onClick={() => handleGenerate('exportPdf')} className="btn btn-primary w-1/3 mx-auto mb-2">Generate Export PDF URL</button>
        <button onClick={() => handleGenerate('exportDocx')} className="btn btn-primary w-1/3 mx-auto mb-2">Generate Export DOCX URL</button>
        <button onClick={() => handleGenerate('exportHtml')} className="btn btn-primary w-1/3 mx-auto mb-2">Generate Export HTML URL</button>
        <button onClick={() => handleGenerate('template')} className="btn btn-primary w-1/3 mx-auto mb-2">Generate Template URL</button>
      </div>
    </fieldset>
  );
}

function GeneratedLinks({ generatedUrl }) {
  if (!generatedUrl) return null;

  return (
    <div className="generated-links space-y-2">
      <h3 className="text-lg font-bold">Generated URL</h3>
      <p>
        <a href={generatedUrl} target="_blank" rel="noopener noreferrer" className="link link-primary">
          {generatedUrl}
        </a>
      </p>
    </div>
  );
}

function App() {
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleGenerate = (docUrl, folderUrl, type) => {
    let url = '';
    switch (type) {
      case 'newCopy':
        url = `${docUrl.replace('/edit', '/copy')}?copyDestination=${folderUrl}`;
        break;
      case 'preview':
        url = `${docUrl.replace('/edit', '/preview')}`;
        break;
      case 'exportPdf':
        url = `${docUrl.replace('/edit', '/export?format=pdf')}`;
        break;
      case 'exportDocx':
        url = `${docUrl.replace('/edit', '/export?format=docx')}`;
        break;
      case 'exportHtml':
        url = `${docUrl.replace('/edit', '/export?format=html')}`;
        break;
      case 'template':
        url = `${docUrl.replace('/edit', '/template/preview')}`;
        break;
      default:
        break;
    }
    setGeneratedUrl(url);
  };

  return (
    <div className="App container mx-auto p-4">
      <Theme dataTheme="valentine">
        <h1 className="text-4xl font-bold mb-4 ">Google Suite URL Tools</h1>
        <Theme dataTheme="dark">
          <Button color="primary">Click me, dark!</Button>
        </Theme>

        <Theme dataTheme="light">
          <Button color="primary">Click me, light!</Button>
        </Theme>
        <InputForm onGenerate={handleGenerate} />
        <GeneratedLinks generatedUrl={generatedUrl} />
      </Theme >
    </div>
  );
}

export default App;
