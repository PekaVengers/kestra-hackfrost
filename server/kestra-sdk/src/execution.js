class Execution {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getExecutionById(id) {
        return this.apiClient.request('GET', `/api/v1/executions/${id}`);
    }

    async listExecutions(namespace, workflowId) {
        return this.apiClient.request('GET', `/api/v1/executions?namespace=${namespace}&workflowId=${workflowId}`);
    }

    async replayExecutionById(id) {
        return this.apiClient.request('POST', `/api/v1/executions/replay/by-ids`, { ids: [id] });
    }

    async restartExecutionById(id) {
        return this.apiClient.request('POST', `/api/v1/executions/${id}/restart`);
    }

    async cancelExecution(id) {
        return this.apiClient.request('POST', `/api/v1/executions/${id}/cancel`);
    }
}

module.exports = Execution;
