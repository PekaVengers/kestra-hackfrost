class Metrics {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getMetricsByExecutionId(executionId) {
        return this.apiClient.request('GET', `/api/v1/metrics/${executionId}`);
    }

    async getMetricAggregates(namespace, flowId, metric) {
        return this.apiClient.request('GET', `/api/v1/metrics/aggregates/${namespace}/${flowId}/${metric}`);
    }

    async getTaskMetricAggregates(namespace, flowId, taskId, metric) {
        return this.apiClient.request('GET', `/api/v1/metrics/aggregates/${namespace}/${flowId}/${taskId}/${metric}`);
    }

    async getMetricNames(namespace, flowId) {
        return this.apiClient.request('GET', `/api/v1/metrics/names/${namespace}/${flowId}`);
    }

    async getTaskMetricNames(namespace, flowId, taskId) {
        return this.apiClient.request('GET', `/api/v1/metrics/names/${namespace}/${flowId}/${taskId}`);
    }

    async getTaskMetrics(namespace, flowId) {
        return this.apiClient.request('GET', `/api/v1/metrics/tasks/${namespace}/${flowId}`);
    }
}

module.exports = Metrics;
