const ApiClient = require('./src/apiClient');
const Workflow = require('./src/workflow');
const Execution = require('./src/execution');

class KestraSDK {
    constructor({ baseUrl, apiKey }) {
        if (!baseUrl || !apiKey) {
            throw new Error('baseUrl and apiKey are required to initialize KestraSDK');
        }

        const apiClient = new ApiClient(baseUrl, apiKey);

        this.workflow = new Workflow(apiClient);
        this.execution = new Execution(apiClient);
    }
}

module.exports = KestraSDK;
