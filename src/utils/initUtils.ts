import { IMapToggleStorage } from "../types/mapToggleType";

// Чтение положение переключателя для загрузки основной карты
export function loadStorage(): IMapToggleStorage {
  const mapLocal = localStorage.getItem("map");

  if (mapLocal) {
    const initStorage: IMapToggleStorage = JSON.parse(mapLocal);

    if (!initStorage.key) {
      localStorage.removeItem("map");

      initStorage.img = "./svg/icons/button/flat.svg";
      initStorage.toggle = true;
      initStorage.key = "main";
      initStorage.uid = 0;

      const mapRaw = JSON.stringify(initStorage);
      localStorage.setItem("map", mapRaw);
    }
    return initStorage;
  } else {
    return {
      img: "./svg/icons/button/flat.svg",
      toggle: true,
      key: "main",
      uid: 0,
    };
  }
}
