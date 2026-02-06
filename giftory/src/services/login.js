const API_URL = "https://wishlist-kwyb.onrender.com/api/"

export const loginService = {
    registerUser: async (credenciales) => {
        const response = await fetch(`${API_URL}register/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credenciales)
        });
        if (!response.ok) {
            // Django REST Framework suele enviar un JSON explicando el error
            const errorData = await response.json();
            console.error("Detalle del error en Django:", errorData);
            throw new Error("No se pudo iniciar sesion");
        }
        const usuario = await response.json();
        

        return usuario.token;
        
    },

    loginUser: async (credenciales) => {
        const response = await fetch(`${API_URL}login/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credenciales)
        });
        if (!response.ok) {
            // Django REST Framework suele enviar un JSON explicando el error
            const errorData = await response.json();
            console.error("Detalle del error en Django:", errorData);
            throw new Error("No se pudo iniciar sesion");
        }
        const usuario = await response.json();
        

        
        return usuario.token;
    }
}