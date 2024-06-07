import React from 'react';

export default function RequiredDocument() {
  return (
    <section className="space-y-7 rounded-md border border-gray-300 bg-white p-6 sm:p-8 md:dark:bg-[#18171e]">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Documentos obrigatórios
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A preparação cuidadosa dos documentos é crucial para formular uma defesa precisa.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Cada arquivo deve ter no máximo 50MB e estar em formato .pdf, .jpg, .jpeg ou .png
        </p>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
          <p className="text-gray-600 dark:text-gray-400">CNH</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
          <p className="text-gray-600 dark:text-gray-400">Copia da Notificação</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
          <p className="text-gray-600 dark:text-gray-400">CRLV</p>
        </div>
      </div>
    </section>
  );
}
