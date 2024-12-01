class Files {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Get files in a namespace
     * @param {string} namespace - The namespace
     * @param {string} [path] - Optional path parameter
     */
    async getFiles(namespace, path = '') {
        const url = `/api/v1/namespaces/${namespace}/files${path ? `?path=${path}` : ''}`;
        return this.apiClient.request('GET', url);
    }

    /**
     * Upload files to a namespace
     * @param {string} namespace - The namespace
     * @param {string} path - The path where to upload
     * @param {Buffer|Stream} file - The file to upload
     */
    async uploadFile(namespace, path, file) {
        const url = `/api/v1/namespaces/${namespace}/files?path=${path}`;
        return this.apiClient.request('PUT', url, file, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }

    /**
     * Create a new file with content
     * @param {string} namespace - The namespace
     * @param {string} path - The file path
     * @param {object} content - The file content
     */
    async createFile(namespace, path, content) {
        const url = `/api/v1/namespaces/${namespace}/files?path=${path}`;
        return this.apiClient.request('POST', url, content);
    }

    /**
     * Delete a file or directory
     * @param {string} namespace - The namespace
     * @param {string} path - The path to delete
     */
    async deleteFile(namespace, path) {
        const url = `/api/v1/namespaces/${namespace}/files?path=${path}`;
        return this.apiClient.request('DELETE', url);
    }

    /**
     * Get directory structure
     * @param {string} namespace - The namespace
     * @param {string} [path] - Optional path parameter
     */
    async getDirectory(namespace, path = '') {
        const url = `/api/v1/namespaces/${namespace}/files/directory${path ? `?path=${path}` : ''}`;
        return this.apiClient.request('GET', url);
    }

    /**
     * Create a directory
     * @param {string} namespace - The namespace
     * @param {string} path - The directory path to create
     */
    async createDirectory(namespace, path) {
        const url = `/api/v1/namespaces/${namespace}/files/directory?path=${path}`;
        return this.apiClient.request('POST', url);
    }

    /**
     * Export files as zip
     * @param {string} namespace - The namespace
     * @param {string} [path] - Optional path parameter
     */
    async exportFiles(namespace, path = '') {
        const url = `/api/v1/namespaces/${namespace}/files/export${path ? `?path=${path}` : ''}`;
        return this.apiClient.request('GET', url, undefined, {
            responseType: 'blob'
        });
    }

    /**
     * Search files
     * @param {string} namespace - The namespace
     * @param {object} params - Search parameters
     * @param {string} [params.q] - Search query
     * @param {string} [params.path] - Path to search in
     * @param {number} [params.size] - Page size
     * @param {number} [params.page] - Page number
     */
    async searchFiles(namespace, params = {}) {
        const queryParams = new URLSearchParams(params).toString();
        const url = `/api/v1/namespaces/${namespace}/files/search${queryParams ? `?${queryParams}` : ''}`;
        return this.apiClient.request('GET', url);
    }

    /**
     * Get files statistics
     * @param {string} namespace - The namespace
     * @param {string} [path] - Optional path parameter
     */
    async getFileStats(namespace, path = '') {
        const url = `/api/v1/namespaces/${namespace}/files/stats${path ? `?path=${path}` : ''}`;
        return this.apiClient.request('GET', url);
    }
}

module.exports = Files;
