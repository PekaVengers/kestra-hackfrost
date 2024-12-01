class Workflow {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async listWorkflows(namespace = "") {
    return this.apiClient.request(
      "GET",
      `/api/v1/workflows?namespace=${namespace}`
    );
  }

  async getWorkflow(namespace, id) {
    return this.apiClient.request(
      "GET",
      `/api/v1/workflows/${namespace}/${id}`
    );
  }

  async createWorkflow(namespace, id, workflowData) {
    return this.apiClient.request(
      "POST",
      `/api/v1/workflows/${namespace}/${id}`,
      workflowData
    );
  }

  async deleteWorkflow(namespace, id) {
    return this.apiClient.request(
      "DELETE",
      `/api/v1/workflows/${namespace}/${id}`
    );
  }

  async executeWorkflow(namespace, id, inputs = {}) {
    const formData = new FormData();
    for (const key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        formData.append(key, inputs[key]);
      }
    }
    console.log(formData);

    try {
      const response = await this.apiClient.request(
        "POST",
        `/api/v1/executions/${namespace}/${id}`,
        formData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error executing workflow:", error);
      throw error;
    }
  }
}

module.exports = Workflow;
