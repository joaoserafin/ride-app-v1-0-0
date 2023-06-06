

export default function maintenanceVideos() {




    const videos = [
        {
            "id": 4,
            "name": "Troca de pneu - Roda traseira",
            "level": "Nível Médio",
            "image": "/MAINTENENCE_IMAGE_1.png",
            "duration": "15 min",
            "tools": [
                {
                    "name": "Chave de fenda",
                    "image": "https://www.hfmultiferramentas.com.br/media/catalog/product/cache/90dbb86a669057d15fdb380e69490e5a/0/7/07d60d41-a5c5-408d-9f7f-416557434284ch_fenda_sata_6x100_2.jpg"
                },
                {
                    "name": "Chave de boca 17",
                    "image": "https://m.media-amazon.com/images/I/51LgNc3Vj7L._AC_SX522_.jpg"
                },
            ],
            "parts": [
                {
                    "name": "Pneu e câmara",
                    "qtd": 1,
                    "image": "https://imgs.pontofrio.com.br/1540985684/1xg.jpg"
                }
            ]
        },
        {
            "id": 1,
            "name": "Troca de pastilhas de freio",
            "level": "Nível Fácil",
            "image": "/MAINTENENCE_IMAGE_2.png",
            "duration": "2 min",
            "tools": [
                {
                    "name": "Chave Allen 1/4 Pol.",
                    "image": "https://images.tcdn.com.br/img/img_prod/1130749/chave_allen_6mm_p_parafuso_allen_5_16_ou_8mm_51_1_f4bea444a92309b0f31abfaf442227bf.png"
                }
            ],
            "parts": [
                {
                    "name": "Pastilha de freio",
                    "qtd": 1,
                    "image": "https://absolutebikes.com.br/wp-content/uploads/2021/05/51523.jpg"
                }
            ]
        },
        {
            "id": 2,
            "name": "Controlador - Conexões",
            "level": "Nível Fácil",
            "image": "/MAINTENENCE_IMAGE_3.png",
            "duration": "4 min",
            "tools": [
                {
                    "name": "Chave philips",
                    "image": "https://elastobor.vteximg.com.br/arquivos/ids/192208/CHAVE-DE-FENDA-TRAMONTINA-PONTA-CRUZADA-8X150MM.jpg?v=637315351179470000"
                }
            ],
            "parts": [
                {
                    "name": "Controlador",
                    "qtd": 1,
                    "image": "https://http2.mlstatic.com/D_NQ_NP_744942-MLB49178412621_022022-O.webp"
                }
            ]
        },
        {
            "id": 3,
            "name": "Bateria - Conexão e troca",
            "level": "Nível Fácil",
            "image": "/MAINTENENCE_IMAGE_4.png",
            "duration": "5 min",
            "tools": [
                {
                    "name": "Chave Allen 1/4 Pol.",
                    "image": "https://images.tcdn.com.br/img/img_prod/1130749/chave_allen_6mm_p_parafuso_allen_5_16_ou_8mm_51_1_f4bea444a92309b0f31abfaf442227bf.png"
                }
            ],
            "parts": [
                {
                    "name": "Bateria",
                    "qtd": 1,
                    "image": "https://ae01.alicdn.com/kf/S1a6523ce149c4d7397f66ba1a6ad67cce.jpg"
                }
            ]
        }

    ]

    return videos
}
