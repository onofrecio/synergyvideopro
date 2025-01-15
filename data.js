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
          "yaw": -0.04943918772240785,
          "pitch": 0.9266329317730744,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5241407687215753,
          "pitch": 0.4750648942320961,
          "rotation": 0,
          "target": "2-reception-2"
        },
        {
          "yaw": -1.7989407085566391,
          "pitch": 1.004385067037866,
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
          "yaw": -1.6259915396771625,
          "pitch": 0.5332063374849838,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": -0.5781339494706543,
          "pitch": 0.5310130754631626,
          "rotation": 0,
          "target": "3-examination-room-1"
        },
        {
          "yaw": 0.004192750115024069,
          "pitch": 0.4802564362887338,
          "rotation": 0,
          "target": "4-corridor"
        },
        {
          "yaw": 0.6665444831721032,
          "pitch": 0.6240545074368136,
          "rotation": 0,
          "target": "8-dr-jp-office"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0398849220081665,
          "pitch": 0.6024179567206005,
          "rotation": 0,
          "target": "2-reception-2"
        },
        {
          "yaw": 1.7667302573761328,
          "pitch": 0.4221100390511694,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.584556881993386,
          "pitch": 0.5277623271657781,
          "rotation": 0,
          "target": "2-reception-2"
        },
        {
          "yaw": 1.4395581108040556,
          "pitch": 0.5075259725150438,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1968340263229242,
          "pitch": 0.49548040331834997,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14408864050458092,
          "pitch": 0.4735342444370456,
          "rotation": 0,
          "target": "3-examination-room-1"
        },
        {
          "yaw": -0.39501529174919625,
          "pitch": 0.6631174172119696,
          "rotation": 0,
          "target": "4-corridor"
        },
        {
          "yaw": -2.5390319915505017,
          "pitch": 0.6336670200339878,
          "rotation": 0,
          "target": "5-examination-room-2"
        },
        {
          "yaw": -1.7612475096185705,
          "pitch": 0.4117076804262165,
          "rotation": 0,
          "target": "7-casting-room"
        },
        {
          "yaw": -1.0498835464993395,
          "pitch": 0.5517909244597519,
          "rotation": 0,
          "target": "9-dr-jp-office-2"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9127596104423894,
          "pitch": 0.41395197240665915,
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
          "yaw": -0.5677599052743734,
          "pitch": 0.49540287444454734,
          "rotation": 0,
          "target": "9-dr-jp-office-2"
        },
        {
          "yaw": -1.9942194634631818,
          "pitch": 0.5158158276237419,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9931281487513557,
          "pitch": 0.5712721739958795,
          "rotation": 0,
          "target": "6-waiting-room"
        },
        {
          "yaw": 1.193739179153944,
          "pitch": 0.610800826877421,
          "rotation": 0,
          "target": "8-dr-jp-office"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
