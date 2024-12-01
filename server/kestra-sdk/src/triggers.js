class Triggers {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    // Get triggers for a specific flow
    async getTriggers(namespace, flowId) {
        return this.apiClient.request('GET', `/api/v1/triggers/${namespace}/${flowId}`);
    }

    // Search triggers
    async searchTriggers(query = {}) {
        return this.apiClient.request('GET', `/api/v1/triggers/search`, query);
    }

    // Update triggers
    async updateTriggers(triggersData) {
        return this.apiClient.request('PUT', `/api/v1/triggers`, triggersData);
    }

    // Restart a specific trigger
    async restartTrigger(namespace, flowId, triggerId) {
        return this.apiClient.request('POST', `/api/v1/triggers/${namespace}/${flowId}/${triggerId}/restart`);
    }

    // Restart all triggers
    async restartAllTriggers() {
        return this.apiClient.request('POST', `/api/v1/triggers/restart`);
    }

    // Unlock a specific trigger
    async unlockTrigger(namespace, flowId, triggerId) {
        return this.apiClient.request('POST', `/api/v1/triggers/${namespace}/${flowId}/${triggerId}/unlock`);
    }

    // Backfill operations
    async deleteBackfill() {
        return this.apiClient.request('POST', `/api/v1/triggers/backfill/delete`);
    }

    async deleteBackfillByQuery(query) {
        return this.apiClient.request('POST', `/api/v1/triggers/backfill/delete/by-query`, query);
    }

    async deleteBackfillByTriggers(triggers) {
        return this.apiClient.request('POST', `/api/v1/triggers/backfill/delete/by-triggers`, triggers);
    }

    async pauseBackfill() {
        return this.apiClient.request('PUT', `/api/v1/triggers/backfill/pause`);
    }

    async pauseBackfillByQuery(query) {
        return this.apiClient.request('POST', `/api/v1/triggers/backfill/pause/by-query`, query);
    }

    async pauseBackfillByTriggers(triggers) {
        return this.apiClient.request('POST', `/api/v1/triggers/backfill/pause/by-triggers`, triggers);
    }

    async unpauseBackfill() {
        return this.apiClient.request('PUT', `/api/v1/triggers/backfill/unpause`);
    }

    async unpauseBackfillByQuery(query) {
        return this.apiClient.request('POST', `/api/v1/triggers/backfill/unpause/by-query`, query);
    }

    async unpauseBackfillByTriggers(triggers) {
        return this.apiClient.request('POST', `/api/v1/triggers/backfill/unpause/by-triggers`, triggers);
    }

    // Bulk operations
    async setDisabledByQuery(query) {
        return this.apiClient.request('POST', `/api/v1/triggers/set-disabled/by-query`, query);
    }

    async setDisabledByTriggers(triggers) {
        return this.apiClient.request('POST', `/api/v1/triggers/set-disabled/by-triggers`, triggers);
    }

    async unlockByQuery(query) {
        return this.apiClient.request('POST', `/api/v1/triggers/unlock/by-query`, query);
    }

    async unlockByTriggers(triggers) {
        return this.apiClient.request('POST', `/api/v1/triggers/unlock/by-triggers`, triggers);
    }
}

module.exports = Triggers;
