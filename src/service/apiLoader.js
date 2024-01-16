import { fetchData } from './api'; 

export const loadApiData = async () => {
  try {
    // Carga todos los datos necesarios al cargar la página
    const data1 = await fetchData('https://api-front.xentra.app/diseno/links');
    const data2 = await fetchData('https://api-front.xentra.app/diseno/lienzos');
    const data3 = await fetchData('https://api-front.xentra.app/diseno/sliders');
    const data4 = await fetchData('https://api-front.xentra.app/diseno/menu?tipo=1')
    const data5 = await fetchData('https://api-front.xentra.app/productos/productos_x_subcategorias?limit[]=6&subcategorias[]=Laptops')

    return {
      data1,
      data2,
      data3,
      data4,
      data5
    };
  } catch (error) {
    console.error('Error al cargar datos de la API:', error);
    throw error;
  }
};