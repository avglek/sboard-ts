declare var __INITIAL_STATE__: any;

const applicationInitialState = __INITIAL_STATE__;
const config = applicationInitialState.config;

class DataService {
  async getMenu() {
    const response = await this.getResurce(config.menu);
    const data = response.left_box.map((item: { disabled: string }) => {
      return {
        ...item,
        disabled: item.disabled === "true",
      };
    });
    return data;
  }

  private async getResurce(url: string) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Cloud not fetch ${url}, received ${response.status}`);
    } else {
      return await response.json();
    }
  }
}

export default DataService;