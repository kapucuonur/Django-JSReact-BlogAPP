export default class APIService {
    // Update an article
    static async UpdateArticle(article_id, body, token) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`Failed to update article: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error updating article:', error);
            throw error;
        }
    }

    // Insert a new article
    static async InsertArticle(body, token) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/articles/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`Failed to insert article: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error inserting article:', error);
            throw error;
        }
    }

    // Delete an article
    static async DeleteArticle(article_id, token) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
                method: 'DELETE',  // Corrected to DELETE
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to delete article: ${response.statusText}`);
            }

            // Some APIs return a response even for DELETE
            return await response.json();
        } catch (error) {
            console.error('Error deleting article:', error);
            throw error;
        }
    }

    // Login user
    static async LoginUser(body) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/auth/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`Login failed: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }

    // Register user
    static async RegisterUser(body) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/users/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`Registration failed: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    }
}