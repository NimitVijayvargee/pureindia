var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#0d2d31",
    
    //State defaults
    state_description: "",
    state_color: "#6ac49f",
    state_hover_color: "#518c74",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 0,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "yes",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "#ffffff",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    INAN: {
      name: "Andaman and Nicobar",
      url: "states/inan"
    },
    INAP: {
      name: "Andhra Pradesh",
      url: "states/inap"
    },
    INAR: {
      name: "Arunachal Pradesh",
      url: "states/inar"
    },
    INAS: {
      name: "Assam",
      url: "states/inas"
    },
    INBR: {
      name: "Bihar",
      url: "states/inbr"
    },
    INCH: {
      name: "Chandigarh",
      url: "states/inch"
    },
    INCT: {
      name: "Chhattisgarh",
      url: "states/inct"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      url: "states/indh"
    },
    INDL: {
      name: "Delhi",
      url: "states/indl"
    },
    INGA: {
      name: "Goa",
      url: "states/inga"
    },
    INGJ: {
      name: "Gujarat",
      url: "states/ingj"
    },
    INHP: {
      name: "Himachal Pradesh",
      url: "states/inhp"
    },
    INHR: {
      name: "Haryana",
      url: "states/inhr"
    },
    INJH: {
      name: "Jharkhand",
      url: "states/injh"
    },
    INJK: {
      name: "Jammu and Kashmir",
      url: "states/injk"
    },
    INKA: {
      name: "Karnataka",
      url: "states/inka"
    },
    INKL: {
      name: "Kerala",
      url: "states/inkl"
    },
    INLA: {
      name: "Ladakh",
      url: "states/inla"
    },
    INLD: {
      name: "Lakshadweep",
      url: "states/inld"
    },
    INMH: {
      name: "Maharashtra",
      url: "states/inmh"
    },
    INML: {
      name: "Meghalaya",
      url: "states/inml"
    },
    INMN: {
      name: "Manipur",
      url: "states/inmn"
    },
    INMP: {
      name: "Madhya Pradesh",
      url: "states/inmp"
    },
    INMZ: {
      name: "Mizoram",
      url: "states/inmz"
    },
    INNL: {
      name: "Nagaland",
      url: "states/innl"
    },
    INOR: {
      name: "Orissa",
      url: "states/inor"
    },
    INPB: {
      name: "Punjab",
      url: "states/inpb"
    },
    INPY: {
      name: "Puducherry",
      url: "states/inpy"
    },
    INRJ: {
      name: "Rajasthan",
      url: "states/inrj"
    },
    INSK: {
      name: "Sikkim",
      url: "states/insk"
    },
    INTG: {
      name: "Telangana",
      url: "states/intg"
    },
    INTN: {
      name: "Tamil Nadu",
      url: "states/intn"
    },
    INTR: {
      name: "Tripura",
      url: "states/intr"
    },
    INUP: {
      name: "Uttar Pradesh",
      url: "states/inup"
    },
    INUT: {
      name: "Uttaranchal",
      url: "states/inut"
    },
    INWB: {
      name: "West Bengal",
      url: "states/inwb"
    }
  },
  locations: {},
  labels: {
    INAN: {
      name: "Andaman and Nicobar",
      parent_id: "INAN"
    },
    INAP: {
      name: "Andhra Pradesh",
      parent_id: "INAP"
    },
    INAR: {
      name: "Arunachal Pradesh",
      parent_id: "INAR"
    },
    INAS: {
      name: "Assam",
      parent_id: "INAS"
    },
    INBR: {
      name: "Bihar",
      parent_id: "INBR"
    },
    INCH: {
      name: "Chandigarh",
      parent_id: "INCH"
    },
    INCT: {
      name: "Chhattisgarh",
      parent_id: "INCT"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      parent_id: "INDH"
    },
    INDL: {
      name: "Delhi",
      parent_id: "INDL"
    },
    INGA: {
      name: "Goa",
      parent_id: "INGA"
    },
    INGJ: {
      name: "Gujarat",
      parent_id: "INGJ"
    },
    INHP: {
      name: "Himachal Pradesh",
      parent_id: "INHP"
    },
    INHR: {
      name: "Haryana",
      parent_id: "INHR"
    },
    INJH: {
      name: "Jharkhand",
      parent_id: "INJH"
    },
    INJK: {
      name: "Jammu and Kashmir",
      parent_id: "INJK"
    },
    INKA: {
      name: "Karnataka",
      parent_id: "INKA"
    },
    INKL: {
      name: "Kerala",
      parent_id: "INKL"
    },
    INLA: {
      name: "Ladakh",
      parent_id: "INLA"
    },
    INLD: {
      name: "Lakshadweep",
      parent_id: "INLD"
    },
    INMH: {
      name: "Maharashtra",
      parent_id: "INMH"
    },
    INML: {
      name: "Meghalaya",
      parent_id: "INML"
    },
    INMN: {
      name: "Manipur",
      parent_id: "INMN"
    },
    INMP: {
      name: "Madhya Pradesh",
      parent_id: "INMP"
    },
    INMZ: {
      name: "Mizoram",
      parent_id: "INMZ"
    },
    INNL: {
      name: "Nagaland",
      parent_id: "INNL"
    },
    INOR: {
      name: "Orissa",
      parent_id: "INOR"
    },
    INPB: {
      name: "Punjab",
      parent_id: "INPB"
    },
    INPY: {
      name: "Puducherry",
      parent_id: "INPY"
    },
    INRJ: {
      name: "Rajasthan",
      parent_id: "INRJ"
    },
    INSK: {
      name: "Sikkim",
      parent_id: "INSK"
    },
    INTG: {
      name: "Telangana",
      parent_id: "INTG"
    },
    INTN: {
      name: "Tamil Nadu",
      parent_id: "INTN"
    },
    INTR: {
      name: "Tripura",
      parent_id: "INTR"
    },
    INUP: {
      name: "Uttar Pradesh",
      parent_id: "INUP"
    },
    INUT: {
      name: "Uttaranchal",
      parent_id: "INUT"
    },
    INWB: {
      name: "West Bengal",
      parent_id: "INWB"
    }
  },
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "INAR",
        "INTR",
        "INMZ",
        "INMN",
        "INNL",
        "INAS",
        "INML"
      ],
      name: "East India"
    },
    "1": {
      states: [
        "INDH",
        "INGJ"
      ],
      name: "Gujarat"
    },
    "2": {
      states: [
        "INWB",
        "INSK"
      ],
      name: "West Bengal"
    },
    "3": {
      states: [
        "INJK",
        "INLA"
      ],
      name: "Jammu & Kashmir"
    }
  }
};