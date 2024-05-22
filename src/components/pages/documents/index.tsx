import React from 'react';
import UploadsFormContainer from './Uploads/UploadsFormContainer';
import DocumentsHeader from './DocHeader';
import RequiredDocument from './RequiredDoc';

interface DocumentsProps {}

const DocumentsPage: React.FC<DocumentsProps> = () => {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 ">
      <div className="col-span-1 space-y-8">
        <DocumentsHeader />
        <RequiredDocument />
        <UploadsFormContainer />
      </div>
    </section>
  );
};

export default DocumentsPage;
