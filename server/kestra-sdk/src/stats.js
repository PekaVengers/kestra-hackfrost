class Stats {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getExecutionsDaily(filters = {}) {
        return this.apiClient.request('POST', '/api/v1/stats/executions/daily', filters);
    }

    async getExecutionsDailyByFlow(filters = {}) {
        return this.apiClient.request('POST', '/api/v1/stats/executions/daily/group-by-flow', filters);
    }

    async getExecutionsDailyByNamespace(filters = {}) {
        return this.apiClient.request('POST', '/api/v1/stats/executions/daily/group-by-namespace', filters);
    }

    async getLatestExecutionsByFlow(filters = {}) {
        return this.apiClient.request('POST', '/api/v1/stats/executions/latest/group-by-flow', filters);
    }

    async getLogsDaily(filters = {}) {
        return this.apiClient.request('POST', '/api/v1/stats/logs/daily', filters);
    }

    async getSummary(filters = {}) {
        return this.apiClient.request('POST', '/api/v1/stats/summary', filters);
    }

    async getTaskRunsDaily(filters = {}) {
        return this.apiClient.request('POST', '/api/v1/stats/taskruns/daily', filters);
    }
}

module.exports = Stats;
