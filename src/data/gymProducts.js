//
// NOTA: Este archivo contiene datos de ejemplo de productos que fueron utilizados
// durante el desarrollo inicial. Actualmente NO se utiliza en la aplicación.
// Los productos ahora se gestionan completamente desde MockAPI.
// Se mantiene comentado como referencia histórica del proyecto.
//

/*
export const gymProducts = [
  {
    title: 'Proteína Whey WichoFit 2LB',
    description: 'Suplemento premium para aumentar masa muscular.',
    image: 'https://glowell.com.co/cdn/shop/files/RENDERS-600X600-2023_0061_Mockup-Whey-Phorm-2lbs-Dragon-Pharma-Double-Chocolate-Pose1_900x_4f2b7b1d-e304-4779-a37c-4768aefd2bad.webp?v=1753641859',
    price: 189000,
  },
  {
    title: 'Creatina Monohidratada WichoFit',
    description: 'Creatina 100% pura para fuerza y rendimiento.',
    image: 'https://assets.encargomio.com/img/products/DRAGON_PHARMA_Monohi/17225451174.jpg',
    price: 177000,
  },
  {
    title: 'Guantes de Gimnasio WichoFit',
    description: 'Antideslizantes y acolchados para mayor comodidad.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_782413-MLA95843677461_102025-T.webp',
    price: 45000,
  },
  {
    title: 'Pre-Entreno WichoFit NitroX',
    description: 'Explosión de energía y bombeo muscular.',
    image: 'https://distribuidoragoldnutrition.com/wp-content/uploads/2024/11/9058.webp',
    price: 166000,
  },
  {
    title: 'Banda Elástica Pro WichoFit',
    description: 'Ideal para calentamiento y glúteos.',
    image: 'https://deportesregol.com/cdn/shop/files/6924_3823_3822_3821_3820_Set_Banda_Elasticax5_25cm_Wonder.jpg?v=1742203246',
    price: 35000,
  },
  {
    title: 'Rodillera de Compresión WichoFit',
    description: 'Soporte para entrenamientos intensos.',
    image: 'https://grupocomercia.co/wp-content/uploads/2024/11/D_651667-MCO75771799303_042024-F.jpg',
    price: 55000,
  },
  {
    title: 'Termo Metálico 1L WichoFit',
    description: 'Mantiene la bebida fría por 24 horas.',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_835480-MCO93928751922_102025-T.webp',
    price: 65000,
  },
  {
    title: 'Cinturón Lumbar WichoFit',
    description: 'Protección ideal para peso muerto y sentadilla.',
    image: 'https://atlanta-deportes.com.co/wp-content/uploads/2025/06/0118316-CINTURON-LUMBAR-SARED.jpg',
    price: 120000,
  },
  {
    title: 'Toalla Microfibra Gym WichoFit',
    description: 'Antiolor y ultra absorbente.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_842753-MLA96169461811_102025-T.webp',
    price: 30000,
  },
  {
    title: 'Shaker WichoFit 700ml',
    description: 'Perfecto para proteínas y pre entreno.',
    image: 'https://contents.mediadecathlon.com/p2869091/k$af1f598b8b36b08aa55888a5e9bbeee5/maxi-shaker-con-tamiz-700-ml.jpg',
    price: 25000,
  },
  {
    title: 'Proteína WichoFit Mass Gainer 6LB',
    description: 'Aumenta masa muscular rápidamente con fórmula alta en calorías.',
    image: 'https://www.optimumnutrition.com.co/wp-content/uploads/2023/08/serious-mass-6-lb-vanilla.jpg',
    price: 458000,
  },
  {
    title: 'Aminoácidos BCAA WichoFit Recovery',
    description: 'Mejora la recuperación y evita el catabolismo muscular.',
    image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02036/y/48.jpg',
    price: 166000,
  },
  {
    title: 'Barra de Dominadas WichoFit Pro',
    description: 'Barra ajustable para puerta, soporte de 200kg.',
    image: 'https://cdn.etenonfitness.com/assets/products/105301/AFW-Barra-de-dominadas-large.jpg?v=1',
    price: 120000,
  },
  {
    title: 'Esterilla Yoga WichoFit Antideslizante',
    description: 'Material premium antibacteriano y extra acolchado.',
    image: 'https://www.queralto.com/397134-large_default/esterilla-de-yoga-antideslizante-181x61cm-6mm-grosor-cinta-transporte-flexible-ecologico-negro-ey-01-mobiclinic.jpg',
    price: 80000,
  },
  {
    title: 'Rueda Abdominal WichoFit CoreX',
    description: 'La herramienta definitiva para construir abdomen rápido.',
    image: 'https://sportfitness.co/cdn/shop/files/071469-2_fdf1dee8-9894-41e2-9b10-52a4e7ee2fd8.jpg?v=1722441884',
    price: 45000,
  },
  {
    title: 'Cuerda de Saltar WichoFit Speed Rope',
    description: 'Ultraligera, ideal para cardio intenso y crossfit.',
    image: 'https://kingsbox.com/blog/wp-content/uploads/2019/11/corda-per-saltare-in-alluminio.jpg',
    price: 35000,
  },
  {
    title: 'Set Mancuernas Ajustables WichoFit 24kg',
    description: 'Sistema rápido de ajuste para entrenamientos completos.',
    image: 'https://www.olier.com.py/storage/sku/bravo-equipos-de-gimnasia-mancuerna-best-ajustable-premium-acbsdb024-24-kg-1-1-1657291550.png',
    price: 550000,
  },
  {
    title: 'Botella Shakex WichoFit Pro 1.2L',
    description: 'Tapa segura y mezclador metálico incluido.',
    image: 'https://nvrsurrender.com/cdn/shop/products/Shakernegro_1_vertical_33dab530-5264-4b1a-a798-aea0a1732fe2_600x.jpg?v=1660760723',
    price: 45000,
  },
  {
    title: 'Faja Deportiva WichoFit Slim',
    description: 'Perfecta para reventar abdomen y sudar más.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_631123-MCO71496085427_092023-O.webp',
    price: 55000,
  },
  {
    title: 'Gorra WichoFit Training',
    description: 'Ligera y transpirable, diseño oficial WichoFit.',
    image: 'https://www.sportline.com.co/media/catalog/product/h/j/hj3689-515_phsfm001-2000.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
    price: 40000,
  },
  {
    title: 'Protector Bucal WichoFit Combat',
    description: 'Ideal para boxeo, MMA y artes marciales mixtas.',
    image: 'https://tiendamarcial.com/arnobysinam/wp-content/uploads/2023/09/PRBM005-protector-bucal-doble-estuche-negro-azul-rojo-proteccion-dientes-mma-odontologo-cuidado-deportes-karate-taekwondo.webp',
    price: 30000,
  },
  {
    title: 'Kit de Agarre WichoFit Grip Master',
    description: 'Fortalece manos, antebrazos y mejora el agarre.',
    image: 'https://media.falabella.com/falabellaCO/125037569_01/w=800,h=800,fit=pad+',
    price: 60000,
  },
  {
    title: 'Discos Olímpicos WichoFit 10kg (Par)',
    description: 'Recubiertos en goma premium, silenciosos y duraderos.',
    image: 'https://sportfitness.co/cdn/shop/products/disco-olimpico-en-caucho-macizo-2-sportfitness.jpg?v=1612557826',
    price: 250000,
  },
  {
    title: 'Barra Olímpica WichoFit 20kg',
    description: 'Acero endurecido, rodamientos premium.',
    image: 'https://industriasfitnesslc.com/wp-content/uploads/2021/07/barra-olimpica-20kg-para-hombres-high-quality-sportfitness_720x.jpg',
    price: 450000,
  },
  {
    title: 'Set Bandas de Resistencia WichoFit 5 Niveles',
    description: 'Desde suave a muy fuerte, incluye bolsa y guía.',
    image: 'https://media.falabella.com/falabellaCO/119351062_01/w=800,h=800,fit=pad',
    price: 80000,
  },
  {
    title: 'Masajeador de Percusión WichoFit ProGun',
    description: '13 cabezales, 30 niveles, ideal para recuperación.',
    image: 'https://m.media-amazon.com/images/I/716sjDgvXbL._AC_UF1000,1000_QL80_.jpg',
    price: 650000,
  },
  {
    title: 'Chaleco con Peso WichoFit 10kg',
    description: 'Distribución uniforme del peso y materiales premium.',
    image: 'https://deportesregol.com/cdn/shop/files/1108-chaleco-pesas.jpg?v=1742201059',
    price: 250000,
  },
  {
    title: 'Banco de Pesas WichoFit Inclinado',
    description: 'Ajustable, soporte 300kg, perfecto para pecho.',
    image: 'https://sportfitness.co/cdn/shop/files/071251.jpg?v=1705328899',
    price: 2975000,
  },
  {
    title: 'Tensor Elástico WichoFit Pull',
    description: 'Excelente para espalda, hombros y movilidad.',
    image: 'https://www.mister-sandow.com/57-home_default/tensor-de-cuerda-elastica-plana-2-ganchos.jpg',
    price: 60000,
  },
  {
    title: 'Kit CrossFit WichoFit Starter',
    description: 'Incluye cuerda, grips, bandas y bolsa.',
    image: 'https://m.media-amazon.com/images/I/61ZXQU1ZDXL._AC_UF894,1000_QL80_.jpg',
    price: 150000,
  },
]
*/

// FIN DEL ARCHIVO DE DATOS DE EJEMPLO
