
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
      url: "javascript:change_state('inan');"
    },
    INAP: {
      name: "Andhra Pradesh",
      url: "javascript:change_state('inap');"
    },
    INAR: {
      name: "Arunachal Pradesh",
      url: "javascript:change_state('inar');"
    },
    INAS: {
      name: "Assam",
      url: "javascript:change_state('inas');"
    },
    INBR: {
      name: "Bihar",
      url: "javascript:change_state('inbr');"
    },
    INCH: {
      name: "Chandigarh",
      url: "javascript:change_state('inch');"
    },
    INCT: {
      name: "Chhattisgarh",
      url: "javascript:change_state('inct');"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      url: "javascript:change_state('indh');"
    },
    INDL: {
      name: "Delhi",
      url: "javascript:change_state('indl');"
    },
    INGA: {
      name: "Goa",
      url: "javascript:change_state('inga');"
    },
    INGJ: {
      name: "Gujarat",
      url: "javascript:change_state('ingj');"
    },
    INHP: {
      name: "Himachal Pradesh",
      url: "javascript:change_state('inhp');"
    },
    INHR: {
      name: "Haryana",
      url: "javascript:change_state('inhr');"
    },
    INJH: {
      name: "Jharkhand",
      url: "javascript:change_state('injh');"
    },
    INJK: {
      name: "Jammu and Kashmir",
      url: "javascript:change_state('injk');"
    },
    INKA: {
      name: "Karnataka",
      url: "javascript:change_state('inka');"
    },
    INKL: {
      name: "Kerala",
      url: "javascript:change_state('inkl');"
    },
    INLA: {
      name: "Ladakh",
      url: "javascript:change_state('inla');"
    },
    INLD: {
      name: "Lakshadweep",
      url: "javascript:change_state('inld');"
    },
    INMH: {
      name: "Maharashtra",
      url: "javascript:change_state('inmh');"
    },
    INML: {
      name: "Meghalaya",
      url: "javascript:change_state('inml');"
    },
    INMN: {
      name: "Manipur",
      url: "javascript:change_state('inmn');"
    },
    INMP: {
      name: "Madhya Pradesh",
      url: "javascript:change_state('inmp');"
    },
    INMZ: {
      name: "Mizoram",
      url: "javascript:change_state('inmz');"
    },
    INNL: {
      name: "Nagaland",
      url: "javascript:change_state('innl');"
    },
    INOR: {
      name: "Odisha",
      url: "javascript:change_state('inor');"
    },
    INPB: {
      name: "Punjab",
      url: "javascript:change_state('inpb');"
    },
    INPY: {
      name: "Puducherry",
      url: "javascript:change_state('inpy');"
    },
    INRJ: {
      name: "Rajasthan",
      url: "javascript:change_state('inrj');"
    },
    INSK: {
      name: "Sikkim",
      url: "javascript:change_state('insk');"
    },
    INTG: {
      name: "Telangana",
      url: "javascript:change_state('intg');"
    },
    INTN: {
      name: "Tamil Nadu",
      url: "javascript:change_state('intn');"
    },
    INTR: {
      name: "Tripura",
      url: "javascript:change_state('intr');"
    },
    INUP: {
      name: "Uttar Pradesh",
      url: "javascript:change_state('inup');"
    },
    INUT: {
      name: "Uttarakhand",
      url: "javascript:change_state('inut');"
    },
    INWB: {
      name: "West Bengal",
      url: "javascript:change_state('inwb');"
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
  }
};