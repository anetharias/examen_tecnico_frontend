import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api-front.xentra.app",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "cfea36033ac96ce904e84feac1e5045a4674fddb5fcb0bb5d0012205f229dde3f69fb69d9ce01752c35d3501da10b0ec5ecde9c2982b03146c84f9dd66408b564abd8b6c49c9e6ad795b310ddfe6feab8b918159e1d5152291daa0bf788099bbee6817a08e96ad535e0f1c176ca11c1d5db61d79c5ec32af75c941f9089d2772d3853b4190f14625c1e257996ad10ef5810e6531505443d8dc6fe79e27a68d20235515201f393f612adfefad4bfaf67ccf396e81d3b70fe1a18b656fee599698039e815497453434afebea532abf059e0db540a56f0100b74bb685d00a934b8834cccfb09f240f846f15f5ca9d8bb98f72846ee7e1b4474ee7c98303512db7b17f6ecf55f5d8b823a80cbad0adb5ed1e2db1ac9bf67c5b210d06eb46ec6560aaad7ceb71ba97c6e923456fd3add788d42741f9f3d896cd0c6bc22c33c0fdc9190cb47dab7090f03a6a751d71affed7279310481579cbf46684defa990cd3450719de9ac0421fc567690bd6907e7dcb4cea1efb83f08091e8c8f9fda9b4e7cd3a7e4205dde3e498016204776d42652d5e",
  },
});

const api = {
  utils: {
    async footer() {
      try {
        const data = {
          claves: [
            "links_atencion_cliente",
            "links_acerca_de",
            "links_contactos",
          ],
        };
        const response = await apiClient.post("/diseno/links", data);
        console.log(response);

        return response.data;
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
        throw error;
      }
    },
    async menu() {
      try {
        const response = await apiClient.get("/diseno/menu?tipo=1");
        console.log(response);

        return response.data;
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
        throw error;
      }
    },

    async products() {
      try {
        const response = await apiClient.get("/productos/productos_x_subcategorias?limit[]=6&subcategorias[]=Laptops");
        console.log(response);

        return response.data;
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
        throw error;
      }
    },

    async sliders() {
      try {
        const response = await apiClient.get("/diseno/sliders");
        console.log(response);

        return response.data;
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
        throw error;
      }
    },

    async lienzo() {
      try {
        const data = {
          "lienzos": [
              {
                  "lim": 5,
                  "clave": "cat_destacadas"
              },
              {
                  "lim": 6,
                  "clave": "imagenes_quienes_somos"
              }
          ]
      }
        const response = await apiClient.post("/diseno/lienzos", data);
        console.log(response);

        return response.data;
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
        throw error;
      }
    },
  },
};

export default api;
