<template>
  <div id="container" class="load text-xxs xxs:text-xs xs:text-sm md:text-base absolute max-h-screen overflow-y-auto">
      <pre class="term"> </pre>
      <pre class="stego"></pre>
  </div>
</template>

<script>
export default {
  name:"Terminal",
    methods: {
  	scrollToEnd: function() {    	
      var container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
    },
  },
  mounted () {
    var textAnimated = document.querySelector(".term")

    var console = document.querySelector(".load");

    var welcome = document.querySelector(".stego");

    var command = "bash hire-me.sh";

    var welcomecmd = "bash load-page.sh \n";

    var handle = "guest@svantepihl:~$";

    var dino = ["\n",
        " _______________________________________ ",
        "(       Hello! Nice to meet you!       )",
        "--------------------------------------- ",
        "o                          .       .  ",
        " o                        / `.   .' ' ",
        "  o               .---.  <    > <    >  .---.",
        "   o              |    \\  \\ - ~ ~ - /  /    |",
        "      _____          ..-~             ~-..-~",
        "     |     |   \\~~~\\.                    `./~~~/",
        "    ---------   \\__/                        \\__/",
        "   .'  O    \\     /               /       \\  \\",
        "  (_____,    `._.'               |         }  \\/~~~/",
        "   `----.          /       }     |        /    \\__/",
        "         `-.      |       /      |       /      `. ,~~|",
        "             ~-.__|      /_ - ~ ^|      /- _      `..-'",
        "                  |     /        |     /     ~-.     `-. _  _  _",
        "                  |_____|        |_____|         ~ - . _ _ _ _ _>",
        "                                                                 "
        ];


    function printChar(index,str) {
        setTimeout(() => {
            textAnimated.textContent += str[index];
            printString(index+1,str);
        }, 60);
    }

    function printString(index,str, callback){
        if (index < str.length) {
            printChar(index,str);
        } else {
            setTimeout(() => {
                callback;
            }, 2000);
        }
    }



    function printRec(arrayIndex,textIndex,textArray) {
        if (textIndex < textArray[arrayIndex].length) {
            setTimeout(() => {
                textAnimated.textContent += textArray[arrayIndex][textIndex];
                printRec(arrayIndex,textIndex+1,textArray)
            }, 4);
        } else {
            textAnimated.textContent += "\n";
            printArray(arrayIndex+1,textArray)
            this.scrollToEnd();
        }

    }

    function printArray(index,textArray) {
        if (index < textArray.length) {
            printRec(index,0, textArray)
            this.scrollToEnd();
        }
    }


    setTimeout(() => {
        textAnimated.textContent += handle;
        printString(0,command,null);
    }, 0);

    setTimeout(() => {
        printArray(0,dino);
    }, 3000);


    setTimeout(() => {
        textAnimated.textContent += handle;
        printString(0,welcomecmd,null);
    }, 8500);
  }
}   
</script>

<style scoped>
html,
body {
  margin: 0 auto;
  height: 100%;
}

pre {
  padding: 0;
  margin: 0;
}

.load {
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  background: black;
}

.term {
  font-family: monospace;
  color: #fff;
  opacity: 0.8;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 10px;
  padding-left: 5px;
}

.term:after {
  content: "_";
  opacity: 1;
  animation: cursor 1s infinite;
}

@keyframes cursor {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


</style>