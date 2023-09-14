/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GoogleDriveImages: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Substitua 'ID_DA_PASTA' pelo ID da pasta pública do Google Drive que você deseja acessar.
        const folderId = '1_BIiyz2S3rTpE0zbr4JrLITZnxwG5kjv'

        // Fazer uma solicitação para a API do Google Drive para listar arquivos na pasta
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents`,
          {
            params: {
              fields: 'files(webContentLink)',
              key: 'AIzaSyDEoC3SWFbAggiXgsewEfY_HjuHeqbTncU', // Substitua pela sua chave de API do Google Drive (opcional).
            },
          },
        )

        const images = response.data.files
          .filter((file: any) => file.webContentLink)
          .map((file: any) => file.webContentLink)

        setImageUrls(images)
      } catch (error) {
        console.error('Erro ao buscar imagens do Google Drive:', error)
      }
    }

    fetchImages()
  }, [])

  return (
    <div className="flex flex-col text-center">
      <h5 className="p-4 text-2xl text-baseCinza">
        Imagens do Google Drive
        <hr className="hrPro" />
      </h5>
      <div className="zoom overflow-hidden rounded-lg  bg-no-repeat shadow-lg  ">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Imagem ${index}`}
            className="h-64 w-full align-middle transition duration-300 ease-linear"
          />
        ))}
      </div>
    </div>
  )
}

export default GoogleDriveImages
