// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
this.options.events['click button#fullscreen'] = function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Screen",
      "content": "\u003Cbutton id=\"fullscreen\"\u003EPress to enter full screen\u003C\u002Fbutton\u003E"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Click Continue"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
document.body.style.color = 'grey'




}
      },
      "title": "Page"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Pos": "-300",
          "Cue": "270"
        },
        {
          "Pos": "-300",
          "Cue": "90"
        },
        {
          "Pos": "300",
          "Cue": "90"
        },
        {
          "Pos": "300",
          "Cue": "270"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "12"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
        },
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff"
              },
              {
                "type": "triangle",
                "left": 0,
                "top": 200,
                "angle": "${parameters.Cue}",
                "width": 57.74,
                "height": 50,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 

}
            },
            "title": "Cue",
            "timeout": "1000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": "0",
                "angle": "",
                "width": "100",
                "height": "100",
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Block": "Block"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 

document.body.style.backgroundColor = 'black'
}
            },
            "title": "Block"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": "${parameters.Pos}",
                "top": 0,
                "angle": 0,
                "width": 100,
                "height": "100",
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff"
              },
              {
                "type": "aoi",
                "left": "${parameters.Pos}",
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block_D"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Block_D": "Block_D"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 
}
            },
            "title": "Displaced Block",
            "timeout": "1000"
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()