import C_CARD_INFO from "./CCardInfo/CCardInfo.vue";
import { style as C_CARD_INFO_STYLES, data as C_CARD_INFO_DATA } from "./CCardInfo/index.js";

import C_CARD_LOW from "./CCardLow/CCardLow.vue";
import { style as C_CARD_LOW_STYLES, data as C_CARD_LOW_DATA } from "./CCardLow/index.js";

export const COMPONENTS = {
    "CCardInfo":{
        "COMPONENT": C_CARD_INFO,
        "STYLES": C_CARD_INFO_STYLES,
        "DATA": C_CARD_INFO_DATA
    },
    "CCardLow":{
        "COMPONENT": C_CARD_LOW,
        "STYLES": C_CARD_LOW_STYLES,
        "DATA": C_CARD_LOW_DATA
    },

}
