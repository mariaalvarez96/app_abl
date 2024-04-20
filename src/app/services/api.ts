class Api {
    
    public readonly BASE_URL = 'http://localhost:8003';

    public async createUser(dni:string, username: string,  email:string,tlf: number, password: string) {
        try {
            const response = await fetch(`${this.BASE_URL}/users/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dni,
                    username,
                    email,
                    tlf,                   
                    password
                })
            });

            if (!response.ok) {
                console.log("esto está mal")
                throw new Error('Error al crear usuario');
            }
            return response.json(); // Devolver el JSON de la respuesta (si hay alguno)
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error; 
        }
    }
}