export default class ModuleService {
  static async getModules() {
    const response = await fetch(
      `${import.meta.env.VITE_SERVICE_BASE_URL}/modules`
    );
    const data = await response.json();
    return data;
  }
}
