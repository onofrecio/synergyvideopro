var APP_DATA = {
  "scenes": [
    {
      "id": "0-dr-jp-grey",
      "name": "Dr J.P. Grey",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.5420603920680334,
        "pitch": -0.0209308514332065,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.5622948790683235,
          "pitch": 0.48869663808196506,
          "rotation": 0,
          "target": "2-reception-2"
        },
        {
          "yaw": -1.7785974340259543,
          "pitch": 0.1455363552487352,
          "rotation": 0,
          "target": "0-dr-jp-grey"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception-2",
      "name": "Reception 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.011021709784019507,
          "pitch": 0.47297304877704427,
          "rotation": 0,
          "target": "4-corridor"
        },
        {
          "yaw": -0.6529528161742153,
          "pitch": 0.2941114028954548,
          "rotation": 0,
          "target": "3-examination-room-1"
        },
        {
          "yaw": 0.6895879597873105,
          "pitch": 0.2486269011865332,
          "rotation": 0,
          "target": "9-dr-jp-office-2"
        },
        {
          "yaw": -1.6253786940444908,
          "pitch": 0.523621954260884,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-examination-room-1",
      "name": "Examination Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.1956193118092777,
        "pitch": 0.041323595988156825,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.9749947820248117,
          "pitch": 0.28306263130810905,
          "rotation": 0,
          "target": "2-reception-2"
        },
        {
          "yaw": 1.7332582869182467,
          "pitch": 0.2082575052409048,
          "rotation": 0,
          "target": "6-waiting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.5520548599059936,
        "pitch": -0.005834667138827854,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.5857529086245137,
          "pitch": 0.4791523818446315,
          "rotation": 0,
          "target": "2-reception-2"
        },
        {
          "yaw": 1.49249304164276,
          "pitch": 0.5220984902456554,
          "rotation": 0,
          "target": "6-waiting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-examination-room-2",
      "name": "Examination Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.9531286053219539,
        "pitch": 0.2008980617368401,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.9754410511068663,
          "pitch": 0.2775748584399107,
          "rotation": 0,
          "target": "6-waiting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-waiting-room",
      "name": "Waiting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.8016575765136604,
        "pitch": 0.22776834443315153,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.7604512274174358,
          "pitch": 0.22971715166870155,
          "rotation": 0,
          "target": "7-casting-room"
        },
        {
          "yaw": -1.0698523625325045,
          "pitch": 0.32609787221231556,
          "rotation": 0,
          "target": "9-dr-jp-office-2"
        },
        {
          "yaw": -2.4429014208309354,
          "pitch": 0.201234585527148,
          "rotation": 0,
          "target": "5-examination-room-2"
        },
        {
          "yaw": 0.16185219594968636,
          "pitch": 0.39175038402839313,
          "rotation": 0,
          "target": "3-examination-room-1"
        },
        {
          "yaw": -0.37215072286865336,
          "pitch": 0.6328170353968687,
          "rotation": 0,
          "target": "4-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-casting-room",
      "name": "Casting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.00487395762935,
        "pitch": 0.04828692957795511,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.9532184295266362,
          "pitch": 0.17903670266135485,
          "rotation": 0,
          "target": "6-waiting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dr-jp-office",
      "name": "Dr J.P. Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6471470279579332,
          "pitch": 0.0655447262406117,
          "rotation": 0,
          "target": "6-waiting-room"
        },
        {
          "yaw": -0.5351706998935732,
          "pitch": 0.48895142913047174,
          "rotation": 0,
          "target": "9-dr-jp-office-2"
        },
        {
          "yaw": -1.9778419262209912,
          "pitch": 0.18205780398234594,
          "rotation": 0,
          "target": "2-reception-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dr-jp-office-2",
      "name": "Dr J.P. Office 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.6045185863725955,
        "pitch": 0.09549700966401531,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.1832433724298959,
          "pitch": 0.5928321596657824,
          "rotation": 0,
          "target": "8-dr-jp-office"
        },
        {
          "yaw": 1.3048409555813585,
          "pitch": 0.10441637507531887,
          "rotation": 0,
          "target": "2-reception-2"
        },
        {
          "yaw": 3.1010866063873213,
          "pitch": 0.25432186990449956,
          "rotation": 0,
          "target": "6-waiting-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
