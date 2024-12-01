class Logs {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Search logs with optional filters
     * @param {Object} options - Search parameters
     * @param {string} options.q - Search query
     * @param {number} options.offset - Pagination offset
     * @param {number} options.pageSize - Number of items per page
     * @param {string} options.sort - Sort field
     */
    async searchLogs(options = {}) {
        const queryParams = new URLSearchParams(options).toString();
        return this.apiClient.request('GET', `/api/v1/logs/search${queryParams ? `?${queryParams}` : ''}`);
    }

    /**
     * Get logs for a specific execution
     * @param {string} executionId - The execution ID
     * @param {Object} options - Optional query parameters
     * @param {number} options.offset - Pagination offset
     * @param {number} options.pageSize - Number of logs per page
     */
    async getExecutionLogs(executionId, options = {}) {
        const queryParams = new URLSearchParams(options).toString();
        return this.apiClient.request('GET', `/api/v1/logs/${executionId}${queryParams ? `?${queryParams}` : ''}`);
    }

    /**
     * Delete logs for a specific execution
     * @param {string} executionId - The execution ID to delete logs for
     */
    async deleteExecutionLogs(executionId) {
        return this.apiClient.request('DELETE', `/api/v1/logs/${executionId}`);
    }

    /**
     * Download logs for a specific execution
     * @param {string} executionId - The execution ID to download logs for
     */
    async downloadExecutionLogs(executionId) {
        return this.apiClient.request('GET', `/api/v1/logs/${executionId}/download`);
    }

    /**
     * Follow/stream logs for a specific execution
     * @param {string} executionId - The execution ID to follow logs for
     */
    async followExecutionLogs(executionId) {
        return this.apiClient.request('GET', `/api/v1/logs/${executionId}/follow`);
    }

    /**
     * Delete logs for a specific workflow
     * @param {string} namespace - The namespace of the workflow
     * @param {string} flowId - The workflow ID
     */
    async deleteWorkflowLogs(namespace, flowId) {
        return this.apiClient.request('DELETE', `/api/v1/logs/${namespace}/${flowId}`);
    }
}

module.exports = Logs;
