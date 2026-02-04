const API_URL = "http://127.0.0.1:8000/api/regalos/"

export const regaloService = {

    // MÉTODO GET: Obtener todos
    getAll: async (token) => {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        if (!response.ok) throw new Error("Error al obtener los regalos");

        const data = await response.json();

        return data;
    },

    // MÉTODO POST: Crear uno nuevo
    create: async (datosRegalo, token) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(datosRegalo)
        });
        if (!response.ok) {
            // Django REST Framework suele enviar un JSON explicando el error
            const errorData = await response.json();
            console.error("Detalle del error en Django:", errorData);
            throw new Error("No se pudo crear el regalo");
        }
        const data = await response.json();
        return data;
    },

    // MÉTODO PUT: Actualizar (ej: marcar como comprado)
    update: async (id, datosActualizados, token) => {
        const response = await fetch(`${API_URL}${id}`, { // Django suele pedir la barra al final
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(datosActualizados)
        });
        if (!response.ok) throw new Error("No se pudo actualizar");
        return await response.json();
    },

    // MÉTODO DELETE: Borrar
    delete: async (id, token) => {
        const response = await fetch(`${API_URL}${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        if (!response.ok) throw new Error("No se pudo eliminar");
        return true; // Solo confirmamos que se borró
    }
};
