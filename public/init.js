var initialState = {
  config: {
    divisions: "http://10.35.49.146:8080/orw_tablo/division_json2.php",
    menu: "http://10.35.49.146:8080/orw_tablo/load_menu.php",
    pokaz: "http://10.35.49.146:8080/orw_tablo/load_pred_pokaz.php?code_pred=",
    piket: "http://10.35.49.146:8080/orw_tablo/load_piket.php",
    prognoz: "http://10.35.49.146:8080/orw_tablo/load_prognoz.php?region=",
    storm_region:
      "http://10.35.49.146:8080/orw_tablo/load_storm_v2.php?region=",
    storm_all: "http://10.35.49.146:8080/orw_tablo/load_storm_v2.php",
    storm_uch: "http://10.35.49.146:8080/orw_tablo/load_storm_v2.php?map=",
    weather_region: "http://10.35.49.146:8080/apps/api/weather?reg=",
    bridges_pokaz: "http://10.35.49.146:8080/orw_tablo/load_artfeat.php?id=",
    snow_pokaz: "http://10.35.49.146:8080/apps/api/snowtech?code_map=",
    snow_tech: "http://10.35.49.146:8080/apps/api/snowtech/region?id=",
    port_dir: "http://10.35.49.146:8080/apps/api/ports/file",
    pipe: "http://10.35.49.146:8080/orw_tablo/load_isso_pipe.php?id_peregon=",
  },

  wsocket: {
    endpoint: "http://localhost:4000",
  },
};

window.__INITIAL_STATE__ = initialState;
