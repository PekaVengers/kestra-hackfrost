class Template {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    // Get template by namespace and id
    async getTemplate(namespace, id) {
        return this.apiClient.request('GET', `/api/v1/templates/${namespace}/${id}`);
    }

    // Create new template
    async createTemplate(namespace, id, templateData) {
        return this.apiClient.request('PUT', `/api/v1/templates/${namespace}/${id}`, templateData);
    }

    // Delete template by namespace and id
    async deleteTemplate(namespace, id) {
        return this.apiClient.request('DELETE', `/api/v1/templates/${namespace}/${id}`);
    }

    // Search templates
    async searchTemplates(query = '') {
        return this.apiClient.request('GET', `/api/v1/templates/search${query ? `?q=${query}` : ''}`);
    }

    // Get distinct namespaces
    async getDistinctNamespaces() {
        return this.apiClient.request('GET', '/api/v1/templates/distinct-namespaces');
    }

    // Delete templates by ids
    async deleteTemplatesByIds(ids) {
        return this.apiClient.request('DELETE', '/api/v1/templates/delete/by-ids', { ids });
    }

    // Delete templates by query
    async deleteTemplatesByQuery(query) {
        return this.apiClient.request('DELETE', '/api/v1/templates/delete/by-query', { query });
    }

    // Export templates by ids
    async exportTemplatesByIds(ids) {
        return this.apiClient.request('POST', '/api/v1/templates/export/by-ids', { ids });
    }

    // Export templates by query
    async exportTemplatesByQuery(query = '') {
        return this.apiClient.request('GET', `/api/v1/templates/export/by-query${query ? `?q=${query}` : ''}`);
    }

    // Import templates
    async importTemplates(templates) {
        return this.apiClient.request('POST', '/api/v1/templates/import', templates);
    }

    // Validate template
    async validateTemplate(templateData) {
        return this.apiClient.request('POST', '/api/v1/templates/validate', templateData);
    }

    // Create template in namespace
    async createTemplateInNamespace(namespace, templateData) {
        return this.apiClient.request('POST', `/api/v1/templates/${namespace}`, templateData);
    }
}

module.exports = Template;
